import express, { Express } from "express";
import { getCreateUserPage, getHomePage, postCreateUserPage } from "../controllers/user.controller";


const router = express.Router();

const webRouter = (app: Express) => {
    router.get("/", getHomePage);


    router.get("/create_user", getCreateUserPage);
    router.post("/handle_create_user", postCreateUserPage);

    app.use("/", router);
}

export default webRouter;
