import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   
     equipment:
     { AC:false,
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
        const {name, checked} = action.payload;
        state.equipment[name] = checked;
        },
        setLocation(state, action) {
          state.location = action.payload;
        },
        setForm(state, action) {
          state.form = action.payload;
        },
        resetFilters(state) {
          state.equipment = initialState.equipment;
          state.location = '';
          state.form = '';
        },
      },
    });
    
    export const { setLocation, setForm, toggleFilter , resetFilters} = filterSlice.actions;


export default filterSlice.reducer;



