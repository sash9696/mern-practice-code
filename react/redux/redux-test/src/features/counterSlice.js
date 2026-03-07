import {createSlice} from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment: (state) => {
            state.count += 1;
            // immer library
            //to use immutability
            // behind the scenes it using spread operator for us
        },
        decrement:(state) => {
            state.count -= 1;
        }
    }
});

export const  {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;