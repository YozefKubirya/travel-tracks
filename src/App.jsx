
import "./App.css";
import { CatalogPage } from "./pages/CatalogPage";
import { Routes,Route, NavLink } from "react-router-dom";
import { FavoritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";
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
      <Route path="/favorites" element={<FavoritesPage></FavoritesPage>}/>
    </Routes>
      
    </>
  );
}

export default App;


