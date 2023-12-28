import './App.css'
import Clarin from './assets/Clarin.jpg'
import Lanacion from './assets/Lanacion.png'
import Cronica from './assets/cronica.jpg'
import Popular from './assets/popular.jpg'
import ListaDeProductos from './components/ListaDeProductos'
import { useState } from 'react'
import Navbar from './components/Navbar'
function App() {

  const [carritoDeCompras, setCarritoDeCompras] = useState([])
  const [valorFinal, setValorFinal] = useState(0); 


  //Funcion que agrega al carrito los productos pertenecientes al pedido dado
  function agregarProductosAlCarrito(pedido) {
    if (Array.isArray(carritoDeCompras) && objectExistsWithKeyValue(carritoDeCompras, 'nombre', pedido.nombre)) {
      let indexOfObject = carritoDeCompras.findIndex(producto => producto.nombre === pedido.nombre);
      if (indexOfObject !== -1) {
        let updatedCarrito = carritoDeCompras.map((producto, index) => {
          if (index === indexOfObject) {
            return { ...producto, cantidad: producto.cantidad + pedido.cantidad };
          }
          return producto;
        });
        setCarritoDeCompras(updatedCarrito);
      }
    } else {
      setCarritoDeCompras(prevCarrito => [...prevCarrito, pedido]);
    }
  };

 

  // Funcion para remover elementos del carrito
  const removeFromCart = (indexToRemove) => {
    const updatedCart = carritoDeCompras.filter((item, index) => index !== indexToRemove);
    setCarritoDeCompras(updatedCart);

    // Recalcula el valor total despues de quitar un elemento
    const newTotal = updatedCart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    setValorFinal(newTotal);
  };


  // Function para vaciar el carrito
  const clearCart = () => {
    setCarritoDeCompras([]);
  };

  const objectExistsWithKeyValue = (array, key, value) => {
    return array.some(obj => Object.hasOwnProperty.call(obj, key) && obj[key] === value);
  };

  const updateCartItemQuantity = (index, newQuantity) => {
    const updatedCart = carritoDeCompras.map((item, idx) => {
      if (idx === index) {
        return { ...item, cantidad: newQuantity };
      }
      return item;
    });
    setCarritoDeCompras(updatedCart);
  };

  const productos = [
    {
      nombre: "Clarin de semana",
      imagen: Clarin,
      precio: 800
    },
    {
      nombre: "Nacion de semana",
      imagen: Lanacion,
      precio: 900
    },
    {
      nombre: "Popular de semana",
      imagen: Popular,
      precio: 380
    },
    {
      nombre: "Cronica de semana",
      imagen: Cronica,
      precio: 380
    },
    {
      nombre: "Clarin de sabado",
      imagen: Clarin,
      precio: 1200
    },
    {
      nombre: "Nacion de sabado",
      imagen: Lanacion,
      precio: 1300
    },
    {
      nombre: "Popular de sabado",
      imagen: Popular,
      precio: 380
    },
    {
      nombre: "Cronica de sabado",
      imagen: Cronica,
      precio: 380
    },
    {
      nombre: "Clarin de domingo",
      imagen: Clarin,
      precio: 1500
    },
    {
      nombre: "Nacion de domingo",
      imagen: Lanacion,
      precio: 1400
    },
    {
      nombre: "Popular de domingo",
      imagen: Popular,
      precio: 410
    },
    {
      nombre: "Cronica de domingo",
      imagen: Cronica,
      precio: 410
    },
    
  ];

  

  return (
    <div>
      <Navbar
        carritoDeCompras={carritoDeCompras}
        removeFromCart={removeFromCart}
        updateCartItemQuantity={updateCartItemQuantity}
        vaciarCarrito={clearCart}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <ListaDeProductos
          productos={productos}
          gestionarPedido={agregarProductosAlCarrito}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App
