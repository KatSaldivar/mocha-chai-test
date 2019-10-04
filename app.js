//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})

////"echo \"Error: no test specified\" && exit 1"
//https://buddy.works/guides/how-automate-nodejs-unit-tests-with-mocha-chai