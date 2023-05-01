import { createSlice } from "@reduxjs/toolkit";

export const itemCount = createSlice({
  name: "itemCount",
  initialState: 2,
  reducers: {
    addItemCount(state) {
      return state + 1;
    },
  },
});

export const { addItemCount } = itemCount.actions;
