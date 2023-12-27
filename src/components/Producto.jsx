import React, { useState } from "react";

function Producto({ nombre, imagen, precio, agregarPedido }) {
  const [cantidad, setCantidad] = useState(1);

  const incrementarCantidad = (event) => {
    event.preventDefault();
    if (cantidad > 0) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementarCantidad = (event) => {
    event.preventDefault();
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const gestionarPedido = (event) => {
    event.preventDefault();
    return agregarPedido({
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
      imagen: imagen,
    });
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <div className="w-64 border-2 border-blue-500 rounded-md overflow-hidden shadow-md transition duration-300 transform-gpu hover:shadow-lg hover:scale-105">
          <div className="h-40">
            <img
              className="w-full h-full object-contain"
              src={imagen}
              alt={nombre}
            />
          </div>
          <div className="p-4">
            <p className="text-center font-bold">{nombre}</p>
            <p className="text-center">${precio}</p>
          </div>
          <div className="flex justify-center items-center space-x-4 p-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={gestionarPedido}
            >
              Agregar al carrito
            </button>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="px-2 py-1" onClick={decrementarCantidad}>
                -
              </button>
              <p className="px-4">{cantidad}</p>
              <button className="px-2 py-1" onClick={incrementarCantidad}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Producto;
