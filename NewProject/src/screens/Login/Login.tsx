import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  isLogginFail,
  isLogginStarted,
  isLogginSuccess,
} from '../Store/UserSlice';

import { ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const _Login = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {userList} = useSelector(state => state.user);
  //console.log('userListLog========>', userList);

  const onSubmit = data => {
    console.log('login=========>', data);
    dispatch(isLogginStarted());
    const doesUserExist = userList.find(
      item => item.email === data.email && item.password === data.password,
    );
    console.log('doesExist=======>', doesUserExist);
    if (doesUserExist) {
      // navigation.navigate('Home');
      dispatch(isLogginSuccess(doesUserExist));
    } else {
      Alert.alert('Error', 'Invalid Credentials. Please try again');
      dispatch(isLogginFail());
      reset();
    }
  };

  return (
    <View style={styles.container}>
    <ImageBackground
    source={require('../../../assests/bgg.png')}
    style={styles.background}>
    
      <View style={styles.subContainer}>
        <Text style={styles.headerLabel}>Login</Text>
        <Text style={styles.labelStyle}>Enter Your Email Id:</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="abc@example.com"
              style={styles.inputStyle}
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && <Text style={styles.errorStyle}>Email Address is required</Text>}
        <Text style={styles.labelStyle}>Password</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.passwordInputContainer}>
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="12345678"
                secureTextEntry={showPassword}
                // style={styles.inputStyle}
              />
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#aaa"
                style={styles.icon}
                onPress={toggleShowPassword}
              />
            </View>
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && <Text style={styles.errorStyle}>Password is required</Text>}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonStyle}>Login</Text>
        </TouchableOpacity>
        {/* </View> */}
        {/* <View style={styles.signContainer}> */}
        <TouchableOpacity style={styles.signUpKey}>
          <View style={styles.signContainer}>
            <Text style={styles.signUp}>Haven't signed in yet? </Text>
            <Text
              style={styles.signUpLink}
              onPress={() => navigation.navigate('signup')}>
              Click here
            </Text>
          </View>
        </TouchableOpacity>
      </View>
   
    </ImageBackground>
    </View>
  );
};

export default _Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    // padding: 10,
    backgroundColor: '#FFF5E1',
  },
  subContainer: {
    paddingHorizontal: 15,
    // padding:10,
    marginTop: 50,
    backgroundColor:'#EAEAEA',
    borderRadius:20,
    marginHorizontal:10,
  },

  headerLabel: {
    fontSize: 40,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#FF2E63',
    marginBottom: 50,
  },

  labelStyle: {
    fontSize: 20,
    fontWeight: '300',
    color: '#252A34',
    marginVertical: 10,
  },
  inputStyle: {
    fontSize: 15,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#FF2E63',
    textAlign: 'left',
    borderRadius: 5,
    color: '#252A34',
  },
  button: {
    backgroundColor: '#FF2E63',
    alignItems: 'center',
    marginHorizontal: 50,
    borderRadius: 20,
    marginTop: 30,
  },
  buttonStyle: {
    color: '#EAEAEA',
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
  },
  signContainer: {
    flexDirection: 'row',
  },

  signUp: {
    fontSize: 15,
    color: '#C80036',
  },
  signUpKey: {
    marginLeft: 90,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#FF2E63',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  signUpLink: {
    color: '#C80036',
    textDecorationLine: 'underline',
  },
  errorStyle:{
color:'red'
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
