import { useState } from "react";
import { OrderProducts } from "../components/ProductInCart";
import CurrencyIcon from "../imgs/Gold_Currency_Icon.png";

export const Order = (props) => {
	const { listOrders } = props;
	const uniqueProducts = Object.keys(listOrders);
	const [cartItems, setCartItems] = useState(listOrders);
	const sum = (tag) => {
		const allPrices = uniqueProducts.map((n) => cartItems[n][tag]);
		const total = allPrices.reduce((t, currentNum) => t + currentNum, 0);
		return total;
	};
	const [total, setTotal] = useState(sum("total"));
	let pageBackGround = {};
	if (uniqueProducts.length < 2) {
		pageBackGround = { height: "100vh" };
	}
	return (
		<div className="orders" style={pageBackGround}>
			<h1 className="my-cart">My Cart ({sum("quantity")} items)</h1>

			<div className="tag">
				<h4>Product</h4>
				<h4>Description</h4>
				<h4>Quantity</h4>
				<h4>Unity Price</h4>
			</div>
			<div className="container-products">
				{uniqueProducts.map((name) => {
					return (
						<OrderProducts
							key={name}
							imgSrc={listOrders[name].imageSrc}
							description={listOrders[name].description}
							name={name}
							price={listOrders[name].price}
							quantity={listOrders[name].quantity}
							changeCart={setCartItems}
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
