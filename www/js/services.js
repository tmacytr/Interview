angular.module('starter.services', [])


/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: '911',
    number: '911',
    face: 'http://www.stcharlesil.gov/sites/default/files/images/icons/icon-911.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    number: '123-456-789',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Perry Governor',
    number: '987-654-321',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
  })
 
  // Reminder
.factory('Reminders', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var reminders = [{
    id: 0,
    name: 'vitaminB',

  },  {
    id: 1,
    name: 'Aspirin'
  }];


  return {
    all: function() {
      return reminders;
    },
    get: function(reminderId) {
      // Simple index lookup
      return reminders[reminderId];
    }
  }
});
