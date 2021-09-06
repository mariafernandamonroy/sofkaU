package Lambda;

import javax.sound.midi.Soundbank;
import javax.swing.*;
import java.util.InputMismatchException;
import java.util.Scanner;

public class LambdaAppCalcularPromedio {

    public double calcular(double n1, double n2){

        /*Promedio app = new Promedio() {
            @Override
            public double calcularPromedio(double n1, double n2) {
                return  (n1 + n2)/2;
            }
        }; */

        Promedio app = (double valor1, double valor2) -> (valor1+valor2)/2;
        double promedio = app.calcularPromedio(n1, n2);
        return promedio;
    }

    public static void main(String[] args) {
        double entrada1 = -1.0;
        double entrada2 = -1.0;
        double promedio;

        do {
            try {
                entrada1 = Double.parseDouble(JOptionPane.showInputDialog("Ingresa el primer numero"));
            } catch (Exception e) {
                JOptionPane.showMessageDialog(null, "Ingrese un numero de 1 a 100");
                continue;
            }
        }while(entrada1 < 0.1 || entrada1 > 100);


        do {
            try {
                entrada2 = Double.parseDouble(JOptionPane.showInputDialog("Ingresa el segundo numero"));
            } catch (Exception e) {
                JOptionPane.showMessageDialog(null, "Ingrese un numero de 1 a 100");
            }
        } while(entrada2 < 0.1 || entrada2 > 100);

        LambdaAppCalcularPromedio app = new LambdaAppCalcularPromedio();
        promedio = app.calcular(entrada1, entrada2);
        System.out.println(promedio);
    }
}
