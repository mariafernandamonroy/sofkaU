import Electrodomestico from "./electrodomesticos.js";

export default class Televisor extends Electrodomestico{
    
    constructor(consumo, proveniencia, tamanio, tdt){
        super(consumo, proveniencia);
        this.tamanio = tamanio;
        this.tdt = tdt;
        this.nombre = 'Televisor';
    }

    valorPorTamanio(opc){
        if (opc > 40) {
            this.valorTotal = this.valorTotal + (this.valorTotal* 0.3);
            alert('entramos a setear el valor por tamaño')
        }
        else {
            alert('No pudimos agregar el valor por tamaño');
        }
    }

    valorPorTdt(opc){
        if (opc === true) {
            this.valorTotal = this.valorTotal + 250000;
        }else {
            alert('No pudimos agregar el valor por tdt');
        }
    }
}