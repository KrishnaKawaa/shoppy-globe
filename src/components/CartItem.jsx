    // src/components/CartItem.jsx
    import { useParams, useNavigate } from "react-router-dom";
    import { useSelector } from "react-redux";
    import './CartItem.css';

    export default function CartItem() {
    const { id } = useParams();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const item = cart.find((item) => item.id === parseInt(id));

    if (!item) return <h2>Item not found in cart</h2>;

    return (
        <div className="cart-item-detail">
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <h2>{item.title}</h2>
        <img src={item.thumbnail} alt={item.title} width="300" />
        <p>{item.description}</p>
        <strong>Price: ${item.price}</strong>
        <p>Quantity: {item.quantity}</p>
        </div>
    );
    }
