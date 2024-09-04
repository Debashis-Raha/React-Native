import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextInput } from 'react-native-gesture-handler';

const Payment = () => {
    const {control,
        handleSubmit,
        formState:{errors}
    } = useForm();
  return (
    <View>
        <Text>Enter Your Card Number</Text>
      <Controller
      control={control}
      rules={{required:true}}
      name='cardNum'
      defaultValue=''
      render={({field:{onChange, onBlur, value}})=> (
        <TextInput
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder='1234-4567-1234-5678'
        
        />
  )}
      />
      {errors.cardNum && <Text>Card Number is required</Text>}
      <Text>Enter the Name on the Card</Text>
      <Controller
      control={control}
      rules={{required:true}}
      name='cardName'
      defaultValue=''
      render={({field:{onChange, onBlur, value}})=> (
        <TextInput
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder='Ram Mohan'
        
        />
  )}
      />
      {errors.cardName
       && <Text>Name is required</Text>}
      <View>
      <Controller
      control={control}
      rules={{required:true}}
      name='cardNum'
      defaultValue=''
      render={({field:{onChange, onBlur, value}})=> (
        <TextInput
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder='1234-4567-1234-5678'
        
        />
  )}
      />
      {errors.cardNum && <Text>Card Number is required</Text>} <Controller
      control={control}
      rules={{required:true}}
      name='cardNum'
      defaultValue=''
      render={({field:{onChange, onBlur, value}})=> (
        <TextInput
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder='1234-4567-1234-5678'
        
        />
  )}
      />
      {errors.cardNum && <Text>Card Number is required</Text>}
      </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({})