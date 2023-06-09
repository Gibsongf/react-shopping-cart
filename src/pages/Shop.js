import {
    brutalItems,
    survivalItems,
    tacticsItems,
    allImg,
} from "../getAllImgs.js";
import { Product } from "../components/Products.js";
import "../styles/Products.css";

export const Shop = (props) => {
    const { addToCart, setItemDetail } = props;
    const brutal = brutalItems();
    const tactics = tacticsItems();
    const survival = survivalItems();
    const tacticsImgs = allImg(tactics, "tactics");
    const brutalImgs = allImg(brutal, "brutality");
    const survivalImg = allImg(survival, "survival");

    const arrayAll = [brutalImgs, tacticsImgs, survivalImg];
    let count = 0;
    return (
        <div className="container">
            {arrayAll.map((imgData) =>
                Object.keys(imgData).map((fKey) => {
                    return (
                        <Product
                            addToCart={addToCart}
                            key={fKey}
                            id={count++}
                            imgSrc={imgData[fKey].src}
                            description={imgData[fKey].description}
                            name={imgData[fKey].name}
                            price={imgData[fKey].price}
                            clickedItem={setItemDetail}
                        />
                    );
                })
            )}
        </div>
    );
};
