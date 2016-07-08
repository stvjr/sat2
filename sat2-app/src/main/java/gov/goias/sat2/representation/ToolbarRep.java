package gov.goias.sat2.representation;

import gov.goias.sat2.AlmPublisher;
import gov.goias.sat2.GitRepositoryState;
import lombok.Data;

import javax.xml.bind.annotation.XmlRootElement;
import java.io.IOException;


@XmlRootElement
@Data
public class ToolbarRep {

    public ToolbarRep() throws IOException {

    }

    public ToolbarRep(UsuarioRep usuario, AlmPublisher.AlmRep alm) throws IOException {
        this.usuario = usuario;
        this.alm = alm;
        this.gitRepositoryState = GitRepositoryState.getInstance();
    }

    private UsuarioRep usuario;
    private AlmPublisher.AlmRep alm;
    private GitRepositoryState gitRepositoryState;

}
