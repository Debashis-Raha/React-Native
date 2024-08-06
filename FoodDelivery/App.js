import { StyleSheet, Text, View } from "react-native";
import HomePage from "./src/screens/HomePage/HomePage";
import Login from "./src/screens/Login/Login";

export default function App() {
  return (
    <View style={styles.container}>
 <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

 
  },
});
