## One Table

1. Hello World of SQL.
```sql
SELECT * FROM projects;
SELECT * FROM tasks;
SELECT * FROM users;
```

2. List total number of users.
```sql
SELECT COUNT(id) FROM users;
SELECT COUNT(*) FROM users;
-- SELECT SUM(id) FROM users; // addition

-- alias
SELECT COUNT(id) AS num_users FROM users;
```

3. List users that joined after September 3rd.
```sql
SELECT * FROM users WHERE date_joined > '2020-09-03';
```

4. List all users who joined after September 10 and who's first name starts with A.
```sql
SELECT * FROM users
  WHERE date_joined > '2020-09-10' AND first_name
  LIKE '%A%';
```

5. List all users who joined between September 1st & 20th sorted in date joined.
```sql
SELECT * FROM users
  WHERE date_joined BETWEEN '2020-09-01' AND '2020-09-20'
  ORDER BY date_joined DESC;
```

6. List all users from USA who joined in 2020 and order by date joined desc, username asc.
```sql
SELECT * FROM users
  WHERE country = 'United States'
  AND date_joined BETWEEN '2020-01-01' AND '2020-12-31'
  ORDER BY username DESC, date_joined ASC;
```

7. List all countries our users live in, don't repeat any countries.
```sql
SELECT DISTINCT country
  FROM users
  ORDER BY country;
```

---

## Two Tables
1. List total number of projects and tasks.
```sql
SELECT COUNT(*)
  FROM tasks;

SELECT COUNT(id)
  FROM projects;

SELECT * FROM tasks LIMIT 10;
SELECT * FROM tasks LIMIT 10 OFFSET 5;
```

2. List incomplete tasks.
```sql
SELECT COUNT(*) FROM tasks
  WHERE tasks.completed = 'f';
```

3. List upcoming tasks which are incomplete (id, title, completed).
```sql
SELECT tasks.id, tasks.title, tasks.completed
  FROM tasks
  WHERE tasks.completed = 'f';
```

4. List all tasks, along with their project information.
```sql
SELECT projects.name, tasks.id, tasks.title, tasks.completed
  FROM projects
  INNER JOIN tasks ON projects.id = tasks.project_id;
```

5. List all projects along with how many tasks each project has.
```sql
SELECT projects.name, COUNT(tasks.id) AS "total tasks"
  FROM projects
  INNER JOIN tasks ON projects.id = tasks.project_id
  GROUP BY projects.name;
```

6. Get the COUNT of all of the completed tasks for each project.
```sql
SELECT projects.name, count(tasks.id)
  FROM projects
  JOIN tasks ON projects.id = tasks.project_id
  WHERE tasks.completed
  GROUP BY projects.name;

SELECT projects.name, count(tasks.id)
  FROM projects
  JOIN tasks ON projects.id = tasks.project_id
  WHERE tasks.completed = 'f'
  GROUP BY projects.name;
```

7. Now Where is the Midterm project for completed tasks?
```sql
SELECT projects.name, count(tasks.id)
  FROM projects
  LEFT JOIN tasks ON projects.id = tasks.project_id
    AND tasks.completed
  GROUP BY projects.name
  ORDER BY count;

SELECT projects.name, count(tasks.id)
  FROM projects
  RIGHT JOIN tasks ON projects.id = tasks.project_id
    AND tasks.completed
  GROUP BY projects.name
  ORDER BY count;
```

8. Get the COUNT of all of the incomplete tasks for each project that has a tasks that is more than 1.
```sql
SELECT projects.name, COUNT(tasks.id)
  FROM projects
  JOIN tasks ON projects.id = tasks.project_id
  WHERE tasks.completed = 'f'
  GROUP BY projects.name
  HAVING COUNT(tasks.id) > 1;
```

9. Get the percentage of how many tasks are completed per project.
```sql
SELECT name, COUNT(tasks.id) as total,
  (SELECT COUNT(*)
    FROM tasks
    WHERE tasks.project_id = projects.id AND tasks.completed) as completed,
  (SELECT COUNT(*)
    FROM tasks
    WHERE tasks.project_id = projects.id AND tasks.completed)::float / COUNT(tasks.id) * 100 as percent
  FROM projects
  JOIN tasks ON projects.id = tasks.project_id
  GROUP BY projects.id
  ORDER BY projects.id;
```