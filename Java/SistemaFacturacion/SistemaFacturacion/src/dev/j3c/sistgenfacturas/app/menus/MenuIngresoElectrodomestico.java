package dev.j3c.sistgenfacturas.app.menus;

import dev.j3c.sistgenfacturas.entidad.Electrodomestico;
import dev.j3c.sistgenfacturas.entidad.Nevera;
import dev.j3c.sistgenfacturas.entidad.Televisor;

import javax.swing.*;

public class MenuIngresoElectrodomestico {

    public static Electrodomestico obtenerElectrodomestico(){

        char elecElegido = escogerElectrodomestico();
        Electrodomestico electrodomestico = null;
        switch(elecElegido){
            case '1':
                electrodomestico = constTelevisor(electrodomestico);
                break;
            case '2':
                electrodomestico = constNevera(electrodomestico);
                break;
            default:
                electrodomestico = constElectrodomestico(electrodomestico);
                break;
        }
        return electrodomestico;
    }

    private static Electrodomestico constElectrodomestico(Electrodomestico electrodomestico) {
        char consumo = obtenerConsumo();
        String procedencia = obtenerProcedencia();
        Electrodomestico electrodomestico1 = new Electrodomestico(procedencia, consumo);
        return electrodomestico1;
    }

    private static Electrodomestico constNevera(Electrodomestico electrodomestico) {
        char consumo = obtenerConsumo();
        String procedencia = obtenerProcedencia();
        int capacidad = obtenerCapacidad();
        Electrodomestico nevera = new Nevera(procedencia, consumo, capacidad);
        return nevera;
    }

    private static Electrodomestico constTelevisor(Electrodomestico electrodomestico) {
        char consumo = obtenerConsumo();
        String procedencia = obtenerProcedencia();
        int tamanio = obtenerTamanio();
        boolean tieneTDT = consultarTDT();

        Electrodomestico televisor = new Televisor(procedencia, consumo, tamanio, tieneTDT);
        return televisor;
    }

    private static int obtenerCapacidad() {
        int capacidad = -1;
        do {
            try {
                capacidad = Integer.parseInt(JOptionPane.showInputDialog("Ingrese la capacidad de la nevera en litros: "));
            }catch (Exception e){
                JOptionPane.showMessageDialog(null,"Ingrese un valor numerico");
            }
        } while(capacidad == -1 || capacidad <= 0);
        return capacidad;
    }


    private static boolean consultarTDT() {
        char opcionElegida = ' ';
        boolean tieneTDT = false;
        do {
            try {
                opcionElegida = JOptionPane.showInputDialog("Tiene conexion TDT? \n" +
                        "1.Si.\n" +
                        "2.No.\n" ).charAt(0);
            }catch (Exception e){
                JOptionPane.showMessageDialog(null,"Ingrese un valor numerico que sea 1 o 2");
            }
        } while(opcionElegida < '1' || opcionElegida > '2');

        //operador ternario
        tieneTDT = (opcionElegida == '1')?true:false;
        return tieneTDT;
    }

    private static int obtenerTamanio() {
        int tamanio = -1;
        do {
            try {
                tamanio = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el tamaño del televisor en pulgadas: "));
            }catch (Exception e){
                JOptionPane.showMessageDialog(null,"Ingrese un valor numerico");
            }
        } while(tamanio == -1 || tamanio <= 0);
        return tamanio;
    }

    private static String obtenerProcedencia() {
        char opcionElegida = ' ';
        String procedencia = "";
        do {
            try {
                opcionElegida = JOptionPane.showInputDialog("Seleccione la precendecia: \n" +
                        "1. Nacional.\n" +
                        "2. Internacional.\n" ).charAt(0);
            }catch (Exception e){
                JOptionPane.showMessageDialog(null,"Ingrese un valor numerico que sea 1 o 2");
            }
        } while(opcionElegida < '1' || opcionElegida > '2');
        procedencia = (opcionElegida == '1')?"Nacional":"Internacional";
        return procedencia;
    }

    private static char obtenerConsumo() {
        char opcionElegida = ' ';
        do {
            try {
                opcionElegida = JOptionPane.showInputDialog("Ingrese el tipo de consumo: \n" +
                        "A. tipo A --> 450.\n" +
                        "B. tipo B --> 350.\n" +
                        "C. tipo C --> 250.\n").charAt(0);
            }catch (Exception e){
                JOptionPane.showMessageDialog(null,"Ingrese un valor numerico que sea 1 o 2");
            }
        } while(opcionElegida < 'A' || opcionElegida > 'C');
        return opcionElegida;
    }

    private static char escogerElectrodomestico(){
        char opcionElegida = ' ';
        do {
            try {
                opcionElegida = JOptionPane.showInputDialog("Ingrese a continuación una opción: \n" +
                        "1.Televisor.\n" +
                        "2.Nevera.\n" +
                        "3.Otro\n").charAt(0);
            }catch (Exception e){
                JOptionPane.showMessageDialog(null,"Ingrese un valor válido.");
            }
        } while(opcionElegida < '1' || opcionElegida > '3');
        return opcionElegida;
    }

    public static int getPosElecAEliminar(int tamanioLista) {
        int posicion = -1;
        do {
            try {
                posicion = Integer.parseInt(JOptionPane.showInputDialog("Ingrese la posición del electrodomestico a eliminar: "));
            }catch (Exception e){
                JOptionPane.showMessageDialog(null,"Ingrese un valor numerico");
            }
        } while(posicion <= 0 || posicion > tamanioLista);
        return posicion;
    }


}
