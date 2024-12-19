import { createAlunoController } from "../controllers/user.controllers";

const alunoRoutes = app => {
    app.post("/aluno", createAlunoController);
};

export default alunoRoutes;