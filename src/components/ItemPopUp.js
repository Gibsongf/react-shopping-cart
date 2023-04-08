// itemClicked () =>
//      pop-up that shows
//      Img description
//      btn type range = quantity regulator
//      btn add to cart
//      btn close pop-up
//<p>{description}</p>
//<button type="range"></button>
// }
const Btns = (props) =>{
    const {val,handler,addToCart} = props;
    return (
    <span>
        <input type="number" min="1" max="100" step="1" value={val} onChange={handler}/>
        <button onClick={addToCart} className="addToCart" >Add To Cart</button>
    </span>
    )
}
const ItemSelected = (props) => {
    const { name, description, img, price } = props;
    const {} = props.inputHandler;
    return (
        <div className="pop-up">
            <img src={img.src} alt={name} className="item-img" />
			<div className="item-info">
                <h4>{name}</h4>
			    <p>${price}</p>
                <p>{description}</p>
            </div>

        </div>
    )
}