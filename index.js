const express = require('express')
const app = express()
const port = process.env.PORT || 8080;



//Index Route
app.get('/', (request, response) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip+" - - "+moment().format('MM/DD/YY hh:mm:ss')+" "+req.route.path);
  res.sendFile(path.join(__dirname, "./index.html"));
});

// Initialize app
app.listen(port, () => console.log('App Started'));
