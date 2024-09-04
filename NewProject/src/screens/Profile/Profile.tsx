import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearAddFood} from '../Store/FoodSlice';
import {FlatList} from 'react-native-gesture-handler';
import Header from '../../components/atom/Header';
import {logOut} from '../Store/UserSlice';

const Profile = () => {
  const dispatch = useDispatch();

  const {doesUserExist} = useSelector(state => state.user);

  console.log('Profile=======>', doesUserExist);
  const _handleLogOut = () => {
    dispatch(clearAddFood());
    dispatch(logOut());
  };

  // const _renderItem = item =>{
  //   return(
  //   <View>
  //     <Text>{item.item.email}</Text>
  //     <Text>{item.item.phone}</Text>
  //     <Text>{item.item.username}</Text>

  //   </View>
  //   );
  // };

  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <View style={styles.subContainer}>
        <Text>Username:</Text>
        <Text style={styles.txtStyle}>{doesUserExist.username}</Text>
        <Text>Email:</Text>
        <Text style={styles.txtStyle}>{doesUserExist.email}</Text>
        <Text>Phone:</Text>
        <Text style={styles.txtStyle}>{doesUserExist.phone}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={_handleLogOut} style={styles.logButton}>
          <Text style={styles.logText}>LogOut</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  subContainer: {
    padding: 10,
  },
  txtStyle: {
    fontSize: 20,
    color: '#252A34',
  },
  buttonContainer: {
    //
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  logButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#08D9D6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 50,
  },
  logText: {
    color: '#EAEAEA',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: '500',
  },
});
