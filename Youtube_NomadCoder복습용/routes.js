const HOME = "/";
const SEARCH = "/search";
const SIGNIN = "/sign-in";
const SIGNUP = "/sign-up";
const LOGOUT = "/logout";

// users
const USERS = "/users";
const PROFILE = "/:id";
const PROFILE_EDIT = "/:id/edit";
const CHANGE_PASSWORD = "/:id/change-password";
const ME = "/me";

// videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";
const FB = "/auth/facebook";
const FB_CALLBACK = "/auth/facebook/callback";

const routes = {
  home: HOME,
  search: SEARCH,
  signIn: SIGNIN,
  signUp: SIGNUP,
  logout: LOGOUT,
  users: USERS,
  profile: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return PROFILE;
    }
  },
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
  me: ME,
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
  gitHub: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  facebook: FB,
  facebookCallback: FB_CALLBACK,
};

export default routes;
