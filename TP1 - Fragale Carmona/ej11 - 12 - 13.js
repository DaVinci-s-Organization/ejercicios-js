

// 11------------------

class Persona{

constructor(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
}

Presentarse(){
    return "Nombre :"+this.nombre+"Edad :"+this.edad;
}
}

var persona=new Persona("Jose  \n ",19);
console.log(persona.Presentarse());

// 12-----------------------------------------------------------------------

class Persona{

    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    presentarse(){
        return "Nombre :"+this.nombre+"Edad :"+this.edad;
    }
}
    var persona=new Persona("Gervacio",20);
    console.log(persona.presentarse());

class Estudiante extends Persona{

    constructor(nombre,edad,profesor){
        super(nombre,edad);
        this.profesor=profesor
    }

    establecerProfesor(profesor){
        this.profesor=profesor;
    }
    obtenerProfesor(){
        return "Mi profesor es :"+this.profesor;
    }
}

var estudiante=new Estudiante("Gervacio",29,"Sheperd");
console.log(estudiante.obtenerProfesor());

// 13-----------------------------------------------------------------------------------------------------------------------

class Persona{

    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    presentarse(){
        return "Nombre :"+this.nombre+"Edad :"+this.edad;
    }
}
    var persona=new Persona("Gervacio",20);
    console.log(persona.presentarse());

class Estudiante extends Persona{

    constructor(nombre,edad,profesor){
        super(nombre,edad);
        this.profesor=profesor
    }

    establecerProfesor(profesor){
        this.profesor=profesor;
    }
    obtenerProfesor(){
        return "Mi profesor es :"+this.profesor;
    }
}

var estudiante=new Estudiante("Gervacio",20,"Sheperd");
console.log(estudiante.obtenerProfesor());


class Profesor extends Persona{

    constructor(nombre,edad){
        super(nombre,edad);
        this.estudiantes=[];
    }

    enseñando(){
        console.log("Profesor :"+this.nombre+"\n Enseña a: ")+this.estudiantes.forEach(element=>console.log(element.nombre));
    }
    addEstudiante(estudiante){
        this.estudiantes.push(estudiante);
        estudiante.establecerProfesor(this.nombre);
    }
}

var estudiante1=new Estudiante("Gervacio",20,"Sheperd");
var estudiante2=new Estudiante("John",18,"Dicaprio");
profesor=new Profesor("Chespirito",30,[estudiante1,estudiante2]);
profesor.addEstudiante(estudiante1);
profesor.addEstudiante(estudiante2);
profesor.enseñando();