Meteor.methods({
  addRestaurant: function(restaurant) {
    console.log('adding new restaurant');
    return Restaurants.insert(restaurant);
  },

  deleteRestaurant: function(id) {
    Restaurants.remove({_id: id});
  },

  removeAll: function() {
    Restaurants.remove({});
  }
});