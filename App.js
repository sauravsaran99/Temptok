import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Home from './src/Screens/Home';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
