const http = require('http');
const app = require('./app');
let port = process.env.PORT || 8080;
// Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));

// Launch app to the specified port
app.listen(port, function() {
  console.log("Running FirstRest on Port "+ port);
});
