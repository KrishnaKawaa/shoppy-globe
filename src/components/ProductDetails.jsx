import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/FetchData";
import './ProductDetail.css';

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    //fetcching data from the API
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
        <div className="product-detail">
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} width="400" />
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> {product.rating} ⭐</p>
        </div>
    );
}
