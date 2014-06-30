
/**
 * Module dependencies.
 */

var express = require('express')
var load    = require('express-load');
var mongoose = require('mongoose');
  //, routes = require('./routes');

var app = module.exports = express.createServer();

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

// Routes

// app.get('/', routes.index);
// app.get('/teste', routes.teste);
// app.get('/testes', routes.testes);

load('models').then('controllers').then('routes').into(app);


mongoose.connect('mongodb://localhost/waibtec')

var Schema = mongoose.Schema ;
var ObjectId = Schema.ObjectId;

var Tarea = new Schema({
  tarea:String
});
var Tarea = mongoose.model('Tarea', Tarea);

var silense = new Tarea({name:'Silense'});

silense.save(function(err, silense){
  if(err) return console.error(err);
  console.log('salvado com Sucesso!');
});


//-------------------------------------------------------------
/*MongoDB*/
//  var mongoose = require('mongoose');
// // mongoose.connect('mongodb://localhost/waibtec');

// var uri = 'mongodb://localhost/waibtec';
// mongoose = mongoose.createConnection(uri);


// var db = mongoose.connect;

// var KittySchema = mongoose.Schema({
//   name:String
// });

// var KittySchema = mongoose.model('Kitten', KittySchema);

// var silense = new Kitten({name:'Silense'});

// silense.save(function(err, silense){
//   if(err) return console.error(err);
//   console.log('salvado com Sucesso!');
// });

// console.log(silense.name);

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback(){
//   console.log('Banco de dados Rodando...!');
// });

//-------------------------------------------------------------

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

