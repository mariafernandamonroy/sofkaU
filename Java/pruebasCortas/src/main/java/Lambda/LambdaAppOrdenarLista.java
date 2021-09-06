package Lambda;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class LambdaAppOrdenarLista {

    private static List <String> nombres = new ArrayList<>();
    private String listaOrdenada = "";

    public List<String> ordenar(List<String> lista) throws FileNotFoundException {

        try {
            File myObj = new File("nombres.txt");
            Scanner fileReader = new Scanner(myObj);
            while (fileReader.hasNextLine()) {
                lista.add(fileReader.nextLine());
            }
            fileReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("Ocurrio un error");
            e.printStackTrace();
        }

        /*Collections.sort(lista, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.compareTo(o2);
            }
        }); */

        Collections.sort(lista, (String p1, String p2) -> p1.compareTo(p2));

        return lista;

    }
    public static void main(String[] args) throws FileNotFoundException {
        LambdaAppOrdenarLista app = new LambdaAppOrdenarLista();
        app.ordenar(nombres);

        System.out.println(nombres);

    }

}
