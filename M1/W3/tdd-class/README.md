# M1W3 - TDD with Mocha & Chai

## Content
- [X] What is TDD?
- [X] Manual Testing
- [X] Happy Path vs Sad Path (Edge Cases)
- [X] Built-in Methods
- [X] `require`
- [X] `modules.exports`
------------------ Break: 10 minutes
- [X] What is NPM?
- [X] `package.json`
- [X] `.gitignore`
- [X] `node_modules`
- [X] What is Mocha?
- [X] What is Chai?
- [X] Demo: Practice Unit Testing (Advance) - Breakout Thursday 4:30pm PT / 7:30 ET
  - [X] Tony's question: where is node modules installed.
  - [X] `nvm list`
  - [X] `assert` from `Chai`
  - [X] `expect` from `Chai`

## Reminder: Record Class

---

## Test Driven Development:
* This is the concept of writing tests before we code (write code to make test pass).

---

## Benefits of TDD:
* Help with documentation.
* Saves time (LONG-TERM!).
* Saves money (LONG-TERM).
* Easier to see additions to our code is not breaking anything.
* Write modular code.

---

## Manual Testing
* `console.log` is how we've been testing code manually.

---

## Happy Path vs Sad Path (Edge Cases)
* Happy path means the test case will result in a positive result.
* example: entering or passing in correct data.
* Sad path is when a test case gives result or invalid data.
* example: entering number, boolean or array instead of string, entering empty or null.

---

## Built-in Methods
* There are two-built in ways to write tests or assertionss in `node.js` without any libraries.

```markdown
1. `console.assert`
2. built-in assert library
```

* `console.assert`, not the best way to write test and will not be using going forward.
* `assert` library that is built-in with Node.js that have a list of assertion functions for us to use for testing.

---

## `require`
* For us to use `assert` library, we have to `require` this library in our code by using `require` keyword.
* We can either require other people's code or our own code into this file to use.

```javascript
const assert = require('assert');
```

---

## `modules.exports`
* Separating our test code with our production code to make it modular.
* Use `module.exports` keyword to export parts of our files for use in other parts of program.

```javascript
const sayHi = (name) => {
  return `Hi ${name}`;
};

module.exports = sayHi;
```

* Three options to export.

```javascript
// option 1: what we have already done, if you are exporting one thing
module.exports = sayHi;

// option 2: add key/value pair (attach a new key value pair)
module.exports.sayHi = sayHi;
module.exports.sayBye = sayHola;

// option 3: commonly used when exporting more than one thing
module.exports = {
  sayHi,
  sayHola,
};
```

---

## Node Package Manager
* Amazon for other peoples code.
* A lot of packages here are open source so you can contribute and access the code in `GitHub`.

## `package.json`
* File has the information about our project.
* Manage packages that our project depends on.
* `npm init` in terminal and go through questions to create file.
* `npm install <packageName>` will automatically create `package-lock.json`.

## `node_modules`
* Folder where all out outside packages are stored.

## `.gitignore`
* `.gitignore` file is used to ignore files that we don't want to commit in our repository.

## What is Mocha?
* Mocha is a test runner that gives us a better interface and makes it more readable
* Idea of running multiple files and run repeatedly to check for failing test is the reason for test runners.

## What is Chai?
* We are not restricted to only using `node assert`.
* Chai is an assertion library we can use to replace `assert` from `Node`.
* Chai gives us more assertion options that is readable.

## NOTE:
* Mocha and Chai are independent from each other, they work well together that's why it's use together often.
* We do not need to use Chai to run our tests. Chai gives us more options and three interface to write readable tests.
* We can still use Mocha without Chai.

## Resources:
* https://developer.mozilla.org/en-US/docs/Web/API/Console/assert
* https://nodejs.org/api/assert.html
* https://nelsonic.gitbooks.io/node-js-by-example/content/core/assert/README.html
* https://nodejs.org/api/assert.html
* https://nodejs.org/api/modules.html#the-module-wrapper
* https://nodejs.dev/learn/semantic-versioning-using-npm
* https://www.npmjs.com
* https://mochajs.org
* https://www.chaijs.com
