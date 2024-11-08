import React, { useState } from "react";

import * as assets from "../../assets/index.js";
import CartIcon from "../../icons/CartIcon.tsx";
import FullNavMenu from "./FullNavMenu.tsx";
import Hamburger from "./Hamburger.tsx";
import useMyContext from "../../hooks/useMyContext.tsx";
import CartContext from "../../context/cart-context.tsx";
import CartMenu from "./CartMenu.tsx";

import s from "./Nav.module.css";

export default function Nav() {
  const { items, totalQuantity } = useMyContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(!showCart);

  return (
    <nav className={`${s.navWrapper}`}>
      <div className={s.navLft}>
        <div className={s.logo}>
          <img
            src={assets.logo}
            alt="Company logo."
          />
        </div>
        <Hamburger />
        <FullNavMenu />
      </div>
      <div className={s.navRht}>
        <div className={s.cart} onClick={showCartHandler}>
          <CartIcon />
          {items.length > 0 && (
            <span className={s.cartIconCount}>{totalQuantity}</span>
          )}
        </div>
        {showCart && <CartMenu items={items} onShowCart={showCartHandler} />}
        <div className={s.profile}>
          <img
            src={assets.avatar}
            alt="Profile image"
          />
        </div>
      </div>
    </nav>
  );
}
