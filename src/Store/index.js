import { configureStore } from "@reduxjs/toolkit";
import { carSlice } from "./carSlice";
const store = configureStore({
  reducer: { [carSlice.reducerPath]: carSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carSlice.middleware),
});

export default store;
