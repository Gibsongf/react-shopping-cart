import "./App.css";

import { Routes, Route, NavLink } from "react-router-dom";
import { Shop } from "./pages/Shop";
import Logo from "./imgs/Dead_Cells_logo.png";
import ShopIcon from "./imgs/cart-icon.png";
import { Home } from "./pages/Home";
function App() {

	return (
		<div className="App">
			<nav className="nav">
				<img className="logo" src={Logo} alt="logo" />
				<ul className="menu">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/shop">Shop</NavLink>
					</li>
					<li>
						<NavLink to="/cart">
							<img
								className="shop-icon"
								src={ShopIcon}
								alt="shop cart"
							/>
						</NavLink>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/shop" element={<Shop />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
