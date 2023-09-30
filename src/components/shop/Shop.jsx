import { PRODUCTS } from "../../products";
import Header from "../ui/Header";
import Product from "./Product";

function Shop() {
  return (
    <div>
      <div>
        <Header>Berry Shop</Header>
      </div>
      <div className="grid grid-cols-3 gap-9 justify-center items-center">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
