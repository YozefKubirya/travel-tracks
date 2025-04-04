import { Outlet,useLocation } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";
import { selectItemById } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {  FaStar } from "react-icons/fa";
import {  BsMap} from "react-icons/bs";
import css from './CamperPage.module.css';
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { BookingForm } from "../../components/BookingForm/BookingForm";
import { selectIsLoading } from "../../redux/campers/selectors";
import { Loader } from "../../components/Loader/Loader";

const getClass = (props) => {
   return clsx(css.containerLink, props.isActive && css.active)
}
 const CamperPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {id} = useParams();
  const backLinkHref = location.state ?? "/catalog";
  const camper = useSelector(selectItemById);
  const isLoading = useSelector(selectIsLoading)
  
  useEffect(()=>{
   dispatch(fetchCamperById(id))
  },[id,dispatch]);
  if (!camper) {
   return <p>Loading camper details...</p>;
 }
  
   return (
      <>
      {isLoading && <Loader/>}
      <BackLink to={backLinkHref}>Back to catalog</BackLink>
      <div>
      <h2 className={css.camperPageTitle}>{camper.name}</h2>
      <div className={css.camperSubContainer}>
         <p>
            <FaStar className={css.ratingIcon}/>
            {camper.rating}({camper.reviews.length} Reviews)
            </p>
            <p className={css.campertextLocation}>
               <BsMap/> {camper.location}
               </p>
               </div>
               <p className={css.camperPrice}>
                  €{camper.price}.00
               </p>
               <ul className={css.imageList}>
                  {camper.gallery.map((image)=>
                  <li key={image.thumb}><img src={image.original} alt="image" className={css.imageCard}/></li>)
                  }
               </ul>
               <p className={css.camperDescription}>{camper.description}</p>
      </div>
      
      <div className={css.container}>
         <NavLink to='features' className={getClass}>Features</NavLink>
         <NavLink to='reviews' className={getClass}>Reviews</NavLink>
      </div>
      <div className={css.outLetContainer}>
      <Outlet />
      <BookingForm/> 
      </div>
      
        
         
      
      
      </>
      
   )
}

export default CamperPage;