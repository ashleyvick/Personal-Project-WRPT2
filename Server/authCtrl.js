const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, email, password, first_name, last_name, phone_number } =
      req.body;
    //check for existing username
    let [{ count: usernameCount }] = await db.auth.check_for_existing_username({
      username,
    });
    let [{ count: emailCount }] = await db.auth.check_user_by_email({
      email,
    });
    if (+usernameCount >= 1 || +emailCount >= 1) {
      res
        .status(400)
        .json("That username or email has been taken. Please try another");
    } else {
      const hash = await bcrypt.hash(password, 12);
      await db.auth.register_user({
        username,
        email,
        hash,
        first_name,
        last_name,
        phone_number,
      }); //do all my input fields need to be in the object or just the "required" fields??
      res.sendStatus(200);
    }
  },
  login: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { username, password } = req.body;
      const [user] = (fulluser = await db.auth.get_user_by_username({
        username,
      }));
      console.log(fulluser);
      if (user) {
        const areEqual = await bcrypt.compare(password, user.password);
        if (areEqual) {
          req.session.user = user;
          res.status(202).json(req.session.user);
        } else {
          res.status(403).json("Invalid username or password");
        }
      } else {
        res.status(404).json("User does not exist");
      }
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    return res.sendStatus(200);
  },
  getUser: (req, res) => res.status(200).json(req.session.user),
};
