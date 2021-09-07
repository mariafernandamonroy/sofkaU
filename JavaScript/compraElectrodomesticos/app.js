import Televisor from "./televisores.js";
import Electrodomestico from "./electrodomesticos.js";
import {estabelcerConsumo, establecerProveniencia, establecerTamanio, establecerTdt, establecerCapacidad} from "./menus.js";
import Nevera from "./neveras.js";
import {InventarioElectrodomestico, InventarioNevera, InventarioTv} from "./inventarios.js";

let seguirMenuInicial = true;
let electrodomesticosComprados = [];
document.open();

do {
    let opcionElegida = prompt('Escoja la funcion que desea realizar\n 1- Comprar electrodomestico.\n 2- Comprar televisor. \n 3- Comprar nevera. \n 4- generar factura \n 5- salir del programa.');
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
            switch (consumoElegidoTelevisor) {
                case 'A':
                    if(InventarioTv.tvA > 0) {
                        let provenienciaTelevisor = establecerProveniencia();
                        switch(provenienciaTelevisor){
                            case '1':
                                if (InventarioTv.tvAInter > 0){
                                    let tamanioTelevisor = establecerTamanio();
                                    let tdtTelevisor = establecerTdt();

                                    const televisorComprado = new Televisor(consumoElegidoTelevisor, provenienciaTelevisor, tamanioTelevisor, tdtTelevisor);
                                    televisorComprado.valorPorConsumo(consumoElegidoTelevisor);
                                    televisorComprado.valorPorProveniencia(provenienciaTelevisor);
                                    televisorComprado.valorPorTamanio(tamanioTelevisor);
                                    televisorComprado.valorPorTdt(tdtTelevisor);
                                    electrodomesticosComprados.push(televisorComprado);
                                    InventarioTv.tv = InventarioTv.tv - 1;
                                    InventarioTv.tvA = InventarioTv.tvA - 1;
                                    InventarioTv.tvAInter = InventarioTv.tvAInter - 1;
                                    alert('Tv a inter comprado con exito');
                                }else {
                                    alert('No hay televisores de tipo A Internacional')
                                }
                                break;
                            case '2':
                                if (InventarioTv.tvANal > 0){
                                    let tamanioTelevisor = establecerTamanio();
                                    let tdtTelevisor = establecerTdt();

                                    const televisorComprado = new Televisor(consumoElegidoTelevisor, provenienciaTelevisor, tamanioTelevisor, tdtTelevisor);
                                    televisorComprado.valorPorConsumo(consumoElegidoTelevisor);
                                    televisorComprado.valorPorProveniencia(provenienciaTelevisor);
                                    televisorComprado.valorPorTamanio(tamanioTelevisor);
                                    televisorComprado.valorPorTdt(tdtTelevisor);
                                    electrodomesticosComprados.push(televisorComprado);
                                    InventarioTv.tv = InventarioTv.tv - 1;
                                    InventarioTv.tvA = InventarioTv.tvA - 1;
                                    InventarioTv.tvANal = InventarioTv.tvANal - 1;
                                    alert('Tv a nacional comprado con exito')
                                }else {
                                    alert('No hay televisores de tipo A Nacional')
                                }
                                break;
                            default:
                                alert('No entramos a ninguno de los casos de proveniencia de tv tipo A')
                                break;
                        }
                    } else {
                        alert('No hay televisor de tipo consumo A')
                    }
                    break;
                case 'B':
                    if(InventarioTv.tvB > 0) {
                        let provenienciaTelevisor = establecerProveniencia();
                        switch(provenienciaTelevisor){
                            case '1':
                                if (InventarioTv.tvBInter > 0){
                                    let tamanioTelevisor = establecerTamanio();
                                    let tdtTelevisor = establecerTdt();

                                    const televisorComprado = new Televisor(consumoElegidoTelevisor, provenienciaTelevisor, tamanioTelevisor, tdtTelevisor);
                                    televisorComprado.valorPorConsumo(consumoElegidoTelevisor);
                                    televisorComprado.valorPorProveniencia(provenienciaTelevisor);
                                    televisorComprado.valorPorTamanio(tamanioTelevisor);
                                    televisorComprado.valorPorTdt(tdtTelevisor);
                                    electrodomesticosComprados.push(televisorComprado);
                                    InventarioTv.tv = InventarioTv.tv - 1;
                                    InventarioTv.tvB = InventarioTv.tvB - 1;
                                    InventarioTv.tvBInter= InventarioTv.tvBInter - 1;
                                    alert('Tv B Internacional comprado con exito')
                                }else {
                                    alert('No hay televisores de tipo B Internacional')
                                }
                                break;
                            case '2':
                                if (InventarioTv.tvBNal > 0){
                                    let tamanioTelevisor = establecerTamanio();
                                    let tdtTelevisor = establecerTdt();

                                    const televisorComprado = new Televisor(consumoElegidoTelevisor, provenienciaTelevisor, tamanioTelevisor, tdtTelevisor);
                                    televisorComprado.valorPorConsumo(consumoElegidoTelevisor);
                                    televisorComprado.valorPorProveniencia(provenienciaTelevisor);
                                    televisorComprado.valorPorTamanio(tamanioTelevisor);
                                    televisorComprado.valorPorTdt(tdtTelevisor);
                                    electrodomesticosComprados.push(televisorComprado);
                                    InventarioTv.tv = InventarioTv.tv - 1;
                                    InventarioTv.tvB = InventarioTv.tvB - 1;
                                    InventarioTv.tvBNal= InventarioTv.tvBNal - 1;
                                    alert('Tv B Nacional comprado con exito')
                                }else {
                                    alert('No hay televisores de tipo B Nacional')
                                }
                                break;
                            default:
                                alert('No entramos a ninguno de los casos de proveniencia de tv tipo B')
                                break;
                        }
                    } else {
                        alert('No hay televisor de tipo consumo B')
                    }
                    break;
                case 'C':
                    if(InventarioTv.tvC> 0) {
                        let provenienciaTelevisor = establecerProveniencia();
                        switch(provenienciaTelevisor){
                            case '1':
                                if (InventarioTv.tvCInter > 0){
                                    let tamanioTelevisor = establecerTamanio();
                                    let tdtTelevisor = establecerTdt();

                                    const televisorComprado = new Televisor(consumoElegidoTelevisor, provenienciaTelevisor, tamanioTelevisor, tdtTelevisor);
                                    televisorComprado.valorPorConsumo(consumoElegidoTelevisor);
                                    televisorComprado.valorPorProveniencia(provenienciaTelevisor);
                                    televisorComprado.valorPorTamanio(tamanioTelevisor);
                                    televisorComprado.valorPorTdt(tdtTelevisor);
                                    electrodomesticosComprados.push(televisorComprado);
                                    InventarioTv.tv = InventarioTv.tv - 1;
                                    InventarioTv.tvC = InventarioTv.tvC - 1;
                                    InventarioTv.tvCInter = InventarioTv.tvCInter - 1;
                                    alert('Tv C Internacional comprado con exito');
                                }else {
                                    alert('No hay televisores de tipo C Internacional')
                                }
                                break;
                            case '2':
                                if (InventarioTv.tvCNal > 0){
                                    let tamanioTelevisor = establecerTamanio();
                                    let tdtTelevisor = establecerTdt();

                                    const televisorComprado = new Televisor(consumoElegidoTelevisor, provenienciaTelevisor, tamanioTelevisor, tdtTelevisor);
                                    televisorComprado.valorPorConsumo(consumoElegidoTelevisor);
                                    televisorComprado.valorPorProveniencia(provenienciaTelevisor);
                                    televisorComprado.valorPorTamanio(tamanioTelevisor);
                                    televisorComprado.valorPorTdt(tdtTelevisor);
                                    electrodomesticosComprados.push(televisorComprado);
                                    InventarioTv.tv = InventarioTv.tv - 1;
                                    InventarioTv.tvC = InventarioTv.tvC - 1;
                                    InventarioTv.tvCNal = InventarioTv.tvCNal - 1;
                                    alert('Tv C Nacional comprado con exito');
                                }else {
                                    alert('No hay televisores de tipo C Nacional')
                                }
                                break;
                            default:
                                alert('No entramos a ninguno de los casos de proveniencia de tv tipo C')
                                break;
                        }
                    } else {
                        alert('No hay televisor de tipo consumo C')
                    }
                    break;
                default:
                    alert('no entramos a ninguno de los casos de consumo en los televisores');
                    break;
            }
        }else {
            alert('No hay mas televisores en inventario');
        }


    }else if (opcionElegida === '3') {
        if(InventarioNevera.nev > 0) {
            let consumoElegidoNevera = estabelcerConsumo();
            switch (consumoElegidoNevera) {
                case 'A':
                    if(InventarioNevera.nevA > 0) {
                        let provenienciaNevera = establecerProveniencia();
                        switch(provenienciaNevera){
                            case '1':
                                if (InventarioNevera.nevAInter > 0){
                                    let capacidadNevera = establecerCapacidad();

                                    const neveraComprada = new Nevera(consumoElegidoNevera, provenienciaNevera, capacidadNevera);
                                    neveraComprada.valorPorConsumo(consumoElegidoNevera);
                                    neveraComprada.valorPorProveniencia(provenienciaNevera);
                                    neveraComprada.valorPorCapacidad(capacidadNevera);
                                    electrodomesticosComprados.push(neveraComprada);
                                    InventarioNevera.nev = InventarioNevera.nev - 1;
                                    InventarioNevera.nevA = InventarioNevera.nevA - 1;
                                    InventarioNevera.nevAInter = InventarioNevera.nevAInter - 1;
                                    alert('Se compro la nevera tipo A Inter con exito')

                                }else {
                                    alert('No hay neveras A inter')
                                }
                                break;
                            case '2':
                                if (InventarioNevera.nevANal > 0){
                                    let capacidadNevera = establecerCapacidad();

                                    const neveraComprada = new Nevera(consumoElegidoNevera, provenienciaNevera, capacidadNevera);
                                    neveraComprada.valorPorConsumo(consumoElegidoNevera);
                                    neveraComprada.valorPorProveniencia(provenienciaNevera);
                                    neveraComprada.valorPorCapacidad(capacidadNevera);
                                    electrodomesticosComprados.push(neveraComprada);
                                    InventarioNevera.nev = InventarioNevera.nev - 1;
                                    InventarioNevera.nevA = InventarioNevera.nevA - 1;
                                    InventarioNevera.nevANal = InventarioNevera.nevANal - 1;
                                    alert('Se compro la nevera tipo A Nacional con exito')
                                }else {
                                    alert('No hay neveras A nacional')
                                }
                                break;
                            default:
                                alert('No entramso a ninguno de los casos de proveniencia de nev tipo A')
                                break;
                        }
                    } else {
                        alert('No hay neveras de tipo consumo A')
                    }
                    break;
                case 'B':
                    if(InventarioNevera.nevB > 0) {
                        let provenienciaNevera = establecerProveniencia();
                        switch(provenienciaNevera){
                            case '1':
                                if (InventarioNevera.nevBInter > 0){
                                    let capacidadNevera = establecerCapacidad();

                                    const neveraComprada = new Nevera(consumoElegidoNevera, provenienciaNevera, capacidadNevera);
                                    neveraComprada.valorPorConsumo(consumoElegidoNevera);
                                    neveraComprada.valorPorProveniencia(provenienciaNevera);
                                    neveraComprada.valorPorCapacidad(capacidadNevera);
                                    electrodomesticosComprados.push(neveraComprada);
                                    InventarioNevera.nev = InventarioNevera.nev - 1;
                                    InventarioNevera.nevB = InventarioNevera.nevB - 1;
                                    InventarioNevera.nevBInter = InventarioNevera.nevBInter - 1;
                                    alert('Se compro la nevera tipo B Inter con exito')

                                }else {
                                    alert('No hay neveras B inter')
                                }
                                break;
                            case '2':
                                if (InventarioNevera.nevBNal > 0){
                                    let capacidadNevera = establecerCapacidad();

                                    const neveraComprada = new Nevera(consumoElegidoNevera, provenienciaNevera, capacidadNevera);
                                    neveraComprada.valorPorConsumo(consumoElegidoNevera);
                                    neveraComprada.valorPorProveniencia(provenienciaNevera);
                                    neveraComprada.valorPorCapacidad(capacidadNevera);
                                    electrodomesticosComprados.push(neveraComprada);
                                    InventarioNevera.nev = InventarioNevera.nev - 1;
                                    InventarioNevera.nevB = InventarioNevera.nevB - 1;
                                    InventarioNevera.nevBNal = InventarioNevera.nevBNal - 1;
                                    alert('Se compro la nevera tipo B Nacional con exito')
                                }else {
                                    alert('No hay neveras B nacional')
                                }
                                break;
                            default:
                                alert('No entramso a ninguno de los casos de proveniencia de nev tipo A')
                                break;
                        }
                    } else {
                        alert('No hay neveras de tipo consumo B')
                    }
                    break;
                case 'C':
                    if(InventarioNevera.nevC > 0) {
                        let provenienciaNevera = establecerProveniencia();
                        switch(provenienciaNevera){
                            case '1':
                                if (InventarioNevera.nevCInter > 0){
                                    let capacidadNevera = establecerCapacidad();

                                    const neveraComprada = new Nevera(consumoElegidoNevera, provenienciaNevera, capacidadNevera);
                                    neveraComprada.valorPorConsumo(consumoElegidoNevera);
                                    neveraComprada.valorPorProveniencia(provenienciaNevera);
                                    neveraComprada.valorPorCapacidad(capacidadNevera);
                                    electrodomesticosComprados.push(neveraComprada);
                                    InventarioNevera.nev = InventarioNevera.nev - 1;
                                    InventarioNevera.nevC = InventarioNevera.nevC - 1;
                                    InventarioNevera.nevCInter = InventarioNevera.nevCInter - 1;
                                    alert('Se compro la nevera tipo C Inter con exito')

                                }else {
                                    alert('No hay neveras C inter')
                                }
                                break;
                            case '2':
                                if (InventarioNevera.nevCNal > 0){
                                    let capacidadNevera = establecerCapacidad();

                                    const neveraComprada = new Nevera(consumoElegidoNevera, provenienciaNevera, capacidadNevera);
                                    neveraComprada.valorPorConsumo(consumoElegidoNevera);
                                    neveraComprada.valorPorProveniencia(provenienciaNevera);
                                    neveraComprada.valorPorCapacidad(capacidadNevera);
                                    electrodomesticosComprados.push(neveraComprada);
                                    InventarioNevera.nev = InventarioNevera.nev - 1;
                                    InventarioNevera.nevC = InventarioNevera.nevC - 1;
                                    InventarioNevera.nevCNal = InventarioNevera.nevCNal - 1;
                                    alert('Se compro la nevera tipo C Nacional con exito')
                                }else {
                                    alert('No hay neveras C nacional')
                                }
                                break;
                            default:
                                alert('No entramso a ninguno de los casos de proveniencia de nev tipo C')
                                break;
                        }

                    } else {
                        alert('No hay neveras de tipo consumo C')
                    }
                    break;
                default:
                    alert('no entramos a ninguno de los casos de consumo en las neveras');
                    break;
            }

        }else {
            alert('No hay mas neveras en inventario');
        }
    }else if (opcionElegida === '4'){
        let facturaEscrita = '';
        for (let i = electrodomesticosComprados.lenght; i > 0; i--) {
            facturaEscrita = facturaEscrita + (electrodomesticosComprados[i - 1].nombre + ' con tipo consumo: ' + electrodomesticosComprados[i - 1].consumo + ' con proveniencia: ' + electrodomesticosComprados[i - 1].proveniencia + ', Proveniencia 1 = Importado y 2 = Nacional; ' + 'Y el valor total es de: ' + electrodomesticosComprados[i - 1].valorTotal + '\n');
        }
        alert(facturaEscrita);
        seguirMenuInicial = false;
    }
    else if (opcionElegida === '5'){
        seguirMenuInicial = false;
    } else {
        alert('No se escogio ninguna opcion valida')
    }

} while(seguirMenuInicial);

alert('salimos de Do While');