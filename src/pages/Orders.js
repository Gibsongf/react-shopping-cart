import { OrderProducts } from "../components/ProductInCart";
import CurrencyIcon from "../imgs/Gold_Currency_Icon.png";
import { useContext } from "react";
import { ShopContext } from "../App";

export const Order = () => {
    const { storage, quantity, total } = useContext(ShopContext);
    const products = Object.keys(storage);

    // let pageBackGround = {};
    // if (products.length < 2) {
    //     pageBackGround = { height: "100vh" };
    // }
    return (
        <div className="orders">
            <h1 className="my-cart">My Cart ({quantity}) items</h1>

            <div className="tag">
                <h4>Product</h4>
                <h4>Description</h4>
                <h4>Quantity</h4>
                <h4>Unity Price</h4>
            </div>
            <div className="container-products">
                {products.map((name) => {
                    return (
                        <OrderProducts
                            key={name}
                            imgSrc={storage[name].imageSrc}
                            description={storage[name].description}
                            name={name}
                            price={storage[name].price}
                            quantity={storage[name].quantity}
                        />
                    );
                })}
            </div>
            <span className="total">
                Total:
                <img className="gold-icon" src={CurrencyIcon} alt="gold-coin" />
                <p>{total}</p>
            </span>
        </div>
    );
};
