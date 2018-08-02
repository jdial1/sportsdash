const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/css' ));
//Index Route
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, "./index.html"));
});

// Initialize app
app.listen(port, () => console.log('App Started'));
