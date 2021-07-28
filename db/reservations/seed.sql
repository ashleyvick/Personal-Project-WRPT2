CREATE TABLE reservations (
    reservation_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES newUsers(user_id),    
    reservation_date DATE NOT NULL, 
    reservation_time TIME NOT NULL, 
    party_adults INT,
    party_children INT
)

-- table created successfully in SQL TABS 7/22/2021