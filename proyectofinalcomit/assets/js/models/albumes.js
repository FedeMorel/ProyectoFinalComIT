import Productos from "./productos";

class Albumes extends Productos {
    constructor(imagen, nombre, categoria, tematica, cantidadFotos, sizeAlbum, sizePhoto, precio, coleccionPapeles) {
        super(imagen, nombre, categoria, tematica, sizeAlbum, precio);
        this.sizePhoto = sizePhoto;
        this.cantidadFotos = cantidadFotos;
        this.coleccionPapeles = coleccionPapeles;
    }

    getSizePhoto() {
        return this.sizePhoto;
    }

    getCantidadFotos() {
        return this.cantidadFotos;
    }

    setCantidadFotos(cantidadFotos) {
        this.cantidadFotos = cantidadFotos;
    }

    getColeccionPapeles() {
        return this.coleccionPapeles;
    }

    setColeccionPapeles(coleccionPapeles) {
        this.coleccionPapeles = coleccionPapeles;
    }
}

export default Albumes;