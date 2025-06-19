import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../../store/slices/cartSlice';
import { updateStock } from '../../store/slices/productsSlice';
import { useNavigate } from 'react-router-dom';  
import CartProduct from './CartProduct/CartProduct';
import styles from './Cart.module.css';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const cart = useSelector(state => state.cart);
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handlePurchase = () => {
    cart.forEach(item => {
      dispatch(updateStock({ id: item.id, quantity: item.quantity }));
    });
    dispatch(clearCart());
    navigate('/'); // Change from dispatch(setPage('home')) to navigate('/')
    alert('Thank you for your purchase!');
  };

  return (
    <div className={styles.cart}>
      <h1>Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your cart is empty</p>
          <button 
            className={styles.continueShopping}
            onClick={() => navigate('/shop')} // Change from dispatch(setPage('shop')) to navigate('/shop')
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cart.map(item => (
              <CartProduct
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>
          
          <div className={styles.cartSummary}>
            <div className={styles.summaryRow}>
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button 
              className={styles.checkoutButton}
              onClick={handlePurchase}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;