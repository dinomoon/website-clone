export const me = (req, res) => {
  res.render("profile", { title: "profile", user: req.user });
  console.log(req.user);
};

export const profile = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id);
    res.render("profile", { pageTitle: "profile", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const profileEdit = (req, res) =>
  res.render("profileEdit", { title: "profile-edit" });

export const changePassword = (req, res) =>
  res.render("changePassword", { title: "change-password" });
