import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const AddToCart = () => {
  const {cartList} = useSelector(state => state.food);
  const {foodList} = useSelector(state => state.food);
  console.log('cartList2====>', cartList);
  console.log('foodList2====>', foodList);

  const matchedItems = cartList
    .map(id => foodList.find(item => item.id === id))
    .filter(item => item !== undefined);

  // const matchedItems = cartList
  // .map(idObj => foodList.find(item => item.id === idObj.Index))
  // .filter(item => item !== undefined);


  console.log('matchedList======>', matchedItems);

  const render_Item = item => (
    <View>
    <View style={styles.RenderView}>
      <Text style={styles.RenderText}>Food Name: {item.item.foodName}</Text>
      <Text style={styles.RenderText}>Food Price: ${item.item.foodPrice}</Text>
    </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={matchedItems}
        renderItem={render_Item}
        keyExtractor={item => item.foodName}
      />
    </View>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  RenderView: {
    flex: 1,
    width: 400,
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#EAEAEA',
  },
  RenderText: {
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: '300',
  },
});
