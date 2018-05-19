const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const formidable = require('express-formidable');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const databaseUri = 'mongodb://localhost/posts';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const api = require('./api/routes.js')(app);

mongoose.connect(process.env.MONGODB_URI || databaseUri).then(() => {
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});