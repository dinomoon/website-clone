//global
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';

//users
const USERS = '/users';
const USER_PROFILE = '/:id';
const USER_EDIT_PROFILE = '/edit-profile';
const USER_CHANGE_PASSWORD = '/change-password';

//videos
const VIDEOS = '/videos';
const UPLOAD = '/upload';
const VIDEO_DETAIL = '/:id';
const VIDEO_EDIT = '/edit-video';
const VIDEO_DELETE = '/delete-video';

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userProfile: id => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_PROFILE;
    }
  },
  editProfile: USER_EDIT_PROFILE,
  changePassword: USER_CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: VIDEO_EDIT,
  deleteVideo: VIDEO_DELETE,
};

export default routes;