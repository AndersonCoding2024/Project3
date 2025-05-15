import styles from './CartProduct.module.css';

const CartProduct = ({ item, onQuantityChange, onRemove }) => {
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
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
          >
            −
          </button>
          <span className={styles.quantity}>{item.quantity}</span>
          <button 
            className={styles.quantityButton}
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
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