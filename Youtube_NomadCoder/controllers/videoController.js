import { videos } from "../db";

export const home = (req, res) => res.render('home', { pageTitle: 'Home', videos });

export const search = (req, res) => {
  const { query: { term: searchingBy } } = req;
  res.render('search', { pageTitle: 'Search', searchingBy });
}

//export const videos = (req, res) => res.render('videos', { pageTitle: 'Videos' });
export const upload = (req, res) => res.render('upload', { pageTitle: 'Upload' });
export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle: 'Video Detail' });
export const editDetail = (req, res) => res.render('editDetail', { pageTitle: 'Edit Detail' });
export const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle: 'Delete Video' });