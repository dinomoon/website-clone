import Video from "../models/Video";

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
export const signUp = (req, res) => res.render("signUp", { title: "Sign Up" });
