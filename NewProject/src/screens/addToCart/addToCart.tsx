import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/atom/Header';

const AddToCart = () => {
  const {cartList} = useSelector(state => state.food);
  const {foodList} = useSelector(state => state.food);
  console.log('cartList2====>', cartList);
  console.log('foodList2====>', foodList);

  const totalPrice = foodList.reduce(
    (total, element) => total + element.number * element.priceNumber,
    0
  );

  // const priceNumber = parseInt(foodPrice);

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

  const footer =()=> {
return(
<View style={styles.footContainer}>
  <Text style={styles.footText}>This is footer</Text>
</View>
)
  }

  return (
    <ScrollView contentContainerStyle={{flex:1}}>
       <Header title='Cart'isBackOption={false}/>
      <FlatList
        data={matchedItems}
        renderItem={render_Item}
        keyExtractor={item => item.foodName}
        ListFooterComponent={footer}
      />
      <View>
        <Text>Total Price: ${totalPrice.toFixed(2)}</Text>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payText}>
            CheckOut
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  RenderView: {
    flex: 1,
    width: 400,
    borderWidth: 2,
    borderColor: '#FF2E63',
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
  footContainer:{
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    // backgroundColor: 'black', // Customize as needed
    justifyContent: 'center',
    alignItems: 'center',

  },
  footText:{},
  payButton:{
    backgroundColor:'#08D9D6',
    borderRadius:20,
    height:50,
    width:250,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:80,
    marginBottom:10,

  },
  payText:{
    fontSize:20,
    color:'#EAEAEA',
    padding:5,
    fontWeight:'500',

  },
});
