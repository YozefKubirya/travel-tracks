import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import { Track } from "../../components/Track/Track";
import { selectCampers } from "../../redux/campers/selectors";

import { selectIsLoading } from "../../redux/campers/selectors";
import { Loader } from "../../components/Loader/Loader";
import css from './FavoritesPage.module.css'
const FavoritesPage = () => {
   const campers = useSelector(selectCampers)
   
   const favoritesCampers = useSelector(selectFavorites);

   const filteredFavorites = campers.filter(camper => favoritesCampers.includes(camper.id));

   const isLoading = useSelector(selectIsLoading)
   

   
   return(
      <>
      <section className={css.favoritesSection}>
      {isLoading && <Loader/>}
      {filteredFavorites ? <div>
         <h2 className={css.favoritesTitle}>Favorites Campers</h2>
      <ul className={css.cardList}>
         {filteredFavorites.map((camper)=>( 
         <li
         key={camper.id} className={css.card}>
            <Track camper={camper} />
         </li>))}
      </ul>
      </div>  : <p>please wait for your favorites...</p>}
      </section>
      
      </>
   )
}

export default FavoritesPage;