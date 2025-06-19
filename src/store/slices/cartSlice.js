import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, stock } = action.payload;
      const existingItem = state.find(item => item.id === id);

      if (existingItem) {
        if (existingItem.quantity < stock) {
          existingItem.quantity += 1;
        } else {
          // Do not add if stock is exceeded
          console.warn(`Cannot add more than available stock (${stock}) for product ID: ${id}`);
        }
      } else {
        if (stock > 0) {
          state.push({ ...action.payload, quantity: 1 });
        } else {
          // Do not add if out of stock
          console.warn(`Cannot add product ID: ${id} — out of stock`);
        }
      }
    },

    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        const maxQty = item.stock;
        const newQty = action.payload.quantity;
        item.quantity = newQty <= maxQty ? newQty : maxQty;
      }
    },

    clearCart: () => []
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
