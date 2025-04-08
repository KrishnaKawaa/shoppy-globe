import { fetchProducts } from "../utils/FetchData";
import { useState, useEffect } from "react";
import './ProductList.css';
import { useNavigate } from "react-router-dom";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        getProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="list-container">
            <div className="product-head">
                <h2>Products</h2>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-bar"
                />
            </div>
            <div className="product-list">
                {filteredProducts.map((product) => (
                    <div className="card-container">
                        <div key={product.id} className="card">
                        <img src={product.thumbnail} alt={product.title} className="card-img" />
                        <div className="card-body">
                            <h3>{product.title}</h3>
                            <p>{product.description.substring(0, 60)}...</p>
                            <strong>Price: ${product.price}</strong>
                            <button onClick={() => navigate(`/product/${product.id}`)}>More</button>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
