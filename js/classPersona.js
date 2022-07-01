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
        alert(`${this.nombre} nacio en ${this.anio}, pertenece a la generación Z y su rasgo caracteristico es la irreverencia.`)
          return true
       }
       if(this.anio >=1981 && this.anio<=1993){
        alert(`${this.nombre} nacio en ${this.anio}, pertenece a la generación Y y su rasgo caracteristico es la frustracion.`)
        return true
      }
      if(this.anio >=1969 && this.anio<=1980){
        alert(`${this.nombre} nacio en ${this.anio}, pertenece a la generación X y su rasgo caracteristico es la obsesion por el exito.`)
        return true
     }
     if(this.anio >=1949 && this.anio<=1968){
        alert(`${this.nombre} nacio en ${this.anio}, pertenece a la generación Baby boom y su rasgo caracteristico es la ambicion.`)
        return true
     }
     if(this.anio >=1930 && this.anio<=1948){
        alert(`${this.nombre} nacio en ${this.anio}, pertenece a la generación Silent Generation y su rasgo caracteristico es la austeridad.`)
        return true
     }
    }
    esMayorDeEdad(){
        if(this.edad >= 18 ){
            alert(`${this.nombre} tiene ${this.edad} años, es mayor de edad.`)
         }else{
            alert(`${this.nombre} tiene ${this.edad} años, no es mayor de edad.`)
         }
    }
}