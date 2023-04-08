import "./App.css";
import { Items, ItemSelected } from "./components/Items";
import Img from "../src/imgs/tactics/Alchemic_Carbine_Icon.png";
import { useState } from "react";
function App() {
	const d = `A crossbow-type ranged weapon which poisons enemies hit by its bolts`;
	const [quantity, setQuantity] = useState(0);

	return (
		<div className="App">
			<ItemSelected
				name={"Alchemic Carbine"}
				imgSrc={Img}
				price={100}
				description={d}
        val={quantity}
        setVal={setQuantity}
			/>
      
		</div>
	);
}

export default App;
