import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice';
import cartReducer from './slices/cartSlice';
import productsReducer from './slices/productsSlice';

export default configureStore({
  reducer: {
    page: pageReducer,
    cart: cartReducer,
    products: productsReducer
  }
});