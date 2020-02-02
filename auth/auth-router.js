const router = require('express').Router();
const bc = require('bcryptjs');


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bc.hashSync(user.password, 10);
    user.password = hash;

    
})