import { useState } from "react";
import "../components/Item.css";
export const Items = (props) => {
	const { name, description, imgSrc, price } = props;
	const [quantity, setQuantity] = useState(0);
	const divClicked = () => {
		return;
	};
	// ?btn = add direct to the cart a props.addItem
	// div.click => itemClicked()
	return (
		<div className="item">
			<img src={imgSrc} alt={name} className="item-img" />
			<h4>{name}</h4>
			<p>${price}</p>
			{}
		</div>
	);
};
const Btns = (props) => {
	const { val, handler, addToCart } = props.states;
	const changeQuantity = (e) => {
		handler(e.target.value);
	};
	return (
		<span>
			<input
				type="number"
				min="1"
				max="100"
				step="1"
				value={val}
				onChange={changeQuantity}
			/>
			{/* <button onClick={addToCart} className="addToCart">
				Add To Cart
			</button> */}
		</span>
	);
};
export const ItemSelected = (props) => {
	const { name, description, imgSrc, price, val, setVal } = props;
	const changeQuantity = (e) => {
		setVal(e.target.value);
	};
	return (
		<div id="pop-up">
			<div id="pop-up-content">
				<button className="close-window">X</button>
				<img src={imgSrc} alt={name} className="item-img-select" />
				<div className="item-info">
					<h2>{name}</h2>
					<p className="description">{description}</p>
					<p>${price}</p>
				</div>
				<span>
					<label htmlFor="quantity">
						Quantity:
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
					<button className="addToCart">Add To Cart</button>
				</span>
			</div>
		</div>
	);
};
