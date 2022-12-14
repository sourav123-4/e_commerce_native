import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {NativeBaseProvider} from 'native-base';
export default function Main() {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
