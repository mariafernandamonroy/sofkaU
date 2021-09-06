package posada.Santiago.Aplicacion;

import javax.swing.*;
import java.util.LinkedList;
import java.util.List;

public class App {
    public static void main(String[] args) {
        List<String> nombres = new LinkedList<String>();
        String impresion = "";
        Recursos creadorDeLista = new Recursos();

        nombres = creadorDeLista.getNombres();
        for(String nombre: nombres){
            impresion += nombre + "\n";
        }
        System.out.println(impresion);
        JOptionPane.showMessageDialog(null, impresion);
    }
}
