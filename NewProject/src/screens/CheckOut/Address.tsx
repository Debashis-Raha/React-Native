import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../components/atom/Loader';

const Address = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const onSubmit = data => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('AddressConfirm', {data});
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>House Number:</Text>
      <Controller
        control={control}
        name="houseNum"
        defaultValue=""
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Enter your House number"
          />
        )}
      />
      {errors.houseNum && (
        <Text style={styles.error}>House Number is required</Text>
      )}

      <Text style={styles.label}>Street Number/Name:</Text>
      <Controller
        control={control}
        name="streetNum"
        defaultValue=""
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Enter your Street number/Name"
          />
        )}
      />
      {errors.streetNum && (
        <Text style={styles.error}>Street Number/Name is required</Text>
      )}

      <Text style={styles.label}>Locality:</Text>
      <Controller
        control={control}
        name="locale"
        defaultValue=""
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Enter your Locality"
          />
        )}
      />
      {errors.locale && <Text style={styles.error}>Locality is required</Text>}

      <Text style={styles.label}>City:</Text>
      <Controller
        control={control}
        name="city"
        defaultValue=""
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Enter your city"
          />
        )}
      />
      {errors.city && <Text style={styles.error}>City Name is required</Text>}

      <Text style={styles.label}>State:</Text>
      <Controller
        control={control}
        name="state"
        defaultValue=""
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Enter your State"
          />
        )}
      />
      {errors.state && <Text style={styles.error}>State Name is required</Text>}

      <Text style={styles.label}>Country:</Text>
      <Controller
        control={control}
        name="country"
        defaultValue=""
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Enter your Country"
          />
        )}
      />
      {errors.country && (
        <Text style={styles.error}>Country Name is required</Text>
      )}

      <Text style={styles.label}>PIN:</Text>
      <Controller
        control={control}
        name="pin"
        defaultValue=""
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Enter your PIN"
          />
        )}
      />
      {errors.pin && <Text style={styles.error}>PIN is required</Text>}

      <View style={styles.buttonContainer}>
        {loading ? (
          <Loader />
        ) : (
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.button}>
            <Text style={styles.buttonText}>Save & Goto Payment</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
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
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
