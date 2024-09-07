import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../components/atom/Header';

const AddConfirm = () => {
  const route = useRoute();
  const { data } = route.params || {};
  console.log('Data:', data); // Debugging line

  const navigation = useNavigation();
  const onSubmit = () => {
    navigation.navigate('payment');
  };

  const AddressField = ({ label, value }) => {
    console.log(`${label} ${value}`); // Debugging line
    return (
      <>
        <Text style={styles.text}>{label}</Text>
        <Text style={styles.textValue}>{value || 'N/A'}</Text>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Confirm Address" />
      <View style={styles.subContainer}>
        <AddressField label="House Number:" value={data.houseNum || 'N/A'} />
        <AddressField label="Street Number/Name:" value={data.streetNum || 'N/A'} />
        <AddressField label="Locality:" value={data.locale || 'N/A'} />
        <AddressField label="City:" value={data.city || 'N/A'} />
        <AddressField label="State:" value={data.state || 'N/A'} />
        <AddressField label="Country:" value={data.country || 'N/A'} />
        <AddressField label="PIN:" value={data.pin || 'N/A'} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onSubmit} style={styles.button} accessibilityLabel="Confirm and go to payment">
          <Text style={styles.buttonText}>Confirm and Goto Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddConfirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  subContainer: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#252A34',
    marginBottom: 10,
  },
  textValue: {
    marginBottom: 10,
    fontSize: 18,
    color: '#252A34',
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#08D9D6',
    borderRadius: 20,
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginBottom: 10,
  },
  buttonText: {
    color: '#EAEAEA',
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
  },
});
