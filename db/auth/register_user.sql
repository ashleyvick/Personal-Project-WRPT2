INSERT INTO newUsers(username, email, password, first_name, last_name, phone_number, is_subscribed_email, is_subscribed_text)

VALUES (${username}, ${email}, ${hash}, ${firstName}, ${lastName}, ${phoneNumber}, ${isSubEmail}, ${isSubText})

returning user_id, email;

-- function ran successfully in SQL TABS 7/3/2021