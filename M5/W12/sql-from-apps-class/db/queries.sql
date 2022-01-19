-- GET /users (Get all the users from the database)
SELECT * FROM users;

-- GET /users (Get user by id)
SELECT email FROM users WHERE user = 1;

-- GET /urls (Get all the urls for a user)
SELECT short, long FROM urls WHERE user_id = 1;

-- GET /urls/:short (Get a single url by short name)
SELECT short, long FROM urls WHERE short = 'jkl';

-- POST /urls (Add a new url for a user)
INSERT INTO urls (short, long, user_id) VALUES ('jkl', 'https://www.lighthouselabs.ca', 1);

-- POST /urls/:short/edit (Update an existing url by short name)
UPDATE urls SET long = 'https://www.lighthouselabs.ca' WHERE short = 'jkl';

-- POST /urls/:short/delete (Remove an existing url by short name)
DELETE FROM urls WHERE short = 'jkl';
