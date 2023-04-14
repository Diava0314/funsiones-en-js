function familia() {
  console.log("padres, hermanos");
  return 4;
}

let resultado = familia();
console.log(resultado);

function areaDelCirculo(radio: number) {
  return Math.PI * Math.pow(radio, 2);
}

console.log(`Este es el area un circulo de radio 2: ${areaDelCirculo(2)}`);

function areaDelRectangulo(base: number, altura: number) {
  return base * altura;
}

console.log(`el area es ${areaDelRectangulo(2, 3)}`);

function areaDelCuadrado(lado: number) {
  return Math.pow(lado, 2);
}
console.log(`el area del cuadrado es: ${areaDelCuadrado(2)}`);

function areaDelTriangulo(base: number, altura: number) {
  return (base * altura) / 2;
}

console.log(`el area del triagulo es: ${areaDelTriangulo(2, 3)}`);

let figuras: string | null;

figuras = prompt(
  "Seleccione con que figura geometrica desea trabajar estan: Circulo, Rectangulo, Cuadrado, Triangulo"
);

switch (figuras) {
  case "circulo": {
    let radio = Number(prompt("asigne el radio"));
    alert(`su resultado es: ${areaDelCirculo(radio)}`);
    break;
  }

  case "rectangulo": {
    let base = Number(prompt("asigne la base"));
    let altura = Number(prompt("asigne la altura"));
    alert(`el area del rectangulo es: ${areaDelRectangulo(base, altura)}`);
    break;
  }

  case "cuadrado": {
    let lado = Number(prompt("asigne el lado"));
    alert(`el area del cuadrado es: ${areaDelCuadrado(lado)}`);
    break;
  }

  case "triangulo": {
    let base = Number(prompt("asigne la base"));
    let altura = Number(prompt("asigne la altura"));
    alert(`el area del triangulo es: ${areaDelTriangulo(base, altura)}`);
    break;
  }

  default:
    alert("Error");
    break;
}
