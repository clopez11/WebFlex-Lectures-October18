# SQL Introduction

### Content:
- [X] Introduction to RDBMS
- [X] Data Model (Tables, Columns, Rows)
- [X] `SELECT` Statements
- [X] `WHERE` and `ORDER BY` Statements
- [X] `LIMIT` and `OFFSET` Statements
- [X] `JOIN` Statements
- [X] `GROUP BY` Statements
- [X] Aggregation Functions

---

## Links
* [M5W11 - SQL Intro](https://github.com/clopez11/WebFlex-Lectures-October18/tree/master/M4/W10)
* [Class Recording](https://us02web.zoom.us/rec/share/9FzbFh230mocYRSvdzQ45EHgD3IEv_iPBA5TLkVSYKxmB0nnc2L9Me6L0wP7KktX.C0qIwxqThUlspo2v?startTime=1641949507000) | **Passcode:** y@Y3Hg%2

---

* `database` is an external place we store data.
* `CRUD`: insert, read, edit, delete.
* "SMART" interactions
  * i.e. TinyApp: find me all the people name "Amy"
  * i.e. TinyApp: find me all the people name "Amy" who have urls that use GitHub.
* 3 parts in Web Development (front-end, back-end, database)

```
TinyApp: data not PERSISTENT
Tweeter: data not PERSISTENT
```

---

## Introduction to Relational Database Management System (RDBMS)
* We need to be able to talk to this box to add or get `data`.
* Keep in mind, that when our `back-end` communicates to `database`, it's not direct.
* We are communicating with the `database` `server` which is `RDBMS`.

```
FRONT-END <--TCP/HTTP--> BACK-END <--TCP/POSTGRES--> RDBMS <--> DATABASE
          - forms
          - <a> tags
          - AJAX (xhr)
```

* Different types of `RDBMS` that have their own opinions on how `data` gets stored.
* We only focusing on a specific class of `databases`.
* We are focusing on **Relational Model**.

```
MySQL
PostgresSQL (POSTGRES)
Cassandra
MongoDB
CouchDB
InnoDB
```

---

## Database Example 1:
* A collection of `tables`.
* `Tables` are made up of `rows` and columns.
* Every `row` is also called a `record`.
* `Columns`, are called a `field`.

Menu Item | Price | Calories
------------- | ------------- | -------------
10 Timbits  | $2.49  | 900
20 Timbits  | $4.49  | 1800
50 Timbits  | $9.49  | 4500

---

## Database Example 2:
* We use ids to identify each record individually.
* The `database` itself will provide `ids` when we create a new `record`.
* It will keep track of the number of `records` and it will increment automatically as we add new `records`.
* We refer to this as `Primary` `key` since it uniquely identifies each `record`.

ID | Menu Item | Price | Calories
------------- | ------------- | ------------- | -------------
1 | 10 Timbits  | $2.49  | 900
2 | 20 Timbits  | $4.49  | 1800
3 | 50 Timbits  | $9.49  | 4500
4 | 70 Timbits  | $11.49  | 7500
5 | 100 Timbits  | $15.49  | 17500

---

## SQL
* `Structured Query Language`.
* Language to communicate to database.

---

## `psql` commands
* In your `terminal`, type in `psql` to access data.

```sql
-- psql, enters psql service
-- \?, list all commands
-- \q, quit psql
-- `\i FILE`, execute commands from file (i.e. `\i seed_01.sql` will run all the `SQL` commands in file).q
-- \l, list all databases
-- \dt, list all data tables
-- \c databaseName, connect to specific database
```

## Queries
* [SQL Challenges]()

## Resources
* link: https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/
* link: https://db-engines.com/en/ranking