import { createPlanoTreinoController } from "../controllers/user.controllers";

const planoTreinoRoutes = app => {
    app.post("/plano-treino", createPlanoTreinoController);
};

export default planoTreinoRoutes;