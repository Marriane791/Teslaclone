import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cars: ["Model S", "Model 3","Model X", "Model Y" ]
}
//Your reducers
const carSlice = createSlice({
     name:"car",
     initialState,
     reducers: {}//manipulate the state eg add a new car
})
export const selectCars = state => state.car.cars//gets the cars individually

export default carSlice.reducer