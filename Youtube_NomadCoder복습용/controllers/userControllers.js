export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userProfile = (req, res) => res.render("userProfile", { pageTitle: "userProfile" })
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "editProfile" })
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "changePassword" })