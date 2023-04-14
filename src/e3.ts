/**crear una funcion que dibuje una caja en pantalla.
 * la funcion debe recibir un unico parametro que es un objeto.
 * el obejto debe contener los siguientes atributos: ancho, alto, grosor del borde,
 * color del borde, color de fondo, tipo de borde.
 **/

const app = document.getElementById("app")!;

type OpcionesCaja = {
  ancho: number;
  alto: number;
  grosorBorde: number;
  colorBorde: string;
  colorFondo: string;
  tipoBorde: string;
};

function dibujarCaja(opciones: OpcionesCaja) {
  app.innerHTML = /*html*/ `
  <div style="width: ${opciones.ancho}px;
   height: ${opciones.alto}px;
   border: ${opciones.grosorBorde}px; 
   border-color: ${opciones.colorBorde}; 
   border-style: ${opciones.tipoBorde}; 
   background: ${opciones.colorFondo};">
   </div>
   <br/>
   <div style="width: ${opciones.ancho}px;
   height: ${opciones.alto}px;
   border: ${opciones.grosorBorde}px; 
   border-color: ${opciones.colorBorde}; 
   border-style: ${opciones.tipoBorde}; 
   background: ${opciones.colorFondo};">
   </div>
   
  `;
}

dibujarCaja({
  alto: 100,
  ancho: 100,
  grosorBorde: 1,
  colorBorde: "red",
  colorFondo: "blue",
  tipoBorde: "solid",
});
export {};
