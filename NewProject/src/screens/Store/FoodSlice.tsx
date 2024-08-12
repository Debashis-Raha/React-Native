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
    const newCart ={
      id: state.cartID,
      ...action.payload,
    };
    state.cartList.push(newCart);
    state.cartID++;
    },
  },
});

export const {addFood, submitCartId} = FoodSlice.actions;

export default FoodSlice.reducer;
