class Productos {
    constructor(imagen, nombre, categoria, tematica, size, precio) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categoria = categoria;
        this.tematica = tematica;
        this.size = size;
        this.precio = precio;
    }

    getImagen() {
        return this.imagen;
    }

    setImagen(imagen) {
        this.imagen = imagen;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(categoria) {
        this.categoria = categoria;
    }

    getTematica() {
        return this.tematica;
    }

    setTematica(tematica) {
        this.tematica = tematica;
    }

    getSize() {
        return this.size;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }
}

export default Productos;