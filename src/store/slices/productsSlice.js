import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';

const productsSlice = createSlice({
  name: 'products',
  initialState: data.map(item => ({ ...item, image: `/images/${item.id}.webp` })),
  reducers: {
    updateStock: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.find(item => item.id === id);
      if (product) {
        product.stock -= quantity;
      }
    }
  }
});

export const { updateStock } = productsSlice.actions;
export default productsSlice.reducer;