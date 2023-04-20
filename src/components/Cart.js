import { useEffect, useState } from "react";

export const Cart = (setQuantity) => {
	const [storage, setStorage] = useState({});

	const updateStorage = (product) => {
		setStorage({ ...storage, [product.name]: product });
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
		setQuantity(sumQuantity());
	}, [storage]);// eslint-disable-line react-hooks/exhaustive-deps
	
	return { updateStorage,storage };
};
