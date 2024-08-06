import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import AddItems from '../AddItems/AddItems';
import {useNavigation} from '@react-navigation/native';
import Detail from './Details/Details';

const Home = () => {
  const [ItemDetails, setItemDetails] = useState([
    {id:1, Name: 'Ram', Price: '200$', Quantity: 3, Quality: 'grey'},
    {id:2, Name: 'Raman', Price: '250$', Quantity: 4, Quality: 'excellent'},
  ]);

  const item = [
    {Name: 'Ram', Price: '200$', Quantity: 3, Quality: 'grey'},
    {Name: 'Raman', Price: '250$', Quantity: 4, Quality: 'excellent'},
  ];
  console.log('type of', item);

  const [name, setName] = useState('Mohan');
  const UpdateName = demo => {
    // console.log(demo);

    setName(demo);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Detail items={ItemDetails} />
      <Text>{name}</Text>
      <Text style={{fontSize: 50, color: 'blue'}}>{}</Text>
      <Button
        title="Click Here"
        onPress={() => navigation.navigate('AddItems')}
      />
      <Button title="Name Change" onPress={() => UpdateName('ajay')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
