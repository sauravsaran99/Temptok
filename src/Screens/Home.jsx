import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {readAll} from '../api/allvideo';
import Post from '../Components/Post/Post';
import {Dimensions} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

const Home = () => {
  const [videoData, setVideoData] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const gettingVideoData = async () => {
    const data = await readAll();
    // console.log(data.data, 'data')
    setVideoData(data.data);
  };

  const renderItem = ({item, index}) => {
    return <Post totalData={item} ind={index} curr={currentIndex}/>;
  };

  const onChangeIndex = ({index, prevIndex}) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    gettingVideoData();
  }, []);
  // totalData
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={videoData}
        renderItem={renderItem}
        keyExtractor={item => item.videoLink}
        pagingEnabled={true}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'normal'}
      /> */}
      <SwiperFlatList
        vertical={true}
        data={videoData}
        renderItem={renderItem}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'normal'}
        keyExtractor={item => item.videoLink}
        onChangeIndex={onChangeIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
