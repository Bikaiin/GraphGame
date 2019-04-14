const express = require("express");
const Sequelize = require('sequelize');
const app = express();
const PORT =process.env.PORT || 4000;
const bodyparser = require("body-parser");

//database
const db = require('./config/database');
//test db
db
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(bodyparser.json());
app.use("/players", require("./routes/players"));

app.listen(PORT, console.log(`server is listening ${PORT}`));

