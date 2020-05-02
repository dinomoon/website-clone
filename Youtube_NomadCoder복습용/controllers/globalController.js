import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: 'Home', videos });
}
export const getJoin = (req, res) => res.render("join", { pageTitle: 'Join' });
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password == password2) {
    res.redirect(routes.home);
  } else {
    res.status(400);
    res.render('join', { pageTitle: 'Join' });
  }
}
export const login = (req, res) => res.render("login", { pageTitle: 'Login' });
export const logout = (req, res) => res.redirect(routes.home);
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: 'search', searchingBy });
}