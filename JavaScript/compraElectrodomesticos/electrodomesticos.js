export default class Electrodomestico {
    constructor(consumo, proveniencia){
        this.consumo = consumo;
        this.proveniencia = proveniencia;
        this.valorTotal = 0;
    }


    valorPorConsumo(opc){
        if (opc === 'A') {
            this.valorTotal = this.valorTotal + 450000;
        } else if (opc === 'B') {
            this.valorTotal = this.valorTotal + 350000;
        } else if (opc === 'C') {
            this.valorTotal = this.valorTotal + 250000;
        }
    }

    valorPorProveniencia(opc){
        if (opc === '1') {
            this.valorTotal = this.valorTotal + 350000;
        } else if (opc === '2'){
            this.valorTotal = this.valorTotal + 250000;
        }
    }
}