import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import { submitCartId } from '../Store/FoodSlice';

import Header from '../../components/atom/Header';

const Home = () => {
  const {foodList} = useSelector(state => state.food);
  console.log('foodList=======>', foodList);

 const dispatch = useDispatch();

 


 const AddtoCart=(id)=>{
 console.log('cartItem=====>', id)
 const payload = {
// item.item.id,
  // foodPrice: item.item.foodPrice,
};
 dispatch(submitCartId(id));
//  console.log("payload=======>", payload)
};



  const _renderItem = item => {
    return (
      <View style={styles.card}>
       
        <Image source={{uri: item.item.image}} style={styles.image} />
        <View style={styles.subCard}>
          <Text style={styles.Txt}>Food Name: {item.item.foodName} </Text>

          <Text style={styles.Txt}>
            Food Category: {item.item.foodCategory}{' '}
          </Text>
          <Text style={styles.Txt}>Food Price: ${item.item.foodPrice} </Text>
          <View style={styles.subView}>
          <TouchableOpacity onPress={() => AddtoCart(item.item.id)} style={styles.AddCartButton}>
            <Text style={styles.AddCartText}>Add to Cart</Text>
          </TouchableOpacity>
          </View>
        </View>
        
       
      </View>
    );
  };
 
  return (
    <View style={styles.flatStyle}>
       <Header title='Home'isBackOption={true}/>
      <FlatList
        data={foodList}
        renderItem={_renderItem}
        keyExtractor={item => item.foodName}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 100,
    width: 100,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#FF2E63',
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop:5,
    borderRadius: 5,
    backgroundColor:'#EAEAEA'
  },
  subCard: {
    marginLeft: 1,
  },
  Txt: {
    fontSize: 20,
    fontWeight: '300',
    color: '#252A34',
    marginBottom: 5,
  },
  flatStyle:{
    flex:1,
    backgroundColor:'#EAEAEA'
  },
  AddCartButton:{
    backgroundColor:'#08D9D6',
    height:50,
    width:150,
    alignSelf:'center',
    borderRadius:50,

    
  },
  AddCartText:{
    fontSize:20,
    fontWeight:'400',
    alignSelf:'center',
    justifyContent:'center',
    padding:5,
    marginTop:5,
   
  },
});
