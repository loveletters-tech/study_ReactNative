// Index.ios.js - place code in here for IOS!!!!

// Import a Library to help creat a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums!'}></Header>
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('demo2', () => App);