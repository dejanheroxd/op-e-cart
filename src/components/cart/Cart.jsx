import { PRODUCTS } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import Header from "../ui/Header";

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <div>
        <Header>Your Cart</Header>
      </div>
      <div className="flex flex-col gap-4 items-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="grid mt-16 w-96 gap-2 grid-cols-2 grid-rows-2 justify-center items-center">
          <p>Subtotal: ${totalAmount}</p>
          <button
            onClick={() => navigate("/")}
            className="bg-black col-start-1 col-end-2 text-white w-44 h-12 rounded-lg"
          >
            Continue Shopping
          </button>
          <button className="bg-black text-white w-44 h-12 rounded-lg">
            Checkout
          </button>
        </div>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
