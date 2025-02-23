// Objetos en javascript

// Problema: Seguimiento de Libros

// Creación de mi objeto libro con sus propiedades y métodos
let libro = {
    titulo: 'titulo',
    autor: 'autor',
    año: 0,
    estado: 'estado',

    // Método para describir el libro
    describirLibro(){
        return `\n El libro: ${this.titulo} fue escrito por: ${this.autor} en el año: ${this.año} y el estado del libro es: ${this.estado}`;
    }
}

// Pido al usuario que ingrese los datos del libro
// Aqui hice uso de los prompt para que el usuario pueda ingresar los datos de el libro
let tituloLibro = prompt("Ingresa el titulo del libro");
let autorLibro = prompt("Ingresa el autor del libro");
// Aqui decidi hacer un parse ya que en la propiedad de el objeto libro declare que sería un numero y se que si bien aqui no tiene tanta importancia lo hice así por aplicar buenas practicas
let añoLibro = parseInt(prompt("Ingresa el año del libro"));
let estadoLibro = prompt("Ingresa el estado del libro:\n Disponible/Prestado");

// En esta parte como lo var a ingresar por medio de un prompt le tengo que pasar los datos ingresados por el usuario de cada uno  de las propiedades
// NombreDelObjeto.Propiedad = VariableAlaQueLeAsignoElValorConElPrompt
libro.titulo = tituloLibro;
libro.autor = autorLibro;
libro.año = añoLibro;
libro.estado = estadoLibro;

// Aqui hice uso de el alert para mostrar los datos de el libro ingresado por el usuario
alert(`Los datos de el libro son los siguientes:  ${libro.describirLibro()}`);