## 0. Introduction

- 0.3 Websites vs Webapps
<br>
Webapp이 Website보다 더 인터랙티브하다. 예를 들면 넷플릭스나 유튜브는 웹앱이라고 할 수 있다.<br><br>

## 1. Node.js Theory
- 1.0 What is Node.js<br>
Node.js는 브라우저에 내장된 JS를 브라우저 밖에서 사용할수 있게 한 것이다. (한마디로 브라우저 밖의 javascript)<br><br>

- 1.1 Use Cases for Node.js<br>
왜 PHP와 라라벨을 사용하지 않고, Python의 장고를 사용하지 않고 Node.js를 사용하는가?
  1. 백엔드에서 자바스크립트를 사용하고 싶다.
  2. 성향의 차이. 장고는 거대한 장난감이다. 가지고 놀기 위해서 사용법을 알아야한다. 하지만 노드는 처음부터 블럭을 쌓아올리는 것과 같다.
  3. 많은 데이터를 다뤄야할 때 Node를 사용해라. 왜냐하면 Node는 데이터를 다루는 성능이 상당히 좋기 때문이다.(create, read, delete, update)(실시간 기능에도 좋다.) 하지만, 하드웨어를 다루는 기능에는 좋지 않다.
  4. 단순히 정적인 웹사이트를 만든다면, 무엇을 사용하느냐는 본인이 무엇을 좋아하느냐에 달렸다. 하지만, 거대한 웹사이트를 만든다면, 각 언어의 장단점을 파악해서 사용해야한다.<br><br>
- 1.2 Who Uses Node.js?<br>
  1. Uber
  2. Netflix (백엔드를 단 하나의 언어로 할 필요는 없다. 예상하건데 넷플릭스는 수많은 백엔드 언어로 백엔드를 만들었을 것이다. 하지만 메인언어는 Node.js이다.)
  3. paypal<br><br><br>

## 2. Express.js
- 2.0 What is a Server?
  1. 늘 켜져있는 컴퓨터
  2. 내 접속 요청을 기다리는, 요청에 응답하는 컴퓨터
  3. 접속을 받아주는 무언가, 어떤 접속을 listen하고 있는 무언가<br><br>

- 2.1 What is Express?
  1. Node.js의 프레임워크!<br><br>

- 2.2 Installing Express with NPM<br>
  1. npm init
  2. npm install express<br><br>

- 2.3 Your First Express Server
```javascript
const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);

// node index.js으로 실행 시킬 수도 있지만
// package.json에 "scripts":{"start": "node index.js"}
// 를 추가하면 npm start로도 실행이 된다.
```

<br><br><br><br>

- 2.4 Handling Routes with Express
```javascript
const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
}
const handleHome = (req, res) => {
  res.send("Hello from Home");
}
const handleProfile = (req, res) => {
  res.send("Hello from Profile");
}

app.get('/', handleHome); //route
app.get('/profile', handleProfile); //route
app.listen(PORT, handleListening);
```

<br><br><br>

- 2.5 ES6 on NodeJs using Babel
  1. npm install @babel/node
  2. preset설치 (여기서는 env) npm install @babel/preset-env
  3. babelrc파일을 만들고 바벨의 설정을 넣어준다.
  4. npm install @babel/core
  5. 바벨 덕분에 const express = require("express")를 import express from "express"로 바꿀 수 있다! (더 익숙한 코드!)
  6. scripts에서 node index.js를 babel-node index.js로 변경한다.
  + 서버를 껏다 키지 않고 새로고침을 해도 변경사항이 적용될 수 있게 nodemon을 설치해준다. npm install nodemon -D (프로젝트 실행에 필요 없는 거니까 -D)
  7. scripts에서 babel-node index.js를 nodemon --exec babel-node index.js로 변경한다.

<br><br>

- 2.6 Express Core: Middlewares
```javascript
const betweenHome = (req, res, next) => {
  res.send("Hello");
  next();
}

// 홈에만 middleware를 쓸 때
app.get('/', betweenHome, handleHome);
app.get('/profile', handleProfile);
app.listen(PORT, handleListening);


// 모든 연결에 middleware를 쓰고 싶을 때
app.use(betweenHome);
app.get('/', handleHome);
app.get('/profile', handleProfile);
app.listen(PORT, handleListening);


// 홈 이외의 모든 연결에 middleware를 쓰고 싶을 때
app.get('/', handleHome);
app.use(betweenHome);
app.get('/profile', handleProfile);
app.listen(PORT, handleListening);
```
  1. 말 그대로 중간에 어떠한 역할을 하는 것
  2. 유저의 로그인 여부를 체크할 수 있다.
  3. 파일을 중간에 가로챌 수 있다.
  4. 로그를 작성하는 미들웨어를 작성할 수도 있다.

