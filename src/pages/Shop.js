import { allProductsData } from "../getAllImgs.js";
import { Product } from "../components/Products.js";
import "../styles/Products.css";

export const Shop = () => {
    const allProducts = allProductsData();
    const keys = Object.keys(allProducts);
    return (
        <div className="container">
            {keys.map((fKey) => {
                return (
                    <Product
                        key={fKey}
                        id={keys.indexOf(fKey)}
                        imgSrc={allProducts[fKey].src}
                        description={allProducts[fKey].description}
                        name={allProducts[fKey].name}
                        price={allProducts[fKey].price}
                    />
                );
            })}
        </div>
    );
};
