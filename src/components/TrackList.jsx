
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../src/redux/campers/operations.js";
import { selectCampers,selectCurrentPage, selectHasNextPage, selectItemsPerPage } 
from "../redux/campers/selectors";
import { incrementPage } from '../redux/campers/slice'
import { Formik, Field, Form } from 'formik';
import { useId } from "react";
import css from './TrackList.module.css';
import { selectFilters, selectForm, selectLocation } from "../redux/filters/selector.js";
import { setFilters, } from "../redux/filters/slice.js";
import { formTypeArray } from "../utils/filters/formTypeFilter.js";
import { BsWind, BsCupHot, BsMap, BsSuitHeart} from "react-icons/bs";
import { LiaSitemapSolid } from "react-icons/lia";
import { FaTv, FaStar } from "react-icons/fa";
import { PiShower } from "react-icons/pi";

import { FaGasPump } from "react-icons/fa6";

const icons = {
   AC:BsWind,
   automatic:LiaSitemapSolid,
   kitchen:BsCupHot,
   TV:FaTv,
   bathroom: PiShower,
   gas:FaGasPump

}

export const TrackList = () => {
   const dispatch = useDispatch();
   const page = useSelector(selectCurrentPage);
   const limit = useSelector(selectItemsPerPage);
   const hasNextPage = useSelector(selectHasNextPage);
   const campers = useSelector(selectCampers);
   const nameId = useId();
   const equipment = useSelector(selectFilters);
   const form = useSelector(selectForm);
   const location = useSelector(selectLocation);
   

   const options = Object.keys(equipment);
   


   
  
  const handleLoadMore = () => {
   dispatch(incrementPage());
    const filters = {
      page: page + 1,
      limit,
      equipment,  
      form,
      location  
    };
    dispatch(fetchCampers(filters));
   
  };

  if(campers.length === 0 ){
   return <p>No results</p>;
}
 const selectedEquipment = Object.keys(equipment).filter(key => equipment[key]);
   return(
      <>
<div className={css.truckContainer}>
   <Formik initialValues={{
      location:'',
      equipment:selectedEquipment,
      form:""
   }} onSubmit={(values,actions) => {
     
      const formattedEquipment = {};
    options.forEach((item) => {
      formattedEquipment[item] = values.equipment.includes(item);
    });

    
    const filters = {
      ...values,
      equipment: formattedEquipment 
    };
      dispatch(setFilters(filters));
      dispatch(fetchCampers({ page: 1, limit, ...filters }));

      actions.resetForm();
   }}>
      <div>
         
      <Form className={css.filterForm}>
      
         <label htmlFor={nameId} className={css.formLabels}>Location</label>
         <div className={css.locationInputContainer}>
         <BsMap className={css.locationIcon}/>
         <Field type='text' name='location' id={nameId} className={css.locationInput} placeholder='City' />
         </div>
         
         
         
        
         <p className={css.formText}>Filters</p>
         <h2 className={css.formTitle}>Vehicle equipment</h2>
         
         <div className={css.equipmentGrid}>
         {options.map((item)=>{
            const Icon = icons[item];
            return(
               <label key={item} htmlFor={`${nameId}-${item}`} className={css.equipmentLabel}>
               <Field type='checkbox' name='equipment' value={item} id={`${nameId}-${item}`} className={css.typeBox}/>
               <div className={css.equipmentButton}>
               <Icon size={32}/>               
               {item.charAt(0).toUpperCase() + item.slice(1)}
               </div>
               
            </label>
            )
           
})}
         </div>
         
         <h2 className={css.formTitle}>Vehicle type</h2>
        <div className={css.equipmentGrid}>
         {formTypeArray.map(({name,label,icon})=>{
            const Icon = icon;
            return(
            <label key={name} htmlFor={`${nameId}-${name}`} className={css.equipmentLabel}>
            <Field type='radio' name='form' value={name} id={`${nameId}-${name}`} className={css.typeBox}/>
            <div className={css.equipmentButton}>
            <Icon size={32}/>
            {label}
            </div>
            
         </label>
            )
            
            
})}
        </div>
         
         <button type="submit" className={css.searchBtn}>Search</button>
      </Form>
      </div>
      
   </Formik>
   <div>
   <ul className={css.cardList}>
          {campers.map((camper) => (
            <li key={camper.id} className={css.card}>
                
                  <div className={css.cardImgContainer}>
                  <img src={camper.gallery[0].thumb} alt="thumb-image" className={css.cardImg}/>
                  </div>
                  <div className={css.cardContent}>
                     <div className={css.camperNameContainer}>
                     <h2 className={css.camperName}>{camper.name}</h2>
                     <p className={css.camperPrice}>
                     €{camper.price}.00
                     </p>
                     <button className={css.heartBtn}>
                        <BsSuitHeart className={css.heartIcon}/>
                     </button>   
                     </div>
                     <div className={css.camperSubContainer}>
                     <p>
                  <FaStar className={css.ratingIcon}/> 
                  {camper.rating}({camper.reviews.length} Reviews)
                     </p>
                     <p className={css.campertextLocation}> 
                        <BsMap/> {camper.location}
                     </p>
                     </div>
                  
                  
              
              <p className={css.cardDescription}>{camper.description}</p>

              <div className={css.featureContainer}>
              <p className={css.featureItem}><LiaSitemapSolid/> {camper.transmission.charAt(0).toUpperCase() + camper.transmission.slice(1) }</p>
              <p className={css.featureItem}><FaGasPump/> {camper.engine}</p>
              <p className={css.featureItem}><BsWind/> {camper.AC}AC</p>
              <p className={css.featureItem}><BsCupHot/> {camper.kitchen}kitchen</p>
              </div>
              <button className={css.showMoreBtn} type="button">Show More</button>  
              </div> 
             
              
             
                
            </li>
          ))}
        </ul>
        
        {hasNextPage &&  <button onClick={handleLoadMore } className={css.loadMoreBtn}>Load More</button>}
        </div>
   </div>
      </>
   )
}