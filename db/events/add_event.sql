INSERT INTO events (event_name, event_date, event_startTime, event_endTime)
VALUES(${event_name}, to_timestamp(${event_date}/1000), ${event_startTime}, ${event_endTime})

-- table created successfully in SQL TABS 7/29/2021