package dev.j3c.sistgenfacturas.entidad;

public class Televisor extends Electrodomestico{
    private int tamanio;
    private boolean tdt;

    public Televisor() {
        this.nombre = "Televisor";
    }

    public Televisor(String procedencia, char tipoConsumo, int tamanio , boolean tdt) {
        super(procedencia, tipoConsumo);
        this.tamanio = tamanio;
        this.tdt = tdt;
        this.calcularPrecioFinal();
        this.nombre = "Televisor";
    }

    public int getTamanio() {
        return this.tamanio;
    }

    public void setTamanio(int tamanio) {
        this.tamanio = tamanio;
    }

    public boolean hasTdt() {
        return this.tdt;
    }

    public void setTdt(boolean tdt) {
        this.tdt = tdt;
    }


    public void calcularPrecioFinal() {
        if(this.tamanio > 40) {
            this.precioFinal += (int) (this.precioFinal * 0.3);
        }
        if(this.tdt) {
            this.precioFinal += 250000;
        }
    }

    @Override
    public String toString() {
        return "Televisor{" +
                "nombre='" + nombre + '\'' +
                ", precioFinal=" + precioFinal +
                ", procedencia='" + procedencia + '\'' +
                ", tipoConsumo=" + tipoConsumo +
                ", tamanio=" + tamanio +
                ", tdt=" + tdt +
                '}';
    }
}



