var _ = require('lodash');

var users = [
  {"id": 1,  "email": "travisldunn@gmail.com", "username": "travisldunn", "name": "Travis Dunn", "bio": "Happy Developer", "twitter_handle": "@travisldunn", "site": "travisldunn.com"},
  {"id": 2,  "email": "travisldunn@gmail.com", "username": "travisldunn", "name": "Travis Dunn", "bio": "Happy Developer", "twitter_handle": "@travisldunn", "site": "travisldunn.com"},
  {"id": 3,  "email": "travisldunn@gmail.com", "username": "travisldunn", "name": "Travis Dunn", "bio": "Happy Developer", "twitter_handle": "@travisldunn", "site": "travisldunn.com"},
  {"id": 4,  "email": "travisldunn@gmail.com", "username": "travisldunn", "name": "Travis Dunn", "bio": "Happy Developer", "twitter_handle": "@travisldunn", "site": "travisldunn.com"},
  {"id": 5,  "email": "travisldunn@gmail.com", "username": "travisldunn", "name": "Travis Dunn", "bio": "Happy Developer", "twitter_handle": "@travisldunn", "site": "travisldunn.com"},
  {"id": 6,  "email": "travisldunn@gmail.com", "username": "travisldunn", "name": "Travis Dunn", "bio": "Happy Developer", "twitter_handle": "@travisldunn", "site": "travisldunn.com"},
  {"id": 7,  "email": "travisldunn@gmail.com", "username": "travisldunn", "name": "Travis Dunn", "bio": "Happy Developer", "twitter_handle": "@travisldunn", "site": "travisldunn.com"},
  {"id": 8,  "email": "travisldunn@gmail.com", "username": "travisldunn", "name": "Travis Dunn", "bio": "Happy Developer", "twitter_handle": "@travisldunn", "site": "travisldunn.com"},
  {"id": 9,  "email": "travisldunn@gmail.com", "username": "travisldunn", "name": "Travis Dunn", "bio": "Happy Developer", "twitter_handle": "@travisldunn", "site": "travisldunn.com"}
];

module.exports = {
  get: function(id) {
    return _.find(users, function(user){
      return user.id === id;
    });
  },
  all: function() {
    return users;
  }
}
