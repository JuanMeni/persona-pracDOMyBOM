export default class Persona {
    constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.dni=dni;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anioNacimiento=anioNacimiento;
    }
    mostrargeneracion(){
       if(this.anioNacimiento >=1994 && this.anioNacimiento<=2010){
          document.write(`${this.nombre} pertenece a la generacion Z<br>Rasgo caracteristico:irreverencia.<br>`);
       }
       if(this.anioNacimiento >=1981 && this.anioNacimiento<=1993){
        document.write(`${this.nombre} pertenece a la generacion Y<br>Rasgo caracteristico:Frustracion.<br>`);
      }
      if(this.anioNacimiento >=1969 && this.anioNacimiento<=1980){
        document.write(`${this.nombre} pertenece a la generacion X<br>Su rasgo caracteristico:Obsesion por el exito.<br>`);
     }
     if(this.anioNacimiento >=1949 && this.anioNacimiento<=1968){
        document.write(`${this.nombre} pertenece a la generacion Baby boom<br>Su rasgo caracteristico:Ambicion.<br>`);
     }
     if(this.anioNacimiento >=1930 && this.anioNacimiento<=1948){
        document.write(`${this.nombre} pertenece a la generacion Silent Generation<br>Su rasgo caracteristico:Austeridad.<br>`);
     }
    }
    esMayorDeEdad(){
        if(this.edad >= 18 ){
            document.write(`${this.nombre} es mayor de edad.<br>`);
         }
    }
    mostrarDatos(){
        document.write(`
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de nacimiento: ${this.anioNacimiento}</li>
        <li>DNI Aleatorio generado: ${this.nuevoDni}</li>
        </ul>
        `);
    }
     generaDNI(){
        let numRandom=Math.round(Math.random()*(99999999-10000000)+parseInt(1));
        this.nuevoDni=numRandom;
    }

}