import Electrodomestico from "./electrodomesticos.js";

export default class Nevera extends Electrodomestico{
    
    constructor(consumo, proveniencia, capacidad){
        super(consumo, proveniencia);
        this.capacidad = capacidad;
        this.nombre = 'Nevera';
    }

    valorPorCapacidad(opc){
        if (opc > 120) {
            let aumento = opc - 120;
            aumento = Math.floor(aumento/10);
            this.valorTotal = this.valorTotal + ((this.valorTotal* 0.05)*aumento);
            alert('pudimos establecer el valor por capacidad')
        }
        else {
            alert('estamos dafuera del if del valor por capacidad');
        }
    }

}