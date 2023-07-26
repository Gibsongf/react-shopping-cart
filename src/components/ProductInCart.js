import { useContext, useState } from "react";
import CurrencyIcon from "../imgs/Gold_Currency_Icon.png";
import "../styles/ProductInCart.css";
import { ShopContext } from "../App";

const InputQuantity = ({ productQuantity, productName }) => {
    const [quantity, setQuantity] = useState(productQuantity);
    const { changeProductQuantity } = useContext(ShopContext);
    const valueChange = (e) => {
        setQuantity(() => e.target.value);
        changeProductQuantity(e);
    };
    return (
        <input
            type="number"
            name="quantity"
            id={productName}
            className="quantity_cart"
            value={quantity}
            min="1"
            onChange={valueChange}
        />
    );
};
const ButtonRemoveProduct = ({ productName }) => {
    const { removeProduct } = useContext(ShopContext);

    return (
        <button
            id={productName}
            className="remove-item"
            type="button"
            onClick={removeProduct}
        >
            Remove
        </button>
    );
};
export const OrderProducts = (props) => {
    const { name, description, imgSrc, price, quantity } = props;

    return (
        <div className="product-info">
            <img src={imgSrc} alt="product-img" className="product-img" />
            <div className="title-description">
                <h2>{name}</h2>
                <p className="description">{description}</p>
            </div>
            <InputQuantity productName={name} productQuantity={quantity} />
            <span className="individual-price">
                <img className="gold-icon" src={CurrencyIcon} alt="gold-coin" />
                <p>{price}</p>
            </span>
            <ButtonRemoveProduct productName={name} />
        </div>
    );
};
