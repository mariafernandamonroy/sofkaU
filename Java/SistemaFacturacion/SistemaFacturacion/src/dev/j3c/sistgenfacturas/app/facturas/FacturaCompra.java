package dev.j3c.sistgenfacturas.app.facturas;

import dev.j3c.sistgenfacturas.entidad.Electrodomestico;
import dev.j3c.sistgenfacturas.entidad.Televisor;

import javax.sound.midi.Soundbank;
import java.util.List;
import java.util.stream.Collectors;

public class FacturaCompra implements Factura{
    private String factura;
    private List<Electrodomestico> listaDeCompra;

    public FacturaCompra(List<Electrodomestico> listaDeCompra) {
        this.listaDeCompra = listaDeCompra;
        this.construirFactura();
    }

    @Override
    public void construirFactura() {
        String temp = "";
        double precioTotal = 0.0;

        //Para los TV's
        List<Electrodomestico> listaTelevisores = listaDeCompra.stream().filter((Electrodomestico elect) -> {
            return(elect.getNombre().equalsIgnoreCase("Televisor"));
        }).collect(Collectors.toList());

        double precioParcial = calcularTotalPorElectrodomestico(listaTelevisores);
        precioTotal += precioParcial;

        for(Electrodomestico televisor : listaTelevisores) {
            temp += televisor.getNombre() + "     " + televisor.getPrecioFinal() + "\n";
        }
        temp +="Precio final de los televisores: " + precioParcial + "\n";
        precioParcial = 0.0;

        //Para las Neveras
        List<Electrodomestico> listaNeveras = listaDeCompra.stream().filter((elect) -> {
            return(elect.getNombre().equalsIgnoreCase("Nevera"));
        }).collect(Collectors.toList());

        precioParcial = calcularTotalPorElectrodomestico(listaNeveras);
        precioTotal += precioParcial;

        for(Electrodomestico nevera : listaNeveras) {
            temp += nevera.getNombre() + "     " + nevera.getPrecioFinal() + "\n";
        }
        temp +="Precio final de las neveras: " + precioParcial + "\n";
        precioParcial = 0.0;


        //Para los electrodomésticos
        List<Electrodomestico> electrodomesticosGenericos = listaDeCompra.stream().filter((elect) -> {
            return(elect.getNombre().equalsIgnoreCase("Electrodomestico generico"));
        }).collect(Collectors.toList());

        precioParcial = calcularTotalPorElectrodomestico(electrodomesticosGenericos);
        precioTotal += precioParcial;

        for(Electrodomestico electrodomesticos : electrodomesticosGenericos) {
            temp += electrodomesticos.getNombre() + "     " + electrodomesticos.getPrecioFinal() + "\n";
        }

        temp +="Precio final de los demás electrodomésticos: " + precioParcial + "\n";
        temp +="Precio total de la compra: " + precioTotal + "\n";

        factura = temp;
    }

    @Override
    public double calcularTotalPorElectrodomestico(List<Electrodomestico> lista) {
        double precio = 0.0;
        for(Electrodomestico elect : lista){
            precio += elect.getPrecioFinal();
        }
        return precio;
    }

    @Override
    public String getFactura() {
        return factura;
    }
}
