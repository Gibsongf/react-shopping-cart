import "./styles/App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Shop } from "./pages/Shop";
import Logo from "./imgs/Dead_Cells_logo.png";
import ShopIcon from "./imgs/cart-icon.png";
import { Home } from "./pages/Home";
import { Cart } from "./components/Cart";
import { useState } from "react";
import { Order } from "./pages/Orders";
import { ProductDetails } from "./components/DetailProduct";
function App() {
	const [quantity, setQuantity] = useState(0);
	const cart = Cart(setQuantity);
	const [selectItem, setSelectItem] = useState({});
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
						<NavLink className="cart-icon-nav" to="/cart">
							<img
								className="shop-icon"
								src={ShopIcon}
								alt="shop cart"
							/>
							{quantity}
						</NavLink>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route
					path="cart"
					element={<Order listOrders={cart.storage} />}
				/>
				<Route path="shop/*">
					<Route
						index
						element={
							<Shop
								addToCart={cart.updateStorage}
								setItemDetail={setSelectItem}
							/>
						}
					/>
					<Route
						path=":id"
						element={
							<ProductDetails
								{...selectItem}
								addToCart={cart.updateStorage}
							/>
						}
					/>
				</Route>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
