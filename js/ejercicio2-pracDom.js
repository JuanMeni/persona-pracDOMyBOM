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
let btnGeneracion = document.getElementById('btnGeneracion')
let btnEdad = document.getElementById('btnEdad')


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
        btnGeneracion.addEventListener('click', ()=>{nuevaPersona.mostrargeneracion()})
        btnEdad.addEventListener('click', ()=>{nuevaPersona.esMayorDeEdad()})
        tabla.className = 'table bg-light rounded'
        tabla.innerHTML = `<thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">DNI</th>
          <th scope="col">Genero</th>
          <th scope="col">Peso</th>
          <th scope="col">Altura</th>
          <th scope="col">Año</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>${nombre.value}</td>
          <td>${dni.value}</td>
          <td>${sexo.value}</td>
          <td>${peso.value}kg</td>
          <td>${altura.value}mts</td>
          <td>${anio.value}</td>
        </tr>
      </tbody>`
      btnGeneracion.className = 'btn btn-warning my-3'
      btnEdad.className = 'btn btn-warning my-3'
    }else{
        tabla.className = 'table bg-light rounded d-none'
    }
}