import { createUserController } from "../controllers/user.controllers";

const userRoutes = app => {
    app.post("/user", createUserController);
};

export default userRoutes;