<br><br>

- 2.7 Express Core: Middlewares2
  1. morgan설치와 임포트(logging에 도움을 줌)
      - logging: 웹페이지에서 일어나는 일을 기록하는 것
      - import morgan from "morgan"
      - app.use(morgan("dev"))
  2. helmet설치와 임포트
      - 보안에 도움을 준다.
      - import helmet from "helmet"
      - app.use(helmet());
  3. middleware는 중간에 연결을 끊을 수도 있다.
      - res.send()를 사용한다면!
  4. body-parser설치
      - form으로 보내진 정보는 request object가 가지고 있다.
      - 그리고 그 request object에 접근하도록 해주는 것이 body-parser이다.
  5. cookie-parser 설치
      - 쿠키에 유저 정보 저장
      - 세션을 다루기 위함

  ```javascript
  //const express = require("express");
  import express from "express"; //바벨 덕분에 가능!!
  import morgan from "morgan";
  import helmet from "helmet";
  import cookieParesr from "cookie-parser";
  import bodyParser from "body-parser";
  const app = express();

  const PORT = 4000;

  const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
  const handleHome = (req, res) => res.send("Hello from Home");
  const handleProfile = (req, res) => res.send("Hello from Profile");

  app.use(helmet());
  app.use(cookieParesr());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  app.get('/', handleHome);
  app.get('/profile', handleProfile);
  app.listen(PORT, handleListening);
  ```

<br><br>

- 2.8 Express Core: Routing
  1. index.js를 app.js로 바꾸고 init.js파일을 새로 하나 만듦
  2. router.js를 만들어서 라우터를 만들어줌
      - router는 많은 route들이 담긴 파일이다.
  3. export의 방식에 따른 import의 차이
      - export default app과 export const userRouter = ~~
      - import app from "./app"
      - import { userRouter } from "./router"
  4. use의 의미
      - middleware를 사용한다.
      - app.use('/user', userRouter);
      - /user경로로 들어오면 userRouter를 사용한다.
  ```javascript

  // app.js
  //const express = require("express");
  import express from "express"; //바벨 덕분에 가능!!
  import morgan from "morgan";
  import helmet from "helmet";
  import cookieParesr from "cookie-parser";
  import bodyParser from "body-parser";
  import { userRouter } from "./router"; //default로 export한 것이 아니라서 이렇게 써줘야한다!(중괄호)
  const app = express();

  const handleHome = (req, res) => res.send("Hello from Home");
  const handleProfile = (req, res) => res.send("Hello from Profile");

  app.use(helmet());
  app.use(cookieParesr());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  app.get('/', handleHome);
  app.get('/profile', handleProfile);

  app.use('/user', userRouter);

  export default app;


  // init.js
  import app from "./app";

  const PORT = 4000;

  const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

  app.listen(PORT, handleListening);


  // router.js
  import express from "express";

  export const userRouter = express.Router(); //userRouter만 export됨
  //export default userRouter -> router.js전체가 export됨

  userRouter.get('/', (req, res) => res.send("<h1>user Home</h1>"));
  userRouter.get('/table', (req, res) => res.send("user Table"));
  userRouter.get('/photo', (req, res) => res.send("user Photo"));
  userRouter.get('/info/family', (req, res) => res.send("user Family"));
  ```

<br><br>

- 2.9 MVC Pattern Part One
  1. MVC(Model, View, Controller)
      - Model -> data
      - View -> how does the data look
      - Controller -> function that looks for the data
      - 세 가지를 모두 분리해야함
  2. routers라는 폴더를 만들고 안에 userRouter, videoRouter, globalRouter를 만듦.
  ```javascript
  //app.js
  //const express = require("express");
  import express from "express"; //바벨 덕분에 가능!!
  import morgan from "morgan";
  import helmet from "helmet";
  import cookieParesr from "cookie-parser";
  import bodyParser from "body-parser";
  import userRouter from "./routers/userRouter";
  import videoRouter from "./routers/videoRouter";
  import globalRouter from "./routers/globalRouter";
  const app = express();

  app.use(cookieParesr());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(morgan("dev"));

  app.use('/', globalRouter);
  app.use('/users', userRouter);
  app.use('/videos', videoRouter);

  export default app;


  //globalRouter.js
  import express from "express";

  const globalRouter = express.Router();

  export default globalRouter;


  //userRouter.js
  import express from "express";

  const userRouter = express.Router();

  export default userRouter;


  //videoRouter.js
  import express from "express";

  const videoRouter = express.Router();

  export default videoRouter;
  ```

  <br><br>

