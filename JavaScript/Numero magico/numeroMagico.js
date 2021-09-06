let numeroMax = 100;

let numeroMagico = Math.random() * numeroMax;

numeroMagico = Math.floor(numeroMagico);
console.log(numeroMagico);

let mensaje = "Ingresa un numero: "

while(true) {
    let numeroEscogido = parseInt(prompt(mensaje, '0'));
    if (numeroEscogido === numeroMagico){
        mensaje = "Ganaste!!! adivinaste el numero magico.";
        alert(mensaje);
        break;
    }else if (numeroEscogido < numeroMagico) {
        mensaje = "El numero escogido es menor al numero magico";
    }else if (numeroEscogido > numeroMagico) {
        mensaje = "El numero escogido es mayor al numero magico";
    }else if(numeroEscogido === 0){
        break;
    }   
}

