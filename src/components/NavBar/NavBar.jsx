import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../store/slices/pageSlice';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './NavBar.module.css';

const NavBar = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => dispatch(setPage('home'))}>
        <img src="/images/logo.jpg" alt="ShopEase Logo" className={styles.logoImage} />
      </div>




      <div className={styles.navLinks}>
        <button onClick={() => dispatch(setPage('home'))}>Home</button>
        <button onClick={() => dispatch(setPage('shop'))}>Shop</button>
        <button onClick={() => dispatch(setPage('about'))}>About</button>
        <button 
          className={styles.cartButton} 
          onClick={() => dispatch(setPage('cart'))}
        >
          <FaShoppingCart />
          {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;