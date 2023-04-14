const app = document.getElementById("app")!;

app.innerHTML = /*html*/ `
  
    <select id="colores">
    <option value="#ff0000">Rojo</option>
    <option value="#00ff00">Verde</option>
    <option value="#0000ff">Azul</option>
  </select>
`;

const colores = document.getElementById("colores")!;

const cuadro = document.createElement("div")!;
cuadro.style.width = "100px";
cuadro.style.height = "100px";
cuadro.style.margin = "10px";
cuadro.style.border = "solid 1px";
app.appendChild(cuadro);

colores.addEventListener("change", (event) => {
  cuadro.style.backgroundColor = (event.target as HTMLSelectElement).value;
});

let numero: number = 5;

let texto: string = numero as unknown as string;
