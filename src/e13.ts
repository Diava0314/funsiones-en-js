const app = document.getElementById('app')!;

app.innerHTML = /*html*/ `

<select id="seleccion">
 <option value="" ></option>
 <option value="1" >opcion 1</option>
 <option value="2" >opcion 2</option>
</select>

<div id="opciones"></div>
`;

const opciones = document.getElementById('opciones')!;
const seleccion = document.getElementById('seleccion')!;

seleccion.addEventListener('change', (event) => {
  const value = (event.target as HTMLSelectElement).value;

  switch (value) {
    case '1':
      opciones.innerHTML = /*html*/ `
      <p>hola bien</p>
      `;
      break;

    case '2':
      opciones.innerHTML = /*html*/ `
      <div>que bien bro</div>
      `;
      break;

    default:
      break;
  }
});

export {};
