import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   equipment:{
      AC:false,
      automatic:false,
      kitchen:false,
      TV:false,
      bathroom:false,
   },
   location:'',
   form:''}

   const filterSlice = createSlice({
      name: 'filters',
      initialState,
      reducers: {
        toggleFilter(state, action) {
         state.equipment = action.payload; 
        },
        setLocation(state, action) {
          state.location = action.payload;
        },
        setForm(state, action) {
          state.form = action.payload;
        },
      },
    });
    
    export const { setLocation, setForm, toggleFilter } = filterSlice.actions;


export default filterSlice.reducer;
