import styles from './CartProduct.module.css';
import { toast } from 'react-toastify';

const CartProduct = ({ item, onQuantityChange, onRemove }) => {
  const handleIncrease = () => {
    if (item.quantity >= item.stock) {
      toast.warn(`Only ${item.stock} in stock. You can't add more.`, {
        toastId: `stock-limit-${item.id}`
      });
      return;
    }
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    } else {
      onRemove(item.id);
    }
  };

  return (
    <div className={styles.cartProduct}>
      <div className={styles.productImageContainer}>
        <img src={item.image} alt={item.name} className={styles.productImage} />
      </div>
      
      <div className={styles.productDetails}>
        <h3 className={styles.productName}>{item.name}</h3>
        <p className={styles.productPrice}>${item.price.toFixed(2)}</p>
        
        <div className={styles.quantityControl}>
          <button 
            className={styles.quantityButton}
            onClick={handleDecrease}
          >
            −
          </button>
          <span className={styles.quantity}>{item.quantity}</span>
          <button 
            className={styles.quantityButton}
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
      </div>
      
      <div className={styles.productTotal}>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
        <button 
          className={styles.removeButton}
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
