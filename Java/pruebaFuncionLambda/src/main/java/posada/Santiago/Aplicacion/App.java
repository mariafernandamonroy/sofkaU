package posada.Santiago.Aplicacion;

import java.util.List;

public class App {
    public static void main(String[] args) {
        List<String> nombres;
        Recursos creadorDeLista = new Recursos();

        nombres = creadorDeLista.getNombres();
        System.out.println(nombres);
    }
}
