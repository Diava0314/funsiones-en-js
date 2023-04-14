/**como funciona evenlistener onclick */

const app = document.getElementById("app")!;

app.innerHTML = /*html*/ `
<button id="btn">presionar</button>

`;
const btn = document.getElementById("btn")!;

type OpcionesTitulo = {
  colortexto: string;
  bordetexto: number;
  alto: number;
  ancho: number;
  colorfondo: string;
  tamañotexto: number;
  tipoborder: string;
  padding: number;
  margin: number;
};

function dibujartexto(opciones: OpcionesTitulo) {
  const div = document.createElement("div")!;
  div.style.height = `${opciones.alto}px`;
  div.style.width = `${opciones.ancho}px`;
  div.style.background = `${opciones.colorfondo}`;
  div.style.margin = `${opciones.margin}px`;

  app.appendChild(div);
}

btn.addEventListener("click", function () {
  dibujartexto({
    colortexto: "black",
    bordetexto: 1,
    alto: 100,
    ancho: 100,
    colorfondo: "pink",
    tamañotexto: 20,
    tipoborder: "solid",
    padding: 1,
    margin: 10,
  });
});
export {};
