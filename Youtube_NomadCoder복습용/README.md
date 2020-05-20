### 6.2

serializeUser -> 쿠키에게 어떤 정보를 줄 것인가<br>
deserializeUser -> 쿠키의 정보를 이용해 어느 사용자인지 찾기

### 6.3

```js
export const postSignIn = passport.authenticate("local", {
  failureRedirect: routes.signIn,
  successRedirect: routes.home,
});
```

passport.authenticate()는 username(여기서는 email)과 password를 찾아보도록 설정되어 있다.
