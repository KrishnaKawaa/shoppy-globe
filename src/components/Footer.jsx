    // src/components/Footer.jsx
    import './Footer.css';

    export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <h3>ShoppyGlobe</h3>
            <p>Your one-stop destination for all shopping needs!</p>
            <div className="footer-links">
            <a href="/">Home</a>
            <a href="/cart">Cart</a>
            <a href="/#products">Products</a>
            <a href="/contact">Contact</a>
            </div>
            <p className="footer-copy">&copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.</p>
        </div>
        </footer>
    );


    
    }
