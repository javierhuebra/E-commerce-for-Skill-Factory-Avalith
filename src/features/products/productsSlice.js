import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        addProduct: (state, action) =>{
            state.push(action.payload);
        }
    }
    
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;