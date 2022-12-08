import {View, Image, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {default as SPLASH_LOGO_NEW} from '../../assests/images/ekko_logo_new.png';
import {default as LEARNING_ZONE} from '../../assests/images/splash_learning_zone.png';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      navigation.navigate('SignIn');
    }, 500);
  });
  return <View></View>;
};

export default Splash;
