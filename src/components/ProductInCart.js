import { useState } from "react";
import CurrencyIcon from "../imgs/Gold_Currency_Icon.png";

export const OrderProducts = (props) => {
	const { name, description, imgSrc, price,quantity } = props;
	const [itemQuantity, setItemQuantity] = useState(quantity );
    const changeQuantity = (e) => {
        setItemQuantity(Number(e.target.value));
        props.allPriceHandler();
    }
	return (
		<div className="item-info">
            <img
					src={imgSrc}
					alt="item-img-select"
					className="item-img-select"
				/>
			<h2>{name}</h2>
			<p className="description">{description}</p>
			<span className="price-container">
				<img className="gold-icon" src={CurrencyIcon} alt="gold-coin" />
				<p>{price}</p>
			</span>
			<span>
				<label htmlFor="quantity">
					Quantity:
					<input
						id="quantity"
						type="number"
						min="1"
						max="100"
						step="1"
						value={itemQuantity}
						onChange={changeQuantity}
					/>
				</label>
				
			</span>
		</div>
	);
};
