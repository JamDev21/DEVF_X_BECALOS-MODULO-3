// Problema: Seguimiento de Libros

// Caja de Comentarios (Simple Comment Box)

//Esta funcion es para que el formulario no se recargue, y se limpie el textarea despues de enviar
document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que la página se recargue
    this.reset(); // Limpia el formulario después de enviar
});


//Funcion para agreagra comentario que se manda a llama desde el evento onclick en el boton
function agregarComentario(){
    const fecha = new Date(); // Obtenemos fecha y hora actual
    let target = document.createElement("div");
    target.classList.add("divcomentarios");
    let contenedorPrincipal = document.getElementById("content");
    contenedorPrincipal.classList.add("content2");
    contenedorPrincipal.appendChild(target);
    let principalLista = document.createElement("ul");
    target.appendChild(principalLista);
    // Formateamos la fecha a: dd/mm/aaaa hh:mm:ss
    const formatoFecha = 
        `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ` +
        `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    // 1. Obtener el valor del comentario, titulo y autor
    let titulo = document.getElementById("nombre").value;
    let autor = document.getElementById("autor").value;
    let comentario = document.getElementById("comentario").value;
    // 2. Crear un elemento de lista
    const crearListaNombre = document.createElement("li");
    crearListaNombre.classList.add("titulo");
    const crearListaAutor = document.createElement("li");
    const crearListaComentario = document.createElement("li");
    const crearListaRegisto = document.createElement("li");
    // 3. Agregar el comentario al elemento de lista
    crearListaNombre.textContent = `Titulo: ${titulo}`;
    crearListaAutor.textContent = `Autor: ${autor}`;
    crearListaComentario.textContent = ` Comentario: ${comentario}`;
    crearListaRegisto.textContent = `Fecha y Hora de registro: ${formatoFecha}`;
    // 4. Agregar el elemento de lista a la lista 
    principalLista.appendChild(crearListaNombre);
    principalLista.appendChild(crearListaAutor);
    principalLista.appendChild(crearListaComentario);
    principalLista.appendChild(crearListaRegisto);

    // Este console log solo lo utilice yo para ir haciendo mis pruebas de que esta creando la listacorrectamente desde la consola 
    console.log(crearLista);
    
    
}
 
//funcion para eliminar comentarios que se manda a llamar desde el evento onclick en el boton
function EliminarComentario(){
        // Obtiene  div padre en donde  se crean los comentarios
        let listaComentarios = document.getElementById("content");
        // Elimina el último comentario 
        listaComentarios.removeChild(listaComentarios.lastChild);
}