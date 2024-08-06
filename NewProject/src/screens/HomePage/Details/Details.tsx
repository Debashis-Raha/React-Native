import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const Detail = ( items ) => {
  console.log(items)
  return (
    <View>
   <Text>{items.items[1].Name}</Text>
   <Text>{items.items[0].Name}</Text>
   {items.items.map((items, index) =>{
    return(
      <Text>{items.Name}</Text>
    )
   })}
     
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})