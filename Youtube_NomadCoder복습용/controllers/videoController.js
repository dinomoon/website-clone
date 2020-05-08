import routes from "../routes";
import Video from "../models/Video";

export const videoDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("videoDetail", { title: "video-detail", id });
};

export const videoEdit = (req, res) =>
  res.render("videoEdit", { title: "video-edit" });

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
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(1234));
};
