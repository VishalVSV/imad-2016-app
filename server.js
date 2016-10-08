var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/chat',function(req,res){
    res.sendFile(path.join(__dirname,'ui','Chat.html'));
});
var counter = 0;

app.get('/counter', function (req, res) {
  counter = counter+ 1;
  res.send(counter.toString());
});


var names = [];
app.get('/submit-message',function (req,res) {
    if(req.query.name!==null || req.query.name!=='' || req.query.name !== " " || req.query.name!="  "){
     var name = req.query.name;
     names.push(name);
    res.send(JSON.stringify(names));
    }
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    try {
         res.send(createHtml(articles[articleName]));
    }
    catch(e) {
        res.send("404 Page not found");
    }
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
