import Video from "../models/Video";
import User from "../models/User";
import routes from "../routes";
import passport from "passport";

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
export const getSignIn = (req, res) =>
  res.render("signIn", { title: "Sign In" });
export const postSignIn = passport.authenticate("local", {
  failureRedirect: routes.signIn,
  successRedirect: routes.home,
});

export const getSignUp = (req, res) =>
  res.render("signUp", { title: "Sign Up" });
export const postSignUp = async (req, res, next) => {
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
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl: avatar_url,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const githubLogin = passport.authenticate("github");
export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};
