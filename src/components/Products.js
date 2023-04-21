import { useState } from "react";
import "../styles/Item.css";
import CurrencyIcon from "../imgs/Gold_Currency_Icon.png";
import CloseIcon from "../imgs/close-icon.png";
import { NavLink } from "react-router-dom";
export const Product = (props) => {
	const { name, description, imgSrc, price, addToCart } = props;
	const [quantity, setQuantity] = useState(1);
	const [wasClicked, setWasClicked] = useState(false);
	const handleClick = (e) => {
		const el = e.target.className;
		props.clickedItem({...props});
		if (el === "item-img") {
			setWasClicked(true);
		}
		if (el === "close-window") {
			setWasClicked(false);
		}
	};
	// a state that collect the info when click and save it and use it to render the new page using product select
	// const divClicked = (
	// 	<ProductSelected
	// 		btnClose={handleClick}
	// 		addToCart={addToCart}
	// 		name={name}
	// 		description={description}
	// 		imgSrc={imgSrc}
	// 		price={price}
	// 		val={quantity}
	// 		setVal={setQuantity}
	// 	/>
	// );

	return (
		<NavLink className="item" id='item' onClick={handleClick} to={`${props.id}`} name="item">
			<img src={imgSrc} alt={name} className="item-img" />
			<div className="price-name">
				<h4>{name}</h4>
				<img className="gold-icon" src={CurrencyIcon} alt="gold-coin" />
				{price}
			</div>
			{/* {wasClicked ? divClicked : ""} */}
		
		</NavLink>
	);
};

export const ProductSelected = (props) => {
	console.log(props)
	const { name, description, imgSrc, price, addToCart } = props;
	// const { name, description, imgSrc, price,  addToCart } = props.selectedData;
	
	const[val,setVal] = useState(1)
	const changeQuantity = (e) => {
		setVal(e.target.value);
	};
	const sendToCart = () => {
		const product = { name, description, price, quantity: Number(val),imageSrc:imgSrc };
		addToCart(product);
	};

	return (
		<div id="pop-up">
			<NavLink to='/shop'>
			<img
				className="close-window"
				src={CloseIcon}
				alt="close-icon"
				// onClick={props.btnClose}
			/>
			</NavLink>
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
