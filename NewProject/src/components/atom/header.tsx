import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const header = (title) => {
const navigation = useNavigation();

  return (
  <SafeAreaView>
    <Text>Back</Text>
    <Text>{title}</Text>
    <TouchableOpacity onPress={()=>navigation.navigate{'addToCart'}}>
        <Text>Cart</Text>
    </TouchableOpacity>
  </SafeAreaView>
  )
}

export default header

const styles = StyleSheet.create({})