// Intro al DOM en JavaScript
// Caja de Comentarios (Simple Comment Box)

//Esta funcion es para que el formulario no se recargue, y se limpie el textarea despues de enviar
document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que la página se recargue
    this.reset(); // Limpia el formulario después de enviar
});


//Funcion para agreagra comentario que se manda a llmaar desde el evento onclick en el boton
function agregarComentario(){
    const fecha = new Date(); // Obtenemos fecha y hora actual

    // Formateamos la fecha a: dd/mm/aaaa hh:mm:ss
    const formatoFecha = 
        `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ` +
        `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    // 1. Obtener el valor del comentario
    let comentario = document.getElementById("comentario").value;
    // 2. Crear un elemento de lista
    const crearLista = document.createElement("li");
    // 3. Agregar el comentario al elemento de lista
    crearLista.textContent = `${comentario}, fue registrado: ${formatoFecha}`;
    // 4. Agregar el elemento de lista a la lista de comentarios
    document.getElementById("comentarios").appendChild(crearLista);
    // Este console log solo lo utilice yo para ir haciendo mis pruebas de que esta creando la listacorrectamente desde la consola 
    console.log(crearLista);
    
    
}
 
//funcion para eliminar comentarios que se manda a llamar desde el evento onclick en el boton
function EliminarComentario(){
        // Obtiene la lista de comentarios
        let listaComentarios = document.getElementById("comentarios");
        // Elimina el último comentario de la lista
        listaComentarios.removeChild(listaComentarios.lastChild);
        
}