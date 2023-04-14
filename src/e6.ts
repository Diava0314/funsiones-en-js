const app = document.getElementById("app")!;

app.innerHTML = /*html*/ `

<form>
 <div><label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" >
  </div>
  <br/>
  <div><label for="nombre">Apellido:</label>
  <input type="text" id="apellido" name="apellido" ></div>
  
  </form>
<p id="resultado"></p>
<p id="resultado2"></>

`;

const nombre = document.querySelector("#nombre") as HTMLInputElement;
const resultado = document.querySelector("#resultado") as HTMLParagraphElement;
const apellido = document.querySelector("#apellido") as HTMLInputElement;
const resultado2 = document.querySelector(
  "#resultado2"
) as HTMLParagraphElement;

nombre.addEventListener("input", () => {
  resultado.textContent = nombre.value;
});

apellido.addEventListener("input", () => {
  resultado2.textContent = apellido.value;
});
export {};
