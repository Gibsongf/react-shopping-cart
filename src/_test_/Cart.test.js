import { render, screen, fireEvent } from "@testing-library/react";
import React, { useState } from "react";
import Src from "../imgs/tactics/Alchemic_Carbine_Icon.png";
import { Cart } from "../components/Cart";
import { ProductDetails } from "../components/DetailProduct";

// const ProductSetup = () => {
// 	const [quantity, setQuantity] = useState(0);
// 	const cart = Cart(setQuantity);
// 	const description = "description";
// 	const price = 2000;
// 	return (
// 		<div className="container">
// 			<ProductDetails
// 				key="product-1"
// 				addToCart={cart.updateStorage}
// 				name="product-1"
// 				description={description}
// 				price={price}
// 				imgSrc={Src}
// 				test={true}
// 			/>
// 			<ProductDetails
// 				key="product-2"
// 				addToCart={cart.updateStorage}
// 				name="product-2"
// 				description={description}
// 				price={price}
// 				imgSrc={Src}
// 				test={true}
// 			/>
// 			<h1 className="quantity" name="test">
// 				Quantity:{quantity}
// 			</h1>
// 		</div>
// 	);
// };

// describe("Cart quantity, total and stored products", () => {
// 	it("Stored unique product", async () => {
// 		render(<ProductSetup />);
// 		const btnAdd = screen.getAllByRole("button", { name: "ADD TO CART" });
// 		const inputQuantity = screen.getAllByRole("spinbutton");
// 		const showQuantity = screen.getByRole("heading", {
// 			name: /Quantity:/i,
// 		});
// 		fireEvent.change(inputQuantity[0], { target: { value: 2 } });
// 		fireEvent.click(btnAdd[0]);
// 		expect(showQuantity.textContent).toBe("Quantity:2");
// 		expect(inputQuantity[0].value).toBe("2");
// 	});

// 	it("update total quantity from two products", () => {
// 		render(<ProductSetup />);
// 		const btnAdd = screen.getAllByRole("button", { name: "ADD TO CART" });
// 		const inputQuantity = screen.getAllByRole("spinbutton");
// 		const showQuantity = screen.getAllByRole("heading", {
// 			name: /Quantity:/i,
// 		});
// 		fireEvent.change(inputQuantity[0], { target: { value: 2 } });
// 		fireEvent.click(btnAdd[0]);
// 		fireEvent.change(inputQuantity[1], { target: { value: 5 } });
// 		fireEvent.click(btnAdd[1]);
// 		expect(showQuantity[0].textContent).toBe("Quantity:7");
// 	});
// });
