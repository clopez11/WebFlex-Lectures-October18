DROP TABLE IF EXISTS urls CASCADE;

CREATE TABLE urls (
  id SERIAL PRIMARY KEY NOT NULL,
  short VARCHAR(16) NOT NULL,
  long VARCHAR(255) NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO "urls" (short, long, user_id) VALUES('abc', 'https://www.google.com/', 1);
INSERT INTO "urls" (short, long, user_id) VALUES('def', 'https://duckduckgo.com/', 1);
INSERT INTO "urls" (short, long, user_id) VALUES('ghi', 'https://www.tsn.ca/', 2);
INSERT INTO "urls" (short, long, user_id) VALUES('jkl', 'https://www.lighthouselabs.ca', 2);
INSERT INTO "urls" (short, long, user_id) VALUES('mno', 'https://www.hgtv.ca/', 3);
INSERT INTO "urls" (short, long, user_id) VALUES('pqr', 'https://www.slice.ca/', 3);
INSERT INTO "urls" (short, long, user_id) VALUES('stu', 'https://getpocket.com/', 4);
