class circulo {
    constructor(color, jugador, context, canvas) {
        this.context = context;
        this.color = color;
        this.canvas = canvas;
        this.posInicialX = Math.round(Math.random() * canvas.width);
        this.posInicialY = Math.round(Math.random() * canvas.height);
        this.posCanvasX = this.posInicialX;
        this.posCanvasY = this.posInicialY;
        this.posMatrizX = 0;
        this.posMatrizX = 0;
        this.radio = Math.round(Math.random() * 100);
        this.img = new Image();
        this.jugador = jugador;
        this.anguloDesde = 0;
        this.anguloHasta = 2 * Math.PI;
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.arc(this.posCanvasX,
            this.posCanvasY,
            this.radio,
            this.anguloDesde,
            this.anguloHasta);
        this.context.fill();
        this.context.closePath();
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

    setRadio(r) {
        this.radio = r;
    }

    getRadio() {
        return this.radio;
    }

    getAnguloDesde() {
        return this.anguloDesde;
    }

    getAnguloHasta() {
        return this.anguloHasta;
    }

    getCanvas() {
        return this.canvas;
    }
}