import express, { Express } from "express";
import { getCreateUserPage, getHomePage, postCreateUserPage, postDeleteUserPage, getViewUserPage, postUpdateUserPage } from "../controllers/user.controller";


const router = express.Router();

const webRouter = (app: Express) => {
    router.get("/", getHomePage);


    router.get("/create_user", getCreateUserPage);
    router.post("/handle_create_user", postCreateUserPage);
    router.post("/handle-delete-user/:id", postDeleteUserPage);
    router.get("/handle-view-user/:id", getViewUserPage);
    router.post("/handle-update-user", postUpdateUserPage);
    app.use("/", router);
}


export default webRouter;
