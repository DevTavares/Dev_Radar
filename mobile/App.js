import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSockey=t'
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#ACACAC" />
      <Routes />
    </>
  );
}