import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions} from 'react-native';
import Video from 'react-native-video';
const Post = ({totalData, ind, curr}) => {
  const [paused, setPaused] = useState(false);
  const [totalLikes, setTotalLikes] = useState(totalData.totalLikes);
  const [liked, setLiked] = useState(false);
  const ref = useRef(null);

useEffect(() => {
  if(ind !== curr) {
    setPaused(true);
  } else {
    setPaused(false);
  }
}, [ind, curr])
  // console.log(player,'ind');
  return (
    <View style={styles.container}>
      {/* topnavbar */}
      <View style={styles.topnavbar}>
        <View>
          <Text>seen</Text>
        </View>
        <View>
          <Text>exit</Text>
        </View>
      </View>
      {/* video */}
      <TouchableWithoutFeedback onPress={() => setPaused(!paused)}>
        <Video
          source={{uri: totalData.videoLink}} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroudnvideo}
          repeat={true}
          resizeMode={'cover'}
          paused={paused}
          snapToAlignment={'start'}
          decelerationRate={'normal'}
        />
      </TouchableWithoutFeedback>
      {/* sidenav */}
      <View style={styles.sidenav}>
        {/* setTotalLikes */}
        <TouchableWithoutFeedback
          onPress={() => {
            if (totalData.totalLikes === totalLikes) {
              setTotalLikes(totalLikes + 1);
              setLiked(true);
            } else if (totalData.totalLikes < totalLikes) {
              setTotalLikes(totalLikes - 1);
              setLiked(false);
            }
          }}>
          {liked ? (
            <AntDesign name={'heart'} size={35} color={'red'} />
          ) : (
            <Ionicons name={'heart-outline'} size={35} color={'white'} />
          )}
        </TouchableWithoutFeedback>
        <Text style={styles.likestext}>{totalLikes}</Text>
        <MaterialCommunityIcons
          name={'share-outline'}
          size={35}
          color={'white'}
        />
      </View>
      {/* bottomnav */}
      <View style={styles.bottomnav}>
        <View style={styles.nameview}>
          <Text style={styles.usernames}>User Names</Text>
        </View>
        <View style={styles.titleandimage}>
          <Text style={styles.videotitle}>{totalData.videoTitle}</Text>
          <View style={styles.imageview}>
            <Image
              style={styles.profileimage}
              source={{
                uri: 'https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000',
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  topnavbar: {
    // position: 'absolute',
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  video: {
    flex: 1,
  },
  sidenav: {
    position: 'absolute',
    bottom: 94,
    right: 0,
    paddingRight: 12,
  },
  bottomnav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 70,
    justifyContent: 'flex-end',
    // boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
    // borderTopColor: 'black',
    // borderWidth: 2,
  },
  nameview: {},
  titleandimage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  profileimage: {
    width: '100%',
    height: '100%',
  },
  imageview: {
    width: 45,
    height: 45,
    borderRadius: 25,
    overflow: 'hidden',
  },
  usernames: {
    fontSize: 25,
    color: 'white',
    paddingHorizontal: 12,
  },
  videotitle: {
    width: '55%',
    color: 'white',
  },
  backgroudnvideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  likestext: {
    color: 'white',
    marginLeft: 9,
  },
});

export default Post;
