const app = document.getElementById('app')!;

app.innerHTML = /*html*/ `

<select id="opciones">
<option value="" ></option>
<option value="1">area circulo</option>
<option value="2">area triangulo</option>
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
        <form>
         <div>
         <label>Radio</label>
         <input type="text" name="radio" />
         </div>
         <button>enviar</button>
        </form>
        `;
      break;

    case '2':
      operaciones.innerHTML = /*html*/ `
        
        <form>
        <div>
        <label>base</label>
        <input type="text" name="base"/>
        </div>
        <div>
        <label>Altura</label>
        <input type="text" name="altura">
        </div>
        <button>enviar</button>
        </form>
        
        `;
      break;

    default:
      break;
  }
});

export {};
