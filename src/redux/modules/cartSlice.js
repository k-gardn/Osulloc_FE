import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../network/request";

//TODO: 나의 장바구니 GET
export const getcart = createAsyncThunk("GET_CART", async (_, thunkAPI) => {
  console.log("cart get 시작");
  try {
    const res = await instance.get("/api/auth/mycart");
    // const res = await instance.get(`/detail`);
    console.log("cart get 성공", res.data.data);
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
    const sendData = { productId: payload.productId, count: payload.count };
    try {
      const res = await instance.put("/api/auth/mycart", sendData);
      return thunkAPI.fulfillWithValue(
        res.data.success ? payload : res.data.error
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
      const res = await instance.delete(`/api/auth/mycart`);
      console.log("res.data????? delete all :>> ", res.data);
      return res.data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 메인화면에서 장바구니 추가 🐥
export const addCart = createAsyncThunk(
  "ADD_CART",
  async (productId, thunkAPI) => {
    const res = await instance.post(`/api/auth/cart`, productId);
    return thunkAPI.fulfillWithValue(res.data.success);
  }
);

// 메인화면에서 장바구니 삭제 🐥
export const deleteCart = createAsyncThunk(
  "DELETE_CART",
  async (productId, thunkAPI) => {
    const res = await instance.delete(`/api/auth/mycart/${productId}`);
    return thunkAPI.fulfillWithValue(res.data.success);
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], myCartNum: 0 },
  reducers: {},
  extraReducers: {
    //TODO: 나의 장바구니 GET
    [getcart.fulfilled]: (state, action) => {
      // console.log("get cart state>>", action);
      state.cart = action.payload;
      state.myCartNum = action.payload.length;
    },

    //TODO: 제품 수량 변경 PUT
    [cartCountChange.fulfilled]: (state, action) => {
      state.cart = state.cart.map((cart) =>
        cart.productId === action.payload.productId
          ? { ...action.payload }
          : cart
      );
      console.log("put cart state>>", action);
      // console.log("put cart state>>", state.cart);
    },

    //TODO: 장바구니 해당 제품 삭제 DELETE(payload: product_id)
    [deletecartproduct.fulfilled]: (state, action) => {
      state.cart = state.cart.filter(
        (cart) => cart.productId !== action.payload
      );
      state.myCartNum -= 1;
    },

    //TODO: 내 장바구니 전체 삭제   DELETE
    [deletecarttotal.fulfilled]: (state, action) => {
      state.cart = [];
      state.myCartNum = 0;
    },

    [addCart.fulfilled]: (state, action) => {
      if (action.payload) {
        state.myCartNum += 1;
      }
    },

    [deleteCart.fulfilled]: (state, action) => {
      if (action.payload) {
        state.myCartNum -= 1;
      }
    },
  },
});

export default cartSlice.reducer;
