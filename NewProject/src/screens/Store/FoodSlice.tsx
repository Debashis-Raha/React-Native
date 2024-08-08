import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  foodList: [],
};

const FoodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.foodList.push(action.payload);
    },
  },
});

export const { addFood } = FoodSlice.actions;

export default FoodSlice.reducer;
