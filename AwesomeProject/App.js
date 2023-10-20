import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native';
import { THEME } from './src/theme/colors';

import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import CameraButtons from './src/screens/CameraButtons';
import CamaraComponent from './src/components/CamaraComponent';
import VideoComponent from './src/components/VideoComponent';

export default function App() {
  const [camera, setCamera] = useState(false);
  const [video, setVideo] = useState(false);

  const handleCamera = () => {
    setCamera((prev) => !prev);
    setVideo(false);
  };

  const handleVideo = () => {
    setVideo((prev) => !prev);
    setCamera(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {/* <Camara /> */}
      <CameraButtons setCamera={handleCamera} setVideo={handleVideo} />
      {camera && <CamaraComponent />}
      {video && <VideoComponent />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});