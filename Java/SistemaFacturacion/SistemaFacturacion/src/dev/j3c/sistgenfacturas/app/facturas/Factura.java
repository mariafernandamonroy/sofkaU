package dev.j3c.sistgenfacturas.app.facturas;

import dev.j3c.sistgenfacturas.entidad.Electrodomestico;

import java.util.List;

public interface Factura {

    public void construirFactura();

    public double calcularTotalPorElectrodomestico(List<Electrodomestico> lista);

    public String getFactura();

}
