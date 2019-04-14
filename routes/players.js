const express = require("express");
const router = express.Router();
const Player = require('../models/Player');

router.get("/",(req, res)=>
    Player.findAll()
        .then(players => {
            console.log(players);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))

);
 module.exports = router;
