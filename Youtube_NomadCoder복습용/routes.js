const HOME = "/";
const SEARCH = "/search";
const SIGNIN = "/sign-in";
const SIGNUP = "/sign-up";

// users
const USERS = "/users";
const USER_DETAIL = "/:id";
const PROFILE_EDIT = "/:id/edit";
const CHANGE_PASSWORD = "/:id/change-password";

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
  profileEdit: PROFILE_EDIT,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  videoEdit: VIDEO_EDIT,
};

export default routes;
