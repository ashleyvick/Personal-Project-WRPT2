INSERT INTO newUsers(username, email, password, first_name, last_name, phone_number)

VALUES (${username}, ${email}, ${hash}, ${first_name}, ${last_name}, ${phone_number})

returning user_id, email;

-- function ran successfully in SQL TABS 7/3/2021