# M5W12 - SQL from our Apps

### Content:
- [X] **TinyApp** `database`
- [X] `psql` commands
- [X] Create a `database`
- [X] Create `schema` and `seeds`
- [X] `node-postgres` intro
- [X] Environment variables (`.env`)
- [X] Connect the `database` to our **Express** app
- [X] **Advanced:** Using `modules` to organize your application
- [X] Running `queries`
- [X] `database` helper `functions`
- [X] Serve `database` content to the `browser`
- [X] Demonstrate `SQL` injections

---

## Links
* [M5W12 - SQL from our Apps](https://github.com/clopez11/WebFlex-Lectures-October18/tree/master/M5/W11/sql-intro-class)
* [Class Recording](https://us02web.zoom.us/rec/share/1s4FgzaazyZCuJNOJmx_IHUuzi0qKQsJ9j3lOJA4Scu9f5_T48yjeuaEAUTU6HBY.HfUt0DhqOW5Tv8mG) | **Passcode:** aWJBd20@


---

## **TinyApp** `database`
* `foreign key` is under `urls` table.
* a `url` belongs to a `user`.
* a `user` has many `urls`.
* ERD: [`erd/erd_tinyapp.png`](https://github.com/clopez11/WebFlex-Lectures-October18/blob/master/M5/W12/sql-from-apps-class/demo/erd/erd_tinyapp.png)

### Users Table
```
+----+-----------------+----------+
| id | email           | password |
+----+-----------------+----------+
|  1 | first@user.com  | 123      |
|  2 | second@user.com | 123      |
|  3 | third@user.com  | 123      |
|  4 | fourth@user.com | 123      |
+----+-----------------+----------+
```

### Urls Table
```
+----+-------+-------------------------------+---------+
| id | short | long                          | user_id |
+----+-------+-------------------------------+---------+
|  1 | abc   | https://www.google.com/       | 1       |
|  2 | def   | https://duckduckgo.com/       | 1       |
|  3 | ghi   | https://www.tsn.ca/           | 2       |
|  4 | jkl   | https://www.lighthouselabs.ca | 2       |
|  5 | mno   | https://www.hgtv.ca/          | 3       |
|  6 | pqr   | https://www.slice.ca/         | 3       |
|  7 | stu   | https://getpocket.com/        | 4       |
+----+-------+-------------------------------+---------+
```

---

## `psql` commands
```
psql                            enters psql service
\?                              list all commands
\q                              quit psql
\i filename                     execute commands from file
\l                              list all databases
\dt                             list all data tables
\c                              databaseName, connect to specific database
\conninfo                       information about current connection
\du                             list all users
\c - a_new_user                 change user, then add password
\c a_new_database a_new_user    change database and user
```

### Create users
* Type commands in `psql` to create users.
* link: https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m05w11/activities/715?journey_step=41&workbook=15
```sql
CREATE ROLE vagrant LOGIN SUPERUSER PASSWORD '123';
CREATE ROLE labber LOGIN SUPERUSER PASSWORD 'labber';
```

---

## Create a `database`
* Type commands in `psql` to create database.
* `\c tinyapp` to connect to `database`.
```sql
CREATE DATABASE tinyapp;
```

---

## Create `schema` and `seeds`
* In our `db` folder, I've created two files `schema.sql` & `seeds.sql`.
* Running `\i <filename>` to execute our commands in these files.
* Please make sure you are in the `db` folder to import.
* `schema.sql` has our `data` structure.
* `seeds.sql` will insert our test data to our `tables`.

---

## `node-postgres` intro
* link: https://node-postgres.com/
* To connect to `database`, we will be using `pg` library called `node-postgres`.
* This connects our `postgres` `database` to our **Express** app.
* We will `require("pg")` and then create this `config` object to create connection.

```js
// connection.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  database: 'tinyapp',
  password: 'labber',
  port: 5432,
});

module.exports = pool;
```

---

## Environment variables (`.env`)
* link: https://www.npmjs.com/package/dotenv
* use `dotenv` to use `environment variables` to hide this sensitive information in `.env` file.
* Usually, a `.env.example` file comes with repository and it's up to us to update `variables`.
* `.env` file should be in `.gitignore` because that is your local copy with your credentials.

```
DB_USER=<username>
DB_HOST=<host>
DB_NAME=<db name>
DB_PASS=<password>
DB_PORT=<port>
```

* copy `.env.example`.
* rename `.env.example` to `.env`.
* Update `.env` file with your credentials.

```
DB_USER=labber
DB_HOST=localhost
DB_NAME=tinyapp
DB_PASS=labber
DB_PORT=5432
```

* Now we can use `environment variables` by adding `process.env` and `variable` name.

```js
// connection.js
require('dotenv').config();

const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

console.log(`Connecting to db: ${process.env.DB_NAME}`);

module.exports = pool;
```

---

## Connect the `database` to our **Express** app
* In our `express_server.js`, we require this `pool` connection.
* This imports our `database` connection that we'll need to do `queries` using `pool`.
```js
// express_server.js
const express = require("express");

const pool = require("./database/connection");

const app = express();
```

---

## **Advanced:** Using `modules` to organize your application
* This centralizes and organizes all our functions and routes in our `express_server.js`.

* `src/database/`: helper functions
  * `users.js` => contain all the functions to run queries for `users` table.
  * `urls.js` => contain all the functions to run queries for `urls` table.

* `src/routes/`: endpoints
  *  call the `database` "helper" functions to run the queries.
  * `urlRoutes.js` => call `database/urls.js` to run the `query`.
  * `userRoutes.js` => call `database/users.js` to run the `query`.

---

## Running `queries`
* Queries: `demo/db/queries.sql`.
* See `/database/urls.js` & `/database/users.js`.

---

## `database` helper `functions`
* This is where we add all our functions to `query` our database.
* This `top-level` function will return two functions below.
```js
// database/users.js
module.exports = (pool) => {
  const getUsers = () => {
    const query = {
      text: `SELECT id, email, password FROM users`,
    }

    return pool
      .query(query)
      .then(result => console.log(result))
      .catch(err => console.log(err.message));
  };

  const getUserById = () => {}

  return {
    getUsers,
    getUserById,
  };
}
```

* In **TinyApp**, you are adding all your `enpoints` in `express_server.js` file.
* At some point when our application grows, you need a better way to organize multiple `endpoints`.
* Instead of having our `routes` in `express_server.js`, we will have `routes` folder.

```js
// routes/userRoutes.js
module.exports = (dbUsers) => {
  // GET /users
  router.get("/", (req, res) => {
    dbUsers
      .getUsers()
      .then(users => res.json(users))
      .catch(err => console.log(err.message));
  });

  return router;
}
```

---

## Serve `database` content to the `browser`
* Require `database` helper functions & routes to use as middleware.

```js
const urlsRouter = require("./routes/urlRoutes");
const usersRouter = require("./routes/userRoutes");

const pool = require("./database/connection");
const dbUrls = require("./database/urls")(pool);
const dbUsers = require("./database/users")(pool);

app.use("/urls", urlsRouter(dbUrls));
app.use("/users", usersRouter(dbUsers));
```

---

## Demonstrate `SQL` injections
* link: https://node-postgres.com/features/queries
* Instead of using string, we can use `parameterized query`.
* Using `$1, $2` to insert what we have in our values `array`.

```js
  const getUserById = (id) => {
    const query = {
      text: `SELECT email FROM users WHERE id = $1`,
      values:[id]
    }

    return pool
      .query(query)
      .then(result => result.rows)
      .catch(err => console.log(err.message));
  };
```

---

## Resources
* https://node-postgres.com/
* https://www.postman.com/
* https://insomnia.rest/
