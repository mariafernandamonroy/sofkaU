import {Televisor} from "televisores.js";
import {Electrodomestico} from "electrodomesticos.js";

let seguirMenuInicial = true;
let electrodomesticosComprados = [];

do {
    let opcionElegida = prompt('Escoja la funcion que desea realizar\n 1- Comprar electrodomestico.\n 2- Comprar televisor. \n 3- Comprar nevera. \n 3- generar factura \n 4- salir del programa.');
    if(opcionElegida === '1') {
        let electrodomesticoComprado = new Electrodomestico();
        electrodomesticoComprado.consumo();
        electrodomesticoComprado.proveniencia();
        console.log(electrodomesticoComprado.valorTotal);
        electrodomesticosComprados.push(electrodomesticoComprado);
        seguirMenuInicial = false;
    }

} while(seguirMenuInicial);