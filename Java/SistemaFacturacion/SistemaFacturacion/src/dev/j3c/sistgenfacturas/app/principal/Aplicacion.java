package dev.j3c.sistgenfacturas.app.principal;

import dev.j3c.sistgenfacturas.app.facturas.FacturaCompra;
import dev.j3c.sistgenfacturas.app.menus.MenuIngresoElectrodomestico;
import dev.j3c.sistgenfacturas.app.menus.MenuPrincipal;
import dev.j3c.sistgenfacturas.entidad.Electrodomestico;
import jdk.swing.interop.SwingInterOpUtils;

import javax.swing.*;
import java.util.ArrayList;
import java.util.List;

public class Aplicacion {
    private static List<Electrodomestico> listaElectrodomesticos = new ArrayList<>();

    public static void main(String[] args) {
        char opcElegida;
        do {
            opcElegida = MenuPrincipal.mostrarMenuPrincipal();
            if(opcElegida == '1'){
                Electrodomestico electrodomestico = MenuIngresoElectrodomestico.obtenerElectrodomestico();
                listaElectrodomesticos.add(electrodomestico);
            } else if(opcElegida == '2') {
                if(listaElectrodomesticos.size() > 0) {
                    Aplicacion.eliminarProducto();
                } else {
                    JOptionPane.showMessageDialog(null, "No hay electrodomesticos agregados para eliminar.");
                }
            } else {
                FacturaCompra factura = new FacturaCompra(listaElectrodomesticos);
                JOptionPane.showMessageDialog(null, factura.getFactura());
                opcElegida = '4';
            }
        }while(opcElegida != '4');
    }

    private static void eliminarProducto() {
        int posicion = 0;
        for(Electrodomestico e: listaElectrodomesticos) {
            System.out.println((++posicion) + ". " + e.toString());    //Polimorfismo

        }
        posicion = MenuIngresoElectrodomestico.getPosElecAEliminar(listaElectrodomesticos.size());
        listaElectrodomesticos.remove(posicion - 1 );
    }
}
