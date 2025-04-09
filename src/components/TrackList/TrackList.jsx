
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
export const TrackList = () => {
   const dispatch = useDispatch();
   const page = useSelector(selectCurrentPage);
   const limit = useSelector(selectItemsPerPage);
   const hasNextPage = useSelector(selectHasNextPage);
   const campers = useSelector(selectCampers);
   const equipment = useSelector(selectFilters);
   const form = useSelector(selectForm);
   const location = useSelector(selectLocation);
   const isLoading = useSelector(selectIsLoading)
  
  const handleLoadMore = () => {
   dispatch(incrementPage());
    const filters = filter({
      page: page + 1,
      limit,
      equipment,  
      form,
      location  
    });
    dispatch(fetchCampers(filters));
   
  };

  if(campers.length === 0 ){
   return <p>No results</p>;
}
 
   return(
      <>
   
   
   <ul className={css.cardList}>
          {campers.map((camper) => (
            <li key={camper.id} className={css.card}>
              <Track camper={camper} />    
            </li>
          ))}
        </ul>
        {isLoading && <Loader />}
        {hasNextPage &&  <button onClick={handleLoadMore } className={css.loadMoreBtn}>Load More</button>}
       

      </>
   )
}
