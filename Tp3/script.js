"use strict";

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {

    let matrizDom = document.getElementById("p-matriz");
    matrizDom.innerHTML = "";

    let valorMaximoDom = document.getElementById("p-valor-maximo");
    valorMaximoDom.innerHTML = "";

    let valorMaximoFilasParesDom = document.getElementById("p-valor-maximo-filas-pares");
    valorMaximoFilasParesDom.innerHTML = "";

    let valorMinimoFilasImparesDom = document.getElementById("p-valor-minimo-filas-impares");
    valorMinimoFilasImparesDom.innerHTML = "";

    ejecutarEjerciocio1();

    ejecutarEjerciocio2();

    ejecutarEjerciocio3();

    ejecutarEjerciocio4();

    function ejecutarEjerciocio1() {
        let x = 3; //Columnas
        let y = 5; //filas
        let matriz = [];

        for (let i = 0; i < x; i++) {
            matriz[i] = [];
            for (let j = 0; j < y; j++) {
                matriz[i][j] = Math.floor(Math.random() * 100);
            }
        }

        console.log("Matriz generada: ");
        console.table(matriz);
        matrizDom.innerHTML = matriz

        //a) Escribir una función que retorne el valor máximo de toda la matriz
        let max = 0;
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                if (matriz[i][j] > max) {
                    max = matriz[i][j];
                }
            }
        }

        valorMaximoDom.innerHTML = 'Valor maximo ' + max;

        //b) Escribir una función que retorne el valor máximo contenido en las filas pares y el valor
        //mínimo en las filas impares

        let maxFilasPares = 0;
        let minFilasImpares = max;
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                if (i % 2 === 0) { //Si la fila es par
                    if (matriz[i][j] > maxFilasPares) {
                        maxFilasPares = matriz[i][j];
                    }
                } else {
                    if (matriz[i][j] < minFilasImpares) {
                        minFilasImpares = matriz[i][j];
                    }
                }
            }
        }

        valorMaximoFilasParesDom.innerHTML = 'Valor maximo filas pares ' + maxFilasPares;
        valorMinimoFilasImparesDom.innerHTML = 'Valor minimo filas impares ' + minFilasImpares;
    }

    function ejecutarEjerciocio2() {
        let canvas1 = document.querySelector(".canvas-1");
        let ctx = canvas1.getContext("2d");
        let width = 400;
        let hight = 200;
        let imageData = ctx.createImageData(width, hight);//Me crea la imagen que va a ocupar width y hight

        //RGBA, red, green, blue, alpha para la transparencia
        let r = 255;
        let g = 0;
        let b = 255;
        let a = 100;

        function drawRect(imageData, r, g, b, a) {
            for (let w = 0; w < width; w++) {
                for (let h = 0; h < hight; h++) {
                    setPixel(imageData, w, h, r, g, b, a);
                }
            }
        }

        function setPixel(imageData, w, h, r, g, b, a) {
            /* Con esto recorre el arreglo, porque no es una matriz, 
            y voy seteando pixel por pixel con el color que quiero*/
            let index = (w + h * imageData.width) * 4;
            imageData.data[index + 0] = r;
            imageData.data[index + 1] = g;
            imageData.data[index + 2] = b;
            imageData.data[index + 3] = a;
        }
        
        drawRect(imageData, r, g, b, a);
        ctx.putImageData(imageData, 125, 125);

    }

    function ejecutarEjerciocio3() {
        let canvas1 = document.querySelector(".canvas-2");
        let ctx = canvas1.getContext("2d");
        let width = 500;
        let hight = 500;
        let imageData = ctx.createImageData(width, hight);//Me crea la imagen que va a ocupar width y hight

        //RGBA, red, green, blue, alpha para la transparencia
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 255;

        function drawRect(imageData, r, g, b, a) {
            for (let w = 0; w < width; w++) {
                for (let h = 0; h < hight; h++) {
                    let coeficiente = 255 / hight;//Esto es para que cubra todo
                    let r = coeficiente * h;
                    let g = coeficiente * h;
                    let b = coeficiente * h;  
                    setPixel(imageData, w, h, r, g, b, a);
                }
            }
        }

        function setPixel(imageData, w, h, r, g, b, a) {
            /* Con esto recorre el arreglo, porque no es una matriz, 
            y voy seteando pixel por pixel con el color que quiero*/
            let index = (w + h * imageData.width) * 4;
            imageData.data[index + 0] = r;
            imageData.data[index + 1] = g;
            imageData.data[index + 2] = b;
            imageData.data[index + 3] = a;
        }
        
        drawRect(imageData, r, g, b, a);
        ctx.putImageData(imageData, 0, 0);
    }

    function ejecutarEjerciocio4() {
        let canvas1 = document.querySelector(".canvas-3");
        let ctx = canvas1.getContext("2d");
        let width = 500;
        let hight = 500;
        let imageData = ctx.createImageData(width, hight);//Me crea la imagen que va a ocupar width y hight

        //RGBA, red, green, blue, alpha para la transparencia
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 255;

        function drawRect(imageData, r, g, b, a) {
            for (let w = 0; w < width; w++) {
                if (w <= width / 2 ){
                    let coeficiente = 255 / (width / 2);//Esto es para que cubra todo
                    r = coeficiente * w;
                    g = coeficiente * w;
                    b = 0;  
                    
                }else{
                    let coeficiente = 255 / (width);//Esto es para que cubra todo
                    r = w / coeficiente;
                    g = w * coeficiente;
                    b = 0;                          
                }
                for (let h = 0; h < hight; h++) {
                    setPixel(imageData, w, h, r, g, b, a);
                    
                }
            }
        }

        function setPixel(imageData, w, h, r, g, b, a) {
            /* Con esto recorre el arreglo, porque no es una matriz, 
            y voy seteando pixel por pixel con el color que quiero*/
            let index = (w + h * imageData.width) * 4;
            imageData.data[index + 0] = r;
            imageData.data[index + 1] = g;
            imageData.data[index + 2] = b;
            imageData.data[index + 3] = a;
        }
        
        drawRect(imageData, r, g, b, a);
        ctx.putImageData(imageData, 0, 0);
    }


}