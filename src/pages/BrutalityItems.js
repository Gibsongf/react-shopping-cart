import { brutalItems, allImg } from "../imgs/getAllImgs";
import {Items} from "../components/Items";
export const AllBrutalItemsImg = () => {
	const brutal = brutalItems();
	const imgDataObj = allImg(brutal, "brutality");
	// console.log(imgDataObj);

	const multipleCards = Object.keys(imgDataObj).map((fKey) => {
		return (
			<Items
                key={fKey}
				id={imgDataObj[fKey].id}
				imgSrc={imgDataObj[fKey].src}
				name={imgDataObj[fKey].name}
			/>
		);
	});
    return multipleCards
};
