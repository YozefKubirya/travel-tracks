
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations.js";
import { selectCampers,selectCurrentPage, selectHasNextPage, selectItemsPerPage } 
from "../../redux/campers/selectors.js";
import { incrementPage } from '../../redux/campers/slice.js'
import css from './TrackList.module.css';
import { selectUserFilters} from "../../redux/filters/selector.js";
import { Track} from "../Track/Track.jsx";
import { selectIsLoading } from "../../redux/campers/selectors.js";
import { Loader } from "../Loader/Loader.jsx";
import { useEffect } from "react";
import { resetPage } from "../../redux/campers/slice.js";
export const TrackList = () => {
   const dispatch = useDispatch();
   const page = useSelector(selectCurrentPage);
   const limit = useSelector(selectItemsPerPage);
   const hasNextPage = useSelector(selectHasNextPage);
   const campers = useSelector(selectCampers);
   const isLoading = useSelector(selectIsLoading);
   const filtersAll = useSelector(selectUserFilters);
   useEffect(() => {
  dispatch(resetPage());
}, [dispatch, filtersAll]);

      useEffect(() => {    
    
  
    const filters = {
       page, 
       limit,       
       ...filtersAll
    };
     
    dispatch(fetchCampers(filters)); 
 }, [dispatch, limit, filtersAll, page]);
   
 const handleLoadMore = () => {
   // const nextPage = page + 1;
   // const filters = {
   //    page: nextPage,
   //    limit,
   //    ...filtersAll
   // }
   // dispatch(fetchCampers(filters));
   dispatch(incrementPage());

   
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
 




 //  const nextPage = page + 1;  

 //  const filters = {
   //    page: nextPage,
   //    limit,
   //    form,
   //    location,
   //    equipment
   // } 

   //  dispatch(fetchCampers(filters));