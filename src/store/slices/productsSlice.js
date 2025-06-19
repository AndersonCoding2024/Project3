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
        product.stock = Math.max(0, product.stock - quantity); // Ensure stock is not negative
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
        state.loading = false;
        state.items = action.payload.map(item => ({
          ...item,
          image: item.image || `/images/${item.id}.webp` // Fallback if there is no image
        }));
        state.lastFetch = Date.now();
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
export const selectAllProducts = (state) => state.products.items.filter(p => p.stock > 0);
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;
export const selectProductById = (id) => (state) => 
  state.products.items.find(product => product.id === id);