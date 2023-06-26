import { useState } from "react";
import "../styles/DetailProduct.css";
import CurrencyIcon from "../imgs/Gold_Currency_Icon.png";
import BackIcon from "../imgs/go-back.png";
import { NavLink } from "react-router-dom";

export const ProductDetails = (props) => {
    const { name, description, imgSrc, price, addToCart } = props;
    const [val, setVal] = useState(1);
    const changeQuantity = (e) => {
        setVal(e.target.value);
    };
    const sendToCart = () => {
        const product = {
            name,
            description,
            price,
            quantity: Number(val),
            imageSrc: imgSrc,
        };
        addToCart(product);
    };
    const GoBack = (
        <NavLink to="/shop">
            <img className="back" src={BackIcon} alt="back-icon" />
        </NavLink>
    );
    return (
        <>
            {props.test ? "" : GoBack}
            <div className="content">
                <img
                    src={imgSrc}
                    alt="item-img-select"
                    className="item-img-select"
                />
                <h2>{name}</h2>
                <p className="description">{description}</p>
                <span className="price-container">
                    <img
                        className="gold-icon-medium"
                        src={CurrencyIcon}
                        alt="gold-coin-medium"
                    />
                    <p>{price}</p>
                </span>
                <div className="add-quantity-cart">
                    <label htmlFor="quantity">
                        Quantity:{" "}
                        <input
                            id="quantity"
                            type="number"
                            min="1"
                            max="100"
                            step="1"
                            value={val}
                            onChange={changeQuantity}
                        />
                    </label>
                    <button onClick={sendToCart} className="addToCart">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </>
    );
};
