class Personas {
    constructor(nombre, apellido, mail, telefono, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.telefono = telefono;
        this.direccion = direccion;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellido() {
        return this.apellido;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    getMail() {
        return this.mail;
    }

    setMail(mail) {
        this.mail = mail;
    }

    getTelefono() {
        return this.telefono;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }

    getDireccion() {
        return this.direccion;
    }
}

export default Personas;