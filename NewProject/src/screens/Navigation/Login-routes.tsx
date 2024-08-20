import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../Login/SignUp'
import _Login from '../Login/Login'
import TabNavigation from './Tabs'

const LoginRoutes = () => {
    const navigation = useNavigation();
    const Stack = createStackNavigator();
  return (
    
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name = 'login' component={_Login} options={{headerShown:false}}/>
            <Stack.Screen name = 'signup' component={SignUp} options={{headerShown:false}}/>
            {/* <Stack.Screen name = 'tab' component={TabNavigation} options={{headerShown:false}}/> */}
        </Stack.Navigator>
   
  )
}

export default LoginRoutes

const styles = StyleSheet.create({})