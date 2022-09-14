import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../network/request";

export const getBestProducts = createAsyncThunk(
  "GET_BEST_PRODUCTS",
  async () => {
    const res = await instance.get("/api/main");
    return res.data.success ? res.data.data : res.data.error;
  }
);

export const getProducts = createAsyncThunk("GET_PRODUCTS", async () => {
  const res = await instance.get(`/api/main/products`);
  return res.data.success ? res.data.data : res.data.error;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    bestProducts: [],
    Products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBestProducts.fulfilled, (state, action) => {
      state.bestProducts = action.payload;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.Products = action.payload;
    });
  },
});

export default productSlice.reducer;
