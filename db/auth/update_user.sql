UPDATE newUsers

SET email = ${email},
password = ${hash},
first_name = ${firstName},
last_name = ${lastName},
phone_number = ${phoneNumber},    
is_subscribed_email = ${isSubEmail},
is_subscribed_text = ${isSubText}


WHERE username = ${username}; 