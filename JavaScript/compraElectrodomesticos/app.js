import Televisor from "./televisores.js";
import Electrodomestico from "./electrodomesticos.js";
import {estabelcerConsumo, establecerProveniencia, establecerTamanio, establecerTdt, establecerCapacidad} from "./menus.js"
import Nevera from "./neveras.js";

const Inventario = {
    elecBNAl: 5,
    nevANal: 10,
    tvCInter: 7,
    tvBInter: 13,
    tvANal: 3,
    elecAInter: 8,
    nevCInter: 12
}
alert(Inventario.elecBNAl - 1);


let seguirMenuInicial = true;
let electrodomesticosComprados = [];
document.open();

do {
    let opcionElegida = prompt('Escoja la funcion que desea realizar\n 1- Comprar electrodomestico.\n 2- Comprar televisor. \n 3- Comprar nevera. \n 3- generar factura \n 4- salir del programa.');
    if(opcionElegida === '1') {
        let consumoElegidoElectrodomestico = estabelcerConsumo();
        let provenienciaElectrodomestico = establecerProveniencia();

        const electrodomesticoComprado = new Electrodomestico(consumoElegidoElectrodomestico, provenienciaElectrodomestico);
        electrodomesticoComprado.valorPorConsumo(consumoElegidoElectrodomestico);
        electrodomesticoComprado.valorPorProveniencia(provenienciaElectrodomestico);
        console.log(electrodomesticoComprado.consumo);
        console.log(electrodomesticoComprado.proveniencia);
        console.log(electrodomesticoComprado.valorTotal);
        electrodomesticosComprados.push(electrodomesticoComprado);
        seguirMenuInicial = false;
    
    }else if (opcionElegida === '2') {
        let consumoElegidoTelevisor = estabelcerConsumo();
        let provenienciaTelevisor = establecerProveniencia();
        let tamanioTelevisor = establecerTamanio();
        let tdtTelevisor = establecerTdt();
        document.write(consumoElegidoTelevisor);
        document.write(provenienciaTelevisor);
        document.write(tamanioTelevisor);
        document.write(tdtTelevisor);
        alert('hasta aqui vamos');

        const televisorComprado = new Televisor(consumoElegidoTelevisor, provenienciaTelevisor, tamanioTelevisor, tdtTelevisor);
        televisorComprado.valorPorConsumo(consumoElegidoTelevisor);
        televisorComprado.valorPorProveniencia(provenienciaTelevisor);
        televisorComprado.valorPorTamanio(tamanioTelevisor);
        televisorComprado.valorPorTdt(tdtTelevisor);
        console.log(televisorComprado);
        seguirMenuInicial = false;


    }else if (opcionElegida === '3') {
        let consumoElegidoNevera = estabelcerConsumo();
        let provenienciaNevera = establecerProveniencia();
        let capacidadNevera = establecerCapacidad();
        document.write(consumoElegidoNevera);
        document.write(provenienciaNevera);
        document.write(capacidadNevera);
        alert('hasta aqui vamos nevera');

        const neveraComprada = new Nevera(consumoElegidoNevera, provenienciaNevera, capacidadNevera);
        neveraComprada.valorPorConsumo(consumoElegidoNevera);
        neveraComprada.valorPorProveniencia(provenienciaNevera);
        neveraComprada.valorPorCapacidad(capacidadNevera);
        console.log(neveraComprada);
        seguirMenuInicial = false;
    }

} while(seguirMenuInicial);