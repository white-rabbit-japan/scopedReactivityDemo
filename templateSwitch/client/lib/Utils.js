Seed = {};

Seed.go = function() {
  Meteor.call('removeAll');

  var seed = [{name: "Chinese", phone: "111-1111", status: "*"},
    {name: "Japanese", phone: "222-1111", status: "**"},
    {name: "Thai", phone: "333-1111", status: "***"},
    {name: "Indonesian", phone: "444-1111", status: "****"},
    {name: "Italian", phone: "555-1111", status: "*****"}];

  var arrayLength = seed.length;
  for (var i = 0; i < arrayLength; i++) {
    Meteor.call('addRestaurant', seed[i]);
  }

};
