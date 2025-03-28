
import "./App.css";
import { CatalogPage } from "./pages/CatalogPage";
import { Routes,Route, NavLink } from "react-router-dom";
import { FavoritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";
import { CamperPage } from "./pages/camperPage/CamperPage";
import { Features } from "./components/Features/Features";
import { Reviews } from "./components/Reviews/Reviews";
function App() {
  
 
  
  

  return (
    <>
    <div>
      <nav>
      <NavLink to='/'>Home</NavLink>
        <NavLink to='/catalog'>Catalog</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}/>
      <Route path="/catalog" element={<CatalogPage></CatalogPage>} />
      <Route path="/catalog/:id" element={<CamperPage />} >
      <Route path="features" element={<Features/>}/>
      <Route path="reviews" element={<Reviews/>}/>

      </Route>
      <Route path="/favorites" element={<FavoritesPage></FavoritesPage>}/>
    </Routes>
      
    </>
  );
}

export default App;


