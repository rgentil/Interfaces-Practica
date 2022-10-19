class circulo extends figura {
    constructor(color, jugador, context, canvas, posInicialX, posInicialY, imagen) {
        super(color, jugador, context, canvas, posInicialX, posInicialY, imagen);
        this.radio = 50//Math.round(Math.random() * 100);
        this.anguloDesde = 0;
        this.anguloHasta = 2 * Math.PI;
    }

    draw(lugar) {
        this.context.beginPath();
        this.context.fillStyle = this.color;

        let x = this.posCanvasX;
        let y = this.posCanvasY;

        if (lugar === 'inicio') {
            x = this.posInicialX;
            y = this.posInicialY;
            this.posCanvasX = x;
            this.posCanvasY = y;
        }

        this.context.arc(x,
            y,
            this.radio,
            this.anguloDesde,
            this.anguloHasta);

        this.context.fill();
        this.context.closePath();
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
    
}