import { NavLink, } from "react-router-dom";
import { Link } from "react-router-dom";
import css from './Navigation.module.css';
import logo from '../../pictures/TravelTrucks.svg'
const Navigation = () => {
return(<>
<header className={css.headerContainer}>
<Link to='/' className={css.logoLink}>
<img src={logo} alt="logo" />
</Link>
<nav className={css.navigation}>
   <NavLink to="/" className={css.link}>Home</NavLink>
   <NavLink to="/catalog" className={css.link}>Catalog</NavLink>
   <NavLink to="/favorites" className={css.link}>Favorites</NavLink>
</nav>
</header>

</>)
}
export default Navigation;