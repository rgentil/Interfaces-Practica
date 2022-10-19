"use strict";

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {

    let canvas = document.querySelector(".canvas");
    let ctx = canvas.getContext('2d');

    let circulos = [];

    let objetoSeleccionado = null;

    let inicioX = 0;
    let inicioY = 0;

    for (let index = 0; index < 3; index++) {
        var c = new circulo(randomRGBA(),
            "Jugador" + index,
            ctx,
            canvas
        );
        circulos[index] = c;
        actualizar();
    }

    console.table(circulos);

    function randomRGBA() {
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let a = 255;
        return `rgba(${r},${g},${b},${a})`;
    }

    function actualizar() {
        //Para dibujar el fondo
        ctx.fillStyle = '#0f0fff';
        ctx.fillRect(0, 0, 800, 600);

        for (var i = 0; i < circulos.length; i++) {
            circulos[i].draw();
        }
    }

    //Click del mouse sostenido
    canvas.addEventListener('mousedown', function (event) {
        console.log('El raton se esta presionando');
        for (var i = 0; i < circulos.length; i++) {
            let x = event.clientX;
            let y = event.clientY;
            let dx = Math.abs(x - circulos[i].getPosCanvasX());
            let dy = Math.abs(y - circulos[i].getPosCanvasY());
            let distancia = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            if (distancia <= circulos[i].getRadio()) {
                objetoSeleccionado = circulos[i];
                inicioX = event.clientX - circulos[i].getPosCanvasX();
                inicioY = event.clientY - circulos[i].getPosCanvasY();
                break;
            }
        }
    });

    canvas.addEventListener('mousemove', function (event) {
        if (objetoSeleccionado != null) {
            objetoSeleccionado.setPosicionCanvas(
                event.clientX - inicioX,
                event.clientY - inicioY,
            )
        }
        actualizar();
    });

    //Click del mouse levanta
    canvas.addEventListener('mouseup', function (event) {
        console.log('El raton NO se esta presionando');
        objetoSeleccionado = null;
    });

}