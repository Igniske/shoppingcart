import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import Checkout from './Checkout'; 
import CartSVG from '../assets/CartSVG.svg'

const Modal = ({ carritoDeCompras, removeFromCart, updateCartItemQuantity, vaciarCarrito }) => {
  const [showModal, setShowModal] = useState(false);
  const [valorFinal, setValorFinal] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [valorChanged, setValorChanged] = useState(false); // State for visual change

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleProceedToCheckout = () => {
    setShowCheckout(true); 
  };

  useEffect(() => {
    function calcularValorTotal() {
      let valorPorPedidos = carritoDeCompras.map((pedido) => pedido.precio * pedido.cantidad);
      let total = valorPorPedidos.reduce((acc, currentValue) => acc + currentValue, 0);
      setValorFinal(total);

      // Trigger visual change when valorFinal changes
      setValorChanged(true);
      setTimeout(() => {
        setValorChanged(false);
      }, 1000); // Change back after 1 second (adjust timing as needed)
    }

    calcularValorTotal();
  }, [carritoDeCompras]);

  return (
    <>
       <button
        onClick={openModal}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform duration-500 ${
          valorChanged ? 'transform scale-110' : ''
        }`}
      >
        <img src={CartSVG} alt="Cart" className="w-5 h-5 inline mr-2" />
        <span>${valorFinal}</span>
      </button>
      {showModal && (
        <div className="fixed inset-0 z-50 text-black flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">ShopKart</h2>
                <div>
                  {showCheckout ? (
                    <Checkout 
                    vaciarCarrito={vaciarCarrito}
                    />
                  ) : (
                    <Cart
                      carritoDeCompras={carritoDeCompras}
                      valorFinal={valorFinal}
                      removeFromCart={removeFromCart}
                      updateCartItemQuantity={updateCartItemQuantity}
                    />
                  )}
                  {!showCheckout && (
                    <button
                      onClick={handleProceedToCheckout}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
                    >
                      Proceder al pago
                    </button>
                  )}
                  <button
                    onClick={closeModal}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4"
                  >
                    Cerrar carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
