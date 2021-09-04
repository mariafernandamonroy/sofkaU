package dev.j3c.sistgenfacturas.entidad;

public class Nevera extends Electrodomestico {
    private int capacidad;

    public Nevera(String procedencia, char tipoConsumo, int capacidad) {
        super(procedencia, tipoConsumo);
        this.capacidad = capacidad;
        calcularPrecioFinal();
        this.nombre = "Nevera";
    }

    public int getCapacidad() {
        return this.capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }

    public void calcularPrecioFinal(){
        if(this.capacidad > 120) {
            double resto = capacidad - 120;
            resto /= 10;
            resto = Math.floor(resto);

            precioFinal += resto * (0.05 * precioFinal);

            this.precioFinal += (int) (this.precioFinal * 0.3);
        }
    }

    @Override
    public String toString() {
        return "Nevera{" +
                super.toString() + "\n" +
                "capacidad=" + this.capacidad +
                '}';
    }
}
