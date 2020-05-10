import routes from "../routes";
import Video from "../models/Video";

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById({ _id: id });
    res.render("videoDetail", { title: "video-detail", video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getVideoEdit = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoEdit", { title: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postVideoEdit = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate(id, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getUpload = (req, res) =>
  res.render("upload", { title: "upload" });

export const postUpload = async (req, res) => {
  const {
    file: { path },
    body: { title, description },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDelete = async (req, res) => {
  const {
    body: { id },
  } = req;
  try {
    await Video.findOneAndDelete(id);
  } catch (error) {}
  res.redirect(routes.home);
};
