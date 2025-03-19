/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// 👇 تحميل السلة من `localStorage`
const loadCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart
      ? JSON.parse(storedCart)
      : { items: [], totalQuantity: 0, totalAmount: 0 };
  }
  return { items: [], totalQuantity: 0, totalAmount: 0 };
};
// 👇 الحالة الأولية
const initialState = loadCartFromLocalStorage();
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ تحديث البيانات عند أي تعديل
    updateCartState: (state) => {
      state.totalQuantity = state.items.reduce(
        (acc: number, item: any) => acc + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (acc: number, item: any) => acc + item.quantity * item.price,
        0
      );
      localStorage.setItem("cart", JSON.stringify(state)); // حفظ البيانات في localStorage
    },
    addToCart: (state, action: PayloadAction<any>) => {
      const newItem = action.payload;
      const existingItem: any | undefined = state?.items?.find(
        (item: any) => item.name === newItem.name
      );

      if (!existingItem) {
        state?.items?.push({
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          url: newItem.url,
        });
      } else {
        existingItem.quantity++;
      }
      state.totalQuantity++;
      state.totalAmount += newItem.price;
      cartSlice.caseReducers.updateCartState(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      // console.log(name);
      // console.log(state);

      const existingItem: any | undefined = state.items.find(
        (item: any) => item.name == name
      );

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item: any) => item.name != name);
        } else {
          existingItem.quantity--;
        }
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
      }
      cartSlice.caseReducers.updateCartState(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      localStorage.removeItem("cart"); // مسح `localStorage`
    },
    // ✅ تحديث كمية المنتج مباشرة
    updateQuantity: (
      state,
      action: PayloadAction<{ name: string; quantity: number }>
    ) => {
      const item = state?.items?.find(
        (item: any) => item.name === action.payload.name
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
      state.totalQuantity = state.items.reduce(
        (acc: number, item: any) => acc + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (acc: number, item: any) => acc + item.quantity * item.price,
        0
      );
      cartSlice.caseReducers.updateCartState(state);
    },

    setCart: (state, action: PayloadAction<any>) => {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
      state.totalQuantity = action.payload.totalQuantity;
      cartSlice.caseReducers.updateCartState(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
