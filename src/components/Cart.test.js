import { render, screen, fireEvent } from "@testing-library/react";
import React, { useState } from "react";
import { Product } from "./Products";
import Src from "../imgs/tactics/Alchemic_Carbine_Icon.png";
import { Cart } from "./Cart";

const ProductSetup = () => {
	const [quantity, setQuantity] = useState(0);
	const cart = Cart(setQuantity);
	const description = "description";
	const price = 2000;
	const names = ["p1", "p2", "p3", "p4"];
	return (
		<div className="container">
			{names.map((p) => (
				<Product
					key={p}
					addToCart={cart.updateStorage}
					name={p}
					description={description}
					price={price}
					imgSrc={Src}
				/>
			))}
			<h1 className="quantity" name="test">
				Quantity:{quantity}
			</h1>
		</div>
	);
};

describe("Cart quantity, total and stored products", () => {
	it("Stored unique product", () => {
		render(<ProductSetup />);
		const product1 = screen.getByRole("img", {
			name: "p1",
		});
		fireEvent.click(product1);
		const btnAdd = () =>
			screen.getByRole("button", { name: "Add To Cart" });
		const showQuantity = screen.getByRole("heading", {
			name: /Quantity:/i,
		});
		fireEvent.click(btnAdd());
		expect(showQuantity.textContent).toBe("Quantity:1");
	});

	it("change quantity with more than one unique product", () => {
		render(<ProductSetup />);
		const product2 = screen.getByRole("img", { name: "p2" });
		const product3 = screen.getByRole("img", { name: "p3" });
		const showQuantity = () =>
			screen.getByRole("heading", { name: /Quantity:/i });
		const btnAdd = () =>
			screen.getAllByRole("button", { name: "Add To Cart" });
		fireEvent.click(product2);
		fireEvent.click(btnAdd()[0]);
		expect(showQuantity().textContent).toBe("Quantity:1");
		fireEvent.click(product3);
		fireEvent.click(btnAdd()[1]);
		expect(showQuantity().textContent).toBe("Quantity:2");
	});
});
