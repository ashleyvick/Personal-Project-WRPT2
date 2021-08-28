SELECT * FROM reservations r 
JOIN newUsers users ON  r.user_id = users.user_id
 WHERE r.user_id = ${user_id}