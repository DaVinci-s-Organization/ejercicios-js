

// 11
class Persona {

    constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    }

    log(nombre, edad) {
        return ('Hola mi nombre es '+ this.nombre +' y tengo '+ this.edad);
    }

}


// var persona = new Persona('Juanma', 20);
// console.log(persona.log());


// 12
class Estudiante extends Persona {

    constructor(nombre, edad, profesor) {
        super(nombre, edad);
        this.profesor = profesor;
    }

    estudiando(profesor) {
        return ('Estudiando con '+this.profesor);
    }

    setProfesor(profesor) {
        this.profesor = Profesor;
    }
}

var estudiante = new Estudiante('Peter', 32, 'Connor');
console.log(estudiante.estudiando());
//console.log(estudiante.setProfesor);


//13
