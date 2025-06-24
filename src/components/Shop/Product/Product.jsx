import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/slices/cartSlice';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import styles from './Product.module.css';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // Find product in cart (if any)
    const cartItem = cart.find(item => item.id === product.id);
    const quantityInCart = cartItem ? cartItem.quantity : 0;

    // Check stock quantity
    if (quantityInCart >= product.stock) {
      toast.warn(`Only ${product.stock} in stock! You can't add more.`, {
        toastId: `stock-limit-${product.id}`,
        autoClose: 1500
      });
      return;
    }

    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || '/images/default-product.jpg',
      stock: product.stock
    }));

    setIsAdded(true);
    toast.success(`${product.name} added to cart!`, {
      position: "top-center",
      autoClose: 1000,
    });

    // Reset to the original state after 1.5 seconds
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          src={product.image || '/images/default-product.jpg'}
          alt={product.name}
          loading="lazy"
          className={styles.productImage}
          onError={(e) => {
            e.target.src = '/images/default-product.jpg';
          }}
        />
      </div>

      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productCategory}>{product.category}</p>
      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      <p className={styles.productStock}>
        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
      </p>

      <button
        className={`${styles.addToCart} ${isAdded ? styles.added : ''}`}
        onClick={handleAddToCart}
        disabled={product.stock <= 0 || isAdded}
      >
        {isAdded ? 'Added!' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Product;