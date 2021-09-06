import Electrodomestico from "electrodomesticos.js";

class Televisor extends Electrodomestico{
    constructor(){
        this.tamanio;
        this.tdt;
    }

    get tamanio() {
        return this.tamanio;
    }

    get tdt() {
        return this.tdt;
    }

    get valorTotal() {
        return this.valorTotal;
    }

    set tamanio(){
        let tamanioElegido = parseInt(prompt('Ingresa el tamaño del televisor'));
        let seguir = true;
        do {
            if (tamanioElegido > 0 && tamanioElegido < 100 && typeof tamanioElegido === Number){
                this.tamanio = tamanioElegido;
                this.seguir = false;
            } else {
                alert('Tamaño no valido');
            }
        }while (seguir);
    }

    set tdt(){
        let tdtElegida = prompt('Tiene tdt: \n 1- Si. \n 2- No. \ Ingresa el numero correspondiente a la opcion. 1 ó 2');
        let seguir = true;
        do{
            if (tdtElegida === '1') {
                this.tdt = true;
                this.valorTotal += 250000;
                this.seguir = false;
            } else if (provElegida === '2'){
                this.tdt = false;
                this.seguir = false;
            } else {
                alert('La opcion escogida no es valida.')
            }
        }while (seguir);
    }
}