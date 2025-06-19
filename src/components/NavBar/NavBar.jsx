import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import styles from './NavBar.module.css';

const NavBar = () => {
  const cart = useSelector(state => state.cart);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="/images/logo.jpg" alt="ShopEase Logo" className={styles.logoImage} />
        </Link>
      </div>

      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/shop" className={styles.navLink}>Shop</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/cart" className={styles.cartButton}>
          <FaShoppingCart />
          {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;