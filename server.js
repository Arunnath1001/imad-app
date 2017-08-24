var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg'),pool;

var config = {
    user: 'arunnath1001',
    database: 'arunnath1001',
    host: 'db.imad.hasura-app.io', 
    port: '5432',
    password: process.env.DB.PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articals = {
    'artical-two': {
        title: 'im arunnath',
        heading: 'second webapp',
        date: 'sep 4 2017',
        content: 
        <p> 
       ' hello sir'
        </p>
    },
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one',function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
});

app.get('/artical-two',function (req, res) {
    res.send('artical two requested and will servere here');
});

app.get('/artical-three',function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
