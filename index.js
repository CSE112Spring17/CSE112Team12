var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(express.static('./doc/'))


// all environments
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));

// start the server
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080 or http://127.0.0.1:8080');
});
