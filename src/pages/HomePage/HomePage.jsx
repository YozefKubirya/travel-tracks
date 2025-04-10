 import { Link } from 'react-router-dom';
 import css from './HomePage.module.css'
 const HomePage = () => {
   return(
      <>
      <section className={css.hero}>
      <div className={css.homeContainer}>
         <h1 className={css.heroTitle}>Campers of your dreams</h1>
         <p className={css.heroText}>You can find everything you want in our catalog</p>
         <Link to='/catalog'>
         <button className={css.heroBtn}>View Now</button>
         </Link>   
      </div>
      </section>
      </>
   )
}
export default HomePage;