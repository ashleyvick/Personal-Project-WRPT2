UPDATE events

SET 
event_name = ${event_name},
event_date = ${event_date},
event_startTime = ${event_startTime},
event_endTime = ${event_endTime}


WHERE event_name = ${event_name}; 

-- table created successfully in SQL TABS 7/29/2021