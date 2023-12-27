import React from "react";

const Checkout = () => {
  const handlePayment = (e) => {
    e.preventDefault();
    // Add logic to handle the payment method submission
    // For demo purposes, you can console.log the payment information
    const formData = new FormData(e.target);
    const paymentData = {};
    formData.forEach((value, key) => {
      paymentData[key] = value;
    });
    console.log("Payment Information:", paymentData);
  };

  return (
    <div>
      <h2>Checkout / Pago</h2>
      <form onSubmit={handlePayment} className="max-w-md mx-auto">
        <h3>Seleccione su método de pago:</h3>
        <div className="flex flex-col space-y-2 mt-4">
          <label>
            <input type="radio" name="paymentMethod" value="creditCard" />
            Tarjeta de crédito / débito
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="paypal" />
            PayPal
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="cash" />
            Efectivo
          </label>
        </div>

        <h3 className="mt-6">Detalles de pago:</h3>
        <div className="flex flex-col space-y-4 mt-4">
          <label>
            Nombre en la tarjeta:
            <input type="text" name="cardName" />
          </label>
          <label>
            Número de tarjeta:
            <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" />
          </label>
          <div className="flex justify-between">
            <label>
              Fecha de expiración:
              <input type="text" name="expirationDate" placeholder="MM/AA" />
            </label>
            <label>
              CVV:
              <input type="text" name="cvv" placeholder="123" />
            </label>
          </div>
        </div>

        <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pagar Ahora
        </button>
      </form>
    </div>
  );
};

export default Checkout;
