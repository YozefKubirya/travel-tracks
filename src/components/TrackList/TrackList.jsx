
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations.js";
import { selectCampers,selectCurrentPage, selectHasNextPage, selectItemsPerPage } 
from "../../redux/campers/selectors.js";
import { incrementPage } from '../../redux/campers/slice.js'
import css from './TrackList.module.css';
import { selectFilters, selectForm, selectLocation } from "../../redux/filters/selector.js";
import { Track} from "../Track/Track.jsx";
import { filter } from "../../utils/filter.js";

import { selectIsLoading } from "../../redux/campers/selectors.js";
import { Loader } from "../Loader/Loader.jsx";
import { resetPage } from "../../redux/campers/slice.js";
import { useEffect } from "react";
import { selectUserFilters } from "../../redux/filters/selector.js";
export const TrackList = () => {
   const dispatch = useDispatch();
   const page = useSelector(selectCurrentPage);
   const limit = useSelector(selectItemsPerPage);
   const hasNextPage = useSelector(selectHasNextPage);
   const campers = useSelector(selectCampers);
   const equipment = useSelector(selectFilters);
   const form = useSelector(selectForm);
   const location = useSelector(selectLocation);
   const isLoading = useSelector(selectIsLoading);
   useEffect(() => {    
    dispatch(resetPage());
  
    const filters ={
       page: 1, 
       limit,       
       form,
       location,
       equipment 
    };
     
    dispatch(fetchCampers(filters)); 
 }, [dispatch, limit,form,location, equipment,]);

 const handleLoadMore = () => {
    const nextPage = page + 1;  
    dispatch(incrementPage());

    const filters = {
      page: nextPage,
      limit,
      form,
      location,
      equipment
   } 

    dispatch(fetchCampers(filters));
 };
  

  if(campers.length === 0 ){
   return <p className={css.oppsText}>Opps , something went wrong, please reload your page</p>;
} 
   return(
      <>
   
  <div className={css.listContainer}>
  <ul className={css.cardList}>
          {campers.map((camper) => (
            <li key={camper.id} className={css.card}>
              <Track camper={camper} />    
            </li>
          ))}
          </ul>
        
          {isLoading && <Loader />}
          {hasNextPage &&  <button onClick={handleLoadMore } className={css.loadMoreBtn}>Load More</button>}
  </div>
   
          
      </>
   )
}
 