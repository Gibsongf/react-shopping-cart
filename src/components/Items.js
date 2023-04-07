const Items = (props) => {
	const { name, description, img, price } = props;
	// ?btn = add direct to the cart a props.addItem
	// div.click => itemClicked()
	return (
		<div className="item" >
			<img src={img.src} alt={name} className="item-img" />
			<h4>{name}</h4>
			<p>${price}</p>
		</div>
	);
};
export default Items
// itemClicked () =>
//      pop-up that shows
//      Img description
//      btn type range = quantity regulator
//      btn add to cart
//      btn close pop-up
//<p>{description}</p>
//<button type="range"></button>
// }
