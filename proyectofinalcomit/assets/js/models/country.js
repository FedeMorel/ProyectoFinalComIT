import Productos from "./productos";

class Country extends Productos {
    constructor(imagen, nombre, categoria, tematica, descripcion, size, precio) {
        super(imagen, nombre, categoria, tematica, size, precio);
        this.descripcion = descripcion;
    }

    getDescripcion() {
        return this.descripcion;
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
}

export default Country;