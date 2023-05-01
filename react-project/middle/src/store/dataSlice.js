import { createSlice } from "@reduxjs/toolkit";

export const data = createSlice({
  name: "data",
  initialState: [
    {
      id: 0,
      title: "Car",
      content: "Super Car",
      price: 50000000,
      imageSrc: process.env.PUBLIC_URL + "/car.png",
    },
    {
      id: 1,
      title: "Soda",
      content: "Super Soda",
      price: 3000,
      imageSrc: process.env.PUBLIC_URL + "/soda.png",
    },
    {
      id: 2,
      title: "Coffee",
      content: "Super Coffee",
      price: 4500,
      imageSrc: process.env.PUBLIC_URL + "/coffee.png",
    },
  ],
  reducers: {
    addData(state, data) {
      return [...state, ...data.payload];
    },
  },
});

export const { addData } = data.actions;
