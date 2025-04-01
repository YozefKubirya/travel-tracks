import css from '../TrackList/TrackList.module.css';
import { BsWind, BsCupHot, BsMap, BsSuitHeart} from "react-icons/bs";
import { LiaSitemapSolid } from "react-icons/lia";
import {  FaStar } from "react-icons/fa";


import { FaGasPump } from "react-icons/fa6";
import { useDispatch, useSelector} from 'react-redux';
import { toggleFavorite } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import { NavLink, useLocation } from 'react-router-dom';
import { EquipmentList } from '../EquipmentList/EquipmentList';
export const Track = ({camper}) => {

const dispatch = useDispatch();
const favorites = useSelector(selectFavorites);
const isFavorite = favorites.includes(camper.id);;
const located = useLocation();

const handleClick = () => {
   dispatch(toggleFavorite(camper.id));
}

   return(
      <>
      <div className={css.cardImgContainer}>
                  <img src={camper.gallery[0].thumb} alt="thumb-image" className={css.cardImg}/>
                  </div>
                  <div className={css.cardContent}>
                     <div className={css.camperNameContainer}>
                     <h2 className={css.camperName}>{camper.name}</h2>
                     <p className={css.camperPrice}>
                     €{camper.price}.00
                     </p>
                     <button className={css.heartBtn} onClick={handleClick}>
                        { isFavorite ? ( <BsSuitHeart className={css.heartActiveIcon} /> ) : (<BsSuitHeart className={css.heartIcon}/>) }                        
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
            
               <EquipmentList camper={camper}/>
             
              
               <NavLink to={`/catalog/${camper.id}`} state={located} >
               <button className={css.showMoreBtn} type="button">
               Show More
               </button>   
               </NavLink>     
              </div>
      </>
   )
}
