// here when click will take the storage from cart and will render the item in there

import { OrderProducts } from "../components/ProductInCart";

export const Order = (props) => {
	const { listOrders } = props;
	const productNames = Object.keys(listOrders);
    const sumPrice = () =>{
        const allPrices =productNames.map(n=> Number(listOrders[n].price)*Number(listOrders[n].quantity))
        const total = allPrices.reduce(
            (t, currentNum) => t + currentNum,
            0
        );
        return total
    }
	return <div className="orders">{productNames.map((name) => {
		return (
			<OrderProducts
				key={name}
				imgSrc={listOrders[name].imageSrc}
				description={listOrders[name].description}
				name={name}
				price={listOrders[name].price} //here need to be a function that return the price * quantity
				quantity={listOrders[name].quantity}
                allPriceHandler = {sumPrice}

			/>
		);
	})}
    <h1>Total:{sumPrice()}</h1>

    </div>;
};
