var express = require('express');
var morgan = require('morgan');
var path = require('path');


var app = express();
app.use(morgan('combined'));


var articles ={
  'article-one' : {
    title:'Article One | VishalVSV',
    heading:'Article One',
    date: 'Sep 21 2016',
    content:`
        <p>
            Blog Beginings!!Blog Beginings!!Blog Beginings!!Blog Beginings!!Blog Beginings!!Blog Beginings!!
        </p>
        
        <p>
            Blog Beginings!!Blog Beginings!!Blog Beginings!!Blog Beginings!!Blog Beginings!!Blog Beginings!!
        </p>
        
        <p>
            Blog Beginings!!Blog Beginings!!Blog Beginings!!Blog Beginings!!Blog Beginings!!Blog Beginings!!
        </p>
        
        <p>
            Blog Beginings!!Blog Beginings!!Blog Beginings!!Blog Beginings!!Blog Beginings!!Blog Beginings!!
        </p>
    `
},  
  'article-two' : {
    title:'Article Two | VishalVSV',
    heading:'Article Two',
    date: 'Sep 23 2016',
    content:`
        <p>
            English Literature Exam is today!!!
        </p>`
},
  'article-three' : {
    title:'Article Three | VishalVSV',
    heading:'Article Three',
    date: 'Sep 26 2016,',
    content:`
        <p>
            Hindi Exam is today!!!
        </p>`
}
};

var createHtml = function(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    
    var html = `
    <!doctype html>
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name='viewport' content='width=device-width,initial-scale=1'>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div>
            <div>
                <a href="/">
                    Home
                </a>
            </div>
            <hr/>
            <div>
                <h3>
                    ${heading}
                </h3>
            </div>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
    `;
    return html;
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createHtml(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
