import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campers/operations";
import {   selectItemsPerPage } from "../redux/campers/selectors.js";
import {resetPage} from '../redux/campers/slice'
import { TrackList } from "../components/TrackList/TrackList.jsx";
import { selectFilters, selectForm, selectLocation } from "../redux/filters/selector.js";
import { filter } from "../utils/filter.js";

 const CatalogPage = () => {
   const dispatch = useDispatch();
   const limit = useSelector(selectItemsPerPage)
   const equipment = useSelector(selectFilters);
   const form = useSelector(selectForm);
   const location = useSelector(selectLocation);
   
   useEffect(() => {
      dispatch(resetPage());
      const filters = filter({
         page: 1,
         limit,
         form,
         location,
         equipment
       });
       
      dispatch(fetchCampers(filters));
    }, [dispatch,limit,equipment,form,location ]);

   return(
      <>
      <TrackList />

      </>
   );
      
   
}
export default CatalogPage;