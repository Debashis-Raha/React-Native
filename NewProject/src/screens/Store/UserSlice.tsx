import {createSlice} from '@reduxjs/toolkit'
// import {createSelector} from 'reselect';

const initialState ={
    userList:[],
    userId:1,
    isAuthenticated: false,
    doesUserExist: {}
};


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{
           

            if(!Array.isArray(state.userList))
            {
                state.userList = [];
            }
            
            const newUSer = {
                id:state.userId,
                ...action.payload,
            };

            console.log("newUSER========>", newUSer);
            state.userList.push(newUSer);
            state.userId += 1;
        },

        isLogginStarted: state => {
            state.isAuthenticated =false;
        },
        isLogginSuccess: (state, {payload}) => {
            state.isAuthenticated =true;
            state.doesUserExist = payload;
        },
        isLogginFail: state => {
            state.isAuthenticated =false;
        },
        logOut: state => {
            state.isAuthenticated =false;
        },


      
    },
});



export const {addUser,
    isLogginFail,
    isLogginStarted,
    isLogginSuccess,
    logOut,
} = userSlice.actions;

// export {doesUserExistSelector};

export default userSlice.reducer;