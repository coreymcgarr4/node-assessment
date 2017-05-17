const express = require('express');
const bodyParser = require('body-parser');
const userCtrl = require('./userCtrl.js');

var app = express();
app.use(bodyParser.json());

app.get('/api/users', function(req, res){
  if(req.query.favorites){
    res.status(200).json(userCtrl.getUsersByFavorite(req.query.favorites))
  }
});
app.get('/api/users', function(req, res){
  if(req.query.age){
    res.status(200).json(userCtrl.getUsersByAgeLimit(req.query.age))
  }
});
app.get('/api/users', function(req, res){
  if(req.query.last_name){
    res.status(200).json(userCtrl.findUserByQuery(req.query.last_name))
  }
});
app.get('/api/users', function(req, res){
  if(req.query.email){
    res.status(200).json(userCtrl.findUserByQuery(req.query.email))
  }
});
app.get('/api/users/:userId', function(req, res){
  res.status(200).json(userCtrl.findUserById(req.params.userId));
});
app.get('/api/admins', function(req, res){
  res.status(200).json(userCtrl.getAdmins());
});
app.get('/api/nonadmins', function(req, res){
  res.status(200).json(userCtrl.getNonAdmins());
});
app.put('/api/users/:userId', function(req, res){
  res.status(200).json(userCtrl.updateUser(req.params.userId, req.body));
});
app.post('/api/users', function(req, res){
  res.status(200).json(userCtrl.createUser(req.body));
});
app.delete('/api/users/:userId', function(req, res){
  res.status(200).json(userCtrl.removeUser(req.params.userId));
});
module.exports = app;
