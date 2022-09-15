import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./modules/productSlice";
import detailSlice from "./modules/detailSlice";
import cartSlice from "./modules/cartSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    detail: detailSlice,
    cart: cartSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
