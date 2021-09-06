export class Electrodomestico {
    constructor(){
        this.consumo;
        this.proveniencia;
        this.valorTotal;
    }

    get consumo() {
        return this.consumo;
    }

    get proveniencia() {
        return this.proveniencia;
    }

    get valorTotal() {
        return this.valorTotal;
    }

    set consumo(){
        let consumoElegido = prompt('Ingrese el tipo de consumo\n 1- A \n 2- B \n 3- C')
        consumoElegido = consumoElegido.toUpperCase;
        let seguir = true;
        do{
            if (consumoElegido === 'A') {
                this.consumo = consumoElegido;
                this.valorTotal += 450000;
                this.seguir = false;
            } else if (consumoElegido === 'B') {
                this.consumo = consumoElegido;
                this.valorTotal += 350000;
                this.seguir = false;
            } else if (consumoElegido === 'C') {
                this.consumo = consumoElegido;
                this.valorTotal += 250000;
                this.seguir = false;
            } else {
                alert('El consumo escogido no es valido');
            }

        }while(seguir);
    }

    set proveniencia(){
        let provElegida = prompt('Ingresa el numero asociado con la proveniencia. \n 1- Importado.\n 2- Nacional. ');
        let seguir = true;
        do{
            if (provElegida === '1') {
                this.proveniencia = provElegida;
                this.valorTotal += 350000;
                this.seguir = false;
            } else if (provElegida === '2'){
                this.proveniencia = provElegida;
                this.valorTotal += 250000;
                this.seguir = false;
            }else {
                alert('El dato inrgesado no es valido. Ingresa porfavor 1 o 2.')
            }
        } while(seguir);
    }
}