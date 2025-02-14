// Comparaciones y decisiones en JavaScript

/*////////////////////////////////////////////////////////
Problema: Evaluador de Notas con Mensajes Personalizados//
*/////////////////////////////////////////////////////////

// Preguntar al usuario cunatas maetias tiene
let numeroDematerias = parseInt(prompt("¿Cuántas materias tienes?"));
// Declaramos el arreglo de calificaciones
let calificaciones= [];
for(let i = 1; i <= numeroDematerias ; i++){
    let calificaciónDeMateria = parseFloat(prompt(`¿Cuál es la calificación de la materia ${i} ?`));
    //Con el método push agregamos al arreglo  la calificación ingresada por el usuario
    calificaciones.push(calificaciónDeMateria);
}

//Unicamente para que yo verifique que el ciclo for esta funcionando bien y que se estan guardando en el arreglo las calificsciones
console.log(calificaciones);


//Vamos a culcular la suma de esas calificaciones guardadas para esto voy a ocupar un while

let suma = 0;
let j = 0;
while(j < calificaciones.length){
    suma = suma + calificaciones[j];
    //Incrementamos el valor de j para que no se quede en un ciclo infinito
    j++;
}
//Imprimimos la suma de las calificaciones unicamente para yo verificar que este funcionado correctante 
console.log(suma);

//Vamos a calcular el promedio de las calificaciones
let promedio = suma / numeroDematerias;
console.log(promedio);

//Vamos a evaluar el promedio para saber si el alumno aprobo o reprobo

let msjAprobacion= "";
if(promedio < 60){
    msjAprobacion = " reprobaste";
}else{
    msjAprobacion = "aprobaste";
}

/*
    Si la nota es 90 o más, el estudiante aprueba con "Excelente".
    Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
    Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
    Si la nota es menor de 60, el estudiante no aprueba.

*/

if(promedio >= 90){
    alert(`Felicidades, ${msjAprobacion}, tu promedio es de ${promedio} y tu estatus es: Excelente`);
}else if (promedio >= 75 && promedio <= 89) {
    alert(`Felicidades, ${msjAprobacion}, tu promedio es de ${promedio} y tu estatus es: Bien`);
} else if (promedio >= 60 && promedio <= 74){
    alert(`Felicidades, ${msjAprobacion}, tu promedio es de ${promedio} y tu estatus es: Suficiente`);
}else if(promedio < 60){
    alert(`Lo siento, ${msjAprobacion}, tu promedio es de ${promedio} y tu estatus es: Insuficiente`);
} 

