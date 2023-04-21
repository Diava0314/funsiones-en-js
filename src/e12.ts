const app = document.getElementById('app')!;

app.innerHTML = /*html*/ `

<select id="opciones">
<option value="" ></option>
<option value="1">area circulo</option>
<option value="2">area triangulo</option>
</select>

<div id="operaciones"></div>
`;

type Circulo = {
  radio: number;
};

let circulo: Circulo = {
  radio: 0,
};

type Triangulo = {
  base: number;
  altura: number;
};

let triangulo: Triangulo = {
  base: 0,
  altura: 0,
};

function areaDelCirculo(radio: number) {
  return Math.PI * Math.pow(radio, 2);
}

function areaDelTriangulo(base: number, altura: number) {
  return (base * altura) / 2;
}

const operaciones = document.getElementById('operaciones')!;
const opciones = document.getElementById('opciones')!;

opciones.addEventListener('change', (event) => {
  const value = (event.target as HTMLSelectElement).value;

  switch (value) {
    case '1':
      operaciones.innerHTML = /*html*/ `
        <form id="formulario-circulo">
         <div>
         <label>Radio</label>
         <input type="text" name="radio" />
         </div>
         <button>enviar</button>
        </form>
        
        `;

      let radio = document.querySelector('[name="radio"]')!;
      radio.addEventListener('input', (event) => {
        circulo.radio = Number((event.target as HTMLInputElement).value);
      });
      const formularioCirculo = document.getElementById('formulario-circulo')!;
      formularioCirculo.addEventListener('submit', (event) => {
        event.preventDefault();
        operaciones.innerHTML = /*html*/ `
 
    <p>${areaDelCirculo(circulo.radio)}</p>
 `;
      });
      break;

    case '2':
      operaciones.innerHTML = /*html*/ `
        
        <form id="formulario-triangulo">
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

      let base = document.querySelector('[name="base"]')!;
      base.addEventListener('input', (event) => {
        triangulo.base = Number((event.target as HTMLInputElement).value);
      });
      let altura = document.querySelector('[name="altura"]')!;
      altura.addEventListener('input', (event) => {
        triangulo.altura = Number((event.target as HTMLInputElement).value);
      });

      const operacion = document.getElementById('operaciones')!;
      let formularioTriangulo = document.getElementById(
        'formulario-triangulo'
      )!;
      formularioTriangulo.addEventListener('submit', (event) => {
        event.preventDefault();

        operacion.innerHTML = /*html*/ `
  
  <p>${areaDelTriangulo(triangulo.base, triangulo.altura)}</p>
  
  `;
      });
      break;

    default:
      break;
  }
});

export {};
