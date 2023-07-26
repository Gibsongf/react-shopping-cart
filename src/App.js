import "./styles/App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Shop } from "./pages/Shop";
import Logo from "./imgs/Dead_Cells_logo.png";
import ShopIcon from "./imgs/cart-icon.png";
import { Home } from "./pages/Home";
import { Cart } from "./components/Cart";
import { createContext, useContext } from "react";
import { Order } from "./pages/Orders";
import { ProductDetails } from "./components/DetailProduct";

export const ShopContext = createContext({
    storage: {},
    updateStorage: () => {},
    changeProductQuantity: () => {},
    removeProduct: () => {},
    quantity: 0,
});

const Header = () => {
    const { quantity } = useContext(ShopContext);
    return (
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
    );
};
function App() {
    const {
        updateStorage,
        storage,
        quantity,
        changeProductQuantity,
        removeProduct,
    } = Cart();
    return (
        <div className="App">
            <ShopContext.Provider
                value={{
                    storage,
                    quantity,
                    updateStorage,
                    changeProductQuantity,
                    removeProduct,
                }}
            >
                <Header />

                <Routes>
                    <Route path="cart" element={<Order />} />
                    <Route path="shop/*">
                        <Route index element={<Shop />} />
                        <Route path=":id" element={<ProductDetails />} />
                    </Route>
                    <Route path="/" element={<Home />} />
                </Routes>
            </ShopContext.Provider>
        </div>
    );
}

export default App;
