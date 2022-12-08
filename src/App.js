import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {AuthStack} from './navigation/AuthStack';
import {AppStack} from './navigation/AppStack';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
import {NativeBaseProvider} from 'native-base';
import {customTheme, nativeTheme} from './assests/theme';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => {
  const scheme = useColorScheme();
  return (
    <Provider store={Store}>
      <NativeBaseProvider theme={customTheme}>
        <NavigationContainer
          theme={scheme === 'dark' ? DarkTheme : nativeTheme}>
          <SafeAreaProvider>
            <AuthStack />
          </SafeAreaProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
