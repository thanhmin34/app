import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const initialState = {
  value: items,
};

export const CartItemsSlide = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const duplicate = state.value.filter((e) => e.slug === newItem.slug);

      if (duplicate.length > 0) {
        state.value = state.value.filter((e) => e.slug !== newItem.slug);
        state.value = [
          ...state.value,
          {
            id: duplicate[0].id,
            slug: newItem.slug,
            image: newItem.image,
            price: newItem.price,
            title: newItem.title,

            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...action.payload,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
      console.log(state.value);
    },
    updateItem: (state, action) => {
      const newItem = action.payload;
      const item = state.value.filter((e) => e.slug === newItem.slug);
      if (item.length > 0) {
        state.value = state.value.filter((e) => e.slug !== newItem.slug);
        state.value = [
          ...state.value,
          {
            id: item[0].id,
            slug: newItem.slug,
            image: newItem.image,
            title: newItem.title,
            price: newItem.price,
            quantity: newItem.quantity,
          },
        ];
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },
    removeItem: (state, action) => {
      const item = action.payload;
      state.value = state.value.filter((e) => e.slug !== item.slug);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },
  },
});

// const findItem = (arr, item) => arr.filter((e) => e.slug === item.slug);

// const delItem = (arr, item) => arr.filter((e) => e.slug !== item.slug);

// const sortItems = (arr) =>
//   arr.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
export const { addToCart, updateItem, removeItem } = CartItemsSlide.actions;
export default CartItemsSlide.reducer;
