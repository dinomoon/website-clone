export const home = (req, res) => res.render("home", { title: "Home" });
export const search = (req, res) => {
  const {
    query: { term },
  } = req;
  res.render("search", { title: "Search", term });
};
export const signIn = (req, res) => res.render("signIn", { title: "Sign In" });
export const signUp = (req, res) => res.render("signUp", { title: "Sign Up" });
