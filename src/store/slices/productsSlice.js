// src/store/slices/productsSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api/productsApi';

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchProducts();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    lastFetch: null
  },
  reducers: {
    updateStock: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.items.find(item => item.id === id);
      if (product) {
        product.stock = Math.max(0, product.stock - quantity);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        // Prevent overwriting updated stock if already loaded
        if (state.items.length === 0) {
          state.items = action.payload.map(item => ({
            ...item,
            image: item.image || `/images/${item.id}.webp`
          }));
          state.lastFetch = Date.now();
        }
        state.loading = false;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load products';
      });
  }
});

export const { updateStock } = productsSlice.actions;
export default productsSlice.reducer;

// Selectors
export const selectAllProducts = (state) => state.products.items;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;
export const selectProductById = (id) => (state) =>
  state.products.items.find(product => product.id === id);
