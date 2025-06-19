import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/slices/cartSlice';
import { toast } from 'react-toastify';
import styles from './Product.module.css';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const cartItem = cart.find(item => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    if (quantityInCart >= product.stock) {
      toast.warn(`Only ${product.stock} in stock! You can't add more.`, {
        toastId: `limit-${product.id}` // Avoid spamming notifications
      });
      return;
    }

    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      stock: product.stock
    }));
  };

  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={styles.productImage}
        />
      </div>

      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productCategory}>{product.category}</p>
      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      <p className={styles.productStock}>
        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
      </p>

      <button
        className={styles.addToCart}
        onClick={handleAddToCart}
        disabled={product.stock <= 0}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
