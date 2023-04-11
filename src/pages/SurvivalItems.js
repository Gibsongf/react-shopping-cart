import {survivalItems,allImg} from '../imgs/getAllImgs'
import {Product} from "../components/Items";
export const AllSurvivalItemsImg = () => {
	const survival = survivalItems();
	const imgDataObj = allImg(survival, "survival");
	// console.log(imgDataObj);

	const allProducts = Object.keys(imgDataObj).map((fKey) => {
		return (
            
			<Product
                key={fKey}
				id={imgDataObj[fKey].id}
				imgSrc={imgDataObj[fKey].src}
				name={imgDataObj[fKey].name}
                price={imgDataObj[fKey].price}
			/>
            
		);
	});
    return <div className="container">{allProducts}</div>
};