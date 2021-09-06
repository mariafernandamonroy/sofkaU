class Electrodomestico {
    constructor(){
        this.consumo = consumo;
        this.proveniencia = proveniencia;
        this.valorTotal = valorTotal;
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

    set consumo(consumoElegido){
        if (consumoElegido === 'A') {
            this.consumo = consumoElegido;
            this.valorTotal += 450000;
        } else if (consumoElegido === 'B') {
            this.consumo = consumoElegido;
            this.valorTotal += 350000;
        } else if (consumoElegido === 'C') {
            this.consumo = consumoElegido;
            this.valorTotal += 250000;
        } else {
            this.consumo = consumoElegido;
            this.valorTotal += 450000;
        }
    }

    set proveniencia(provElegida){
        if (provElegida === 'IMPORTADO') {
            this.proveniencia = provElegida;
            this.valorTotal += 350000;
        } else if (provElegida === 'NACIONAL'){
            this.proveniencia = provElegida;
            this.valorTotal += 250000;
        }
    }


}