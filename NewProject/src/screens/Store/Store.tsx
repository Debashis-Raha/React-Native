import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import foodReducer from './FoodSlice';
import userReducer from './UserSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  food: foodReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store =configureStore({
  reducer:persistedReducer,
});


export const persistor = persistStore(store);