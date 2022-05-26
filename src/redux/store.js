import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "./CartItemsSlide";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
