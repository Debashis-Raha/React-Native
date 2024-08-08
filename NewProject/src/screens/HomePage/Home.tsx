import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

const Home = () => {
  const {foodList} = useSelector(state => state.food);
  console.log('foodList=======>', foodList);

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
        </View>
      </View>
    );
  };
  return (
    <View>
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
    borderWidth: 1,
    borderColor: 'red',
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 5,
  },
  subCard: {
    marginLeft: 1,
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 5,
  },
});
