//Genrador de contraseñas

// Obtener los valores de los elementos que vamos  a ocupar 
let mayusculas = document.getElementById('mayusculas');
let minusculas = document.getElementById('minusculas');
let numeros = document.getElementById('numeros');
let simbolos = document.getElementById('simbolos');
let botonGenerar = document.getElementById('botonGenerar');
let longitud = document.getElementById('rango');
let longText = document.getElementById('valorRango');
let areaContraseña = document.getElementById('textAreaContraseña');
let copiar = document.getElementById('copiar');
let nivelSeguridad = document.getElementById('nivelSeguridadGrafico');

//Creamos una variable que alacene toda la contraseña
let password = '';

//Escuchamos al evento input para que cada vez que se mueva el rango se actualice el valor en el textArea
longitud.addEventListener('input', ()=>{
    longText.textContent = longitud.value;
});

//Definir los elementos que vamos a ocupar
let letrasMin = 'abcdefghijklmnopqrstuvwxyz';
let letrasMay = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let num = '0123456789';
let simb = '!@#$%^&*()_+{}|:<>?';

//Función para obtener los numeros ramdom para optener los elementos de la contraseña de manera aleatoria
function getRamdomNumber(max){
    /*
    Math.floor redondea hacia abajo
    Math.random genera un numero aleatorio entre 0 y 1
    Multiplicamos por el maximo para obtener un numero entre 0 y el  maximo
    */
    return Math.floor(Math.random()* max);
}

function getRamdom(){
    /*
    Math.floor redondea hacia abajo
    Math.random genera un numero aleatorio entre 0 y 1
    Multiplicamos por el maximo para obtener un numero entre 0 y el  maximo
    */
    return Math.floor(Math.random()* 4);
}

//Funcion para obtener las mayusculas de manera aleatoria
function getMayusculas(){
    return letrasMay[getRamdomNumber(letrasMay.length)];
}

//Funcion para obtener las minusculas de manera aleatoria
function getMinusculas(){
    return letrasMin[getRamdomNumber(letrasMin.length)];
}

//Funcion para obtener los numeros de manera aleatoria
function getNumeros(){
    return num[getRamdomNumber(num.length)];
}

//Funcion para obtener los symbolos de manera aleatoria
function getSymbol(){
    return simb[getRamdomNumber(simb.length)];
}


//Funcion para generar contraseña segun los elementos seleccionados y el tamaño escogido
botonGenerar.addEventListener('click', ()=>{
    //Limpiamos la contraseña
    password = '';
    if(mayusculas.checked){
        password += getMayusculas();
    }if(minusculas.checked){
        password += getMinusculas();
    }if(numeros.checked){
        password += getNumeros();
    }if(simbolos.checked){
        password += getSymbol();
    }

    if(mayusculas.checked || minusculas.checked || numeros.checked || simbolos.checked){
        pwCompleta();
    }
    
    // console.log(parseInt(longitud.value));
});

//Funcion para completar contraseña
function pwCompleta(){
    while(password.length < parseInt(longitud.value)){
        const numeroAleatorio = getRamdom();
        if(mayusculas.checked && numeroAleatorio === 0){
            password += getMayusculas();
        }if(minusculas.checked && numeroAleatorio === 1){
            password += getMinusculas();
        }if(numeros.checked && numeroAleatorio === 2){
            password += getNumeros();
        }if(simbolos.checked && numeroAleatorio === 3){
            password += getSymbol();
        }
    }
    let nivelSeguridadPW = '';
    if(password.length <=8){
        nivelSeguridadPW = 'Baja';
    }else if(password.length >= 9 && password.length <= 12){
        nivelSeguridadPW = 'Media';
    }else if(password.length >= 13){
        nivelSeguridadPW = 'Alta';
    }
    //console.log(password);
    areaContraseña.textContent = password;
    nivelSeguridad.textContent = nivelSeguridadPW;
}

copiar.addEventListener('click', (E)=>{
    E.preventDefault();
    const passwordArea = areaContraseña.textContent;
    if(passwordArea){
        const textArea = document.createElement('textarea');
        textArea.value = passwordArea;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
    }
});

//funcion para que no se recargue le form
document.getElementById('formulario').addEventListener('submit', (event)=>{
    event.preventDefault();
});
