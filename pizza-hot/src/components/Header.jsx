import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";
import { UIContext } from "../contexts/UIContext";

export default function Header() {
  const { color } = useContext(ThemeContext);
  const { items } = useContext(CartContext);
  const {showCart} =useContext(UIContext);

  return (
    <header>
      <nav
        className={`navbar navbar-expand bg-${color} border-bottom border-body`}
        data-bs-theme="dark"
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            🍕 Pizza Hot
          </a>
          <button className="btn btn-dark" onClick={()=> showCart()}>
            <i className="bi bi-cart3"></i>
            <span className="ms-2">({items.length})</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
