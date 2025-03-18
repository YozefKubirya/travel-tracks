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
   name:'filters',
   initialState,
   reducers:{
      toggleFilter(state,action){
         const {name, checked} = action.payload;
         state.equipment[name] = checked;

      },
      setLocation(state,action){
         state.location = action.payload;
      },
      setForm(state,action){
         state.form = action.payload;

      }
   }
  
})

export const { setLocation , setForm,toggleFilter} = filterSlice.actions;


export const setFilters = (filters) => (dispatch) => {
   dispatch(setLocation(filters.location)); 
   dispatch(setForm(filters.form)); 
 
   Object.keys(filters.equipment).forEach((name) => {
     dispatch(toggleFilter({ name, checked: filters.equipment[name] })); 
   });
 };

export default filterSlice.reducer;
