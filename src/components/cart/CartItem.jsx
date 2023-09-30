import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addItemToCart, removeItemFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="flex w-[650px] flex-row content-center items-center rounded-2xl border-none pl-5 py-4 gap-3 shadow-[0_1px_12px_rgb(0,0,0,0.15)]">
      <img className="w-32 rounded-lg" src={productImage} alt="" />
      <div className="">
        <p className="font-bold mb-2 text-lg">{productName}</p>
        <p>${price}</p>
        <div className="pt-5">
          <button
            onClick={() => removeItemFromCart(id)}
            className="border px-2 bg-slate-200"
          >
            -
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="w-16 outline-none"
          />
          <button
            onClick={() => addItemToCart(id)}
            className="border px-2 bg-slate-200"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
