import { fetchProducts } from '../utils/FetchData';
import './Category.css';
import { useEffect, useState } from 'react';

const categories = [
    "beauty",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "mens-shirts",
    "mens-shoes",
    "womens-dresses"
    ];


export default function Category() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts(); 
                setProducts(data);
            } catch (error) {
                console.log("Error", error);
            }
        };
        getProducts();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        const filtered = products.filter(product => product.category === category.toLowerCase());
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <div className="head-container">
                <h2>Categories</h2>
            </div>
            <div className="button-container">
                {categories.map((category, index) => (
                    <button 
                        key={index}
                        className="button"
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Display filtered products */}
            {selectedCategory && (
                <div className="products-container">
                    <h3>Showing Products for: {selectedCategory}</h3>
                    <div className="product-list">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div key={product.id} className="product-card">
                                    <img src={product.thumbnail} alt={product.title} width="100" />
                                    <h4>{product.title}</h4>
                                    <p>{product.price} USD</p>
                                </div>
                            ))
                        ) : (
                            <p>No products found for this category.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
