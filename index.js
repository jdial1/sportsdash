const path = require('path');
const http = require('http').Server(app);


process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

//Index Route
app.get("*", function(req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip+" - - "+moment().format('MM/DD/YY hh:mm:ss')+" "+req.route.path);
  res.sendFile(path.join(__dirname, "./index.html"));
});

// Initialize app
http.listen(port, () => console.log('App Started'));
