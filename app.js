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

app.post('/insert', function(req,res,next){

  var table = null;
  table = "Species";  
  var dataRecieved = [];

  console.log("inserting into table: ", table);
  console.log("data from client", req.body);

  dataRecieved.push(req.body);

  /*
  var sql = "INSERT INTO ?? SET ??";
  var inserts = [table, req.body];
  sql = mysql.format(sql, inserts);
  */
  
  var sql = ("INSERT INTO " + table + " SET ?")
  console.log("query after processing", sql);
  
  mysql.pool.query(sql, dataRecieved, function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
  });
});

app.get('/get-characters', function(req,res,next){
  mysql.pool.query('SELECT * FROM Characters', function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
    res.send(JSON.stringify(rows));
  });
});

app.get('/view-characters', function(req,res,next){
  res.render('characters');
});

app.get('/get-species', function(req,res,next){
  mysql.pool.query('SELECT * FROM Species', function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
    res.send(JSON.stringify(rows));
  });
});

app.get('/view-species', function(req,res,next){
  res.render('species');
});

app.get('/get-planets', function(req,res,next){
  mysql.pool.query('SELECT * FROM Planets', function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
    res.send(JSON.stringify(rows));
  });
});

app.get('/view-planets', function(req,res,next){
  res.render('planets');
});


app.get('/get-factions', function(req,res,next){
  mysql.pool.query('SELECT * FROM Factions', function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
    res.send(JSON.stringify(rows));
  });
});

app.get('/view-factions', function(req,res,next){
  res.render('faction');
});

app.get('/get-ships', function(req,res,next){
  mysql.pool.query('SELECT * FROM Ships', function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
    res.send(JSON.stringify(rows));
  });
});

app.get('/view-ships', function(req,res,next){
  res.render('ships');
});

app.get('/get-service', function(req,res,next){
  mysql.pool.query('SELECT * FROM Serves_on', function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
    res.send(JSON.stringify(rows));
  });
});

app.get('/view-service', function(req,res,next){
  res.render('service');
});

app.get('/get-leaders', function(req,res,next){
  mysql.pool.query('SELECT * FROM Faction_leaders', function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
    res.send(JSON.stringify(rows));
  });
});

app.get('/view-leaders', function(req,res,next){
  res.render('view-leaders');
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
