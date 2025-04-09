import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations.js";
import {   selectItemsPerPage } from "../../redux/campers/selectors.js";
import {resetPage} from '../../redux/campers/slice.js'
import { TrackList } from "../../components/TrackList/TrackList.jsx";
import { selectFilters, selectForm, selectLocation } from "../../redux/filters/selector.js";
import { CatalogForm } from "../../components/CatalogForm/CatalogForm.jsx";
import { filter } from "../../utils/filter.js";
import css from './CatalogPage.module.css'
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
      <div className={css.mainWraper}>
      <div className={css.container}>
      <CatalogForm/>
      <TrackList />
      </div>
      </div>
      

      </>
   );
      
   
}
export default CatalogPage;