- 2.10 MVC Pattern Part Two
  1. routes라는 파일을 만들어서 URL을 변수로 저장한다.(모든 URL을 기억하지 않아도 되니까 나중에 redirect할 때 편함)
  2. /:id는 변하는 값으로 자동으로 인식해준다.
  ```javascript
  //routes.js
  //Global
  const HOME = '/';
  const JOIN = '/join';
  const LOGIN = '/login';
  const LOGOUT = '/logout';
  const SEARCH = '/search';

  //Users
  const USERS = '/users';
  const USER_DETAIL = '/:id';
  const EDIT_PROFILE = '/edit-profile';
  const CHANGE_PASSWORD = '/change-password';

  //Videos
  const VIDEOS = '/videos';
  const UPLOAD = '/upload';
  const VIDEO_DETAIL = '/:id';
  const EDIT_DETAIL = '/:id/edit';
  const DELETE_VIDEO = '/:id/delete';

  const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editDetail: EDIT_DETAIL,
    deleteVideo: DELETE_VIDEO,
  };


  //app.js
  import routes from "./routes"; //routes임포트

  //routes값들로 URL변경
  app.use(routes.home, globalRouter);
  app.use(routes.users, userRouter);
  app.use(routes.videos, videoRouter);

  export default app;


  //globalRouter.js
  import express from "express";
  import routes from "../routes";

  const globalRouter = express.Router();

  globalRouter.get(routes.home, (req, res) => res.send('<h1>Home!!</h1>'))

  export default globalRouter;
  ```

  <br><br>

- 2.11 MVC Pattern Part Three (Controller만들기 그리고 완성)
  1. controllers폴더 만들고 안에 userController.js와 videoController.js만듦
      - route에서 실행부분을 따로 정리하기 위해서!
      - 따로 정리하는 이유? 복잡해질 수 있기 때문에!
      - controller -> function that look for the data!
  2. controller를 사용해서 router를 수정함
  ```javascript
  //videoController.js
  export const home = (req, res) => res.send('home');
  export const search = (req, res) => res.send('search');

  //userController.js
  export const join = (req, res) => res.send('join');
  export const login = (req, res) => res.send('login');
  export const logout = (req, res) => res.send('logout');

  //globalRouter.js
  import express from "express";
  import routes from "../routes";
  import { home, search } from "../controllers/videoController";
  import { join, login, logout } from "../controllers/userController";

  const globalRouter = express.Router();

  globalRouter.get(routes.home, home);
  globalRouter.get(routes.join, join);
  globalRouter.get(routes.login, login);
  globalRouter.get(routes.logout, logout);
  globalRouter.get(routes.search, search);

  export default globalRouter;
  ```

  <br><br>

- 2.12 Recap
- 2.13 Installing Pug
  1. Pug란?
      - express에서 View를 다루는 방식 중 하나
      - template language
      - view engine for express
  2. pug 설치
      - npm install pug
  3. 설정 추가
      - app.set('view engine', 'pug');
  4. views폴더를 만들고 그 안에 pug파일 만들기
  5. controller에서 res.send를 res.render로 바꾸기
      - render의 인자로 템플릿 파일의 이름을 입력하기
      - 그럼 controller가 views폴더에서 인자의 파일명을 가지고 확장자가 pug인 템플릿 파일을 찾은 후 보여준다.
  ```javascript
  //app.js
  //추가 코드
  app.set('view engine', 'pug');
  ```

  <br><br>

- 2.14 Layouts with Pug
  1. views폴더 안에 layouts폴더를 만들고 main.pug파일을 만듦
  2. 모든 파일에 공통으로 사용될 layout임
  3. block content 부분이 파일마다 다른 부분
  4. 각 파일에서 main.pug를 extends로 받는다.
  ```pug
  // main.pug
  doctype html
  html
    head
      title Wetube
    body
      header
        h1  Wetube
      main
        block content
      footer
        span &copy Wetube


  // home.pug
  extends layouts/main

  block content
    h1 Hello Friends~!
  ```
  
