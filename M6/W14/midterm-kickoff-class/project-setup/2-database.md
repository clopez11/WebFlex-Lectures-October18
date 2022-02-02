# Database Setup

* Do the activities in **Compass** for database and git setup.
* Clone the node skeleton.

### Steps:
1. Type the following command on your vagrant machine to connect to your postgres server:
```
psql -U vagrant -d template1`
```

2. Run the following SQL commands to create the necessary objects in the DB:
```sql
CREATE ROLE labber WITH LOGIN password 'labber';
CREATE DATABASE midterm OWNER labber;
```

* Remember these will serve as your DB connection credentials for your local development database.
