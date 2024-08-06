import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
  TextInput,
  Button,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import ImageCropPicker from 'react-native-image-crop-picker';

const AddItems = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
  } = useForm();
  const onSubmit = data => console.log(data);

  const selectImage = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      setValue('image', image.path);
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };

  const category = [
    {label: 'Soft drink', value: 'Soft drink'},
    {label: 'Cold drink', value: 'Cold drink'},
    {label: 'Junk Food', value: 'Junk Food'},
    {label: 'Healthy Food', value: 'Healthy Food'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Food Items</Text>
      <Text style={styles.label}>Food Name</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^[a-zA-Z\s]*$/, // Regex to allow only letters and spaces
            message: 'Only letters are allowed',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter Food Name"
            style={styles.input}
          />
        )}
        name="FoodName"
        defaultValue=""
      />
      {errors.FoodName && (
        <Text style={styles.error}>Food Name is required.</Text>
      )}
      <Text style={styles.label}>Price</Text>
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
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter Food Price"
            keyboardType="numeric"
            style={styles.input}
          />
        )}
        name="FoodPrice"
        defaultValue=""
      />
      {errors.FoodPrice && <Text style={styles.error}>Price is required.</Text>}
      <Text style={styles.label}>Category</Text>
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <Dropdown
            data={category}
            labelField={'label'}
            valueField={'value'}
            placeholder="Select a Category"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            style={styles.dropdown}
          />
        )}
        name="FoodCategory"
        defaultValue=""
      />
      {errors.FoodCategory && (
        <Text style={styles.error}>This is required.</Text>
      )}
      <View style={styles.subContainer}>
        <Pressable style={styles.buttn} onPress={selectImage}>
          <Text style={styles.buttnStyle}>Upload Image</Text>
        </Pressable>
        <Text>Upload Food Image</Text>
      </View>
      <Pressable style={styles.button} onPress={selectImage}>
        <Text style={styles.buttonStyle}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#EEEDEB',
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    alignSelf: 'center',
    marginVertical: 20,
  },
  label: {
    marginVertical: 5,
    fontSize: 15,
    color: 'black',
    // paddingLeft:10,
  },
  input: {
    fontSize: 15,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'blue',
    textAlign: 'left',
    borderRadius: 5,
  },
  dropdown: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'blue',
    height: 45,
    textAlign: 'left',
    borderRadius: 5,
    padding: 10,
  },
  error: {
    fontSize: 15,
    color: 'red',
  },
  buttn: {
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 20,
    width: 150,
    // marginTop:30
  },
  buttnStyle: {
    fontSize: 15,
    padding: 2,
    color: 'white',
    fontWeight: 'bold',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  button: {
    backgroundColor: 'red',
    alignItems: 'center',
    marginHorizontal: 50,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonStyle: {
    color: 'white',
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
  },
});

export default AddItems;
