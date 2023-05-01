import { configureStore } from "@reduxjs/toolkit";
import { data } from "./store/dataSlice";
import { itemCount } from "store/ItemCountSlice";

export default configureStore({
  reducer: {
    data: data.reducer,
    itemCount: itemCount.reducer,
  },
});
