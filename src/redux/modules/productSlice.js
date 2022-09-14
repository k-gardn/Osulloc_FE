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

export const getCartList = createAsyncThunk(
  "GET_CARTLIST",
  async (productId) => {
    const res = await instance.get("/api/auth/mycart");
    return res.data.success ? res.data.data : res.data.error;
  }
);

export const addCart = createAsyncThunk("ADD_CART", async (productId) => {
  console.log("productId :>> ", productId);
  const res = await instance.post(`/api/auth/cart`, productId);
  console.log("res.data :>> ", res.data);
  return res.data.success;
});

export const deleteCart = createAsyncThunk("DELETE_CART", async (productId) => {
  const res = await instance.delete(`/api/auth/mycart/${productId}`);
  return res.data.success;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    bestProducts: [],
    Products: [],
    myCartNum: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBestProducts.fulfilled, (state, action) => {
      state.bestProducts = action.payload;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.Products = action.payload;
    });
    builder.addCase(getCartList.fulfilled, (state, action) => {
      state.myCartNum = action.payload.length;
    });
    builder.addCase(addCart.fulfilled, (state, action) => {
      if (action.payload) {
        state.myCartNum += 1;
      }
    });
    builder.addCase(deleteCart.fulfilled, (state, action) => {
      if (action.payload) {
        state.myCartNum -= 1;
      }
    });
  },
});

export default productSlice.reducer;
