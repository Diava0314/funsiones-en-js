const app = document.getElementById('app')!;
const operacionesformulrio = document.getElementById('opcionesformulario')!;
const formulario = document.getElementById('formulario')!;

type Operaciones = {
  numero1: number;
  numero2: number;
};

app.innerHTML = /*html*/ `

<div><h1>Calculadora de areas<h1></div>
<div><label for="operaciones">Operaciones:</label>
<select  id="operacioness" >
<option value="">Seleccionar</option>
<option value="opcion1">Area del circulo</option>
<option value="opcion2">Area del cuadrado</option>
<option value="opcion3">Area del triangulo</option>
</select></div>


<br/>
<form id="formulario">
 <div id="opcion1">
 <label for="numero1">Numero 1</label>
 <input type="number" name="numero1"/> </div>
 
 <br/>

 <div>
 <label for="numero2">Numero 2</label>
 <input type="number" name="numero2"/></div>
</form>
<br/>

<div id="opcion2" style="display:none;">
<label for="numero1">Numero 5</label>
<input type="number" name="numero1"/> </div>

<br/>


<button type="submit">Calcular</button>

`;

let operaciones: Operaciones = {
  numero1: 0,
  numero2: 0,
};

const operacioness = document.getElementById('operacioess') as HTMLInputElement;

operacioness.addEventListener('change', () => {
  const opcion = operacioness.value;
  const opcion1 = document.getElementById('opcion1');
  const opcion2 = document.getElementById('opcion2');
  const opcion3 = document.getElementById('opcion3');
});

const numero1 = document.querySelector('[name=numero1]') as HTMLInputElement;
const numero2 = document.querySelector('[name=numero2]') as HTMLInputElement;

numero1.addEventListener('input', (event) => {
  operaciones.numero1 = Number((event.target as HTMLInputElement).value);
});

numero2.addEventListener('input', (event) => {
  operaciones.numero2 = Number((event.target as HTMLInputElement).value);
});

export {};
