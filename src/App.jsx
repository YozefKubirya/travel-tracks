
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation.jsx";
// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage.jsx"));
const CamperPage = lazy(() => import("./pages/camperPage/CamperPage.jsx"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage.jsx"));

// Lazy-loaded nested components
const Features = lazy(() => import("./components/Features/Features.jsx"));
const Reviews = lazy(() => import("./components/Reviews/Reviews.jsx"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div>
      <Navigation/> 

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />}>
            <Route index element={<Features />} />
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
