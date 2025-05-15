import styles from './Product.module.css';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} loading="lazy" className={styles.productImage} />
      </div>
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productCategory}>{product.category}</p>
      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      <p className={styles.productStock}>
        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
      </p>
      <button
        className={styles.addToCart}
        onClick={onAddToCart}
        disabled={product.stock <= 0}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;