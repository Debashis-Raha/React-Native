import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, isBackOption }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerStyle}>
      <View style={styles.leftContainer}>
        {!isBackOption && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.mainTxtStyle}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddToCart')}>
        <Icon name="cart" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FF2E63',
  },
  leftContainer: {
    width: 50, // Adjust this width as needed
    alignItems: 'flex-start',
  },
  mainTxtStyle: {
    fontSize: 20,
    color: '#EAEAEA',
    textAlign: 'center',
    flex: 1,
  },
});
