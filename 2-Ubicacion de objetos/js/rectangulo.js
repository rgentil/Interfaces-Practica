/** @type {CanvasRenderingContext2D} */

class rectangulo extends figura {
    constructor(color, jugador, context, canvas, posInicialX, posInicialY, imagen, ladoX, ladoY) {
        super(color, jugador, context, canvas, posInicialX, posInicialY, imagen);
        this.ladoX = ladoX;
        this.ladoY = ladoY;
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#A1C25E';
        this.context.fillRect(this.posCanvasX, this.posCanvasY, this.ladoX, this.ladoY);
        this.context.closePath();
    }

    getLadoX() {
        return this.ladoX;
    }
    getLadoY() {
        return this.ladoY;
    }

}