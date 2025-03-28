import css from '../TrackList/TrackList.module.css';
import { BsWind, BsCupHot, BsMap, BsSuitHeart} from "react-icons/bs";
import { LiaSitemapSolid } from "react-icons/lia";
import {  FaStar } from "react-icons/fa";


import { FaGasPump } from "react-icons/fa6";
import { useDispatch, useSelector} from 'react-redux';
import { toggleFavorite } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import { Link, useLocation } from 'react-router-dom';
export const Track = ({id,gallery,name,price,rating,reviews,location,description,transmission,engine,AC,kitchen}) => {

const dispatch = useDispatch();
const favorites = useSelector(selectFavorites);
const isFavorite = favorites.includes(id);;
const located = useLocation();

const handleClick = () => {
   dispatch(toggleFavorite(id));
}
   return(
      <>
      <div className={css.cardImgContainer}>
                  <img src={gallery[0].thumb} alt="thumb-image" className={css.cardImg}/>
                  </div>
                  <div className={css.cardContent}>
                     <div className={css.camperNameContainer}>
                     <h2 className={css.camperName}>{name}</h2>
                     <p className={css.camperPrice}>
                     €{price}.00
                     </p>
                     <button className={css.heartBtn} onClick={handleClick}>
                        { isFavorite ? ( <BsSuitHeart className={css.heartActiveIcon} /> ) : (<BsSuitHeart className={css.heartIcon}/>) }                        
                     </button>   
                     </div>
                     <div className={css.camperSubContainer}>
                     <p>
                  <FaStar className={css.ratingIcon}/> 
                  {rating}({reviews.length} Reviews)
                     </p>
                     <p className={css.campertextLocation}> 
                        <BsMap/> {location}
                     </p>
                     </div>
                  
                  
              
              <p className={css.cardDescription}>{description}</p>
              <div className={css.featureContainer}>
              <p className={css.featureItem}><LiaSitemapSolid/> {transmission.charAt(0).toUpperCase() + transmission.slice(1) }</p>
              <p className={css.featureItem}><FaGasPump/> {engine}</p>
              <p className={css.featureItem}><BsWind/> {AC}AC</p>
              <p className={css.featureItem}><BsCupHot/> {kitchen}kitchen</p>
              </div> 
               <Link to={`/catalog/${id}`} state={located} >
               <button className={css.showMoreBtn} type="button">
               Show More
               </button>   
               </Link>     
              </div>
      </>
   )
}