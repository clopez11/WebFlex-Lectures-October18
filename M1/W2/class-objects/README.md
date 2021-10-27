# M1W2 - Objects in JS
Welcome to Module 1 (Week 2). Congrats on your first week. Thanks for awesome questions and participation.

## Content
- [X] Review: Data Types
- [X] Review: Arrays
- [X] Objects
- [X] Break: 15 minutes
- [X] Functions (using `this`)
- [X] Looping through Objects (`for...in`)

---

### Primitive Data Types
1. Strings
2. Boolean
3. Numbers
4. Undefined
5. Null
6. Symbol
7. BigInt

---

### Non-Primitive Objects
1. Arrays
2. Objects
3. Functions

--- 

### Primitives vs Non-Primitives
* Primitive data types are **immutable** (cannot be altered).
* Primitive data types can be re-assigned or replaced with new value but cannot be directly altered.
* Non-Primitive data types are **mutable** (can be altered).
* Non-Primitive data types can be directly altered.

### Pass by Value
* number, string, boolean, symbol, undefined, null (primitives).
* Values are stored inside variables and independent when copied.

### Pass by Reference
* object, function, array (non-primitive).
* When we use an object, object is not stored in the variable.
* It is stored somewhere in the memory.

---

### Review: Arrays
* Arrays are fantastic for lists.
* Index starts at 0.

### Limitation of Arrays
* Reference by index vs key.
* Cannot get more details in an array.
* Not practical to remember index and order of values.

```javascript
const countries = ['Canada', 'USA', 'Iceland', 'Australia', 'South Africa', 'New Zealand'];

// index based, starts at 0
console.log(countries[0]); // use index to access values from array.
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);
console.log(countries[4]);
console.log(countries[5]);
```

---

### Objects
* Collection of `key/value` pairs.
* We can describe the data we are storing while grouping related data in one variable.

```javascript
const obj = {
  team: 'Raptors',
  year: [2019, 2027, 2028, 2029],
  mvp: ['Kawhi Leonard', 'Player Name', 'Player Name'],
  homeAdvantage: true,
  roster: {
    1995: ['Player1', 'Player2', 'Player2'],
    1996: ['Player1', 'Player2', 'Player2'],
    1997: ['Player1', 'Player2', 'Player2'],
    1998: ['Player1', 'Player2', 'Player2'],
  },
  printMvps: function() {
    const roster = obj.mvp;
    for (const player of roster) {
      console.log(`MVP: ${player}`);
    }
  },
};
console.log(obj);
console.log(obj.printMvps());
```

### Accessing Values inside Objects
* We can either access using `bracket` notation.

```javascript
console.log('--- bracket notation ---');
console.log(teams);
console.log(teams['name']);
console.log(teams['year']);
console.log(teams['mvp']);
console.log('--- dot notation ---');
console.log(teams.name);
console.log(teams.year);
console.log(teams.mvp);
```

### Adding, Updating & Deleting Values inside Objects
* check objects.js file.

---

### Function
* adding special keyword `this` is referencing to current object.
* use regular `function` syntax to use `this` keyword.
* arrow functions inside objects will come back `undefined`.

```javascript
const teams3 = {
  name: 'Raptors',
  year: 2019,
  mvp: 'Kawhi Leonard',
  city: 'Toronto',

  printDetails: function() {
    console.log(`${this.name} won in ${this.year} with ${this.mvp} as finals mvp.`);
  }
};
console.log(teams3);
console.log(teams3.printDetails());
```

--- 

### Looping through Objects
* Loops that are only for iterables (arrays): `for` | `for of` | `for each`.
* `for in` loop are used for objects because it loops through the key names.

```javascript
const teams = {
  city: 'Toronto',
  name: 'Raptors',
  year: 2019,
  mvp: 'Kawhi Leonard',
  players: ['Kyle Lowry', 'Fred VanVleet', 'Aron Baynes'],
};

// get all key and values from object
for (const key in teams) {
  console.log(`${key}: ${teams[key]}`);
}

// get all the players
for (const key in teams) {
  if (Array.isArray(teams[key])) {
    const players = teams[key];
    for (const name of players) {
      console.log(`players: ${name}.`);
    }
  }
}
```

## Tips:
* use `const` first, until JavaScript tells you not too.
