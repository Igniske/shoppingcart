import React from 'react';
import Producto from './Producto'; 

const ListaDeProductos = ({ productos, gestionarPedido }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-lg mx-auto">
        {productos.map((producto, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Producto
              imagen={producto.imagen}
              nombre={producto.nombre}
              precio={producto.precio}
              cantidad={producto.cantidad}
              agregarPedido={gestionarPedido}
              incrementarCantidad={producto.incrementarCantidad}
              decrementarCantidad={producto.decrementarCantidad}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaDeProductos;
