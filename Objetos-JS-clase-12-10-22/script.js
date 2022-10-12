"use strict";

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {

    let canvas = document.querySelector(".canvas");
    let ctx = canvas.getContext('2d');
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    for (let index = 0; index < 50; index++) {
        ctx.fillStyle = randomRGBA();
        ctx.beginPath();
        //posicion ancho, alto, radios, desde 0 hasta 2 * PI circulo total
        ctx.arc(Math.round(Math.random() * canvasWidth), //pos. ancho
                Math.round(Math.random() * canvasHeight), //pos. largo
                Math.round(Math.random() * 20),//radio
                0, //angulo desde
                2 * Math.PI);//angulo, en este completo
        ctx.fill();
        ctx.closePath();
    }

    function randomRGBA() {
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let a = 255;
        return `rgba(${r},${g},${b},${a})`;
    }

}