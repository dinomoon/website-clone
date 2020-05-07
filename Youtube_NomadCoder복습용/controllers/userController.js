export const userDetail = (req, res) =>
  res.render("userDetail", { title: "user-detail" });

export const profileEdit = (req, res) =>
  res.render("profileEdit", { title: "profile-edit" });

export const changePassword = (req, res) =>
  res.render("changePassword", { title: "change-password" });
