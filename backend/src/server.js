const express = require('express');
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb+srv://rocketbox:rocketbox@cluster0-m7g7o.mongodb.net/rocketbox?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology : true 
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(3333);