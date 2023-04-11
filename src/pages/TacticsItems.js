import {tacticsItems,allImg} from '../imgs/getAllImgs'
import {Product} from "../components/Items";
export const AllTacticsItemsImg = () => {
	const tactics = tacticsItems();
	const imgDataObj = allImg(tactics, "tactics");
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