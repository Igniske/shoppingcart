import React from 'react';

const Cart = ({ carritoDeCompras, valorFinal, removeFromCart, updateCartItemQuantity }) => {
  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) {
      newQuantity = 1; // Set the minimum quantity to 1
    }
    updateCartItemQuantity(index, newQuantity);
  };

  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-4">Tu carrito</h2>
      <div className="grid grid-cols-1 gap-4">
        {carritoDeCompras.map((item, index) => (
          <div key={index} className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center space-x-4">
              <img src={item.imagen} alt={item.nombre} className="w-16 h-16 rounded-md" />
              <div>
                <p className="text-lg font-semibold">{item.nombre}</p>
                <p className="text-gray-600">${item.precio} - Cantidad:</p>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(index, item.cantidad - 1)}
                    className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.cantidad}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    min={1}
                    className="w-12 text-center border border-gray-300 rounded-md mx-2"
                  />
                  <button
                    onClick={() => handleQuantityChange(index, item.cantidad + 1)}
                    className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-700">Total: ${item.precio * item.cantidad}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemoveItem(index)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p className="text-lg font-semibold">Total: ${valorFinal}</p>
      </div>
    </div>
  );
};

export default Cart;
