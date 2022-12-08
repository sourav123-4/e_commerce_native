import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DisplayItem, Home, MyAccount, MyOrders, SearchScreen} from '../screens';
import {AuthStack} from './AuthStack';

import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';

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
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={DisplayStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
          headerShown: false,
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="MyOrder"
        options={{
          tabBarIcon: ({color, size}) => (
            <FIcon name="package" color={color} size={size} />
          ),
          headerShown: false,
        }}
        component={MyOrders}
      />
      <Tab.Screen
        name="MyAccount"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
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
