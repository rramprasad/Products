/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { CommonActions, useTheme } from '@react-navigation/native';

import SplashScreen from './reactnative/components/SplashScreen';
import HomeScreen from './reactnative/components/HomeScreen';
import ProductDetailsScreen from './reactnative/components/ProductDetailsScreen';
import WishListScreen from './reactnative/components/WishListScreen';
import TrackOrdersScreen from './reactnative/components/TrackOrdersScreen';
import CartScreen from './reactnative/components/CartScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

const App = () => {
  const colorScheme = useColorScheme()

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? AppDarkTheme : AppLightTheme}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          // options={({ route }) => ({
          //   headerShown: true,
          //   headerTitle: getHeaderTitle(route),
          // })}
          options={{
            headerShown: true,
            headerTitle: "Home",
            headerTintColor: '#FFEB3B',
            headerStyle: {
              backgroundColor: "#3F51B5"
            },
            // headerLeftContainerStyle:{
            //   paddingLeft:20
            // },
            // headerLeft: () => (
            //   <Image source={require('./reactnative/images/app-logo.png')} style={styles.applogo} />
            // )
          }}
        />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{
            headerShown: true,
            headerTitle: "Product Details",
            headerTintColor: '#FFEB3B',
            headerStyle: {
              backgroundColor: "#3F51B5"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const MainScreen = () => {
  const BottomTab = createMaterialBottomTabNavigator();
  const currentTheme = useTheme()
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      shifting={false}
      activeColor={currentTheme.colors.appTitle}
      inactiveColor='white'
      labelStyle={{ fontSize: 12 }}
      barStyle={{
        backgroundColor: currentTheme.colors.primary
      }}>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={25} />
        )
      }}>
        {/* <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{
            headerShown: true,
            headerTitle: "Product Details",
            headerTintColor: '#FFEB3B',
            headerStyle: {
              backgroundColor: "#3F51B5"
            }
          }}
        /> */}
      </BottomTab.Screen>

      <BottomTab.Screen name="WishListScreen" component={WishListScreen} options={{
        tabBarLabel: "WishList",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="heart" color={color} size={25} />
        ),
      }} />
      <BottomTab.Screen name="TrackOrdersScreen" component={TrackOrdersScreen} options={{
        tabBarLabel: "Orders",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="format-list-bulleted" color={color} size={25} />
        ),
      }} />
      <BottomTab.Screen name="CartScreen" component={CartScreen} options={{
        tabBarLabel: "Cart",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cart" color={color} size={25} />
        ),
      }} />
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeScreen';

  switch (routeName) {
    case 'Home':
      return 'News feed';
    case 'Profile':
      return 'My profile';
    case 'Account':
      return 'My account';
  }
}

const AppLightTheme = {
  dark: false,
  colors: {
    primary: '#3F51B5',
    background: 'white',
    card: '#fafbff',
    text: 'black',
    appTitle: '#FFEB3B'
  }
}

const AppDarkTheme = {
  dark: true,
  colors: {
    primary: '#3F51B5',
    background: '#3F51B5',
    card: '#fafbff',
    text: 'white',
    appTitle: '#FFEB3B'
  }
}

const styles = StyleSheet.create({
  applogo: {
    width: 50,
    height: 50
  }
})

export default App;


// options={{ 
//   title : "Home",
//   headerTintColor: '#FFEB3B',
//   headerStyle: {
//     backgroundColor : "#3F51B5"
//   },
//   headerLeft: () => {
//     <Image source={require('./reactnative/images/app-logo.png')} style={styles.applogo} />
//   }