import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabNavigation from './src/screens/Navigation/Tabs';
import { Provider } from 'react-redux';
import { store } from './src/screens/Store/Store';

const App = () => {
  return (
    <Provider store={store}>
    <View style={styles.mainContainer}>
      <TabNavigation/>
    </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
