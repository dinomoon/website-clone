const HOME = "/";
const SEARCH = "/search";
const SIGNIN = "/sign-in";
const SIGNUP = "/sign-up";

// users
const USERS = "/users";
const PROFILE_EDIT = "/:id/edit";
const CHANGE_PASSWORD = "/:id/change-password";

// videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";

const routes = {
  home: HOME,
  search: SEARCH,
  signIn: SIGNIN,
  signUp: SIGNUP,
  users: USERS,
  profileEdit: (id) => {
    if (id) {
      return `/users/${id}/edit`;
    } else {
      return PROFILE_EDIT;
    }
  },
  changePassword: (id) => {
    if (id) {
      return `/users/${id}/change-password`;
    } else {
      return CHANGE_PASSWORD;
    }
  },
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  videoEdit: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return VIDEO_EDIT;
    }
  },
  videoDelete: (id) => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return VIDEO_DELETE;
    }
  },
};

export default routes;
