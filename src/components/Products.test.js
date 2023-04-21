import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Product } from "./Products";
import Src from "../imgs/tactics/Alchemic_Carbine_Icon.png";
const ProductSetup = () => {
	const name = "The Alchemic Carbine";
	const description =
		"Crossbow-type ranged weapon which poisons enemies hit by its bolts.";
	const price = 2000;
	return (
		<Product
			name={name}
			description={description}
			price={price}
			imgSrc={Src}
		/>
	);
};

describe("open and close window of the product", () => {
	it('without item click content',()=>{
		const { container } = render(<ProductSetup />);
    	expect(container).toMatchSnapshot();
	})
	it("pop up on click", () => {
		const { container } = render(<ProductSetup />);
		const img = screen.getByRole("img", { name: "The Alchemic Carbine" });
		fireEvent.click(img);
		expect(!container).toMatchSnapshot();
	});
	it("close on click", () => {
		const { container } = render(<ProductSetup />);
		const img = screen.getByRole("img", { name: "The Alchemic Carbine" });
		fireEvent.click(img);
		const btnClose = screen.getByRole("button", { name: "close-icon" });
		fireEvent.click(btnClose);
		expect(container).toMatchSnapshot();

	});
});
