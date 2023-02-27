let boton1 = document.getElementById('boton1');
let esconder1 = document.getElementById('esconder1');
let boton2 = document.getElementById('boton2');
let esconder2 = document.getElementById('esconder2');
let esconder3 = document.getElementById('esconder3');
let esconder4 = document.getElementById('esconder4');
let boton3 = document.getElementById('boton3');
let esconder5 = document.getElementById('esconder5');
let esconder6 = document.getElementById('esconder6');
let esconder7 = document.getElementById('esconder7');

boton1.addEventListener('click',botones1);
boton2.addEventListener('click',botones2);
boton3.addEventListener('click',botones3);

function botones(ocultar){
    ocultar.classList.toggle('mostrar1');}

function botones1(){
    botones(esconder1);}

function botones2(){
    botones (esconder2)
    botones (esconder3)
    botones (esconder4);}

function botones3(){
    botones (esconder5)
    botones (esconder6)
    botones (esconder7);}