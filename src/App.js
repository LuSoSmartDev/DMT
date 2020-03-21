import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Square from './screens/Square'
import Circle from './screens/Circle'
import Triangle from './screens/Triangle'
import AllShape from './screens/AllShape'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Square"
        tabBarOptions={{
          activeTintColor: '#2e7d32',
          inactiveBackgroundColor: 'black'
        }}
      >
        <Tab.Screen
          name="Square"
          component={Square}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="glass" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Circle"
          component={Circle}
          options={{
            tabBarLabel: 'Circle',
            tabBarIcon: ({ color, size }) => (
              <Icon name="music" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Triangle"
          component={Triangle}
          options={{
            tabBarLabel: 'Triangle',
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AllShape"
          component={AllShape}
          options={{
            tabBarLabel: 'All Shape',
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
