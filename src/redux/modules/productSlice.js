import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../network/request";

export const getBestProducts = createAsyncThunk(
    "GET_BEST_PRODUCTS",
    async () => {
        const res = await instance.get(`/api/main`);
        // const res = await instance.get(`/products`); // 임시 🐥
        return res.data.isSuccess ? res.data.data : res.data.error;
    }
);

export const getProducts = createAsyncThunk("GET_PRODUCTS", async () => {
    //   const res = await instance.get(`/api/main/products`);
    const res = await instance.get(`/products`); // 임시 🐥
    return res.data.isSuccess ? res.data.data : res.data.error;
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        bestProducts: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBestProducts.fulfilled, (state, action) => {
            state.bestProducts = action.payload;
        });
    },
});

export default productSlice.reducer;
