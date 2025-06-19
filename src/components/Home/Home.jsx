import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProducts, selectAllProducts } from '../../store/slices/productsSlice';
import Product from '../Shop/Product/Product';
import styles from './Home.module.css';

// Function to randomly select n elements from an array.
const getRandomProducts = (products, n) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  
  useEffect(() => {
    if (products.length === 0) {
      dispatch(loadProducts());
    }
  }, [dispatch, products.length]);

  const featuredProducts = getRandomProducts(products, 3);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Welcome to ShopEase</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/shop" className={styles.ctaButton}>
          Shop Now
        </Link>
      </section>
      
      <section className={styles.featured}>
        <h2>Featured Products</h2>
        <div className={styles.productGrid}>
          {featuredProducts.length > 0 ? (
            featuredProducts.map(product => (
              <Product
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <p>No featured products available.</p>
          )}
        </div>
      </section>
      
      <section className={styles.aboutPreview}>
        <h2>About Us</h2>
        <p>Learn more about our story and mission</p>
        <Link to="/about" className={styles.learnMore}>
          Learn More
        </Link>
      </section>
    </div>
  );
};

export default Home;