"use strict";

/** @type {CanvasRenderingContext2D} */

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {

    let canvas = document.querySelector(".canvas");
    let ctx = canvas.getContext('2d');

    let circulos = [];

    let rectangulos = [];

    let circuloSeleccionado = null;
    let rectanguloSeleccionado = null;

    let inicioX = 0;
    let inicioY = 0;

    let lugar = '';

    for (let index = 0; index < 1; index++) {
        let c = new circulo(randomRGBA(),
            "Jugador" + index,
            ctx,
            canvas,
            100,
            500,
            new Image()
        );
        circulos[index] = c;

        let r = new rectangulo(randomRGBA(),
            "Jugador" + index,
            ctx,
            canvas,
            500,
            299,
            new Image(),
            100,
            300
        )
        rectangulos[index] = r;

        actualizar();
    }

    console.table(circulos);

    function actualizar() {

        //Para dibujar el fondo
        ctx.fillStyle = '#0f0fff';
        ctx.fillRect(0, 0, 800, 600);

        for (var i = 0; i < circulos.length; i++) {
            rectangulos[i].draw(lugar, 0, 0);
            if (rectanguloSeleccionado == null) {
                circulos[i].draw(lugar, 0, 0);
            } else {
                let posNueva = { x: rectanguloSeleccionado.getPosCanvasX() + (rectanguloSeleccionado.getLadoX()/2),
                                 y: rectanguloSeleccionado.getPosCanvasY() + ((rectanguloSeleccionado.getLadoY() - circulos[i].getRadio()))
                }
                circulos[i].draw(lugar, posNueva.x, posNueva.y, rectanguloSeleccionado.getPosCanvasY());
            }

        }

        rectanguloSeleccionado = null;

        lugar = '';
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
                circuloSeleccionado = circulos[i];
                inicioX = event.clientX - circulos[i].getPosCanvasX();
                inicioY = event.clientY - circulos[i].getPosCanvasY();
                break;
            }
        }
    });

    canvas.addEventListener('mousemove', function (event) {
        if (circuloSeleccionado != null) {
            circuloSeleccionado.setPosicionCanvas(
                event.clientX - inicioX,
                event.clientY - inicioY,
            )
        }
        actualizar();
    });

    //Click del mouse levanta
    canvas.addEventListener('mouseup', function (event) {
        console.log('El raton NO se esta presionando');
        circuloSeleccionado = null;
        lugar = 'inicio';

        let mousePos = getMousePos(event);

        for (var i = 0; i < rectangulos.length; i++) {
            if (rectangulos[i].getPosCanvasX() < mousePos.x
                && (rectangulos[i].getLadoX() + rectangulos[i].getPosCanvasX() > mousePos.x)
                && rectangulos[i].getPosCanvasY() < mousePos.y
                && (rectangulos[i].getLadoY() + rectangulos[i].getPosCanvasY() > mousePos.y)
            ) {
                rectanguloSeleccionado = rectangulos[i];
                //inicioX = mousePos.x - rectangulos[i].getPosCanvasX();
                //inicioY = mousePos.y - rectangulos[i].getPosCanvasY();
                lugar = "rectangulo";
                break;
            }
        }

        actualizar();
    });

    function getMousePos(event) {
        return {
            x: Math.round(event.clientX - canvas.offsetLeft),
            y: Math.round(event.clientY - canvas.offsetTop)
        }
    }

    function randomRGBA() {
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let a = 255;
        return `rgba(${r},${g},${b},${a})`;
    }

}