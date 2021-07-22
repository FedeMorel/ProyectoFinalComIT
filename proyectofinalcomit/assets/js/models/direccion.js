class Direccion {
    constructor(calle, altura, localidad, codigoPostal) {
        this.calle = calle;
        this.altura = altura;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
    }

    getCalle() {
        return this.calle;
    }

    setCalle(calle) {
        this.calle = calle;
    }

    getAltura() {
        return this.altura;
    }

    setAltura(altura) {
        this.altura = altura;
    }

    getLocalidad() {
        return this.localidad;
    }

    setLocalidad(localidad) {
        this.localidad = localidad;
    }

    getCodigoPostal() {
        return this.codigoPostal;
    }

    setCodigoPostal(codigoPostal) {
        this.codigoPostal = codigoPostal;
    }
}

export default Direccion;