import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearAddFood} from '../Store/FoodSlice';
import { FlatList } from 'react-native-gesture-handler';


const Profile = () => {
  const dispatch = useDispatch();

  const {userList} = useSelector(state=> state.user);

  console.log("Profile=======>", userList);
  const _handleLogOut = () => {
    dispatch(clearAddFood());
  };

  const _renderItem =(item)=>{
    <View>
      <Text>{item.payload.email}</Text>
    </View>

  }
  
  return (
    <ScrollView>
      {/* <FlatList
      data={userList}
      renderItem={_renderItem}
      keyExtractor={item => item.payload.username}

      /> */}
        
     
    <Pressable onPress={_handleLogOut}>
      <Text>logout</Text>
    </Pressable>
    </ScrollView>
  );

};

export default Profile;

const styles = StyleSheet.create({});