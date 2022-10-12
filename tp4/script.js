"use strict";

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {

    //ejecutarEjercicio1();

    ejecutarEjercicio2();

    function ejecutarEjercicio1() {
        let div1 = document.querySelector(".div-color1");

        //Son parecidos el mouseenter y mouseover
        div1.addEventListener('mouseenter', function () {
            div1.style.background = '#55FFDD';
        });

        div1.addEventListener('mousemove', function () {
            div3.style.background = 'blue';
        });

        //Click del mouse sostenido
        div1.addEventListener('mousedown', function () {
            div1.style.background = 'red';
            console.log('El raton se esta presionando');
        });

        //Click del mouse levanta
        div1.addEventListener('mouseup', function () {
            div1.style.background = "blue";
            console.log('El raton NO se esta presionando');
        });

        //Click derecho
        let div2 = document.querySelector(".div-color2");
        div2.addEventListener('auxclick', function () {
            div2.style.background = 'green';
            console.log('Click derecho ha sido presionado y/o liberado');
        });

        //Clcik
        let div3 = document.querySelector(".div-color3");
        div3.addEventListener('click', function () {
            div3.style.background = 'skyblue';
        });

        //Este evento se activa cuando se hace doble click en el elemento.
        div3.addEventListener('dblclick', function () {
            div3.style.background = 'violet';
        });

        //El boton derecho del ratón ha sido presionado (antes de que el menú contextual es mostrado)
        div3.addEventListener('contextmenu', function () {
            div3.style.background = '#c82c45';
            console.log('Se ha presionado el boton derecho');
        });

        //Es activado cuando el botón intermedio o rueda del ratón ha sido activado.
        div3.addEventListener('wheel', function () {
            div3.style.background = '#c82555';
            console.log('El boton intermedio (rueda) del ratón ha sido activado');
        });

        //El ratón ha sido movido fuera del elemento, primero hay que poner el ratón dentro para que el evento sea activado.
        div1.addEventListener('mouseleave', function () {
            div1.style.background = 'black';
            console.log('El ratón está afuera del elemento');
        });

        div2.addEventListener('mouseleave', function () {
            div2.style.background = 'black';
            console.log('El ratón está afuera del elemento');
        });

        //Parecido a mouseleave, la diferencia radica en que también los elementos hijo son afectados.
        div3.addEventListener('mouseout', function () {
            div3.style.background = 'black';
            console.log('El ratón está afuera del elemento');
        });
    }

    function ejecutarEjercicio2() {
        let canvas = document.querySelector(".canvas");
        let ctx = canvas.getContext('2d');
        let canvasWidth = canvas.width;
        let canvasHeight = canvas.height;

        for (let index = 0; index < 10; index++) {
            ctx.fillStile = randomRGBA();
            ctx.beginPath();
            //posicion ancho, alto, radios, desde 0 hasta 2 * PI circulo total
            ctx.arc(Math.round(Math.random() * canvasWidth), Math.round(Math.random() * canvasHeight), Math.round(Math.random() * 20), 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        }

        for (let index = 0; index < 10; index++) {
            ctx.fillStile = randomRGBA();
            ctx.beginPath();
            //posicion ancho, alto, ancho y altura
            ctx.fillRect(Math.round(Math.random() * canvasWidth), Math.round(Math.random() * canvasHeight),Math.round(Math.random() * canvasWidth) ,Math.round(Math.random() * canvasHeight));            
        }

        function randomRGBA() {
            let r = Math.round(Math.random() * 255);
            let g = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);
            let a = 255;
            return `rgba(${r},${g},${b},${a})`;
        }
    }




}