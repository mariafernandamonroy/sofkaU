package posada.Santiago.Aplicacion;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Scanner;

public class Recursos {
    private List<String> nombres;

    public Recursos (){
        this.popularLista();
    }

    private void popularLista() {
        try {
            File myObj = new File("fileNames.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                nombres.add(myReader.nextLine());
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }

    public List<String> getNombres() {
        return nombres;
    }

    /*public static void main(String[] args) {
        Recursos fileCreator = new Recursos();
    }*/


}
