package application;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);

        System.out.print("Ingresa tu nombre: ");
        String nombre = myObj.nextLine();

        System.out.print("Celular: ");
        long celular = myObj.nextLong();

        System.out.print("Edad: ");
        int edad = myObj.nextInt();

        System.out.println("Bienvenido señor " + nombre + ", es un placer para nosotros contar con una persona de " + edad + " años.\n" +
                "Próximamente nos comunicaremos con usted al numero " + celular  +".\n" +
                "Feliz día");

    }
}
