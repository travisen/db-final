var express = require('express');
var mysql = require('./dbcred.js');
var bodyParser = require('body-parser'); //to handle post requests

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3012);

app.use(express.static('public'));

// allows parsing of requests sent to this server from a client
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req,res,next){
	//console.log("test");
	res.render('home');
});


app.get('/characters', function(req,res,next){
  mysql.pool.query('SELECT * FROM Characters', function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
    res.send(JSON.stringify(rows));
  });
});

app.get('/templates', function(req,res,next){
	//console.log("test");
	res.render('templates');
})

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
