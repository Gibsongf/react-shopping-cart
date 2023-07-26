import { useEffect, useState } from "react";

export const Cart = () => {
    const [storage, setStorage] = useState({});
    const [quantity, setQuantity] = useState(0);

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
            const totalQuantity = quantity.reduce(
                (total, currentNum) => total + currentNum,
                0
            );
            return totalQuantity;
        };
        // console.log(storage);
        setQuantity(sumQuantity());
    }, [storage]);

    return { updateStorage, storage, quantity };
};
