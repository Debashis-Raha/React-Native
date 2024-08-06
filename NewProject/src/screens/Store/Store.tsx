import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './FoodSlice';

export const store = configureStore({
  reducer: {
    food: foodReducer,
},
});