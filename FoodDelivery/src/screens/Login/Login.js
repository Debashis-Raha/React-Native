import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View style={styles.logContainer}>
      <Image
        source={"../../../assets/logo/food-express-logo.png"}
        style={styles.logoStyle}
      />
      <View style={styles.subContainer}>
      <Text style={styles.htextStyle}>Welcome to FastDelivery</Text>
      <Text style={styles.subTitle}>Order food at fastest</Text>
      <Text style={styles.subText}>Email Address</Text>
      <TextInput placeholder="abc@example.com" keyboardType="email-address" style={styles.inputStyle}/>
      <Text style={styles.subText}>Password</Text>
      <TextInput placeholder="***********" keyboardType="password" style={styles.inputStyle}/>
      <Button title="Login"/>
      <Text>Haven't Signed Up Yet?</Text>
      <Text>Forgot Password</Text>
    </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logContainer: {
    justifyContent: "center",
    alignSelf: "center",
  },
  subContainer:{
    marginVertical:200,
    marginHorizontal:5

  },
  logoStyle: {
    resizeMode: "contain",
    width: 200,
    height: 200,
  },

  htextStyle: {
    fontSize: 30,
    fontWeight: "700",
    color: "",
    marginVertical:5
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "gray",
    justifyContent:'center',
    marginHorizontal:70  },

  subText:{
    fontSize:18,
    fontWeight:'400',
    marginVertical:"auto"
  },

  inputStyle:{
    fontSize:15,
    marginVertical:10,
    borderRadius:10,
    borderColor:'blue',
    borderWidth:1,
    padding:4,

  }
});
