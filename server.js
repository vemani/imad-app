var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one': {
  title: 'Article ONE  | Mani',
  heading: 'Article ONE',
  date: '1 March 2018',
  content: `
        <p>This ia new article written by me...ha.. ha..That is a fantastic experience..I am using Javascript and JQUERY in this one.....One  </p>  
        <p>This ia new article written by me...ha.. ha..That is a fantastic experience...Two   </p>  
        <p>This ia new article written by me...ha.. ha..That is a fantastic experience...Three   </p> `
},

'article-two': {
  title: 'Article TWO  | Mani',
  heading: 'Article TWO',
  date: '2 March 2018',
  content: `
        <p>This ia Article TWO written by me...ha.. ha..That is a fantastic experience..I am getting more confident....</p>  
        <p>This ia new article written by me...ha.. ha..That is a fantastic experience...Two   </p>  
        <p>This ia new article written by me...ha.. ha..That is a fantastic experience...Three   </p> `
},
'article-three': {
  title: 'Article THREE  | Mani',
  heading: 'Article THREE',
  date: '3 March 2018',
  content: `
        <p>This ia new Article THREE written by me...ha.. ha..That is a fantastic experience..I am conversant now....</p>  
        <p>This ia new article written by me...ha.. ha..That is a fantastic experience...Two   </p>  
        <p>This ia new article written by me...ha.. ha..That is a fantastic experience...Three   </p> `
}

};

function createTemplate(data) {
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;
var htmlTemplate = `
<html>
   <head>
    <title>
       ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
   </head>
<body>
   
   <div class="container">
        <div>
            <a href='/'>Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
             ${content}
        </div>
    </div> 
</body>

</html>`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

counter= 0;
app.get('/counter', function (req,res) {
    counter=counter+1;
    res.send(counter.toString());
})

app.get('/:articleName', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
