import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find();
    res.render('home', { pageTitle: 'Home', videos });
  } catch (error) {
    console.log(error);
    res.render('home', { pageTitle: 'Home', videos: [] });
  }
}

export const search = (req, res) => {
  const { query: { term: searchingBy } } = req;
  res.render('search', { pageTitle: 'Search', searchingBy, videos });
}

//export const videos = (req, res) => res.render('videos', { pageTitle: 'Videos' });
export const getUpload = (req, res) => res.render('upload', { pageTitle: 'Upload' });
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));
}

export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle: 'Video Detail' });
export const editDetail = (req, res) => res.render('editDetail', { pageTitle: 'Edit Detail' });
export const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle: 'Delete Video' });