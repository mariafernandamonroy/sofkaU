package dev.j3c.sistgenfacturas.entidad;

import java.util.HashMap;
import java.util.Map;

public class Electrodomestico {
    protected String nombre;
    protected double precioFinal;
    protected String procedencia;
    protected char tipoConsumo;

    public Electrodomestico() {

    }

    public Electrodomestico(String procedencia, char tipoConsumo) {
        this.procedencia = procedencia;
        this.tipoConsumo = tipoConsumo;
        this.calcPrecioFinalElec();
        nombre = "Electrodomestico generico";
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getPrecioFinal() {
        return this.precioFinal;
    }

    public void setPrecio(double precio) {
        this.precioFinal = precio;
    }

    public String getProcedencia() {
        return this.procedencia;
    }

    public void setProcedencia(String procedencia) {
        this.procedencia = procedencia;
    }

    public char getTipoConsumo() {
        return this.tipoConsumo;
    }

    public void setTipoConsumo(char tipoConsumo) {
        this.tipoConsumo = tipoConsumo;
    }

    private int getPrecioPorTipoConsumo() {
        int precioPorConsumo = 0;
        switch(this.tipoConsumo) {
            case 'A':
                precioPorConsumo = 450000;
                break;
            case 'B':
                precioPorConsumo = 350000;
                break;
            case 'C':
                precioPorConsumo = 250000;
                break;
            default:
                break;
        }
        return precioPorConsumo;
    }
    private int getPrecioPorProcedencia() {
        int precioPorProcedencia = 0;
        switch(this.procedencia) {
            case "Internacional":
                precioPorProcedencia = 350000;
                break;
            case "Nacional":
                precioPorProcedencia = 250000;
                break;
            default:
                break;
        }
        return precioPorProcedencia;
    }

    public void calcPrecioFinalElec(){
        this.precioFinal += this.getPrecioPorTipoConsumo();
        this.precioFinal += this.getPrecioPorProcedencia();
    }

    @Override
    public String toString() {
        return "Electrodomestico{" +
                "nombre='" + this.nombre + '\'' +
                ", precio=" + this.precioFinal +
                ", procedencia='" + this.procedencia + '\'' +
                ", tipoConsumo=" + this.tipoConsumo +
                '}';
    }
}
