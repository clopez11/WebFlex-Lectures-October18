DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(32) NOT NULL
);

INSERT INTO "users" (email, password) VALUES('first@email.com', '123');
INSERT INTO "users" (email, password) VALUES('second@email.com', '123');
INSERT INTO "users" (email, password) VALUES('third@email.com', '123');
INSERT INTO "users" (email, password) VALUES('fourth@email.com', '123');
