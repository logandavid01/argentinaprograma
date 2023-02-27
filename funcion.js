let boton1 = document.getElementById('boton1');
let esconder1 = document.getElementById('esconder1');

boton1.addEventListener('click',botones1);

function botones1(){
    esconder1.classList.toggle('mostrar1');
}

let boton2 = document.getElementById('boton2');
let esconder2 = document.getElementById('esconder2');
let esconder3 = document.getElementById('esconder3');
let esconder4 = document.getElementById('esconder4');

boton2.addEventListener('click',botones2);

function botones2(){
    esconder2.classList.toggle('mostrar2');
    esconder3.classList.toggle('mostrar2');
    esconder4.classList.toggle('mostrar2');
}

let boton3 = document.getElementById('boton3');
let esconder5 = document.getElementById('esconder5');
let esconder6 = document.getElementById('esconder6');
let esconder7 = document.getElementById('esconder7');

boton3.addEventListener('click',botones3);

function botones3(){
    esconder5.classList.toggle('mostrar3');
    esconder6.classList.toggle('mostrar3');
    esconder7.classList.toggle('mostrar3');
}