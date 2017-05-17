var users = require('./users.js');

module.exports = {
  readAll: function(){
    return users.find();
  },
  findUserById: function(userId){
    return users.findOne('id', userId);
  },
  getAdmins: function(){
    return users.find('type', 'admin');
  },
  getNonAdmins: function(){
    return users.find('type', 'user');
  },
  getUsersByFavorite: function(favorite){
    var favorite = [];
    for(var i = 0; i < users.length; i++){
      if (users[i].favorites === str){
        favorites.push(users[i]);
      }
    } return favorite;
  },
  getUsersByAgeLimit: function(age){
    var underAge = [];
    for(var i = 0; i < users.length; i++){
      if(users[i].age < age){
        underAge.push(users[i]);
      }
    } return underAge;
  },
  findUserByQuery: function(query, value){
    if(query === 'last_name'){
      return users.find('last_name', value);
    } else if(query === 'email'){
      return users.find('email', value);
    } else if(query === 'state'){
      return users.find('state', value);
    }
  },
  createUser: function(obj){
    return users.add(obj);
  },
  updateUser: function(userId, obj){
    return users.update('id', userId, obj);
  },
  removeUser: function(userId){
    return users.remove('id', userId);
  }
}
