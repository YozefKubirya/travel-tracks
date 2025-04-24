
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

export const TrackList = () => {
   const dispatch = useDispatch();
   const page = useSelector(selectCurrentPage);
   const limit = useSelector(selectItemsPerPage);
   const hasNextPage = useSelector(selectHasNextPage);
   const campers = useSelector(selectCampers);
   const isLoading = useSelector(selectIsLoading);
   const filters = useSelector(selectUserFilters);
   
   useEffect(() => {
      dispatch(fetchCampers({
        page,
        limit,
        ...filters,
      }));
    }, [dispatch, page, limit, filters]);
  



 const handleLoadMore = () => {
  
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
 

//    useEffect(() => {    
//     dispatch(resetPage());
  
//     const filters ={
//        page: 1, 
//        limit,       
//        form,
//        location,
//        equipment 
//     };
     
//     dispatch(fetchCampers(filters)); 
//  }, [dispatch, limit,form,location, equipment,]);


 //  const nextPage = page + 1;  

 //  const filters = {
   //    page: nextPage,
   //    limit,
   //    form,
   //    location,
   //    equipment
   // } 

   //  dispatch(fetchCampers(filters));