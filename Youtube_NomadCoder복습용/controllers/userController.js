export const me = (req, res) => {
  res.render("profile", { title: "profile", user: req.user });
  console.log(req.user);
};

export const profile = (req, res) =>
  res.render("profile", { title: "profile" });

export const profileEdit = (req, res) =>
  res.render("profileEdit", { title: "profile-edit" });

export const changePassword = (req, res) =>
  res.render("changePassword", { title: "change-password" });
