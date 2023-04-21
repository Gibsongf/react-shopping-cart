import { useState } from "react";
import "../styles/Item.css";
import CurrencyIcon from "../imgs/Gold_Currency_Icon.png";
import CloseIcon from "../imgs/close-icon.png";
import { NavLink } from "react-router-dom";


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
			<input
				type="image"
				className="close-window"
				src={CloseIcon}
				alt="close-icon"
				
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