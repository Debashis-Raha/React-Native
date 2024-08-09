import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabNavigation from './src/screens/Navigation/Tabs';
import {Provider} from 'react-redux';
import {persistor, store} from './src/screens/Store/Store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TabNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
