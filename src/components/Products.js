import { useState } from "react";
import "../styles/Item.css";
import CurrencyIcon from "../imgs/Gold_Currency_Icon.png";
import CloseIcon from "../imgs/close-icon.png";
export const Product = (props) => {
	const { name, description, imgSrc, price, addToCart } = props;
	const [quantity, setQuantity] = useState(1);
	const [wasClicked, setWasClicked] = useState(false);
	const handleClick = (e) => {
		const el = e.target.className;
		if (el === "item-img") {
			setWasClicked(true);
		}
		if (el === "close-window") {
			setWasClicked(false);
		}
	};
	const divClicked = (
		<ProductSelected
			btnClose={handleClick}
			addToCart={addToCart}
			name={name}
			description={description}
			imgSrc={imgSrc}
			price={price}
			val={quantity}
			setVal={setQuantity}
		/>
	);

	return (
		<div className="item" onClick={handleClick} name="item">
			<img src={imgSrc} alt={name} className="item-img" />
			<div className="price-name">
				<h4>{name}</h4>
				<img className="gold-icon" src={CurrencyIcon} alt="gold-coin" />
				{price}
			</div>
			{wasClicked ? divClicked : ""}
		</div>
	);
};

export const ProductSelected = (props) => {
	const { name, description, imgSrc, price, val, setVal, addToCart } = props;
	const changeQuantity = (e) => {
		setVal(e.target.value);
	};
	const sendToCart = () => {
		const product = { name, description, price, quantity: Number(val),imageSrc:imgSrc };
		addToCart(product);
	};

	return (
		<div id="pop-up">
			<input
				type="image"
				className="close-window"
				src={CloseIcon}
				alt="close-icon"
				onClick={props.btnClose}
			/>
			<div id="pop-up-content">
				<img
					src={imgSrc}
					alt="item-img-select"
					className="item-img-select"
				/>
				<div className="item-info">
					<h2>{name}</h2>
					<p className="description">{description}</p>
					<span className="price-container">
						<img
							className="gold-icon"
							src={CurrencyIcon}
							alt="gold-coin"
						/>
						<p>{price}</p>
					</span>
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
					<button onClick={sendToCart} className="addToCart">
						Add To Cart
					</button>
				</span>
			</div>
		</div>
	);
};
