import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../network/request";

export const getBestProducts = createAsyncThunk(
  "GET_BEST_PRODUCTS",
  async () => {
    const res = await instance.get(`/api/main`);
    // const res = await instance.get(`/products`); // 임시 🐥
    console.log("best product > ", res.data);
    return res.data.isSuccess ? res.data.data : res.data.error;
  }
);

export const getProducts = createAsyncThunk("GET_PRODUCTS", async () => {
  const res = await instance.get(`/api/main/products`);
  // const res = await instance.get(`/products`); // 임시 🐥
  return res.data.isSuccess ? res.data.data : res.data.error;
});

export const addCart = createAsyncThunk("ADD_CART", async (productId) => {
  const res = await instance.post(`/api/auth/cart, productId`);
  // const res = await instance.post(`/cart`, productId, {
  // headers: {
  //   Authorization: `${localStorage.getItem("Authorization")}`,
  //   "Refresh-Token": `${localStorage.getItem("refreshToken")}`,
  // },
  // }); // 임시 🐥
  return res.data.isSuccess;
});

export const deleteCart = createAsyncThunk("DELETE_CART", async (productId) => {
  const res = await instance.delete(`/api/auth/mycart/${productId}`);
  // const res = await instance.delete(`/cart/${productId}`, {
  // headers: {
  //   Authorization: `${localStorage.getItem("Authorization")}`,
  //   "Refresh-Token": `${localStorage.getItem("refreshToken")}`,
  // },
  // }); // 임시 🐥
  return res.data.isSuccess;
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
      console.log("action.payload :>> ", action.payload);
      state.bestProducts = action.payload;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.Products = action.payload;
    });
  },
});

export default productSlice.reducer;
