CREATE TABLE newUsers (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR (200) NOT NULL,
    email VARCHAR (200) NOT NULL, 
    password VARCHAR (200) NOT NULL,
    first_name VARCHAR (200),
    last_name VARCHAR (200),
    phone_number VARCHAR (45)
)

-- table created successfully in SQL TABS 7/3/2021