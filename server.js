// server.js

// init project
const express = require('express')
const fs = require('fs')
const showdown = require('showdown')
const app = express()
const converter = new showdown.Converter()

// prefix and postfix of html body
const head = '<html lang="en"><head><title>Markdown Web Page</title></head><body><div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div>'
const footer = '<script src="https://button.glitch.me/button.js" data-style="glitch"></script></body></html>'

// when index route accessed, send readme converted to html
app.get("/", function (req, res) {  
  fs.readFile('README.md', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    res.send(head + converter.makeHtml(data) + footer);
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
