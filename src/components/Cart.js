import { useEffect, useState } from "react";

export const Cart = (setQuantity) => {
    const [storage, setStorage] = useState({});
    const individualProductTotal = (product) => {
        product.total = Number(product.quantity) * Number(product.price);
    };

    const updateStorage = (product) => {
        setStorage(() => {
            individualProductTotal(product);
            return { ...storage, [product.name]: product };
        });
    };

    useEffect(() => {
        const sumQuantity = () => {
            const keys = Object.keys(storage);
            const quantity = keys.map((k) => storage[k].quantity);
            const all = quantity.reduce(
                (total, currentNum) => total + currentNum,
                0
            );
            return all;
        };
        console.log(storage);
        setQuantity(sumQuantity());
    }, [storage]); // eslint-disable-line react-hooks/exhaustive-deps

    return { updateStorage, storage };
};
