const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const languages = require('./languages.json');

const { findUserByEmail } = require('./helpers')

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());

app.set('view engine', 'ejs');

const users = {
  'abc': {
    id: 'abc',
    email: 'a@email.com',
    password: '123'
  },
  'mikhail': {
    id: '1',
    email: 'm@email.com',
    password: 'm'
  },
  'jack': {
    id: '2',
    email: 'j@email.com',
    password: 'j'
  },
  'tony': {
    id: '3',
    email: 't@email.com',
    password: 't'
  },
}

// NOTE: moved findUserByEmail(email, users) to helpers.js and pass users object
// const findUserByEmail = (email) => {
//   // if user email exists, return user
//   // if user mail does not exists, return null
//   for (const userId in users) {
//     const user = users[userId]; // users['abc']
//     if (user.email === email) {
//       return user
//     }
//   }

//   return null;
// }

// GET /home
app.get('/home', (req, res) => {
  const languageOption = req.cookies.language || 'ko';

  const templateVars = {
    heading: languages.homeHeadings[languageOption],
    body: languages.homeBodies[languageOption]
  };

  res.render('home', templateVars);
});

// GET /about
app.get('/about', (req, res) => {
  const languageOption = req.cookies.language || 'ko';

  const templateVars = {
    heading: languages.aboutHeadings[languageOption],
    body: languages.aboutBodies[languageOption]
  };

  res.render('about', templateVars);
});

// GET /languages/:languageOption
app.get('/languages/:languageOption', (req, res) => {
  const languageOption = req.params.languageOption;

  // set the cookie with the language option
  res.cookie('language', languageOption)

  res.redirect('/home');
});

// GET /login
app.get('/login', (req, res) => {
  res.render('login')
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register')
});

// GET /secret
app.get('/secret', (req, res) => {
  const userId = req.cookies.userId;

  // check if user has a cookie set
  if (!userId) {
    return res.status(401).send('your are not authorized to be here.');
  }

  // retrieve user by userId
  const user = users[userId]; // users['abc']

  res.render('secret', { user });
});

// POST /login
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // validate information
  if (!email || !password) {
    return res.status(400).send('email and password cannot be blank.');
  }

  // find if email exists
  const user = findUserByEmail(email, users);

  // validate if user exists
  if (!user) {
    return res.status(400).send('no user with that email found.');
  }

  // if user exists, compare password
  if (user.password !== password) {
    return res.status(400).send('password does not match.');
  }

  // happy path!
  res.cookie('userId', user.id)

  // redirect user to secret page
  res.redirect('/secret');
});

// POST /register
app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // validate information
  if (!email || !password) {
    return res.status(400).send('email and password cannot be empty.');
  }

  // find if email exists
  const user = findUserByEmail(email, users);

  // validate if user exists
  if (user) {
    return res.status(400).send('that email address is already in use.');
  }

  // happy path! add new user to users object
  const id = Math.floor(Math.random() * 1000) + 1;

  // users[id] = {
  //   id: id,
  //   email: email,
  //   password: password,
  // }

  users[id] = { id, email, password };
  // console.log('users', users);

  res.redirect('/login');
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the cookie
  res.clearCookie('userId');

  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
