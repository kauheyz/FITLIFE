import { createAlunoPlanoTreinoController } from "../controllers/user.controllers";

const alunoPlanoTreinoRoutes = app => {
    app.post("/aluno-plano-treino", createAlunoPlanoTreinoController);
};

export default alunoPlanoTreinoRoutes;