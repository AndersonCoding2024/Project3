import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>ShopEase</h3>
          <p>Your one-stop shop for all your needs</p>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul className={styles.quickLinksList}>
            <li><Link to="/" className={styles.link}>Home</Link></li>
            <li><Link to="/shop" className={styles.link}>Shop</Link></li>
            <li><Link to="/about" className={styles.link}>About</Link></li>
            <li><Link to="/cart" className={styles.link}>Cart</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Connect With Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;