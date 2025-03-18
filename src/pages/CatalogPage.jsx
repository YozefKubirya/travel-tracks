import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/operations";
import {   selectItemsPerPage } from "../redux/campers/selectors.js";
import {resetPage} from '../redux/campers/slice'
import { TrackList } from "../components/TrackList";
import { selectFilters, selectForm, selectLocation } from "../redux/filters/selector.js";
export const CatalogPage = () => {
   const dispatch = useDispatch();
   const limit = useSelector(selectItemsPerPage)
   const equipment = useSelector(selectFilters);
   const form = useSelector(selectForm);
   const location = useSelector(selectLocation);
   
   useEffect(() => {
      dispatch(resetPage());
      const filters = {
         page: 1,
         limit,
         form,
         location,
         equipment
       };
     
      
      dispatch(fetchCampers(filters));
    }, [dispatch,limit,equipment,form,location ]);

   return(
      <>
      <TrackList/>

      </>
   );
      
   
}