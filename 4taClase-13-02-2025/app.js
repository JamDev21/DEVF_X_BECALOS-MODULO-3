// Funciones en JavaScript
//  Problema: Seguimiento de Libros

// Arreglo en el cual voy a guardar los libros leidos 
let librosLeidos=[];

//  Función para agregar un libro al arreglo de librosleidos
function agregarLibro(titulo){
    // Agrego el libro al arreglo
    librosLeidos.push(titulo);
}
// Función para mostrar los libros leidos

/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
Aqui yo entendi  y aplique lo visto en clase que debemos de retornar el valor ya que la vamos a pcupar para saber en este caso
el alert que contenga los libros leidos a diferecia de la funcion agreagrLibro que no retorna nada ya que solo se agrega el libro al arreglo
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
function mostrarLibrosLeidos(){
    let libros = alert(`Los libros leidos son: ${librosLeidos}`);
    return libros;
}

//Egredo el primer libro al arreglo 
agregarLibro(titulo = prompt("Ingresa el titulo de libro que leiste"));

//Despues de que agredo el primer libro pregunto por medio de un prompt si desea agregar otro libro
let confirmacion = confirm("Desea ingresar otro libro?");
//Como lo vimos en clase el metodo confirm, nos retorna un valor boleano, es decir un TRUE O un FALSE ,Si la respuesta es si entonces se ejecuta el ciclo for
for(let i = 1; confirmacion; i++){
    //Agrego el libro al arreglo
    agregarLibro(titulo = prompt("Ingresa el titulo de libro que leiste"));
    confirmacion = confirm("Desea ingresar otro libro?");
    //Si la respuesta es no(FALSE) entonces se rompe el ciclo
    if(confirmacion == false){
        break; // Con esta instrucción se rompe el ciclo
    }else{
        console.log("No se ha ingresado otro libro");
    }
}

//Pregunto si desea ver los libros leidos por medio de un prompt
let msj = prompt("Desea ver los libros leidos?");
//Si la respuesta es si entonces se ejecuta la funcion mostrarLibrosLeidos
if(msj=="si"){
    mostrarLibrosLeidos();
}else{
    alert("Gracias");
}


