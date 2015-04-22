Meteor.publish("restaurant", function(id) {
  return Restaurants.find({_id: id}, {fields: {_id: 1, name: 1, phone: 1, status: 1}});
});

Meteor.publish("restaurants", function() {
  return Restaurants.find({}, {sort: {"status": 1}, fields: {_id: 1, name: 1}});
  ;
});

