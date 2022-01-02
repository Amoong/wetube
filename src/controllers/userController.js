import { redirect } from "express/lib/response";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
  console.log(req);
  res.send("/");
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const see = (req, res) => res.send("see");
