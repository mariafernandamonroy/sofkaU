export function estabelcerConsumo () {
    let seguirConsumo = true;
    do{
        let consumoElegido = prompt('Ingrese el tipo de consumo\n 1- A \n 2- B \n 3- C \n Ingrese A, B o C');
        consumoElegido = consumoElegido.toUpperCase();
        if (consumoElegido === 'A') {
            seguirConsumo = false;
            return consumoElegido;
        } else if (consumoElegido === 'B') {
            seguirConsumo= false;
            return consumoElegido;
        } else if (consumoElegido === 'C') {
            seguirConsumo = false;
            return consumoElegido;
        } else {
            alert('El consumo escogido no es valido');
        }
    }while(seguirConsumo);
}


export function establecerProveniencia(){
    let seguirProveniencia = true;
    do{
        let provElegida = prompt('Ingresa el numero asociado con la proveniencia. \n 1- Importado.\n 2- Nacional. ');

        if (provElegida === '1') {
            seguirProveniencia = false;
            return provElegida;
        } else if (provElegida === '2'){
            seguirProveniencia = false;
            return provElegida;
        }else {
            alert('El dato inrgesado no es valido. Ingresa porfavor 1 o 2.')
        }
    } while(seguirProveniencia);
}

export function establecerTamanio(){
    let seguirTamanio = true;
    do {
        let tamanioElegido = prompt('Ingresa el tamaño del televisor');
        tamanioElegido = parseInt(tamanioElegido, 10);
        if (tamanioElegido > 0 && tamanioElegido < 100){
            seguirTamanio = false;
            return tamanioElegido;
        } else {
            alert('Tamaño no valido, debe ser entre 0 y 100 pulgadas');
        }
    }while(seguirTamanio);
}

export function establecerTdt(){
    let seguirTdt = true;
    do{
        let tdtElegida = prompt('Tiene tdt: \n 1- Si. \n 2- No. \n Ingresa el numero correspondiente a la opcion. 1 ó 2');
        if (tdtElegida === '1') {
            tdtElegida = true;
            seguirTdt = false;
            return tdtElegida;
        } else if (tdtElegida === '2'){
            tdtElegida = false;
            seguirTdt = false;
            return tdtElegida;
        } else {
            alert('La opcion escogida no es valida.')
        }
    }while (seguirTdt);
}

export function establecerCapacidad(){
    let seguirCapacidad = true;
    do {
        let capacidadElegida = prompt('Ingresa la capacidad');
        capacidadElegida = parseInt(capacidadElegida, 10);
        if (capacidadElegida > 0){
            seguirCapacidad = false;
            return capacidadElegida;
        } else {
            alert('Capacidad no valida, debe ser mayor que cero');
        }
    }while(seguirCapacidad);
}