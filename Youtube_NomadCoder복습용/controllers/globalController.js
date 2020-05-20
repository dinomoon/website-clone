import Video from "../models/Video";
import User from "../models/User";
import routes from "../routes";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { title: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { title: "Home", videos: [] });
  }
};
export const search = async (req, res) => {
  const {
    query: { term },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: term, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { title: "Search", term, videos });
};
export const signIn = (req, res) => res.render("signIn", { title: "Sign In" });

export const getSignUp = (req, res) =>
  res.render("signUp", { title: "Sign Up" });
export const postSignUp = async (req, res) => {
  const {
    body: { name, email, password, password_confirm },
  } = req;
  if (password != password_confirm) {
    res.status(400);
    res.render("signIn", { title: "Sign-in" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      res.redirect(routes.home);
    } catch (error) {
      console.log(error);
    }
  }
};
