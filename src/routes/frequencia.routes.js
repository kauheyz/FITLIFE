import { createFrequenciaController } from "../controllers/user.controllers";

const frequenciaRoutes = app => {
    app.post("/frequencia", createFrequenciaController);
};

export default frequenciaRoutes;