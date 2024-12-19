import { createPagamentoController } from "../controllers/user.controllers";

const pagamentoRoutes = app => {
    app.post("/pagamento", createPagamentoController);
};

export default pagamentoRoutes;