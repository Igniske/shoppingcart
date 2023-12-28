Documentación del Programa "ShopKart"

Descripción:
ShopKart es una aplicación web que permite a los usuarios seleccionar y comprar productos. Ofrece funcionalidades como agregar productos al carrito, visualizar el carrito de compras, gestionar cantidades y realizar pagos.

Componentes Principales:
"Navbar"
El componente Navbar muestra la barra de navegación en la parte superior de la página. Contiene el nombre del sitio y muestra la cantidad de elementos en el carrito. Además, incluye un enlace o botón para abrir el modal que muestra el carrito.

"Modal"
El componente Modal es una ventana emergente que muestra el carrito de compras y opciones para proceder al pago o cerrar el carrito. Muestra el valor total de los elementos en el carrito y ofrece la opción de pagar o continuar comprando.

"ListaDeProductos"
El componente ListaDeProductos muestra una lista de productos disponibles para su compra. Cada producto incluye una imagen, nombre, precio, y botones para agregar al carrito y gestionar la cantidad.

"Cart"
El componente Cart muestra los elementos agregados al carrito. Muestra cada elemento con su imagen, nombre, precio, cantidad y opción para eliminar el producto del carrito.

"Checkout"
El componente Checkout gestiona el proceso de pago. Puede incluir formularios de pago, confirmación de compra y cualquier otro paso necesario para completar la transacción.

Funcionalidades Principales
-Agregar al Carrito: Los usuarios pueden agregar productos al carrito desde la lista de productos. Esto actualiza la cantidad de elementos en el carrito y recalcula el valor total.
-Eliminar del Carrito: Se puede eliminar un elemento del carrito, lo que actualiza automáticamente el valor total.
-Gestionar Cantidades: Los usuarios pueden ajustar las cantidades de los elementos en el carrito antes de proceder al pago.
-Proceder al Pago: El botón "Proceder al pago" en el modal lleva al usuario al proceso de pago para completar la compra.

Tecnologías Utilizadas:
-React: La aplicación está construida usando React, un framework de JavaScript para el desarrollo de interfaces de usuario.
-Tailwind CSS: Se utiliza para el diseño y estilización de los componentes, aprovechando las clases predefinidas para agilizar el desarrollo.
