import { useSelector } from "react-redux"
import { selectItemById } from "../../redux/campers/selectors";
import css from './Reviews.module.css'
import {  FaStar } from "react-icons/fa";
 const Reviews = () => {
   const camper = useSelector(selectItemById);
   const reviewsList = camper.reviews;
   
   
   return (
      <>
      <div>
      <ul className={css.reviewsContainer}>
      {reviewsList ? reviewsList.map((review,index)=>
       <li key={index}>
         <div className={css.spanContainer}>
         <span className={css.span}>{review.reviewer_name[0]}</span>
         <div className={css.ratingContainer}>   
         <p>{review.reviewer_name}</p>
         <ul className={css.ratingList}>
            {[...Array(5)].map((_, index) => (
               <li key={index}>
                  <FaStar
                  className={index < review.reviewer_rating ? css.fill : css.empty}/>
               </li>
            ))}
            </ul>
            </div>
            </div>
            <p className={css.reviewComment}>{review.comment}</p>
            </li>) : <p>Oupsss, There is no reviews</p>}
            </ul>
            </div>  
      </>
   )
}
 export default Reviews;
 