
import { OrderProducts } from "../components/ProductInCart";
import CurrencyIcon from "../imgs/Gold_Currency_Icon.png";

export const Order = (props) => {
	const { listOrders } = props;
	const productNames = Object.keys(listOrders);
	const sum = (tag) => {
		const allPrices = productNames.map((n) => listOrders[n][tag]);
		const total = allPrices.reduce((t, currentNum) => t + currentNum, 0);
		return total;
	};
	
	return (
		<div className="orders">
			<h1 className="my-cart">My Cart ({sum('quantity')} items)</h1>

			<div className="tag">
				<h4>Product</h4>
				<h4>Description</h4>
				<h4>Quantity</h4>
				<h4>Unity Price</h4>
			</div>
			<div className="container-products">
			{productNames.map((name) => {
				return (
					<OrderProducts
						key={name}
						imgSrc={listOrders[name].imageSrc}
						description={listOrders[name].description}
						name={name}
						price={listOrders[name].price} 
						quantity={listOrders[name].quantity}
					/>
				);
			})}
			</div>
			<span className="total">
				Total:
				<img className="gold-icon" src={CurrencyIcon} alt="gold-coin" />
				<p>{sum('total')}</p>
			</span>

		</div>
	);
};
