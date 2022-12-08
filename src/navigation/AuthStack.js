import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, SignUp} from '../screens';
import {AppStack} from './AppStack';
import Splash from '../screens/splash/splash';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        // options={{headerShown: false}}
      />
      <Stack.Screen name="HomeScreen" component={AppStack} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
};
