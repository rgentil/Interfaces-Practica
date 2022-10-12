class circulo {
    constructor(color, jugador) {
        this.color = color;
        this.posicionCanvas = [x=0, y=0];
        this.posicionMatriz = [x=0, y=0];
        this.posicionInicial = [x=0, y=0];
        this.radio = 15;
        this.img = new Image();
        this.jugador = jugador;
    }

    //Posicion inicial de la ficha
    setPosicionInicial(x,y){
        this.posicionInicial.x = x;
        this.posicionInicial.y = y
    }

    getPosicionInicial(){
        return this.posicionInicial
    }
    
    //Posicion dentro de la matriz una vez que se coloque
    setPosicionMatriz(x,y){
        this.posicionMatriz.x = x;
        this.posicionMatriz.y = y;
    }

    getPosicionMatriz(){
        return this.posicionMatriz;
    }

    //Posicion actual del cirulo en la pagina
    setPosicionCanvas(x,y){
        this.posicionCanvas.x = x;
        this.posicionCanvas.y = y;
    }

    getPosicionCanvas(){
        return this.posicionCanvas;
    }

    setColor(color){
        this.color = color;
    }
    getColor(){
        return this.color;
    }
    


}