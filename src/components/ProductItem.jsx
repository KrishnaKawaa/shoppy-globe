import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/FetchData";
import './ProductItem.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function ProductItem() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000); // hides after 2 sec
    };

    useEffect(() => {
        const getProduct = async () => {
            const products = await fetchProducts();
            const selectedProduct = products.find((p) => p.id === parseInt(id));
            setProduct(selectedProduct);
        };
        getProduct();
    }, [id]);

    if (!product) return <h2>Loading...</h2>;

    return (
        <div className="product-item">
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} width="300" />
            <p>{product.description}</p>
            <strong>Price: ${product.price}</strong>

            <button className="addToCart" onClick={handleAddToCart}>
                {isAdded ? "Added to Cart ✅" : "Add to Cart"}
            </button>            <button className="details-button" onClick={() => navigate(`/product/details/${product.id}`)}>View Details</button>
        </div>
    );
}
