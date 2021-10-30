# M1W2 - Breakout Session

## Content
- [X] Review: Local vs Global Scope
- [X] Review: `const`, `let`, `var`
- [X] Review: `this`
- [X] Looping through Objects (`for...in`)

### Review: Local vs Global Scope
* a scope of a variable or constant determines where it is accessible.
* `ReferenceError` is all about scoping.
* declaring variables with `let` or `const` is limited to the `block` they are defined.
* picture these brackets as gates. nothing is accessibile outside these gates.

```javascript
// we get a reference error that `message` is not defined.
{
  const message = 'hello world';
}
console.log(message);
```

* our constant is inside this function and is still limited to the block its defined.

```javascript
function sayHi() {
  const message = 'hello world';
}
console.log(message);
```

* same is true when we define a constant in an `if statement`.
* this `greeting` constant is only accessible in this `if statement`.

```javascript
function sayHi() {
  const message = 'hello world';

  if (true) {
    const greeting = 'hola world';
  }

  console.log(greeting);
}

sayHi();
```

* same concept applies in our `loops`.
* `i` is a variable that is only accessible inside loop code block.
* now if we `console.log(i)` outside of `loop`, we get an error.

```javascript
function sayHi() {
  const message = 'hello world';

  if (true) {
    const greeting = 'hola world';
  }

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
sayHi();
```

* function with the same `constant` with different value is perfectly valid even if the same.
* why? the scope of each constant is `local` to each function.

```javascript
function sayHi() {
  const message = 'hello world';
}
sayHi();

function sayHola() {
  const message = 'hola world';
}
sayHola();
```

* defining `bonjour` outside of function has a `global` scope.
* `global` scope, meaning it is accessible everywhere.
* we can use `bonjour` inside all our functions and outside of it.

```javascript
const bonjour = 'bonjour monde';

function sayHi() {
  const message = 'hello world';
  console.log('inside sayHi()', bonjour);
}
sayHi();

function sayHola() {
  const message = 'hola world';
  console.log('inside sayHola()', bonjour);
}
sayHola();

console.log('outside functions', bonjour);
```

* what if we have a `constant` with same name in our `function`?
* we get `salut globe` because `local` variables in a function take precedence over `global` variables.
* in general, you should avoid defining `global` variables or constants.
* considered bad practice, if it's accessible globally then each function can accidentally modify it's value.
* this can lead to all kinds of bugs and issues in our programs.

```javascript
const bonjour = 'bonjour monde';

function sayHi() {
  const message = 'hello world';
  const bonjour = 'salut globe';
  console.log('inside sayHi()', bonjour);
}
sayHi();

function sayHola() {
  const message = 'hola world';
  console.log('inside sayHola()', bonjour);
}
sayHola();

console.log('outside functions', bonjour);
```

### Review: `const`, `let`, `var`
* `i` is now available outside our code block if we use `var`.
* `var` scope is not limited to the code block but to the `function`.

```javascript
function start() {
  for (var i = 0; i < 5; i++) {
    console.log('inside loop:', i);
  }
  console.log('outside loop:', i);
}
start();
```

* when we use `var` outside of function, it creates a global variable.
* it attaches that to `window` object in our browser.
* avoid adding to `window` object to avoid issues or bugs in program.

```javascript
var color = 'blue';
let num = 11;
```

### Review: `this` inside objects
* if afunction is a method in an object, `this` references that object itself.
* if a function is a regular function, meaning it's not part of an object, then `this` references the `global` object, which is the `window` object in browsers.

```javascript
// method -> obj
// function => global (window)

const team = {
  city: 'Toronto',
  name: 'Raptors',
  players: ['Kyle Lowry', 'Fred VanVleet', 'Aron Baynes'],
  printPlayers() {
    this.players.forEach(function(player) {
      console.log(player)
    });
  }
};
```

* now what if we want to display, each city with each player?
* we can add `this.city` but we get `undefined`, why?
* `callback` function that runs in `.forEach` loop is a regular function and not a method in the `team` object.
* the only `method` we have in our `team` object is `printPlayers()`
* if it's a regular function, then it's referencing the global object `(window)`.

```javascript
// method -> obj
// function => global (window)

const team = {
  city: 'Toronto',
  name: 'Raptors',
  players: ['Kyle Lowry', 'Fred VanVleet', 'Aron Baynes'],
  printPlayers() {
    this.players.forEach(function(player) {
      console.log(this.city, player)
    });
  }
};
```

### Options to access `this.city`
* pass `this` as a second `arg` because this callback function can take in an objects as second parameter.

```javascript
const team = {
  city: 'Toronto',
  name: 'Raptors',
  players: ['Kyle Lowry', 'Fred VanVleet', 'Aron Baynes'],
  printPlayers() {
    this.players.forEach(function(player) {
      console.log(this.city, player)
    }, this);
  }
};
```

* but not all methods have ability to take in an object as second `arg`, so we can define a constant before we call `.forEach`

```javascript
const team = {
  city: 'Toronto',
  name: 'Raptors',
  players: ['Kyle Lowry', 'Fred VanVleet', 'Aron Baynes'],
  printPlayers() {
    const self = this;
    this.players.forEach(function(player) {
      console.log(self.city, player)
    });
  }
};
```

* newer and better options that started since `ES6` is to use arrow functions.
* arrow functions inherit `this` value from containing function.

```javascript
const team = {
  city: 'Toronto',
  name: 'Raptors',
  players: ['Kyle Lowry', 'Fred VanVleet', 'Aron Baynes'],
  printPlayers() {
    this.players.forEach((player) => {
      console.log(this.city, player)
    });
  }
};
```

* these are other options to get `this`
* one is to `bind`, which is an old way.

```javascript
const team = {
  city: 'Toronto',
  name: 'Raptors',
  players: ['Kyle Lowry', 'Fred VanVleet', 'Aron Baynes'],
  printPlayers() {
    this.players.forEach((player) => {
      console.log(this.city, player)
    }.bind(this));
  }
};
```

* other options are to `.call()`, `.apply()`, `.bind()` methods

```javascript
function printPlayers(a, b) {
  console.log(this);
}

printPlayers.call({ name: 'Raptors' }, 1, 2);
printPlayers.apply({ name: 'Raptors' }, [1, 2]);
printPlayers.bind({ name: 'Raptors' })();
```

### Looping through Objects (`for...in`)
* How about accessing a key by value?
* check [`02-objects-this-keys.js`](https://github.com/clopez11/WebFlex-Lectures-October18/blob/master/M1/W2/breakout-objects/02-objects-this-keys.js) file.
