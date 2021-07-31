CREATE TABLE events (
    event_id SERIAL PRIMARY KEY, 
    event_name VARCHAR (500) NOT NULL,  
    event_date DATE NOT NULL, 
    event_startTime TIME, 
    event_endTime TIME
)

-- table created successfully in SQL TABS 7/29/2021