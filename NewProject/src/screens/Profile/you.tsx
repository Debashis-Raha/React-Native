import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Pressable, ScrollView, TextInput} from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import {clearAddFood} from '../Store/FoodSlice'

const Profile = () => {
const dispatch = useDispatch();

const _handleLogOut =()=> {
  dispatch(clearAddFood());
}

  // const {
  //   control,
  //   handleSubmit,
  //   formState: {errors},
  // } = useForm();
  return (
    // <ScrollView style={styles.container}>
    //   <Text>Name</Text>
    //   <Controller
    //     control={control}
    //     rules={{required: true,
    //       pattern:{
    //         value: /^[a-zA-Z\s]*$/, // Regex to allow only letters and spaces
    //         message: 'Only letters are allowed',
          
    //       }
    //     }}
    //     render={({field: {onChange, onBlur, value}}) => (
    //       <TextInput
    //         onBlur={onBlur}
    //         onChange={onChange}
    //         placeholder="Enter your Name"
    //         value={value}
    //       />
    //     )}
    //     name="Name"
    //     defaultValue=""
    //   />
    //   {errors.Name && <Text>Name is required</Text>}
    //   <Text>Age</Text>
    //   <Controller
    //   control={control}
    //   rules={{
    //     required:true,
    //     pattern:{
    //       value: /^[0-9]*$/, // Regex to allow only numeric
    //       message: 'Only letters are allowed',
    //     }
    //   }}
    //   render={({field: {onChange, onBlur, value}})=>(
    //     <TextInput
    //     onChange={onChange}
    //     onBlur={onBlur}
    //     value={value}
    //     placeholder='Enter your Age'
    //     keyboardType='numeric'
    //     />
    //   )}
    //   name="Age"
    //   defaultValue=''
    //   />
    //   {errors.Age && (<Text>Age is required</Text>)}
    //   <Text>Address</Text>
    //   <Controller
    //   control={control}
    //   rules={{required:true}}
    //   render={({field: {onChange, onBlur, value}})=>(
    //     <TextInput
    //     onBlur={onBlur}
    //     onChange={onChange}
    //     value={value}
    //     placeholder='Enter Your Address'
    //     />
      
    //   )}
    //     name='address'
    //     defaultValue=''
    //   />
    //   {errors.address && (<Text>Address is required</Text>)}
    //   <Text>Mobile</Text>
    //   {/*   */}
      <Pressable onPress={_handleLogOut}>
        <Text>logOut</Text>
      </Pressable>
    // </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center'
  },
});
