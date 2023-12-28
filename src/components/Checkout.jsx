import React from "react";
import {useState} from "react";

const Checkout = ({vaciarCarrito}) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const paymentData = {};
    formData.forEach((value, key) => {
      paymentData[key] = value;
    });

    // Check if all required fields are filled
    const requiredFields = ['paymentMethod', 'cardNumber', 'expirationDate', 'cvv'];
    const isFormComplete = requiredFields.every(field => paymentData[field]);

    if (isFormComplete) {
      console.log("Payment Information:", paymentData);
      setPaymentSuccess(true);
      vaciarCarrito();
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').substring(0, 16); // Allow only numbers and limit to 16 digits
    e.target.value = input;
  };

  const handleExpirationDateChange = (e) => {
    let input = e.target.value.replace(/\D/g, '').substring(0, 4); // Allow only numbers and limit to 4 characters
    if (input.length > 2) {
      // Add a slash after entering two characters
      input = input.replace(/(\d{2})(\d{2})/, '$1/$2');
      const month = parseInt(input.substring(2, 4), 10);
      const day = parseInt(input.substring(0, 2), 10);
  
      // Limite mes a 12 y dia a 31
      if (month > 12) {
        input = input.substring(0, 2) + '12';
      }
      if (day > 31) {
        input = '31/' + input.substring(3, 5);
      }
    } else if (input.length === 2) {
      input += '/';
    }
    e.target.value = input;
  };
  

  const handleCVVChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').substring(0, 3); // Allow only numbers and limit to 3 characters
    e.target.value = input;
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
          Número de tarjeta:
          <input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            onChange={handleCardNumberChange}
          />
        </label>
        <div className="flex justify-between">
          <label>
            Fecha de expiración:
            <input
              type="text"
              name="expirationDate"
              placeholder="MM/AA"
              onChange={handleExpirationDateChange}
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              placeholder="123"
              onChange={handleCVVChange}
            />
          </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Pagar Ahora
        </button>
      </form>
      {paymentSuccess && (
        <div className="mt-4 text-green-600 font-semibold">
          ¡Pago realizado con éxito!
        </div>
      )}
    </div>
  );
};

export default Checkout;
