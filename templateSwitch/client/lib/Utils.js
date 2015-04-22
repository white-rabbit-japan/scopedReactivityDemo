Seed = {};

Seed.go = function() {
  Meteor.call('removeAll');

  var rest = {name: "Chinese", phone: "111-1111", status: "*"};
  Meteor.call('addRestaurant', rest);
  rest = {name: "Japanese", phone: "222-1111", status: "**"};
  Meteor.call('addRestaurant', rest);
  rest = {name: "Thai", phone: "333-1111", status: "***"};
  Meteor.call('addRestaurant', rest);
  rest = {name: "Indonesian", phone: "444-1111", status: "****"};
  Meteor.call('addRestaurant', rest);
  rest = {name: "Italian", phone: "555-1111", status: "*****"};
  Meteor.call('addRestaurant', rest);
};
