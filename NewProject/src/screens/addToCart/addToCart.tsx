import {StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../../components/atom/Header';
import {useNavigation} from '@react-navigation/native';
import Address from '../CheckOut/Address';

const AddToCart = () => {
  const {cartList} = useSelector(state => state.food);
  const {foodList} = useSelector(state => state.food);
  console.log('cartList2====>', cartList);
  console.log('foodList2====>', foodList);

  const navigation = useNavigation();

  // Group items by id and calculate quantity
  const matchedItems = cartList.reduce((acc, id) => {
    const item = foodList.find(item => item.id === id);
    if (item) {
      if (acc[item.id]) {
        acc[item.id].quantity += 1;
      } else {
        acc[item.id] = {...item, quantity: 1};
      }
    }
    return acc;
  }, {});

  const matchedItemsArray = Object.values(matchedItems);

  const [quantities, setQuantities] = useState(
    matchedItemsArray.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {})
  );

  const totalPrice = matchedItemsArray.reduce(
    (total, item) => total + item.foodPrice * quantities[item.id],
    0,
  );

  console.log('matchedList======>', matchedItemsArray);

  const incrementQuantity = id => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrementQuantity = id => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
    }));
  };

  const render_Item = ({item}) => (
    <View>
      <View style={styles.RenderView}>
        <Text style={styles.RenderText}> {item.foodName}</Text>
        <Text style={styles.RenderText}> ${item.foodPrice}</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => decrementQuantity(item.id)}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{quantities[item.id]}</Text>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => incrementQuantity(item.id)}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  // const footer = () => {
  //   return (
  //     <View style={styles.footContainer}>
  //       <Text style={styles.footText}>This is footer</Text>
  //     </View>
  //   );
  // };

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <Header title="Cart" isBackOption={false} />
      <FlatList
        data={matchedItemsArray}
        renderItem={render_Item}
        keyExtractor={item => item.id.toString()}
        // ListFooterComponent={footer}
      />
      <View>
        <Text style={styles.totalText}>
          Total Price: ${totalPrice.toFixed(2)}
        </Text>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => navigation.navigate('Address')}>
          <Text style={styles.payText}>CheckOut</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  RenderView: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
  RenderText: {
    fontSize: 16,
    fontWeight:'400'
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: '#ddd',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  counterText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  footContainer: {
    padding: 10,
    alignItems: 'center',
  },
  footText: {
    fontSize: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  payButton: {
    backgroundColor: '#08D9D6',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  payText: {
    color: '#fff',
    fontSize: 16,
  },
});
