import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigation, { TabNavigator } from './Tabs';
import AddToCart from '../addToCart/addToCart';

const HomeRoutes = () => {
    const Stack = createStackNavigator();
  return (
   <Stack.Navigator>
    <Stack.Screen name='tab' component={TabNavigator} options={{headerShown:false}}/>
    <Stack.Screen name='cart' component={AddToCart} options={{headerShown:false}}/>
   </Stack.Navigator>
  )
}

export default HomeRoutes

const styles = StyleSheet.create({})