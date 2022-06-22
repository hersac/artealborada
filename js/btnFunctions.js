/*Funcion menu navegacion*/
var contador = 0;


function showMenu(){
  switch (contador){
    case 0:
      document.getElementById("nav").style.visibility="visible";
      contador=1;
      break;
    case 1:
      document.getElementById("nav").style.visibility="hidden";
      document.getElementById("loginMenu").style.visibility="hidden";
      contador=0;
      break;
  }
}

var contador2=0;

/*funcion boton */

function showMenuLogin(){

  switch(contador2){
    case 0:
      document.getElementById("loginMenu").style.visibility="visible";
      contador2=1;
      break;
    case 1:
      document.getElementById("loginMenu").style.visibility="hidden";
      contador2=0;
      break;
  }
}

/*Funcon carrito de compra*/

var contador3=0;

function showMenuCarrito(){
  btnMenuCarrito=document.getElementById("btnCarrito");
  alert("funcion carrito");
}

/*Funcion seccion registrarse*/


function showMenuRegistro(){
    document.getElementById("register").style.visibility="visible";
    document.getElementById("loginMenu").style.visibility="hidden";
    contador2=0;

}

function closeMenuRegistro(){
  document.getElementById("register").style.visibility="hidden";
}
