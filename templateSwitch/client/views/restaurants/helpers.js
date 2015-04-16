Template.Restaurants.helpers({
  Restaurant: function() {
    return Restaurants.find();
  },

  currentRestaurant: function() {
    // check whether this restaurant is selected. "this" refers to the current
    // context, eg. the current restaurant in the loop
    return Template.instance().state.equals("currentRestaurant", this._id);
  },

});

Template.menuItems.helpers({
  restaurantName: function() {
    var restaurantMenu = Restaurants.findOne(this.restaurant);
    return restaurantMenu.name;

  },
})



