import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/atom/Header';

const Payment = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const navigation = useNavigation();

  const onSubmit = () => {
    Alert.alert(
      'Sucess!',
      'Hot & Delicious Food will be delivered within 30 minutes',
    );
    navigation.navigate('tab');
  };
  return (
    <View style={{flex: 1}}>
      <Header title="Payment" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Enter Your Card Number</Text>
        <Controller
          control={control}
          rules={{required: true}}
          name="cardNum"
          defaultValue=""
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="1234-4567-1234-5678"
              keyboardType='numeric'
              maxLength={16}
              style={styles.input}
            />
          )}
        />
        {errors.cardNum && (
          <Text style={styles.error}>Card Number is required</Text>
        )}
        <Text style={styles.label}>Enter the Name on the Card</Text>
        <Controller
          control={control}
          rules={{required: true}}
          name="cardName"
          defaultValue=""
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Ram Mohan"
              style={styles.input}
            />
          )}
        />
        {errors.cardName && <Text style={styles.error}>Name is required</Text>}
        <Text style={styles.label}>Enter the Expiry date</Text>
        <View style={styles.dateContainer}>
          <Controller
            control={control}
            rules={{required: true}}
            name="cardMon"
            defaultValue=""
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="12"
                keyboardType='numeric'
                maxLength={2}
                style={styles.input}
              />
            )}
          />
          {errors.cardMon && <Text style={styles.error}>Date is required</Text>}
          <Text style={{fontSize:30}}>  /  </Text>
          <Controller
            control={control}
            rules={{required: true}}
            name="cardYear"
            defaultValue=""
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="2024"
                keyboardType='numeric'
                maxLength={4}
                style={styles.input}
              />
            )}
          />
          {errors.cardNum && <Text style={styles.error}>Date is required</Text>}
        </View>
        <Text style={styles.label}>Enter CVV:</Text>
        <Controller
          control={control}
          rules={{required: true}}
          name="cardCvv"
          defaultValue=""
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="123"
              maxLength={3}
              secureTextEntry
              style={styles.input}
            />
          )}
        />
        {errors.cardCvv && <Text style={styles.error}>CVV is required</Text>}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.button}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
    color: '#252A34',
    marginBottom: 5,
  },
  input: {
    fontSize: 15,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#FF2E63',
    textAlign: 'left',
    borderRadius: 5,
    color: '#FF2E63',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#08D9D6',
    borderRadius: 20,
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 80,
    marginBottom: 10,
  },
  buttonText: {
    color: '#EAEAEA',
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
  },
  dateContainer:{
    flexDirection:'row',
    
  },
});
