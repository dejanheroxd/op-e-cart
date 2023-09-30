import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addItemToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="flex flex-col items-center">
      <img
        className="w-48 object-fit h-48 rounded-lg"
        src={productImage}
        alt=""
      />
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="font-semibold text-xl mt-4">{productName}</p>
        <p className="mb-3">${price}</p>
      </div>
      <button
        onClick={() => addItemToCart(id)}
        className="border-black border hover:bg-black hover:text-white bg-white px-3 py-1 rounded-lg"
      >
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
}

export default Product;
