const app = document.getElementById('app')!;

type Circulo = {
  radio: number;
};

let circulo: Circulo = {
  radio: 0,
};

function areaDelCirculo(radio: number) {
  return Math.PI * Math.pow(radio, 2);
}

app.innerHTML = /*html*/ `

<form id="formulario-circulo">
<label for="radio">radio</label>
<input type="text" name="radio" />
<button>Calcular</button>
</form>

<div id="operacion-area"></div>
`;

let radio = document.querySelector('[name="radio"]')!;
radio.addEventListener('input', (event) => {
  circulo.radio = Number((event.target as HTMLInputElement).value);
});

let formularioCirculo = document.getElementById('formulario-circulo')!;
const operacion = document.getElementById('operacion-area')!;
formularioCirculo.addEventListener('submit', (event) => {
  event.preventDefault();
  operacion.innerHTML = /*html*/ `
    
 <p>${areaDelCirculo(circulo.radio)}</p>
      
    `;
});

export {};
