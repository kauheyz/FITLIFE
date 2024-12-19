import { createInstrutorController } from "../controllers/user.controllers";

const instrutorRoutes = app => {
    app.post("/instrutor", createInstrutorController);
};

export default instrutorRoutes;