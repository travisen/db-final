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

app.get('/home', function(req,res,next){
  //console.log("test");
  res.render('home');
});

app.post('/dropdowns', function(req,res,next){
  console.log("running");
  var table = null;

  table = req.body.table;

  var sql = ('SELECT id, name FROM '+table);
  console.log("query after processing", sql);
  console.log("table", table);

  mysql.pool.query(sql, function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
    res.send(JSON.stringify(rows));
  });

});

app.post('/dropdowns-characters', function(req,res,next){
  console.log("running");
  var table = null;

  table = req.body.table;

  var sql = ('SELECT id, f_name, l_name FROM '+table);
  console.log("query after processing", sql);
  console.log("table", table);

  mysql.pool.query(sql, function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
    res.send(JSON.stringify(rows));
  });

});


app.post('/insert-planets', function(req,res,next){

  var table = null;
  table = "Planets";  
  var dataRecieved = [];

  console.log("inserting into table: ", table);
  console.log("data from client", req.body);

  dataRecieved.push(req.body);

  var sql = ("INSERT INTO " + table + " SET ?");
  console.log("query after processing", sql);
  
  mysql.pool.query(sql, dataRecieved, function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
  });
});

app.post('/insert-species', function(req,res,next){

  var table = null;
  table = "Species";  
  var dataRecieved = [];

  console.log("inserting into table: ", table);
  console.log("data from client", req.body);

  dataRecieved.push(req.body);
  
  var sql = ("INSERT INTO " + table + " SET ?");
  console.log("query after processing", sql);
  console.log("data rec", dataRecieved);

  mysql.pool.query(sql, dataRecieved, function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
  });
});

app.post('/insert-factions', function(req,res,next){

  var table = null;
  table = "Factions";  
  var dataRecieved = [];

  console.log("inserting into table: ", table);
  console.log("data from client", req.body);

  dataRecieved.push(req.body);
  
  var sql = ("INSERT INTO " + table + " SET ?");
  console.log("query after processing", sql);
  
  mysql.pool.query(sql, dataRecieved, function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
  });
});

app.post('/insert-characters', function(req,res,next){

  var table = null;
  table = "Characters";  
  var dataRecieved = [];

  console.log("inserting into table: ", table);
  console.log("data from client", req.body);

  dataRecieved.push(req.body);
  
  var sql = ("INSERT INTO " + table + " SET ?");
  console.log("query after processing", sql);
  
  mysql.pool.query(sql, dataRecieved, function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
  });
});

app.post('/insert-ships', function(req,res,next){

  var table = null;
  table = "Ships";  
  var dataRecieved = [];

  console.log("inserting into table: ", table);
  console.log("data from client", req.body);

  dataRecieved.push(req.body);
  
  var sql = ("INSERT INTO " + table + " SET ?");
  console.log("query after processing", sql);
  
  mysql.pool.query(sql, dataRecieved, function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
  });
});

app.post('/insert-leaders', function(req,res,next){

  var table = null;
  table = "Faction_leaders";  
  var dataRecieved = [];

  console.log("inserting into table: ", table);
  console.log("data from client", req.body);

  dataRecieved.push(req.body);
  
  var sql = ("INSERT INTO " + table + " SET ?");
  console.log("query after processing", sql);
  
  mysql.pool.query(sql, dataRecieved, function(err,rows,fields){
    if(err){
      next(err);
      return;
    }
  });
});

app.post('/insert-service', function(req,res,next){

  var table = null;
  table = "Serves_on";  
  var dataRecieved = [];

  console.log("inserting into table: ", table);
  console.log("data from client", req.body);

  dataRecieved.push(req.body);
  
  var sql = ("INSERT INTO " + table + " SET ?");
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
  res.render('leaders');
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
