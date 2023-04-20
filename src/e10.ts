const app = document.getElementById('app')!;

app.innerHTML = /*html*/ `
<select id="opciones">
<option value=""></option>
<option>x</option>
<option>y</option>

</select>


<div id="lienzo"></div>
`;

const lienzo = document.getElementById('lienzo')!;

const opciones = document.getElementById('opciones')!;

opciones.addEventListener('change', (event) => {
  const value = (event.target as HTMLSelectElement).value;

  switch (value) {
    case 'x':
      lienzo.innerHTML = `
        <p>1</p>
        `;
      break;

    case 'y':
      lienzo.innerHTML = `
    <p>2</p>
    `;
      break;

    default:
      break;
  }
});

export {};
