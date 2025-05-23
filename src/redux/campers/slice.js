import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers,fetchCamperById } from "./operations.js";
const initialState = {
  items: [],
  itemById: null,
  isLoading: false,
  isError: null,
  page: 1,
  limit: 4,
  totalItems: 0,
  hasNextPage: false,
}
const calculateHasNextPage = (state) => {
   const totalPages = Math.ceil(state.totalItems / state.limit);
   state.hasNextPage = state.page < totalPages;
 };
 
 const campersSlice = createSlice({
   name:'campers',
   initialState,
   reducers:{
      clearSelectedCamper(state) {
         state.itemById = null;
       },
      resetPage(state) {
         state.page = 1;
       },
       incrementPage(state) {
         state.page += 1;
       },
   },
   extraReducers:(builder) => {
      builder.addCase(fetchCampers.pending, (state) => {
         state.isLoading = true;
         
       })
      .addCase(fetchCampers.fulfilled,(state,action)=>{
         console.log("Fetched campers:", action.payload.items);
         state.isLoading = false;
         // console.log(action.payload.total)
         if(state.page === 1){
            state.items = action.payload.items;
         }else{
            state.items = [...state.items, ...action.payload.items]

         }
         state.totalItems = action.payload.total;
         calculateHasNextPage(state);   
      })
      .addCase(fetchCampers.rejected,(state,action)=>{
         state.isLoading = false;
         state.isError = action.payload;
         state.items = [];
         state.totalItems = 0;
      })
      .addCase(fetchCamperById.pending, (state) => {
         state.isLoading = true;
         
       }) 
      .addCase(fetchCamperById.fulfilled, (state,action)=>{
         state.isLoading = false;
         console.log(action.payload);
         state.itemById = action.payload;
      })
      .addCase(fetchCamperById.rejected,(state,action)=>{
         state.isLoading = false;
         state.isError = action.payload;
         state.itemById = null;
      })
   }
});
export const {resetPage, incrementPage, clearSelectedCamper } = campersSlice.actions;
export default campersSlice.reducer;