<br><br>
- 2.15 Partials with Pug
  1. views폴더안에 partials폴더를 만들고 그 안에 header와 footer와 같이 나눠질 수 있는 부분들을 파일로 만든다.
  ```pug
  //header.pug
  header.header
    .header__column
      i.fab.fa-youtube
    .header__column
      ul
        li
          a(href="#") join
        li
          a(href="#") login


  //footer.pug
  footer.footer
    .footer__icon
      i.fab.fa-youtube
    span.footer__text &copy; WeTube #{new Date().getFullYear()}


  //main.pug
  doctype html
  html
    head
      link(rel="stylesheet",href="https://use.fontawesome.com/releases/v5.12.1/css/all.css",
      integrity="sha384-v8BU367qNbs/aIZIxuivaU55N5GPF89WBerHoGA4QTcbUjYiLQtKdrfXnqAcXyTv",crossorigin="anonymous")
      title Wetube
    body
      include ../partials/header
      main
        block content
      include ../partials/footer
  ```

<br><br>
- 2.16 Local Variables in Pug
  1. locals에 변수들을 저장하면 모든 템플릿 파일에서 사용할 수 있다!
      - middleware를 사용한다.
      - #{}를 사용해서 locals에 저장한 변수들을 사용할 수 있다.
  2. One Single source of truth!
      - 한 곳에서만 정보를 보관하는 것은 더 나은 코딩을 위한 원칙이다.

  ```javascript
  //app.js
  //localMiddleware 추가
  app.use(localMiddleware);

  app.use(routes.home, globalRouter);
  app.use(routes.users, userRouter);
  app.use(routes.videos, videoRouter);

  export default app;

  
  //middlewares.js
  import routes from "./routes";

  export const localMiddleware = (req, res, next) => {
    // 로컬에 추가하기
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes
    next();
  };


  //header.pug
  header.header
  .header__column
    a(href=routes.home)
      i.fab.fa-youtube
  .header__column
    ul
      li
        a(href=routes.join) join
      li
        a(href=routes.login) login


  //footer.pug
  footer.footer
  .footer__icon
    i.fab.fa-youtube
  span.footer__text &copy; #{siteName} #{new Date().getFullYear()} 
  ```

  <br><br>
- 2.17 Template Variables in Pug
  1. render함수의 첫 번째 인자는 템플릿이고, 두 번째 인자는 템플릿에 추가할 정보가 담긴 객체이다.
    - 템플릿 마다 다른 변수를 전달하고 싶을 때 사용한다.
  
  ```javascript
  export const home = (req, res) => res.render('home', { pageTitle: 'Home' });
  export const search = (req, res) => res.render('search', { pageTitle: 'Search' });
  export const videos = (req, res) => res.render('videos', { pageTitle: 'Videos' });
  export const upload = (req, res) => res.render('upload', { pageTitle: 'Upload' });
  export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle: 'Video Detail' });
  export const editDetail = (req, res) => res.render('editDetail', { pageTitle: 'Edit Detail' });
  export const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle: 'Delete Video' });


  //main.pug
  doctype html
  html
    head
      link(rel="stylesheet",href="https://use.fontawesome.com/releases/v5.12.1/css/all.css",
      integrity="sha384-v8BU367qNbs/aIZIxuivaU55N5GPF89WBerHoGA4QTcbUjYiLQtKdrfXnqAcXyTv",crossorigin="anonymous")
      title #{pageTitle} | #{siteName}
    body
      include ../partials/header
      main
        block content
      include ../partials/footer
  ```

  <br><br>
- 2.18 Search Controller
  1. 새로운 ES6문법

  ```javascript
  // videoController.js
  export const home = (req, res) => res.render('home', { pageTitle: 'Home' });

  export const search = (req, res) => {
    const { query: { term: searchingBy } } = req;
    //const searchingBy = req.query.term;과 같음
    res.render('search', { pageTitle: 'Search', searchingBy });
    //searchingBy = searchingBy와 같음
  }

  export const videos = (req, res) => res.render('videos', { pageTitle: 'Videos' });
  export const upload = (req, res) => res.render('upload', { pageTitle: 'Upload' });
  export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle: 'Video Detail' });
  export const editDetail = (req, res) => res.render('editDetail', { pageTitle: 'Edit Detail' });
  export const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle: 'Delete Video' });


  //search.pug
  extends layouts/main

  block content
    .search__header
      h2 Searching for #{searchingBy}
  ```


