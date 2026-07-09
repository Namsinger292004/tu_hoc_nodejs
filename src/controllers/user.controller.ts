import { Request, Response } from "express";
import { handleCreateUser } from "../sevices/user.service";


const getHomePage = (req: Request, res: Response) => {
    return res.render("home");
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create_user.ejs");
}
const postCreateUserPage = (req: Request, res: Response) => {
    // object destructuring
    const { fullname, email, address } = req.body;

    //handle create_user
    handleCreateUser(fullname, email, address);
    return res.redirect("/");
}

export { getHomePage, getCreateUserPage, postCreateUserPage };