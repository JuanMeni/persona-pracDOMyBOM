export default class Persona {
    constructor(nombre,edad,dni,sexo,peso,altura,anio){
        this.nombre=nombre;
        this.edad=edad;
        this.dni=dni;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anio=anio;
    }
    mostrargeneracion(){
       if(this.anio >=1994 && this.anio<=2010){
        window.alert(`${this.nombre} nacio en ${this.anio}, pertenece a la generacion Z y su rasgo caracteristico es la irreverencia.`)
        //   document.write(`${this.nombre} pertenece a la generacion Z<br>Rasgo caracteristico:irreverencia.<br>`);
          return true
       }
       if(this.anio >=1981 && this.anio<=1993){
        window.alert(`${this.nombre} nacio en ${this.anio}, pertenece a la generacion Y y su rasgo caracteristico es la frustracion.`)
        // document.write(`${this.nombre} pertenece a la generacion Y<br>Rasgo caracteristico:Frustracion.<br>`);
        return true
      }
      if(this.anio >=1969 && this.anio<=1980){
        window.alert(`${this.nombre} nacio en ${this.anio}, pertenece a la generacion X y su rasgo caracteristico es la obsesion por el exito.`)
        // document.write(`${this.nombre} pertenece a la generacion X<br>Su rasgo caracteristico:Obsesion por el exito.<br>`);
        return true
     }
     if(this.anio >=1949 && this.anio<=1968){
        window.alert(`${this.nombre} nacio en ${this.anio}, pertenece a la generacion Baby boom y su rasgo caracteristico es la ambicion.`)
        // document.write(`${this.nombre} pertenece a la generacion Baby boom<br>Su rasgo caracteristico:Ambicion.<br>`);
        return true
     }
     if(this.anio >=1930 && this.anio<=1948){
        window.alert(`${this.nombre} nacio en ${this.anio}, pertenece a la generacion Silent Generation y su rasgo caracteristico es la austeridad.`)
        // document.write(`${this.nombre} pertenece a la generacion Silent Generation<br>Su rasgo caracteristico:Austeridad.<br>`);
        return true
     }
    }
    esMayorDeEdad(){
        if(this.edad >= 18 ){
            alert(`${this.nombre} si es mayor de edad`)
            // document.write(`${this.nombre} es mayor de edad.<br>`);
         }else{
            alert(`${this.nombre} no es mayor de edad`)
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
        <li>Año de nacimiento: ${this.anio}</li>
        <li>DNI Aleatorio generado: ${this.nuevoDni}</li>
        </ul>
        `);
    }
     generaDNI(){
        let numRandom=Math.round(Math.random()*(99999999-10000000)+parseInt(1));
        this.nuevoDni=numRandom;
    }

}