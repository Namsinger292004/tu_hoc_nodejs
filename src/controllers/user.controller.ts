import { Request, Response } from "express";
import { getAllUsers, handleCreateUser, handleDeleteUser, getUserById, updateUserById } from "services/user.service";


const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();

    return res.render("home", { users: users });
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create_user.ejs");
}
const postCreateUserPage = async (req: Request, res: Response) => {
    // object destructuring
    const { fullname, email, address } = req.body;

    //handle create_user
    await handleCreateUser(fullname, email, address);
    return res.redirect("/");
}
const postDeleteUserPage = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;

    await handleDeleteUser(id);
    return res.redirect("/");
}
const getViewUserPage = async (req: Request<{ id: string }>, res: Response) => {

    const { id } = req.params;
    const user = await getUserById(id);
    return res.render("view-user.ejs", { id: id, user: user });
}
const postUpdateUserPage = async (req: Request<{ id: string }>, res: Response) => {

    const { id, fullname, email, address } = req.body;
    await updateUserById(id, fullname, email, address);
    return res.redirect("/");
}
export { getHomePage, getCreateUserPage, postCreateUserPage, postDeleteUserPage, getViewUserPage, postUpdateUserPage };