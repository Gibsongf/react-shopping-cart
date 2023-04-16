import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { Product } from "./Products";
import Src from "../imgs/tactics/Alchemic_Carbine_Icon.png";

const ProductSetup = (props) => {
	const name = "The Alchemic Carbine";
	const description =
		"Crossbow-type ranged weapon which poisons enemies hit by its bolts.";
	const price = 2000;
	return (
		<Product
			btnClose={props.btnClose}
			name={name}
			description={description}
			price={price}
			imgSrc={Src}
			// val={quantity}
			setVal={props.setVal}
		/>
	);
};
const setup = () => {
    const btnCloseMock = jest.fn();
    const setValMock = jest.fn();
    render(<ProductSetup setVal={setValMock} btnClose={btnCloseMock} />);
};
describe("open and close window of the product", () => {
	
	it("pop up on click", () => {
        setup();
		const img = screen.getByRole("img", { name: "The Alchemic Carbine" });
		fireEvent.click(img);
		const imgSelected = screen.getByRole("img", {
			name: "item-img-select",
		});
		expect(imgSelected.className).toBe("item-img-select");
	});
	it("close on click", () => {
        setup();
		const img = screen.getByRole("img", { name: "The Alchemic Carbine" });
		fireEvent.click(img);
		const imgSelected = () =>
			screen.queryByRole("img", {
				name: "item-img-select",
			});

		const btnClose = screen.getByRole("button", { name: "close-icon" });
		fireEvent.click(btnClose);
		expect(imgSelected()).toBe(null);
	});
});
