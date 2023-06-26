import CurrencyIcon from "../imgs/Gold_Currency_Icon.png";
import "../styles/ProductInCart.css";

export const OrderProducts = (props) => {
    const { name, description, imgSrc, price, quantity } = props;

    return (
        <div className="product-info">
            <img src={imgSrc} alt="product-img" className="product-img" />
            <div className="title-description">
                <h2>{name}</h2>
                <p className="description">{description}</p>
            </div>
            <h4>{quantity}</h4>
            <span className="individual-price">
                <img className="gold-icon" src={CurrencyIcon} alt="gold-coin" />
                <p>{price}</p>
            </span>
        </div>
    );
};
