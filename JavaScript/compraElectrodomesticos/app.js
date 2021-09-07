import Televisor from "./televisores.js";
import Electrodomestico from "./electrodomesticos.js";
import {estabelcerConsumo, establecerProveniencia, establecerTamanio, establecerTdt, establecerCapacidad} from "./menus.js";
import Nevera from "./neveras.js";
import {InventarioElectrodomestico, InventarioNevera, InventarioTv} from "./inventarios.js";

let seguirMenuInicial = true;
let electrodomesticosComprados = [];
document.open();

do {
    let opcionElegida = prompt('Escoja la funcion que desea realizar\n 1- Comprar electrodomestico.\n 2- Comprar televisor. \n 3- Comprar nevera. \n 3- generar factura \n 4- salir del programa.');
    if(opcionElegida === '1') {
        if (InventarioElectrodomestico.elec > 0) {
            let consumoElegidoElectrodomestico = estabelcerConsumo();
            switch (consumoElegidoElectrodomestico) {
                case 'A':
                    if(InventarioElectrodomestico.elecA > 0) {
                        let provenienciaElectrodomestico = establecerProveniencia();
                        switch(provenienciaElectrodomestico){
                            case '1':
                                if (InventarioElectrodomestico.elecAInter > 0) {
                                    const electrodomesticoComprado = new Electrodomestico(consumoElegidoElectrodomestico, provenienciaElectrodomestico);
                                    electrodomesticoComprado.valorPorConsumo(consumoElegidoElectrodomestico);
                                    electrodomesticoComprado.valorPorProveniencia(provenienciaElectrodomestico);
                                    console.log(electrodomesticoComprado.consumo);
                                    console.log(electrodomesticoComprado.proveniencia);
                                    console.log(electrodomesticoComprado.valorTotal);
                                    electrodomesticosComprados.push(electrodomesticoComprado);
                                    InventarioElectrodomestico.elec = InventarioElectrodomestico.elec - 1;
                                    InventarioElectrodomestico.elecA = InventarioElectrodomestico.elecA - 1;
                                    InventarioElectrodomestico.elecAInter = InventarioElectrodomestico.elecAInter - 1;
                                    alert('elecAInter comprado con exito');
                                } else {
                                    alert('no hay electrodomesticos A Internacionales');
                                }
                                break;
                            case '2':
                                if (InventarioElectrodomestico.elecANal > 0) {
                                    const electrodomesticoComprado = new Electrodomestico(consumoElegidoElectrodomestico, provenienciaElectrodomestico);
                                    electrodomesticoComprado.valorPorConsumo(consumoElegidoElectrodomestico);
                                    electrodomesticoComprado.valorPorProveniencia(provenienciaElectrodomestico);
                                    console.log(electrodomesticoComprado.consumo);
                                    console.log(electrodomesticoComprado.proveniencia);
                                    console.log(electrodomesticoComprado.valorTotal);
                                    electrodomesticosComprados.push(electrodomesticoComprado);
                                    InventarioElectrodomestico.elec = InventarioElectrodomestico.elec - 1;
                                    InventarioElectrodomestico.elecA = InventarioElectrodomestico.elecA - 1;
                                    InventarioElectrodomestico.elecANal = InventarioElectrodomestico.elecANal - 1;
                                    alert('elecANal comprado con exito');
                                } else {
                                    alert('no hay electrodomesticos A Nacionales');
                                }
                                break;
                            default:
                                alert('No entramos a ninguno de los casos de proveniencia en electrodomesticos tipo A')
                                break;
                        }
                    } else {
                        alert('No hay electrodomesticos de tipo consumo A')
                    }
                    break;
                case 'B':
                    if(InventarioElectrodomestico.elecB > 0) {
                        let provenienciaElectrodomestico = establecerProveniencia();
                        switch(provenienciaElectrodomestico){
                            case '1':
                                if (InventarioElectrodomestico.elecBInter > 0) {
                                    const electrodomesticoComprado = new Electrodomestico(consumoElegidoElectrodomestico, provenienciaElectrodomestico);
                                    electrodomesticoComprado.valorPorConsumo(consumoElegidoElectrodomestico);
                                    electrodomesticoComprado.valorPorProveniencia(provenienciaElectrodomestico);
                                    console.log(electrodomesticoComprado.consumo);
                                    console.log(electrodomesticoComprado.proveniencia);
                                    console.log(electrodomesticoComprado.valorTotal);
                                    electrodomesticosComprados.push(electrodomesticoComprado);
                                    InventarioElectrodomestico.elec = InventarioElectrodomestico.elec - 1;
                                    InventarioElectrodomestico.elecB = InventarioElectrodomestico.elecB - 1;
                                    InventarioElectrodomestico.elecBInter = InventarioElectrodomestico.elecBInter - 1;
                                    alert('elecBInter comprado con exito');
                                } else {
                                    alert('no hay electrodomesticos B Internacionales');
                                }
                                break;
                            case '2':
                                if (InventarioElectrodomestico.elecBNAl > 0) {
                                    const electrodomesticoComprado = new Electrodomestico(consumoElegidoElectrodomestico, provenienciaElectrodomestico);
                                    electrodomesticoComprado.valorPorConsumo(consumoElegidoElectrodomestico);
                                    electrodomesticoComprado.valorPorProveniencia(provenienciaElectrodomestico);
                                    console.log(electrodomesticoComprado.consumo);
                                    console.log(electrodomesticoComprado.proveniencia);
                                    console.log(electrodomesticoComprado.valorTotal);
                                    electrodomesticosComprados.push(electrodomesticoComprado);
                                    InventarioElectrodomestico.elec = InventarioElectrodomestico.elec - 1;
                                    InventarioElectrodomestico.elecB = InventarioElectrodomestico.elecB - 1;
                                    InventarioElectrodomestico.elecBNal = InventarioElectrodomestico.elecBNal - 1;
                                    alert('elecBNal comprado con exito');
                                } else {
                                    alert('no hay electrodomesticos B Nacionales');
                                }
                                break;
                            default:
                                alert('No entramos a ninguno de los casos de proveniencia en electrodomesticos tipo B')
                                break;
                        }
                    } else {
                        alert('No hay electrodomesticos de tipo consumo B')
                    }
                    break;
                case 'C':
                    if(InventarioElectrodomestico.elecC > 0) {
                        let provenienciaElectrodomestico = establecerProveniencia();
                        switch(provenienciaElectrodomestico){
                            case '1':
                                if (InventarioElectrodomestico.elecCInter > 0) {
                                    const electrodomesticoComprado = new Electrodomestico(consumoElegidoElectrodomestico, provenienciaElectrodomestico);
                                    electrodomesticoComprado.valorPorConsumo(consumoElegidoElectrodomestico);
                                    electrodomesticoComprado.valorPorProveniencia(provenienciaElectrodomestico);
                                    console.log(electrodomesticoComprado.consumo);
                                    console.log(electrodomesticoComprado.proveniencia);
                                    console.log(electrodomesticoComprado.valorTotal);
                                    electrodomesticosComprados.push(electrodomesticoComprado);
                                    InventarioElectrodomestico.elec = InventarioElectrodomestico.elec - 1;
                                    InventarioElectrodomestico.elecC = InventarioElectrodomestico.elecC - 1;
                                    InventarioElectrodomestico.elecCInter = InventarioElectrodomestico.elecCInter - 1;
                                    alert('elecCInter comprado con exito');
                                } else {
                                    alert('no hay electrodomesticos C Internacionales');
                                }
                                break;
                            case '2':
                                if (InventarioElectrodomestico.elecCNal > 0) {
                                    const electrodomesticoComprado = new Electrodomestico(consumoElegidoElectrodomestico, provenienciaElectrodomestico);
                                    electrodomesticoComprado.valorPorConsumo(consumoElegidoElectrodomestico);
                                    electrodomesticoComprado.valorPorProveniencia(provenienciaElectrodomestico);
                                    console.log(electrodomesticoComprado.consumo);
                                    console.log(electrodomesticoComprado.proveniencia);
                                    console.log(electrodomesticoComprado.valorTotal);
                                    electrodomesticosComprados.push(electrodomesticoComprado);
                                    InventarioElectrodomestico.elec = InventarioElectrodomestico.elec - 1;
                                    InventarioElectrodomestico.elecC = InventarioElectrodomestico.elecC - 1;
                                    InventarioElectrodomestico.elecCNal = InventarioElectrodomestico.elecCNal - 1;
                                    alert('elecCNal comprado con exito');
                                } else {
                                    alert('no hay electrodomesticos C Nacionales');
                                }
                                break;
                            default:
                                alert('No entramos a ninguno de los casos de proveniencia en electrodomesticos tipo C')
                                break;
                        }
                    } else {
                        alert('No hay electrodomesticos de tipo consumo C')
                    }
                    break;
                default:
                    alert('no entramos a ninguno de los casos de consumo en los elec');
                    break;
            }
        }else {
            alert('No hay mas electrodomesticos en inventario');
        }
    
    }else if (opcionElegida === '2') {
        if(InventarioTv.tv > 0){
            let consumoElegidoTelevisor = estabelcerConsumo();
            switch (consumoElegidoElectrodomestico) {
                case 'A':
                    if(InventarioElectrodomestico.elecA > 0) {

                    } else {
                        alert('No hay electrodomesticos de tipo consumo A')
                    }
                    break;
                case 'B':
                    if(InventarioElectrodomestico.elecB > 0) {

                    } else {
                        alert('No hay electrodomesticos de tipo consumo B')
                    }
                    break;
                case 'C':
                    if(InventarioElectrodomestico.elecC > 0) {

                    } else {
                        alert('No hay electrodomesticos de tipo consumo C')
                    }
                    break;
                default:
                    alert('no entramos a ninguno de los casos de consumo en los elec');
                    break;
            }
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
        }else {
            alert('No hay mas televisores en inventario');
        }


    }else if (opcionElegida === '3') {
        if(InventarioNevera.nev > 0) {
            let consumoElegidoNevera = estabelcerConsumo();
            switch (consumoElegidoElectrodomestico) {
                case 'A':
                    if(InventarioElectrodomestico.elecA > 0) {

                    } else {
                        alert('No hay electrodomesticos de tipo consumo A')
                    }
                    break;
                case 'B':
                    if(InventarioElectrodomestico.elecB > 0) {

                    } else {
                        alert('No hay electrodomesticos de tipo consumo B')
                    }
                    break;
                case 'C':
                    if(InventarioElectrodomestico.elecC > 0) {

                    } else {
                        alert('No hay electrodomesticos de tipo consumo C')
                    }
                    break;
                default:
                    alert('no entramos a ninguno de los casos de consumo en los elec');
                    break;
            }
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
        }else {
            alert('No hay mas neveras en inventario');
        }
    }

} while(seguirMenuInicial);