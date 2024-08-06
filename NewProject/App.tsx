import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabNavigation from './src/screens/Navigation/Tabs';
import Notification from './src/screens/Notification/Notification';
import Home from './src/screens/HomePage/HomePage';
import TabNavi from './src/screens/Navigation/TabNavi';
import AddItems from './src/screens/AddItems/AddItems';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <TabNavigation/> */}

      <AddItems />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
