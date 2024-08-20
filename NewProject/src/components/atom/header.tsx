import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'

const Header = ({title, isBackOption}) => {
const navigation = useNavigation();

  return (
  <View style={styles.headerStyle}>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
    {!isBackOption && (
      <Icon name="arrow-back" size={25} color="white"  />
    )}
   
    <Text style={styles.mainTxtStyle}>{title}</Text>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('AddToCart')}>
    <Icon name="cart" size={30} color="white"  />
    </TouchableOpacity>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerStyle:{
    justifyContent:'space-between',
    flexDirection:'row',
    padding:20,
    backgroundColor:'#FF2E63',
   alignItems: 'center'

  },
  txtStyle:{
    fontSize:20,
    fontWeight:'400',
   /// paddingTop:8,
    color:'#EAEAEA',
    marginRight: 4

  },
  mainTxtStyle:{
    fontSize:20,
    color:'#EAEAEA',
    alignSelf: 'center',
    marginLeft: 5
  },
})