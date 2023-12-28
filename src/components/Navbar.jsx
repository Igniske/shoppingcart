import React from "react";
import Modal from "./Modal";

const Navbar = ({ carritoDeCompras, removeFromCart, updateCartItemQuantity, vaciarCarrito }) => {
  return (
    <nav className="bg-blue-900 p-4 flex justify-between items-center text-white sticky top-0 z-50">
      <div className="flex items-center">
        <span className="text-xl font-bold">ShopKart</span>
      </div>
      <div>
        <Modal
          carritoDeCompras={carritoDeCompras}
          removeFromCart={removeFromCart}
          updateCartItemQuantity={updateCartItemQuantity}
          vaciarCarrito={vaciarCarrito}
        />
      </div>
    </nav>
  );
};

export default Navbar;
