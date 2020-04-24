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

app.get('/', handleHome);
app.get('/profile', handleProfile);
app.listen(PORT, handleListening);
```

<br><br><br>

- 2.5 ES6 on NodeJs using Babel
