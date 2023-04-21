/**realizar un formulario que contenga:
 * 1) Un dropdown el cual debe mostrar dos opciones::
 * - convertir de grados Cº a Fº
 * - convertir de Fº a Cº
 * 2) un input para escribir la cantidad numerica a convertir
 * 3) un boton para calcular la conversion.
 *
 * recordar que la conversion debe hacerse cuando se envia el formulario
 * no cuando se hace click en el boton.
 * */

const app = document.getElementById('app')!;

app.innerHTML = /*html*/ `
  <select id="opciones">
    <option value=""></option>
    <option value="1">Convertir de grados Cº a Fº</option>
    <option value="2">Convertir de Fº a Cº</option>
  </select>

  <div id="operaciones"></div>
`;

const operaciones = document.getElementById('operaciones')!;
const opciones = document.getElementById('opciones')!;

opciones.addEventListener('change', (event) => {
  const value = (event.target as HTMLSelectElement).value;

  switch (value) {
    case '1':
      operaciones.innerHTML = /*html*/ `
        <form id="formulario-celsius">
          <div>
            <label>Grados Celsius:</label>
            <input type="number" name="celsius" />
          </div>
          <button type="submit">Calcular</button>
        </form>
      `;

      const formularioCelsius = document.getElementById('formulario-celsius')!;
      formularioCelsius.addEventListener('submit', (event) => {
        event.preventDefault();
        const celsius = Number(
          (
            formularioCelsius.querySelector(
              '[name="celsius"]'
            ) as HTMLInputElement
          ).value
        );
        const fahrenheit = (celsius * 9) / 5 + 32;
        operaciones.innerHTML =
          /*html*/
          `<p>${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit</p>`;
      });
      break;

    case '2':
      operaciones.innerHTML = /*html*/ `
        <form id="formulario-fahrenheit">
          <div>
            <label>Grados Fahrenheit:</label>
            <input type="number" name="fahrenheit" />
          </div>
          <button type="submit">Calcular</button>
        </form>
      `;

      const formularioFahrenheit = document.getElementById(
        'formulario-fahrenheit'
      )!;
      formularioFahrenheit.addEventListener('submit', (event) => {
        event.preventDefault();
        const fahrenheit = Number(
          (
            formularioFahrenheit.querySelector(
              '[name="fahrenheit"]'
            ) as HTMLInputElement
          ).value
        );
        const celsius = ((fahrenheit - 32) * 5) / 9;
        operaciones.innerHTML =
          /*html*/
          `<p>${fahrenheit} grados Fahrenheit son ${celsius} grados Celsius</p>`;
      });
      break;

    default:
      break;
  }
});

export {};
