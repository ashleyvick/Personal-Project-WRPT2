UPDATE events

SET 
event_name = ${event_name},
event_date = to_timestamp(${event_date}/1000),
event_startTime = ${event_startTime},
event_endTime = ${event_endTime}


WHERE event_name = ${event_name}; 

-- table created successfully in SQL TABS 7/29/2021