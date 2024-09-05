import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const AddConfirm = () => {
const route = useRoute();
const {data} = route.params;
    return (
    <View>
      <Text>House Number:{data.housenum}</Text>
      <Text>Street Number/Name:{data.streetnum}</Text>
      <Text>Locality:{data.locale}</Text>
      <Text>City:{data.city}</Text>
      <Text>State:{data.state}</Text>
      <Text>Country:{data.country}</Text>
      <Text>PIN:{data.pin}</Text>
      <View>
        <TouchableOpacity>
          <Text>
            Confirm and Goto Payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddConfirm

const styles = StyleSheet.create({})