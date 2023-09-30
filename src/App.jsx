import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar"; // Import NavBar without {}
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import ShopContextProvider from "./context/shop-context";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
