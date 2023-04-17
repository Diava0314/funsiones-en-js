type Empresa = { nombre: string; direccion: string };

type Marca = 'New Balance' | 'Nike' | 'Adidas' | '';

type Producto = {
  nombre: string;
  precio: number;
  activo: boolean;
  empresa: Empresa;
  marca: Marca;
};

const app = document.getElementById('app')!;

function crearProducto(producto: Producto) {
  const productos = document.getElementById('productos')!;
  const tr = document.createElement('tr');
  tr.innerHTML = /*html*/ `
  
  <td>${producto.nombre}</td>
  <td>${producto.precio}</td>
  <td>${producto.activo}</td>
  <td>${producto.empresa.nombre}, ${producto.empresa.direccion}</td>
  <td>${producto.marca}</td>
  
  `;

  productos.appendChild(tr);
}

app.innerHTML = /*html*/ `

<form id="formulario-producto">
<div><label for="nombre">Nombre:</label>
  <input type="text"  name="nombre" >
  </div>
  <br/>
  <div><label for="precio">Precio:</label>
  <input type="text"  name="precio" >
  <small>Precios mayores a mil</small>
  </div>
  <br/>
  <div><label for="activo">Activo:</label>
  <input type="checkbox"  name="activo" >
  </div>
  <br/>
  <fieldset title="Empresa">
    <div>
      <h3>Empresa</h3>
    </div>
    <div>
        <label for="empresa">Nombre:</label>
        <input type="text" name="empresa.nombre">
    </div>
    <div>
        <label for="empresa">Dirección:</label>
        <input type="text" name="empresa.direccion">
    </div>
  </fieldset>
  <br/>
  <div><label for="marca">Marca:</label>
  <select type="text"  name="marca" >
  <option value="">Seleccionar</option>
  <option>New Balance</option>
  <option>Nike</option>
  <option>didas</option>
  </select>
  </div>
  <div>
  <button>Enviar</button>
  </div>
</form>
<table>
 <thead>
  <tr>
  <th>Nombre</th>
  <th>Precio</th>
  <th>Activo</th>
  <th>Empresa</th>
  <th>Marca</th>
  </tr>
  <tbody id="productos">
  </tbody>
 <thead>
</table>
`;

const formularioProducto = document.getElementById('formulario-producto')!;

function formularioEsValido() {
  if (producto.nombre === '') return false;
  if (producto.precio <= 1000) return false;
  if (producto.marca === '') return false;
  if (
    producto.marca !== 'New Balance' &&
    producto.marca !== 'Nike' &&
    producto.marca !== 'Adidas'
  )
    return false;
  if (producto.empresa.nombre === '') return false;
  if (producto.empresa.direccion === '') return false;

  return true;
}

formularioProducto.addEventListener('submit', (event) => {
  event.preventDefault();

  const esValido = formularioEsValido();
  if (esValido === false) return;

  crearProducto(producto);
  (event.target as HTMLFormElement).reset();
  producto = {
    nombre: '',
    precio: 0,
    activo: false,
    marca: '',
    empresa: { nombre: '', direccion: '' },
  };
});

let producto: Producto = {
  nombre: '',
  precio: 0,
  activo: false,
  marca: '',
  empresa: { nombre: '', direccion: '' },
};

const nombre = document.querySelector("[name='nombre']") as HTMLInputElement;
const precio = document.querySelector("[name='precio']") as HTMLInputElement;
const activo = document.querySelector("[name='activo']") as HTMLInputElement;
const nombreEmpresa = document.querySelector(
  "[name='empresa.nombre']"
) as HTMLInputElement;
const direccionEmpresa = document.querySelector(
  "[name='empresa.direccion']"
) as HTMLInputElement;
const marca = document.querySelector("[name='marca']") as HTMLInputElement;

nombre.addEventListener('input', (event) => {
  producto.nombre = (event.target as HTMLInputElement).value;
});

precio.addEventListener('input', (event) => {
  producto.precio = Number((event.target as HTMLInputElement).value);
});

activo.addEventListener('input', (event) => {
  producto.activo = (event.target as HTMLInputElement).checked;
});

nombreEmpresa.addEventListener('input', (event) => {
  producto.empresa.nombre = (event.target as HTMLInputElement).value;
});

direccionEmpresa.addEventListener('input', (event) => {
  producto.empresa.direccion = (event.target as HTMLInputElement).value;
});

marca.addEventListener('input', (event) => {
  producto.marca = (event.target as HTMLInputElement).value as Marca;
});

export {};
