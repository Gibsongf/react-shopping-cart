import { useMemo, useState } from "react";

export const Cart = () => {
    const [storage, setStorage] = useState({});
    const { quantity, total } = useMemo(() => {
        const sum = (tag) => {
            const keys = Object.keys(storage);
            const selectTagNumbers = keys.map((k) => storage[k][tag]);
            const result = selectTagNumbers.reduce(
                (total, currentNum) => total + currentNum,
                0
            );
            return result;
        };
        return {
            quantity: sum("quantity"),
            total: sum("total"),
        };
    }, [storage]);

    const individualProductTotal = (product) => {
        product.total = Number(product.quantity) * Number(product.price);
    };
    const changeProductQuantity = (e) => {
        setStorage((previousStorage) => {
            const product = { ...previousStorage[e.target.id] };
            product.quantity = Number(e.target.value);
            individualProductTotal(product);
            return { ...previousStorage, [product.name]: product };
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
