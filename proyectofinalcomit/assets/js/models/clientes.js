import Personas from "./personas";

class Clientes extends Personas {
    constructor(nombre, apellido, mail, telefono, direccion) {
        super(nombre, apellido, mail, telefono, direccion);
        this.ordenes = [];
    }

    getOrdenes() {
        return this.ordenes;
    }

    addOrders(nuevaOrden) {
        this.ordenes.push(nuevaOrden);
    }

}

export default Clientes();