import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/carSlice/carSlice"
//what reducer you have

export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
