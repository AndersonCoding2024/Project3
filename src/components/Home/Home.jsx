import { useDispatch } from 'react-redux';
import { setPage } from '../../store/slices/pageSlice';
import styles from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Welcome to ShopEase</h1>
        <p>Discover amazing products at great prices</p>
        <button 
          className={styles.ctaButton}
          onClick={() => dispatch(setPage('shop'))}
        >
          Shop Now
        </button>
      </section>
      
      <section className={styles.featured}>
        <h2>Featured Products</h2>
        <div className={styles.productGrid}>
          {/* You can add featured products here */}
        </div>
      </section>
      
      <section className={styles.aboutPreview}>
        <h2>About Us</h2>
        <p>Learn more about our story and mission</p>
        <button 
          className={styles.learnMore}
          onClick={() => dispatch(setPage('about'))}
        >
          Learn More
        </button>
      </section>
    </div>
  );
};

export default Home;