import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {addUser} from '../Store/UserSlice';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: {errors},
  } = useForm();

  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const onSubmit = data => {
    console.log('signed up!', data);

    dispatch(addUser(data));
    reset();
    navigation.navigate('login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.headerLabel}>SignUp</Text>
        <Text style={styles.labelStyle}>Username:</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Enter your username"
              keyboardType="default"
              style={styles.inputStyle}
            />
          )}
          name="username"
          defaultValue=""
        />
        {errors.username && (
          <Text style={styles.error}>Username is required</Text>
        )}
        <Text style={styles.labelStyle}>Enter Your Email Id:</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="abc@example.com"
              keyboardType="email-address"
              style={styles.inputStyle}
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && (
          <Text style={styles.error}>Email Address is required</Text>
        )}
        <Text style={styles.labelStyle}>Phone</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[0-9]*$/, // Regex to allow only numeric
              message: 'Only letters are allowed',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="9876543210"
              keyboardType="numeric"
              maxLength={10}
              style={styles.inputStyle}
            />
          )}
          name="phone"
          defaultValue=""
        />
        {errors.phone && (
          <Text style={styles.error}>Phone number is required</Text>
        )}
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
                keyboardType="default"
                secureTextEntry={showPassword}
                // style={styles.inputStyle}
              />
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
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
        {errors.password && (
          <Text style={styles.error}>Password is required</Text>
        )}
        <Text style={styles.labelStyle}>Confirm Password</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            validate: value => value === watch('password') || 'Password must match',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.passwordInputContainer}>
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="12345678"
                keyboardType="default"
                secureTextEntry={showPassword}
                // style={styles.inputStyle}
              />
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={24}
                color="#aaa"
                style={styles.icon}
                onPress={toggleShowPassword}
              />
            </View>
          )}
          name="confirmPassword"
          defaultValue=""
        />
        {errors.confirmPassword && (
          <Text style={styles.error}>{errors.validate?.message}</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonStyle}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.loginLinkStyle}>
            <Text style={styles.linkTextStyle}>Have an account already?</Text>
            <Text
              style={styles.linkStyle}
              onPress={() => navigation.navigate('login')}>
              Login now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#EAEAEA',
  },
  subContainer: {
    // borderWidth: 2,
    // borderColor: 'blue',
    // paddingLeft:5,
    paddingHorizontal: 5,
    // borderRadius:20,
    //     marginTop: 10,
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
    color: '#FF2E63',
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
    justifyContent: 'center',
    // borderColor:'red',
    // borderWidth:2,
  },

  signUp: {
    fontSize: 15,
    color: 'blue',
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
  error: {
    color: 'red',
    fontSize: 12,
  },
  loginLinkStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  linkStyle: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  linkTextStyle: {
    color: 'blue',
  },
});
