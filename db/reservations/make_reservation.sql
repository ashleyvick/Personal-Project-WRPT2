INSERT INTO reservations(user_id, reservation_date, reservation_time, party_adults, party_children)
VALUES(${user_id}, to_timestamp(${date}/1000), ${time}, ${adults}, ${children})

-- table created successfully in SQL TABS 7/22/2021