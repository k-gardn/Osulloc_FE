import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../network/request";

//TODO: 나의 장바구니 GET
export const getcart = createAsyncThunk("GET_CART", async (_, thunkAPI) => {
  // console.log("cart get 시작");
  try {
    const res = await instance.get("/api/auth/mycart");
    // const res = await instance.get(`/detail`);
    // console.log("cart get 성공", res.data.data);
    return thunkAPI.fulfillWithValue(
      res.data.success ? res.data.data : res.data.error
    );
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

//TODO: 제품 수량 변경 PUT ( payload:'producId', 'count' )
export const cartCountChange = createAsyncThunk(
  "PUT_CART_CHANGE",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.put("/api/auth/mycart", payload);
      console.log("put 성공", res);
      return thunkAPI.fulfillWithValue(
        res.data.success ? res.data.data : res.data.error
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//TODO: 장바구니 해당 제품 삭제 DELETE(payload: product_id)
export const deletecartproduct = createAsyncThunk(
  "DELETE_CART_PRODUCT",
  async (product_id, thunkAPI) => {
    console.log("삭제 시작");
    try {
      const res = await instance.delete(`/api/auth/mycart/${product_id}`);
      console.log("삭제 성공");

      return thunkAPI.fulfillWithValue(
        res.data.success ? product_id : res.data.error
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//TODO: 내 장바구니 전체 삭제   DELETE
export const deletecarttotal = createAsyncThunk(
  "DELETE_CART_TOTAL",
  async (thunkAPI) => {
    try {
      const res = await instance.delete(`/api/auth/mycart/`);
      return thunkAPI.fulfillWithValue(
        res.data.success ? res.data : res.data.error
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {},
  extraReducers: {
    //TODO: 나의 장바구니 GET
    [getcart.fulfilled]: (state, action) => {
      // console.log("get cart state>>", action);
      state.cart = action.payload;
    },

    //TODO: 제품 수량 변경 PUT
    [cartCountChange.fulfilled]: (state, action) => {
      state.cart = state.cart.map((cart) =>
        cart.productId === action.payload.productId
          ? { ...action.payload }
          : cart
      );
      // console.log("put cart state>>", action);
      // console.log("put cart state>>", state.cart);
    },

    //TODO: 장바구니 해당 제품 삭제 DELETE(payload: product_id)
    [deletecartproduct.fulfilled]: (state, action) => {
      state.cart = state.cart.filter(
        (cart) => cart.productId !== action.payload
      );
    },

    //TODO: 내 장바구니 전체 삭제   DELETE
    [deletecartproduct.fulfilled]: (state, action) => {
      state.cart = state.cart.filter(
        (cart) => cart.productId !== action.payload
      );
    },
  },
});

export default cartSlice.reducer;