<br><br>
- 2.19 Join, Log in HTML
  1. join.pug, login.pug 추가
  2. 클래스명을 지을 때 BEM(Block Element Modifier)사용
<br><br>
- 2.20 Change Profile HTML
  1. editProfile.pug 추가
  2. editProfile을 userDetail보다 위로 올림(userDetail이 위에 있으면 editProfile이 인식이 안됨(userDetail이 /:id로 되어 있어서 그 뒤에 오는 것은 모두 id로 인식하는 듯))
  ```js
  import express from "express";
  import routes from "../routes";
  import { users, userDetail, editProfile, changePassword } from "../controllers/userController";

  const userRouter = express.Router();

  userRouter.get(routes.users, users);
  userRouter.get(routes.editProfile, editProfile);
  userRouter.get(routes.userDetail, userDetail);
  userRouter.get(routes.changePassword, changePassword);

  export default userRouter;
  ```
<br><br>
- 2.21 Home Controller
  1. 가짜 db.js 생성
  2. home.pug 수정(db내용 출력)
  3. upload.pug 추가
<br><br>

- 2.22 Home Controller Part Two
  1. mixin(코드를 복붙하지 않고 재활용하는 것)폴더 생성
  2. mixin을 쓰기 위해서 home.pug에서 videoBlock을 include하고 +videoBlock으로 값들을 넘겨준다.
  ```pug
  //videoBlock.pug
  mixin videoBlock(video = {})
  .videoBlock
    video.videoBlock__thumbnail(src=video.videoFile, controls=true)
    h4.videoBlock__title=video.title
    h6.videoBlock__views=video.views


  //home.pug
  extends layouts/main
  include mixins/videoBlock

  block content
    .videos
      each video in videos
        +videoBlock({
          videoFile: video.videoFile,
          title: video.title,
          views: video.views
        })
  ```
<br><br>
- 2.23 Join Controller
  1. body-parser를 사용하지 않으면 사용자가 입력한 정보를 받을 수 없다.
  ```js
  //userController.js
  import routes from "../routes";

  export const getJoin = (req, res) => {
    res.render('join', { pageTitle: 'Join' });
  }
  export const postJoin = (req, res) => {
    const {
      body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
      res.status(400);
      res.render('join', { pageTitle: 'Join' });
    } else {
      //To Do: Register User
      //To Do: Log user in
      res.redirect(routes.home);
    }
  }
  export const login = (req, res) => res.render('login', { pageTitle: 'Login' });
  export const logout = (req, res) => res.render('logout', { pageTitle: 'Logout' });
  export const users = (req, res) => res.render('users', { pageTitle: 'Users' });
  export const userDetail = (req, res) => res.render('userDetail', { pageTitle: 'User Detail' });
  export const editProfile = (req, res) => res.render('editProfile', { pageTitle: 'Edit Profile' });
  export const changePassword = (req, res) => res.render('changePassword', { pageTitle: 'Change Password' });


  //globalRouter.js
  import express from "express";
  import routes from "../routes";
  import { home, search } from "../controllers/videoController";
  import { getJoin, postJoin, getLogin, postLogin, logout } from "../controllers/userController";

  const globalRouter = express.Router();

  globalRouter.get(routes.join, getJoin);
  globalRouter.post(routes.join, postJoin);

  globalRouter.get(routes.login, getLogin);
  globalRouter.post(routes.login, postLogin);

  globalRouter.get(routes.home, home);


  globalRouter.get(routes.logout, logout);
  globalRouter.get(routes.search, search);

  export default globalRouter;
  ```
<br><br>
- 2.24 Log in and User Profile Controller
```js
//routes.js
//Global
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';

//Users
const USERS = '/users';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';

//Videos
const VIDEOS = '/videos';
const UPLOAD = '/upload';
const VIDEO_DETAIL = '/:id';
const EDIT_DETAIL = '/:id/edit';
const DELETE_VIDEO = '/:id/delete';

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => {
    if (id) {
      return `/videos/${id}`
    } else {
      return VIDEO_DETAIL
    }
  },
  editDetail: EDIT_DETAIL,
  deleteVideo: DELETE_VIDEO,
};

export default routes;
```
<br><br>
- 2.25 More Controllers