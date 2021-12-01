# M3W7 - HTTP Cookies & User Authentication

## Content
- [X] Overview: Tiny App
- [X] HTTP & Cookies
- [X] Use cookie to set language preference
  - [X] `cookie-parser`
  - [X] Setting cookies
  - [X] Reading cookies
- [X] User Registration & Authentication
  - [X] Login
  - [X] Logout
  - [X] Register
- [X] Advanced: Separate Helper Functions (added to notes)

---

## HTTP
* stateless
* server has no memory of previous interactions.

---

## Analogy: Night Club, Party, Game, Concert or Networking Event
* We show security our id and ticket everytime we go to an event to verify our identity (authenticate).
* Once we are inside and want to step out, we get a stamp or sticker on ticket to show security we have already been inside.
* When we step back in event, we don't need to show id and ticket to re-enter. We only show stamp or sticker.
* This is a real world example of authentication. `Cookie` is equivalent to stamp or sticker.

---

## Cookies
* `key/value` pair
* stored in the browser

---

## Setting cookies
* `express` has built-in ability to set `cookies`.
* `cookies` are always set in the `response` object because we are responding back to browser.
* we are instructing browser to set this `key/value` pair in to memory and send it back to us on subsequent requests.

```javascript
res.cookie('language', languageOption);
```

---

## Reading cookies
* `express` does not have ability to read `cookies`.
* we can manually, read the `cookie` in the header because the `cookies` will be sent in the header inside the `req` request object.
* or use `cookie-parser` library.

---

## `cookie-parser`
* `npm i cookie-parser` to install and check out documentation.
* base on documentation, it's middleware that takes incoming request.
* takes header from request and takes it apart then adds them in `key/value` pairs for us to easily access.

```javascript
const cookieParser = require('cookie-parser')

app.use(cookieParser());

// GET /home
app.get('/home', (req, res) => {
  // read cookie from request.cookies
  const languageOption = req.cookies.language;

  const templateVars = {
    heading: languages.homeHeadings[languageOption],
    body: languages.homeBodies[languageOption]
  };

  res.render('home', templateVars);
});
```

* remember that we cannot read the `cookie` as soon as we `set` it, this is for subsequent request.
* it's not happening `synchronously`, it's happening `async`.

---

## Resources:
* https://http.cat/
* https://httpstatusdogs.com/
* https://www.npmjs.com/package/cookie-parser
* https://www.npmjs.com/package/ejs
* https://www.npmjs.com/package/morgan
* https://www.npmjs.com/package/express
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
* https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

---

## Links
* [M3W7 - HTTP Cookies & User Authentication](https://github.com/clopez11/WebFlex-Lectures-October18/tree/master/M3/W7)
* [Class Recording]() | Passcode: Srj!U0F@
