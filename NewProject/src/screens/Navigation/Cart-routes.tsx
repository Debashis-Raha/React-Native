import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddConfirm from '../CheckOut/AddConfirm';
import Address from '../CheckOut/Address';
import AddToCart from '../addToCart/addToCart';

const CartRoutes = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={AddToCart} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="AddressConfirm" component={AddConfirm} />
    </Stack.Navigator>
  );
};

export default CartRoutes;

const styles = StyleSheet.create({});
