type Marca = 'Toyota' | 'For' | 'Mazda' | '';

type Carro = {
  nombre: string;
  marca: Marca;
  modelo: number;
  nuevo: boolean;
  usado: boolean;
};

const app = document.getElementById('app')!;

function carrosVentas(carro: Carro) {
  const carros = document.getElementById('carros')!;
  const tr = document.createElement('tr');
  tr.innerHTML = /*html*/ `
    
    <td>${carro.nombre}</td>
    <td>${carro.marca}</td>
    <td>${carro.modelo}</td>
    <td>${carro.nuevo}</td>
    <td>${carro.usado}</td>
    `;

  carros.appendChild(tr);
}

app.innerHTML = /*html*/ `

<form id="carrosventa">
<div>

<label for= "nombre">Nombre</label>
<input type="text"  name="nombre">
<div>
<br/>
<div><label for="marca">Marca:</label>
  <select  name="marca" >
  <option value="">Seleccionar</option>
  <option>Toyota</option>
  <option>For</option>
  <option>Mazda</option>
  </select>
  </div>
<br/>
<div><label for= "modelo">Modelo</label>
<input type="number"  name="modelo"></div>
<br/>
<label for= "nuevo">Nuevo</label>
<input type="checkbox"  name="nuevo">
<div>
<br/>
<label for= "usado">Usado</label>
<input type="checkbox"  name="usado">
</div>
<br/>
<div>
 <button type="submit">Enviar</button>
</div>
</div>
</form>

<table>
 <thead>
  <tr>
  <th>Nombre</th>
  <th>Marca</th>
  <th>Modelo</th>
  <th>Usado</th>
  <th>Nuevo</th>
  </tr>
  <tbody id="carros">
  </tbody>
 <thead>
</table>
`;

function formularioEsValido() {
  if (carro.nombre === '') return false;
  if (carro.marca === '') return false;
  if (carro.modelo <= 0) return false;
  if (
    carro.marca !== 'Toyota' &&
    carro.marca !== 'For' &&
    carro.marca !== 'Mazda'
  )
    return false;

  return true;
}

const formcarrosVenta = document.getElementById('carrosventa')!;
formcarrosVenta.addEventListener('submit', (event) => {
  event.preventDefault();

  const esValido = formularioEsValido();
  if (esValido === false) return;

  carrosVentas(carro);
  (event.target as HTMLFormElement).reset();
  carro = {
    nombre: '',
    marca: '',
    modelo: 0,
    usado: false,
    nuevo: false,
  };
});

let carro: Carro = {
  nombre: '',
  marca: '',
  modelo: 0,
  nuevo: false,
  usado: false,
};

const nombre = document.querySelector("[name='nombre']") as HTMLInputElement;
const marca = document.querySelector("[name='marca']") as HTMLInputElement;
const modelo = document.querySelector("[name='modelo']") as HTMLInputElement;
const nuevo = document.querySelector("[name='nuevo']") as HTMLInputElement;
const usado = document.querySelector("[name='usado']") as HTMLInputElement;

nombre.addEventListener('input', (event) => {
  carro.nombre = (event.target as HTMLInputElement).value;
});
marca.addEventListener('input', (event) => {
  carro.marca = (event.target as HTMLInputElement).value as Marca;
});
modelo.addEventListener('input', (event) => {
  carro.modelo = Number((event.target as HTMLInputElement).value);
});
nuevo.addEventListener('input', (event) => {
  carro.nuevo = Boolean((event.target as HTMLInputElement).value);
});
usado.addEventListener('input', (event) => {
  carro.usado = Boolean((event.target as HTMLInputElement).value);
});
export {};
