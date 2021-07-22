import Personas from "./personas";

class Vendores extends Personas {
    constructor(nombre, apellido, mail, telefono, direccion) {
        super(nombre, apellido, mail, telefono, direccion);
        this.productosVendedor = [];
    }

    getProductosVendedor() {
        return productosVendedor;
    }

    setAgregarProducto(nuevoProducto) {
        this.productosVendedor.push(nuevoProducto);
    }

}

export default Vendores;