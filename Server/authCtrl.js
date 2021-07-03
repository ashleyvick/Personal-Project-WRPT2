const bcrypt = require ("bcryptjs");

module.exports = {
    register: async (req, res) => {
        const db = req.app.get("db");
        const {username, password} = req.body;
        //check for existing username
        const [{count: usernameCount}] = await db.auth.check_for_existing_username({username});
        const [{count: emailCount}] 
        if (usernameCount === 1 || emailCount === 1) {
            res.status(400).json("That username or email has been taken. Please try another");
        } else {
            const hash  =await bcrypt.hash(password, 12);
            await db.auth.register_user({username, hash});
            res.sendStatus(200);
        }        
    },
    login: async (req, res) => {
        try {
            const db = req.app.get("db");
            const {username, password} = req.body;
            const [{user}] = await db.auth.get_user_by_username({username});
            if (user) {
                const areEqual = await bcrypt.compare(password, user.password);
                if (areEqual) {
                    req.session.user = user
                    res.status(202).json(req.session.user);                
                } else {
                    res.status(403).json("Invalid username or password");
                }
            } else {
                res.status(404).json("User does not exist")
            }            
        } catch (e) {
            res.status(500).json(e);
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    },
};