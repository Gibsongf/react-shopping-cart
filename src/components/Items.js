import { useState } from "react";
import "../components/Item.css";
import CurrencyIcon from "../imgs/Gold_Currency_Icon.png";
import CloseIcon from '../imgs/alpha-x-circle-outline-custom.png'
export const Product = (props) => {
	const { name, description, imgSrc, price } = props;
	const [quantity, setQuantity] = useState(0);
	const [wasClicked, setWasClicked] = useState(false);
	const handleClick = (e) => {
		const el = e.target.className
		if(el === "item-img"){
			setWasClicked(true)
		}
		if(el === 'close-window'){
			setWasClicked(false)
		}
	}
	const divClicked = (
				<ProductSelected
					btnClose={handleClick}
					name={name}
					description={description}
					imgSrc={imgSrc}
					price={price}
					val={quantity}
					setVal={setQuantity}
				/>
			);
	
	
	// ?btn = add direct to the cart a props.addItem
	// div.click => itemClicked()
	return (
		<div className="item" onClick={handleClick}>
			<img src={imgSrc} alt={name} className="item-img" />
			<h4>{name}</h4>
			<p>
				<img className="gold-icon" src={CurrencyIcon} alt="gold-coin" />
				{price}
			</p>
			{wasClicked ? divClicked:''}
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
export const ProductSelected = (props) => {
	const { name, description, imgSrc, price, val, setVal } = props;
	const changeQuantity = (e) => {
		setVal(e.target.value);
	};
	
	return (
		<div id="pop-up">
			<input	type="image"
					className="close-window"
					src={CloseIcon} alt="close-icon" 
					onClick={props.btnClose}
				/>
			<div id="pop-up-content">
				<img src={imgSrc} alt={name} className="item-img-select" />
				<div className="item-info">
					<h2>{name}</h2>
					<p className="description">{description}</p>
					<span className="price-container">
						<img className="gold-icon" src={CurrencyIcon} alt="gold-coin" />
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
					<button className="addToCart">Add To Cart</button>
				</span>
			</div>
		</div>
	);
};
