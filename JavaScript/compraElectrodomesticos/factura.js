export default function generarFactura(elecVendidos){
    let facturaEscrita = '';
    for (let i = elecVendidos.lenght; i > 0; i--) {
        facturaEscrita = facturaEscrita + (elecVendidos[i - 1].nombre + ' con tipo consumo: ' + elecVendidos[i - 1].consumo + ' con proveniencia: ' + elecVendidos[i - 1].proveniencia + ', Proveniencia 1 = Importado y 2 = Nacional; ' + 'Y el valor total es de: ' + elecVendidos[i - 1].valorTotal + '\n');
    }
    return facturaEscrita;
}