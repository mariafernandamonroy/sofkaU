package dev.j3c.sistgenfacturas.app.menus;

import javax.swing.*;

public class MenuPrincipal {

    public static char mostrarMenuPrincipal() {
        char opcionElegida = ' ';
        do {
            try {
                opcionElegida = JOptionPane.showInputDialog("Ingrese a continuación una opción: \n" +
                        "1.Ingresar un nuevo electrodoméstico.\n" +
                        "2.Eliminar un electrodoméstico.\n" +
                        "3.Generar factura de pago\n" +
                        "4. Salir").charAt(0);
            }catch (Exception e){
                JOptionPane.showMessageDialog(null,"Ingrese un valor válido.");
            }
        } while(opcionElegida < '1' || opcionElegida > '4');
        return opcionElegida;
    }

}
