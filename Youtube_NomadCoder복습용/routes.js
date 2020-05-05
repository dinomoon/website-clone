const HOME = "/";
const SEARCH = "/search";
const SIGNIN = "/sign-in";
const SIGNUP = "/sign-up";

// users
const USER_DETAIL = "/users/:id";
const USER_EDIT = "/users/:id/edit";

// videos
const VIDEO_DETAIL = "/videos/:id";
const VIDEO_EDIT = "/videos/:id/edit";

const routes = {
  home: HOME,
  search: SEARCH,
  signIn: SIGNIN,
  signUp: SIGNUP,
  userDetail: USER_DETAIL,
  userEdit: USER_EDIT,
  videoDetail: VIDEO_DETAIL,
  videoEdit: VIDEO_EDIT,
};

export default routes;
