class figura {
    constructor(color, jugador, context, canvas, posInicialX, posInicialY, imagen) {
        this.color = color;
        this.jugador = jugador;
        this.context = context;
        this.canvas = canvas;
        this.posInicialX = posInicialX//Math.round(Math.random() * canvas.width);
        this.posInicialY = posInicialY//Math.round(Math.random() * canvas.height);
        this.posCanvasX = this.posInicialX;
        this.posCanvasY = this.posInicialY;
        this.posMatrizX = 0;
        this.posMatrizX = 0;
        this.img = imagen;
    }

    //Posicion inicial de la ficha
    setPosicionInicial(x, y) {
        this.posInicialX = x;
        this.posInicialY = y
    }

    getPosInicialX() {
        return this.posInicialX;
    }

    getPosInicialY() {
        return this.posInicialY;
    }

    //Posicion dentro de la matriz una vez que se coloque
    setPosicionMatriz(x, y) {
        this.posMatrizX = x;
        this.posMatrizY = y;
    }

    getPosMatrizX() {
        return this.posMatrizX;
    }

    getPosMatrizY() {
        return this.posMatrizY;
    }

    //Posicion actual del cirulo en la pagina
    setPosicionCanvas(x, y) {
        this.posCanvasX = x;
        this.posCanvasY = y
    }

    getPosCanvasX() {
        return this.posCanvasX;
    }

    getPosCanvasY() {
        return this.posCanvasY;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    getCanvas() {
        return this.canvas;
    }

    draw (lugar){
        console.log("Lugar" + lugar);
    }
}