import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slicer/cartSlice";

export const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
