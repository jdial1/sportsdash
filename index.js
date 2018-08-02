const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080;



//Index Route
app.get('/', (request, response) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

// Initialize app
app.listen(port, () => console.log('App Started'));
