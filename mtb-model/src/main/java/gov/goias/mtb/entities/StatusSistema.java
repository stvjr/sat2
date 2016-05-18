package gov.goias.mtb.entities;

/**
 * Created by thiago-rs on 3/17/16.
 */
public enum StatusSistema {

    A("Ativo"),
    I("Inativo"),
    D("Desabilitado");

    private final String desc;

    StatusSistema(String desc){
        this.desc = desc;
    }

}
