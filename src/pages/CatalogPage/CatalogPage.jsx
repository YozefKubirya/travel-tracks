import { TrackList } from "../../components/TrackList/TrackList.jsx";
import { CatalogForm } from "../../components/CatalogForm/CatalogForm.jsx";
import css from './CatalogPage.module.css'
 const CatalogPage = () => {
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