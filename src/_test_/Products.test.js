import { render, screen } from "@testing-library/react";
import React from "react";
import { Product } from "../components/Products";
import { ProductDetails } from "../components/DetailProduct";
import Src from "../imgs/tactics/Alchemic_Carbine_Icon.png";
import userEvent from "@testing-library/user-event";

// const ProductSetup = (props) => {
// 	const name = "The Alchemic Carbine";
// 	const description =
// 		"Crossbow-type ranged weapon which poisons enemies hit by its bolts.";
// 	const price = 2000;

// 	return (
// 		<ProductDetails
// 		name={name}
// 		description={description}
// 		price={price}
// 		imgSrc={Src}
// 		addToCart={props.addToCart}
// 		test={true}
// 		/>
// 	);
// };

// describe("open and close window of the product", () => {
// 	it('renders product details',()=>{
// 		const { container } = render(<ProductSetup />);
//     	expect(container).toMatchSnapshot();
// 	})

// 	it("add to cart called right", async () => {
// 		const addCartMock = jest.fn()
// 		const user = userEvent.setup()
// 		render(<ProductSetup addToCart={addCartMock}/>);
// 		const btnAdd = screen.getByRole("button", { name: "ADD TO CART" });
// 		await user.click(btnAdd)
// 		expect(addCartMock).toHaveBeenCalledTimes(1);
// 	});
// });
