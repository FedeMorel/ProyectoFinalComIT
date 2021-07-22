class ColeccionPapeles {
    constructor(codigo, categoria, nombre, cantidadPapeles, apliques, precio, vendedores) {
        this.codigo = codigo;
        this.categoria = categoria;
        this.nombre = nombre;
        this.cantidadPapeles = cantidadPapeles;
        this.apliques = apliques;
        this.precio = precio;
        this.vendedores = vendedores;
    }

    getCodigo() {
        return this.codigo;
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(categoria) {
        this.categoria = categoria;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getCantidadPapeles() {
        return this.cantidadPapeles;
    }

    setCantidadPapeles(cantidadPapeles) {
        this.cantidadPapeles = cantidadPapeles;
    }

    getApliques() {
        return this.apliques;
    }

    setApliques(apliques) {
        this.apliques = apliques;
    }

    getPrecioColeccion() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }

    getVendedores() {
        return this.vendedores;
    }
}

export default ColeccionPapeles;