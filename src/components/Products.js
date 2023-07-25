import "../styles/Products.css";
import CurrencyIcon from "../imgs/Gold_Currency_Icon.png";
import { NavLink } from "react-router-dom";
export const Product = (props) => {
    const { name, imgSrc, price } = props;

    const handleClick = () => {
        // props.clickedItem({ ...props });
        localStorage.setItem("selected-product", JSON.stringify(props));
    };

    return (
        <NavLink
            className="item"
            id="item"
            onClick={handleClick}
            to={`${props.id}`}
            name="item"
        >
            <img src={imgSrc} alt={name} className="item-img" />
            <div className="price-name">
                <h4>{name}</h4>
                <img className="gold-icon" src={CurrencyIcon} alt="gold-coin" />
                {price}
            </div>
        </NavLink>
    );
};
