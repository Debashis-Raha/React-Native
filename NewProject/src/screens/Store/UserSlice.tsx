import {createSlice} from '@reduxjs/toolkit'
// import {createSelector} from 'reselect';

const initialState ={
    userList:[],
    loginList:[]
    ,
};

// const selectUserList = state => state.userList;

// const doesUserExistSelector = createSelector(
//   [selectUserList],
//   userList => data =>
//     userList.some(
//       item => item.email === data.email && item.password === data.password,
//     ),
// );

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.userList.push(action);
            console.log("newUser========>", action);
        },
        // addLogin:(state,action)=>{
        //     state.loginList.push(action);
        //     console.log("newUser2========>", action);
        // },
      
    },
});



export const {addUser} = userSlice.actions;

// export {doesUserExistSelector};

export default userSlice.reducer;