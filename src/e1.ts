import './styles.css'

/**
* Una función es una estructura de código que permite reutilizar
* cierta lógica. 
*
* Las funciones pueden recibir datos de entrada
* para generar cálculos con ellos y retornar un resultado de
* de salida.
*/

/**
 * Ejemplo de una función sin datos de entrada y 
 * resultado vacío:
 */

//Definiendo una función
function saludar() {
    console.log('Hola');
}

//Invocando la función
let resultado = saludar();
console.log(resultado);

/**
 * Ejemplo de una función con datos de entrada y 
 * resultado vacío:
 */

//Definiendo la función
function imprimirMensaje(mensaje: string) {
    console.log(`Tu mensaje es: ${mensaje}`)
}

//Invocando la función
resultado = imprimirMensaje('Ha llegado un email');
console.log(resultado)

/**
 * Ejemplo de una función con multiples datos de entrada y 
 * resultado vacío:
 */

function imprimirNota(mensaje: string, nota: number) {
    let notaProcesada = `${nota}%`;
    console.log(`${mensaje} ${notaProcesada}`);
}

resultado = imprimirNota('Tu porcentaje de calificación fue', 8);
console.log(resultado);

/**
 * Ejemplo de una función con multiples datos de entrada y resultado:
 */

function sumaDeDosNumeros(n1: number, n2: number) {     
    return n1 + n2;
}

const resultadoDeLaSuma = sumaDeDosNumeros(10, 10);
console.log(resultadoDeLaSuma);

let duplicarResultadoDeLaSuma = resultadoDeLaSuma * 2
console.log(duplicarResultadoDeLaSuma)

let dividirResultadoDeLaSuma = sumaDeDosNumeros(20, 20) / 2
console.log(dividirResultadoDeLaSuma)

const persona = {
    nombre: 'Juan',
    edad: 20,
    email: 'juan@mail.com',
    saludar: function () {
        return 'Hola a todos'
    }
}


const app = document.getElementById('app')!;

app.innerHTML = /*html*/`
    <ul class="common-list">
      <li>${persona.nombre}</li>
      <li>${persona.edad}</li>
      <li>${persona.email}</li>
      <li>${persona.saludar()}</li>
    </ul>
`