import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const AddToCart = () => {
  const {cartList} = useSelector(state => state.food);

  console.log('cartscreen====>', cartList)

  const render_Item = item => (
    <View style={styles.RenderView}>
      <Text style={styles.RenderText}>Food Name: {item.item.foodName}</Text>
      <Text style={styles.RenderText}>Food Price: ${item.item.foodPrice}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={cartList}
        renderItem={render_Item}
        keyExtractor={item => item.foodName}
      />
    </View>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  RenderView:{
    flex:1,
    width:400,
    borderWidth:2,
    borderColor:'red',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:10,
    marginHorizontal:10,
    padding:10,
    borderRadius:10,
  },
  RenderText:{
justifyContent:'center',
fontSize:20,
fontWeight:'300'
  },
});
