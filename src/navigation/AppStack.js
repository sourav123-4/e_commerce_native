import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DisplayItem, Home, MyAccount, MyOrders, SearchScreen} from '../screens';
import {AuthStack} from './AuthStack';

import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DisplayStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="displayItem" component={DisplayItem} />
    </Stack.Navigator>
  );
};

export const AppStack = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={DisplayStack}
        options={{
          tabBarInactiveTintColor: 'orange',
          tabBarActiveTintColor: colors.background,
          tabBarIcon: ({focused, size}) => {
            size = focused ? 25 : 22;
            return (
              <Icon
                name="home"
                color={!focused ? 'orange' : colors.background}
                size={size}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarInactiveTintColor: 'orange',
          tabBarActiveTintColor: colors.background,
          tabBarIcon: ({focused, color, size}) => {
            size = focused ? 25 : 22;
            return (
              <Icon
                name="search"
                color={!focused ? 'orange' : colors.background}
                size={size}
              />
            );
          },
          headerShown: false,
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="MyOrder"
        options={{
          tabBarInactiveTintColor: 'orange',
          tabBarActiveTintColor: colors.background,
          tabBarIcon: ({focused, color, size}) => {
            size = focused ? 25 : 22;
            return (
              <FIcon
                name="package"
                color={!focused ? 'orange' : colors.background}
                size={size}
              />
            );
          },
          headerShown: false,
        }}
        component={MyOrders}
      />
      <Tab.Screen
        name="MyAccount"
        options={{
          tabBarInactiveTintColor: 'orange',
          tabBarActiveTintColor: colors.background,
          tabBarIcon: ({focused, color, size}) => {
            size = focused ? 25 : 22;
            return (
              <Icon
                name="user"
                color={!focused ? 'orange' : colors.background}
                size={size}
              />
            );
          },
          headerShown: false,
        }}
        component={MyAccount}
      />

      {/* <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="" component={Home} />
      <Tab.Screen name="Home" component={Home} /> */}
    </Tab.Navigator>
  );
};
