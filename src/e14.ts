const app = document.getElementById('app')!;

type Triangulo = {
  base: number;
  altura: number;
};

let triangulo: Triangulo = {
  base: 0,
  altura: 0,
};

app.innerHTML = /*html*/ `
<form id="formulario-triangulo">

<label for="base">base</label>
<input type="text"  name="base"  />
<label for="altura">altura</label>
<input  type="text" name="altura" />
<button>Calcular</button>
</form>

<div id="operacion"></div>
`;
function areaDelTriangulo(base: number, altura: number) {
  return (base * altura) / 2;
}

let base = document.querySelector('[name="base"]')!;
base.addEventListener('input', (event) => {
  triangulo.base = Number((event.target as HTMLInputElement).value);
  console.log(triangulo);
});

let altura = document.querySelector('[name="altura"]')!;
altura.addEventListener('input', (event) => {
  triangulo.altura = Number((event.target as HTMLInputElement).value);
  console.log(triangulo);
});
const operacion = document.getElementById('operacion')!;
let formularioTriangulo = document.getElementById('formulario-triangulo')!;
formularioTriangulo.addEventListener('submit', (event) => {
  event.preventDefault();

  operacion.innerHTML = /*html*/ `
  
  <p>${areaDelTriangulo(triangulo.base, triangulo.altura)}</p>
  
  `;
});
export {};
