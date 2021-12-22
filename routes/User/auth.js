const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../../middleware/fetchuser');

const JWT_SECRET = "teetarkeaageteetar"

// Creating the user /api/auth/register | Doesn't require Auth

router.post('/register', [
    body('name', 'Name length must be greater than 2').isLength({ min: 2 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password length must be more than 5').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    // CHECKING FOR THE ERRORS
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // CHECKING IF A USER WITH EMAIL ALREADY EXISTS
        let user = await User.findOne({ email: req.body.email })

        // CREATING A NEW USER
        if (user) {
            return res.status(400).json({ error: 'Sorry user with this email already exists' })
        }

        // GENERATING THE SALT
        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt);

        // 
        user = await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email
        })

        const data = {
            user: {
                id: user._id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        // console.log(jwt_data);


        return res.json({ authToken });

    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})

// Loging In user /api/auth/login | Doesn't require Auth

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {

    const errors = validationResult(req);
    // CHECKING FOR THE ERRORS
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {

        // CHECKING IF A USER EXISTS OR NOT
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Please try to log in with correct password" })
        }

        // CHECKING IF ENTERED PASSWORD IS CORRECT OR NOT
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to log in with correct password" })
        }

        const payload = {
            user: {
                id: user._id
            }
        }
        const authToken = await jwt.sign(payload, JWT_SECRET);
        return res.send({ authToken });

    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }

})

// get logged in user details /api/auth/getuser | Login required
router.post('/getuser', fetchUser, async (req, res) => {
    try {
        let userID = req.user.id;
        const user = await User.findById(userID).select("-password");
        res.send(user);
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})
module.exports = router;
