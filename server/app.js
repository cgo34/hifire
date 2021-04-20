const express = require('express');
const app = express();
var port = process.env.PORT || 8080;

//Import routes
let apiRoutes = require("./routes");
//Use API routes in the App
app.use('/api', apiRoutes);


app.use((req, res) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
});

module.exports = app;