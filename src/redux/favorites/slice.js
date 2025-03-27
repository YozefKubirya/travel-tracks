import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items:[]
};
const favoriteSlice = createSlice({
   name:'favorites',
   initialState,
   reducers: {
      toggleFavorite(state, action){
         const camperId = action.payload;
         if(state.items.includes(camperId)){
            state.items = state.items.filter(id=> id!=camperId)
         }else{
            state.items.push(camperId)
         }

      }
   }
});
export const {toggleFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;