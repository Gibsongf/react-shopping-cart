import { useMemo, useState } from "react";

export const Cart = () => {
    const [storage, setStorage] = useState({});
    const { quantity, total } = useMemo(() => {
        const sumQuantity = (tag) => {
            const keys = Object.keys(storage);
            const quantity = keys.map((k) => storage[k][tag]);
            const totalQuantity = quantity.reduce(
                (total, currentNum) => total + currentNum,
                0
            );
            return totalQuantity;
        };
        return {
            quantity: sumQuantity("quantity"),
            total: sumQuantity("total"),
        };
    }, [storage]);

    const individualProductTotal = (product) => {
        product.total = Number(product.quantity) * Number(product.price);
    };
    const changeProductQuantity = (e) => {
        const product = storage[e.target.id];
        product.quantity = Number(e.target.value);
        setStorage(() => {
            individualProductTotal(product);
            return { ...storage, [product.name]: product };
        });
    };
    const removeProduct = (e) => {
        setStorage(() => {
            delete storage[e.target.id];
            return { ...storage };
        });
    };
    const updateStorage = (product) => {
        setStorage(() => {
            individualProductTotal(product);
            return { ...storage, [product.name]: product };
        });
    };

    return {
        updateStorage,
        storage,
        quantity,
        total,
        changeProductQuantity,
        removeProduct,
    };
};
