import {
	brutalItems,
	survivalItems,
	tacticsItems,
	allImg,
} from "../getAllImgs.js";
import { Product } from "../components/Products.js";
import "../styles/Products.css";

export const Shop = (props) => {
	const {addToCart} = props;
	const brutal = brutalItems();
	const tactics = tacticsItems();
	const survival = survivalItems();

	const tacticsImgs = allImg(tactics, "tactics");
	const brutalImgs = allImg(brutal, "brutality");
	const survivalImg = allImg(survival, "survival");

	const arrayAll = [brutalImgs, tacticsImgs, survivalImg];
	const allProducts = arrayAll.map((imgSet) =>
		Object.keys(imgSet).map((fKey) => {
			return (
				<Product
					addToCart={addToCart}
					key={fKey}
					id={imgSet[fKey].id}
					imgSrc={imgSet[fKey].src}
					description={imgSet[fKey].description}
					name={imgSet[fKey].name}
					price={imgSet[fKey].price}
				/>
			);
		})
	);
	return (
		<div className="container">
			{allProducts}
		</div>
	);
};
