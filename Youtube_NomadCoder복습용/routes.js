const HOME = "/";
const SEARCH = "/search";
const SIGNIN = "/sign-in";
const SIGNUP = "/sign-up";

// users
const USERS = "/users";
const USER_DETAIL = "/:id";
const USER_EDIT = "/:id/edit";

// videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";

const routes = {
  home: HOME,
  search: SEARCH,
  signIn: SIGNIN,
  signUp: SIGNUP,
  users: USERS,
  userDetail: USER_DETAIL,
  userEdit: USER_EDIT,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  videoEdit: VIDEO_EDIT,
};

export default routes;
