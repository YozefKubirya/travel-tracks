import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/favorites/selectors";
import { Track } from "../components/Track/Track";
import { selectCampers } from "../redux/campers/selectors";
import css from '../components/TrackList/TrackList.module.css';
import { selectIsLoading } from "../redux/campers/selectors";
import { Loader } from "../components/Loader/Loader";
const FavoritesPage = () => {
   const campers = useSelector(selectCampers)
   
   const favoritesCampers = useSelector(selectFavorites);

   const filteredFavorites = campers.filter(camper => favoritesCampers.includes(camper.id));

   const isLoading = useSelector(selectIsLoading)
   

   
   return(
      <>
      {isLoading && <Loader/>}
      {filteredFavorites ? <div>
         <p>Favorites campers</p>
      <ul className={css.cardList}>
         {filteredFavorites.map((camper)=>( 
         <li
         key={camper.id} className={css.card}>
            <Track camper={camper} />
         </li>))}
      </ul>
      </div>  : <p>please wait for your favorites...</p>}
      </>
   )
}

export default FavoritesPage;