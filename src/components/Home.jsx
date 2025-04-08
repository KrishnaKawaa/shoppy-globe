import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="content">
                <h1>The center of your <br /> helpful home.</h1>
                <button className="shop-button">Shop Now</button>
            </div>
            <img className="background-img" src="./src/assets/doodleCart.png" alt="home" />
        </div>
    );
}
