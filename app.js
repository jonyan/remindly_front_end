
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var new_user = require('./routes/new_user');
var settings = require('./routes/settings');
var contacts = require('./routes/contacts');
var add_contact = require('./routes/add_contact');
var edit_contact = require('./routes/edit_contact');
var verification = require('./routes/verification');
var user_home = require('./routes/user_home');
var who = require('./routes/who');
var who_old = require('./routes/who_old');
var when = require('./routes/when');
var message = require('./routes/message');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico'))); 
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('remindlymesecret'));
app.use(express.cookieSession());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/new_user', new_user.create);
app.get('/settings', settings.view);
app.get('/contacts', contacts.view);
app.get('/add_contact', add_contact.add);
app.get('/edit_contact', edit_contact.edit);
app.get('/verification', verification.login);
// app.get('/verification', verification.getMessage);
app.get('/user_home', user_home.verify);
app.get('/who', who.view);
app.get('/who_old', who_old.view);
app.get('/when', when.addRecipients);
app.get('/message', message.setWhen);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
