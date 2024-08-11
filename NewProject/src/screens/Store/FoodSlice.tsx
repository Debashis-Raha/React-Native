import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  foodList: [],
  cartList: [],
  nextID: 1,
  cartID: 1,
};

const FoodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addFood: (state, action) => {
      const newFoodItem = {
        id: state.nextID,
        ...action.payload,
      };
      state.foodList.push(newFoodItem);
      state.nextID++;
    },
    submitCartId: (state, action) => {
      console.log('cartList====767576576>', action.payload);
      state.cartList.push(action.payload);
    },
  },
});

export const {addFood, submitCartId} = FoodSlice.actions;

export default FoodSlice.reducer;
