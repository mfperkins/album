// Index.ios.js - place code in here for iOS!

// 1) Import a library to help create a component

import React from 'react';
import { Text, AppRegistry } from 'react-native';

// 2) Create a component

const App = () => (
  <Text>Hello World!</Text>
);

// 3) Render it to the device

AppRegistry.registerComponent('albums', () => App);
