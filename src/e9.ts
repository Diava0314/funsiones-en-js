const app = document.getElementById('app')!;

app.innerHTML = /*html*/ `

<select id="selector">
 <option value="" >Selecionar </option> 
 <option value="1" >Area del circulo</option> 
 <option value="2" >Area del cuadrado</option> 
 <option value="3" >Area del trinagulo</option> 

</select>

<div id="operaciones"></div>
`;
const operaciones = document.getElementById('operaciones')!;
const selector = document.getElementById('selector')!;

selector.addEventListener('change', (Event) => {
  const value = (Event.target as HTMLSelectElement).value;
  switch (value) {
    case '1':
      operaciones.innerHTML = /*html*/ `
      <form id="formularioCirculo">
       <tr>
        <th>
        <br/>
       <label for="radio">Radio del circulo: </label>
       <input type="number" name="radio"  />
        <th>
       </tr>  
       <button>calcular</button>
      </form>
      `;
      const formularioCirculo = document.getElementById('formularioCirculo')!;
      console.log(formularioCirculo);

      break;

    case '2':
      operaciones.innerHTML = /*html*/ `
      <form id="formularioCuadrado">
       <tr>
        <th>
        <br/>
       <label for="lado">Lado del cuadrado: </label>
       <input type="number" name="lado"  />
        <th>
       </tr>  
       <button>calcular</button>
      </form>`;
      const formularioCuadrado = document.getElementById('formularioCuadrado')!;
      break;

    case '3':
      operaciones.innerHTML = /*html*/ `
      <form id="formularioTriangulo">
       <tr>
        <th>
        <br/>
       <label for="base">Base del triangulo: </label>
       <input type="number" name="base"  />
       <br/><br/>
       <label for="altura">Altura del triangulo: </label>
       <input type="number" name="Altura"  />
        <th>
       </tr>  
       <br/><br/>
       <button>calcular</button>
      </form>`;
      const formularioTriangulo = document.getElementById(
        'formularioTriangulo'
      )!;
      break;

    default:
      break;
  }
});

export {};
