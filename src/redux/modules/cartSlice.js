import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../network/request";

//TODO: 나의 장바구니 GET
export const getcart = createAsyncThunk("GET_CART", async (thunkAPI) => {
    console.log("cart get 시작");
    try {
        const res = await instance.get(`
            /api/auth/mycart`);
        // const res = await instance.get(`/detail`);
        console.log("cart get 성공", res.data);
        return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
//TODO: 제품 수량 변경 PUT

//TODO: 장바구니 해당 제품 삭제 DELETE

//TODO: 내 장바구니 전체 삭제   DELETE

const cartSlice = createSlice({
    name: "cart",
    initialState: { cart: [] },
    reducers: {},
    extraReducers: {
        //TODO: 나의 장바구니 GET
        [getcart.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cart = action.payload.data;
            console.log(action.payload.data);
        },
    },
});

export default cartSlice.reducer;
