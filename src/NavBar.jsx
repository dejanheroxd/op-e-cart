import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-black text-white h-16 flex justify-end items-center p-5">
      <div className="flex gap-x-3 ">
        <Link className={`${isLinkActive("/") ? "font-semibold" : ""} `} to="/">
          Shop
        </Link>
        <Link
          className={`${isLinkActive("/cart") ? "font-semibold" : ""}`}
          to="/cart"
        >
          Cart
        </Link>
      </div>
    </div>
  );
}
