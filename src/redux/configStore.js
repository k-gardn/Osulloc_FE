import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./modules/productSlice";
import detailSlice from "./modules/detailSlice";

const store = configureStore({
    reducer: {
        product: productSlice,
        detail: detailSlice,
    },
});
export default store;
