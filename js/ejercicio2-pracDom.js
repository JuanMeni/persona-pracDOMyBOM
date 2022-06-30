/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, 
año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece 
la persona creada y
cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona 
es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona,
 permitiendo ingresar las propiedades mediante un formulario, también agregar los botones
“mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función
 correspondiente.*/

// function btnGeneracion(){
//     let nombre = (document.getElementById('nombre').value)
//     let anioIngresado = parseInt(document.getElementById('anioNacimiento').value);
//     let resultadoGeneracion = document.getElementById('mostrarGeneracion');
//     if(anioIngresado >= 1930 && anioIngresado <= 1948){
//         let generacionSilent = `<p class="mb=0 alert alert-info" role="alert">${nombre} pertenece a la generacion Silent Generation y su caracteristica principal es la austeridad.</p>`
//         resultadoGeneracion.innerHTML = generacionSilent;
//     }else if(anioIngresado >= 1949 && anioIngresado <= 1968){
//         let generacionBaby = `<p class="mb=0 alert alert-info" role="alert">${nombre} pertenece a la generacion Baby Boom y su caracteristica principal es la ambición.</p>`
//         resultadoGeneracion.innerHTML = generacionBaby;
//     }else if(anioIngresado >= 1969 && anioIngresado <= 1980){
//         let generacionX = `<p class="mb=0 alert alert-info" role="alert">${nombre} pertenece a la generacion X y su caracteristica principal es la obseción por el éxito.</p>`
//         resultadoGeneracion.innerHTML = generacionX;
//     }else if(anioIngresado >= 1981 && anioIngresado <= 1993){
//         let generacionY = `<p class="mb=0 alert alert-info" role="alert">${nombre} pertenece a la generacion Y y su caracteristica principal es la frustración.</p>`
//         resultadoGeneracion.innerHTML = generacionY;
//     }else{
//         let generacionZ = `<p class="mb=0 alert alert-info" role="alert">${nombre} pertenece a la generacion Z y su caracteristica principal es la irreverencia.</p>`
//         resultadoGeneracion.innerHTML = generacionZ;
//     }
// }

// function btnEdad(){
//     let nombre = (document.getElementById('nombre').value)
//     console.log(nombre)
//     let edad = parseInt(document.getElementById('edad').value);
//     let resultadoEdad = document.getElementById('mayorEdad');
//     if(edad >= 18){
//         let mayorEdad = `<p class="mb=0 alert alert-success" role="alert">${nombre} si es mayor de edad.</p>`
//         resultadoEdad.innerHTML = mayorEdad; 
//     }else{
//         let menorEdad = `<p class="mb=0 alert alert-danger" role="alert">${nombre} es menor de edad.</p>`
//         resultadoEdad.innerHTML = menorEdad;
//     }
// }

import { validarAltura, validarAnio, validarDni, validarEdad, validarNombre, validarPeso, validarSexo } from "./validaciones.js";
import Persona from './classPersona.js'

let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let dni = document.getElementById('dni');
let sexo = document.getElementById('sexo');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let anio = document.getElementById('anio');
let formulario = document.getElementById('formulario');
let tabla = document.querySelector('#tabla')

nombre.addEventListener('blur', ()=>{validarNombre(2,40, nombre)});
edad.addEventListener('blur', ()=>{validarEdad(edad)});
dni.addEventListener('blur', ()=>{validarDni(dni)});
sexo.addEventListener('change', ()=>{validarSexo(sexo)});
peso.addEventListener('blur', ()=>{validarPeso(peso)});
altura.addEventListener('blur', ()=>{validarAltura(altura)});
anio.addEventListener('keyup', ()=>{validarAnio(anio)});
anio.addEventListener('blur', ()=>{validarAnio(anio)});
formulario.addEventListener('submit', crearPersona);

function crearPersona(e){
    e.preventDefault()
    if(validarNombre(2,40, nombre) && validarEdad(edad) && validarDni(dni) && validarSexo(sexo) && validarPeso(peso) && validarAltura(altura) && validarAnio(anio)){
        let nuevaPersona = new Persona(nombre.value, edad.value, dni.value, sexo.value, peso.value, altura.value, anio.value)
        console.log(nuevaPersona)
        tabla.className = 'table bg-light rounded'
        tabla.innerHTML = `<thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Generacion</th>
          <th scope="col">¿Es mayor de edad?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>${nombre.value}</td>
          <td>${edad.value}</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>`
    }else{
        tabla.className = 'table bg-light rounded d-none'
    }
}