const app = document.getElementById('app')!;

app.innerHTML = /*html*/ `

<select id="opciones">
<option value=""></option>
<option>opcion 1</option>
<option>opcion 2</option>

</select>
 
<div id="canvas"></div>
`;

const opciones = document.getElementById('opciones')!;

const canvas = document.getElementById('canvas')!;

opciones.addEventListener('change', (event) => {
  const value = (event.target as HTMLSelectElement).value;

  switch (value) {
    case 'opcion 1':
      canvas.innerHTML = `
     <p>hola mundo</p>
     `;
      break;

    case 'opcion 2':
      canvas.innerHTML = `
        <button>enviar</button>
        `;
      break;

    default:
      break;
  }
});

export {};
