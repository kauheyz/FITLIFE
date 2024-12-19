import userRoutes from "./user.routes";
import alunoRoutes from "./aluno.routes";
import instrutorRoutes from "./instrutor.routes";
import pagamentoRoutes from "./pagamento.routes";
import frequenciaRoutes from "./frequencia.routes";
import planoTreinoRoutes from "./planotreino.routes";
import alunoPlanoTreinoRoutes from "./alunoplanotreino.routes";

const routes = app => {
    userRoutes(app);
    alunoRoutes(app);
    instrutorRoutes(app);
    pagamentoRoutes(app);
    frequenciaRoutes(app);
    planoTreinoRoutes(app);
    alunoPlanoTreinoRoutes(app);
};

export default routes;
