document.addEventListener('DOMContentLoaded', (event) => {

  // PUNTO 1

  const homero = document.querySelector("#homero");
  if (homero) {
      homero.addEventListener("click", () => {
          homero.classList.toggle("borde");
      });
  }

  // PUNTO 2

  const input21 = document.querySelector("#input21");
  const input22 = document.querySelector("#input22");
  const input23 = document.querySelector("#input23");
  const parrafoLlevas = document.querySelector("#cuenta"); // Selecciona el párrafo "Llevas #"
  const parrafoDemasiadas = document.querySelector("#verificacion"); // Selecciona el párrafo "Llevas demasiadas"
  const comprar = document.querySelector("#comprar");

  if (input21 && input22 && input23 && parrafoLlevas && parrafoDemasiadas && comprar) {
      const max = 10;
      let cant = 0;

      // Muestra "Llevas 0 consolas." por defecto
      parrafoLlevas.innerHTML = `Llevas ${cant} consolas.`;
      parrafoDemasiadas.style.display = 'none'; // Oculta párrafo "Llevas demasiadas"

      input21.addEventListener('input', actualizarCantidad);
      input22.addEventListener('input', actualizarCantidad);
      input23.addEventListener('input', actualizarCantidad);

      function actualizarCantidad() {
          // Convierte valores a números antes de la suma
          let suma = parseInt(input21.value) + parseInt(input22.value) + parseInt(input23.value);
          cant = suma;

          // Muestra el párrafo dinámico con la cantidad cada que cambian los inputs
          mostrarParrafoSegunCantidad();
      }

      function mostrarParrafoSegunCantidad() {
          if (cant <= max) {
              parrafoLlevas.style.display = 'block';
              parrafoDemasiadas.style.display = 'none';
              parrafoLlevas.innerHTML = `Llevas ${cant} consolas.`;
          } else {
              parrafoLlevas.style.display = 'none';
              parrafoDemasiadas.style.display = 'block';
          }
      }

      comprar.addEventListener("click", () => {
          let cant = parseInt(input21.value) + parseInt(input22.value) + parseInt(input23.value);

          if (cant <= max) {
              alert("Gracias por tu compra, ¡qué las disfrutes!");
          } else {
              alert("Superas la cantidad máxima, ¡ajusta tu pedido!");
          }
      });
  }

  // PUNTO 3

  function checkPassword() {
      const digit1 = document.getElementById('digit1').value;
      const digit2 = document.getElementById('digit2').value;
      const digit3 = document.getElementById('digit3').value;

      const password = digit1 + digit2 + digit3;
      const messageElement = document.getElementById('message');

      if (password === '911') {
          messageElement.textContent = 'Password 1 correcto';
          messageElement.style.color = 'green';
      } else if (password === '714') {
          messageElement.textContent = 'Password 2 correcto';
          messageElement.style.color = 'green';
      } else {
          messageElement.textContent = 'Password incorrecto';
          messageElement.style.color = 'red';
      }
  }

  // Adjuntar "checkPassword" al ámbito global para que pueda ser llamada desde el HTML
  window.checkPassword = checkPassword;
});