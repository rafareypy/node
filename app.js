
/**
 * Module dependencies.
 */

var express = require('express')
var load    = require('express-load');
var mongoose = require('mongoose');
  //, routes = require('./routes');

var app = module.exports = express.createServer();

/*Iniciando conexao com Mongo*/
mongoose.connect('mongodb://localhost/waibtec', function(err){
  if(err){
    console.log("Erro ao connect no MongoDB" +  err);
  }else{
    console.log(" connect to MongoDB is OK..! " );
  }
});

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


load('models').then('controllers').then('routes').into(app);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});



// mongoose.connect('mongodb://localhost/waibtec');

// var db = mongoose.connect ;


// // var Schema = mongoose.Schema ;
// // var ObjectId = Schema.ObjectId;

// // var Tarea = new Schema({
// //   tarea:String
// // });
// // var Tarea = mongoose.model('Tarea', Tarea);

// // var silense = new Tarea({name:'Silense'});

// // silense.save(function(err, silense){
// //   if(err) return console.error(err);
// //   console.log('salvado com Sucesso!');
// // });