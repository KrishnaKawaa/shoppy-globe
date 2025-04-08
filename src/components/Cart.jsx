import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeFromCart, clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cart.length === 0) return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdZWMuftJ4XwCpoVm0Av0vPpOWtVlRT2LPyWikpn8HCpwc_YraE1OzzL2EDXIb4iBeN8&usqp=CAU'
        alt='Your Cart is EMPTY'
        style={{
          maxWidth: '80%',
          maxHeight: '80%',
          borderRadius: '12px',
        }}
      />
    </div>
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-grid">
        {cart.map((item) => (
          <div className="cart-card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <div className="cart-content">
              <h3>{item.title}</h3>
              <p>{item.description.substring(0, 80)}...</p>
              <strong>Price: ${item.price}</strong>
              <div className="cart-controls">
                <div className="qty-buttons">
                  <button onClick={() => dispatch(decrement(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increment(item.id))}>+</button>
                </div>
                <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
              <button
                className="more-btn"
                onClick={() => navigate(`/cart/item/${item.id}`)}
              >
                More
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </div>
  );
}
