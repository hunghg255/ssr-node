// Requiring modules
const express = require('express');
const app = express();
const ejs = require('ejs');
const port = 8000;

// Render index.ejs file
app.get('/', function (req, res) {
  // Render page using renderFile method
  ejs.renderFile('index.ejs', {}, {}, function (err, template) {
    if (err) {
      throw err;
    } else {
      res.end(template);
    }
  });
});

// Server setup
app.listen(port, function (error) {
  if (error) throw error;
  else console.log('Server is running');
});
