"use strict";

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {

    let canvas = document.querySelector(".canvas");
    let ctx = canvas.getContext('2d');
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    let circulos = [];

    for (let index = 0; index < 10; index++) {
        var c = new circulo(randomRGBA(),
            "Jugador" + index,
            ctx,
            canvasWidth,
            canvasHeight);
        circulos[index] = c;

        c.draw();
    }

    console.table(circulos);

    function randomRGBA() {
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let a = 255;
        return `rgba(${r},${g},${b},${a})`;
    }

}