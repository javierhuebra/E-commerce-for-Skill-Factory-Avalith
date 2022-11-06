import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/products/productSlice';
//falta el import del slice, lo hago en breve, espero no olvidarme jejejejej porque sale error y no voy a saber que ess

export const store = configureStore ({
    reducer:{
        product: productReducer
    }
})