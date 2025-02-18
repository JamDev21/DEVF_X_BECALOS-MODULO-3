// CLASIFICACIÓN DE FRUTAS

let frutas = [];

function agregarFruta(){
    let nombre = prompt("Ingrese el nombre de la fruta");
    frutas.push(nombre);
}

agregarFruta();

let confirmacion = confirm("Desea ingresar otra fruta?");
for(let i = 1; confirmacion; i++){
    agregarFruta();
    confirmacion = confirm("Desea ingresar otra fruta?");
    if(confirmacion == false){
        break;
    }else{
        console.log("No se ha ingresado otra fruta");
    }
}
console.log(frutas);

let conteoFrutas = {
    
};

for(let j = 0; j < frutas.length; j++){
    console.log(`La fruta:  ${frutas[j]}  esta en la posición del arreglo ${j} `);
    let tFruta = frutas[j];
    if(conteoFrutas[tFruta]){
        conteoFrutas[tFruta] += 1;
    }else{
        conteoFrutas[tFruta] = 1;
       
    }
}
console.log("La cantidad de frutas repetidas son", conteoFrutas);
alert(`La contidad de frutas dentro de el arreglo es de ${frutas.length} y la contidad de frutas repetidas son ${JSON.stringify(conteoFrutas)}`);


