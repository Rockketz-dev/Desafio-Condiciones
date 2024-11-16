//Ejercicio 1 - Cambiar Estilos

//Capturar Variables
const imagen = document.querySelector("#champ");
const skill1 = document.querySelector("#habilidad");
const skill2 = document.querySelector("#habilidad2");
const skill3 = document.querySelector("#habilidad3");
const skill4 = document.querySelector("#habilidad4");
const skill5 = document.querySelector("#habilidad5");

//Aplicar Acción
imagen.addEventListener("click", () => {
  //Comprobamos que tenga la clase .borde-rojo
  if (document.getElementById("champ").classList.contains("borde-rojo")) {
    //Si la tiene la removemos
    document.getElementById("champ").classList.remove("borde-rojo");
  } else {
    //Sino la Agregamos
    document.getElementById("champ").classList.add("borde-rojo");
  }
});

//Aplicar Acción a cada Habilidad
skill1.addEventListener("click", () => {
  if (document.getElementById("habilidad").classList.contains("borde-rojo")) {
    document.getElementById("habilidad").classList.remove("borde-rojo");
  } else {
    document.getElementById("habilidad").classList.add("borde-rojo");
  }
});

//Habilidad 2
skill2.addEventListener("click", () => {
  if (document.getElementById("habilidad2").classList.contains("borde-rojo")) {
    document.getElementById("habilidad2").classList.remove("borde-rojo");
  } else {
    document.getElementById("habilidad2").classList.add("borde-rojo");
  }
});

//Habilidad 3
skill3.addEventListener("click", () => {
  if (document.getElementById("habilidad3").classList.contains("borde-rojo")) {
    document.getElementById("habilidad3").classList.remove("borde-rojo");
  } else {
    document.getElementById("habilidad3").classList.add("borde-rojo");
  }
});

//Habilidad 4
skill4.addEventListener("click", () => {
  if (document.getElementById("habilidad4").classList.contains("borde-rojo")) {
    document.getElementById("habilidad4").classList.remove("borde-rojo");
  } else {
    document.getElementById("habilidad4").classList.add("borde-rojo");
  }
});

//Habilidad 5
skill5.addEventListener("click", () => {
  if (document.getElementById("habilidad5").classList.contains("borde-rojo")) {
    document.getElementById("habilidad5").classList.remove("borde-rojo");
  } else {
    document.getElementById("habilidad5").classList.add("borde-rojo");
  }
});

//Ejercicio 2 - Cantidad de Stickers
//Capturamos Variables
let input1 = document.querySelector("#sticker1");
let input2 = document.querySelector("#sticker2");
let input3 = document.querySelector("#sticker3");
const verificador = document.querySelector("#verificador");
const total = document.querySelector("#cantidad");
const alerta = document.querySelector("#alerta");

//Verificador mediante click en boton
verificador.addEventListener("click", () => {
  //Definimos la suma del valor de cáda input y agregamos el operador Or en caso de que sea 0
  let stickers =
    (Number(input1.value) || 0) +
    (Number(input2.value) || 0) +
    (Number(input3.value) || 0);

  //Definimos el actuar en cada situación
  if (stickers <= 10) {
    //Si es menor o igual a 10 Muestra el total en el span
    total.textContent = stickers;
  } else {
    //En caso de que sea mayor a 10 muestra el mensaje y reemplaza todo el parrafo
    total.style.display = "none";
    alerta.innerHTML = `¡Llevas demasiados Stickers!`;
    alerta.style.display = "block";
    alerta.style.color = "red"; //Cambia el color del texto a rojo
    alerta.style.fontSize = "3rem";
  }
});

//Ejercicio 3 - Password
//Capturamos Variables
let digito1 = document.querySelector("#num1");
let digito2 = document.querySelector("#num2");
let digito3 = document.querySelector("#num3");
const botonValidador = document.querySelector("#password");
let validacionPassword = document.querySelector("#validacion-clave");

//Definimos el boton validador y agregamos las variantes
botonValidador.addEventListener("click", () => {
  //Capturar el valor de cada select
  let clave1 = digito1.value;
  let clave2 = digito2.value;
  let clave3 = digito3.value;

  //Definimos como se debe recolectar el dato
  let clavePassword = clave1 + clave2 + clave3;

  //Validación Clave
  if (clavePassword === "911") { //Validamos que el resultado de clavePassword sea igual a 911
    validacionPassword.textContent = "Clave 1 Correcta!";
  } else if (clavePassword === "714") { //Validamos que el resultado de clavePassword sea igual a 714
    validacionPassword.textContent = "Clave 2 Correcta!";
  } else { //En caso contrario mostrar mensaje de ERROR!
    validacionPassword.textContent = "Clave Incorrecta";
    validacionPassword.style.color = "red";
    validacionPassword.style.fontSize = "2rem";
  }
});
