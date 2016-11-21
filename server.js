var express = require('express');
var morgan = require('morgan');
var path = require('path');
var e = require('events');
var Pool = require('pg').Pool;

var config = {
    host:'db.imad.hasura-app.io',
    port: '5432',
    user: 'vishalvsv',
    database: 'vishalvsv',
    password:'db-vishalvsv-30303'
};

function htmlCreate (data) {
    return `
    <html>
        <head><title>${data.name}</title></head>
        <body>
            <span style='font-weight: bold;font-size:20px;'>${data.name}</span> <span style="text-align:right;font-size:20px;">by ${data.author}</span><hr/>
            ${data.content}
        </body>
    </html>
    `;    
}

var app = express();
app.use(morgan('combined'));

app.on('c', function (stream) {
  console.log("*-----------------------------------------*");
});

app.emit('c');

app.get('/c', function (req,res) {
     res.redirect('/chat');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/rubium-download', function (req, res) {
  res.download(__dirname+"/rubiumv1.exe");
  res.download(__dirname+"/rubiumv1.pdb");
});

app.get('/chat',function(req,res){
    app.emit('open');
    res.sendFile(path.join(__dirname,'ui','Chat.html'));
});

var pool = new Pool(config);
app.get('/db/:articleName',function(req,res){
    pool.query("SELECT * FROM articles WHERE name ='"+req.params.articleName+"'",function(err,result){
            if (err){
                res.send(err.toString());
            }
            else{
                if (result.rows[0] === undefined) {res.send("404")}
                if (result.rows[0].length ===0){res.send("404")}else{
                    res.send(htmlCreate(result.rows[0])); 
                }
            }
        });
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
     if (name === "" || name === null) {
         
     }
     else{
        names.push(name);
        var namesRefined = [];
        for(k=0;k<names.length;k++){
            if (names[k] === null || names[k] === undefined) {
            
            }else{
                namesRefined.push(names[k]);
            }
        }
        console.log(namesRefined);
        res.send(JSON.stringify(names));
     }
    }
});

app.get('/cls/chat',function (req,res) {
  names = [];
  res.send('Done');
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/cmdj.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cmdj.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:path', function (req, res) {
  var p = req.params.path;
  res.sendFile(path.join(__dirname, 'ui', p + ".html"));
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

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});