Template.Restaurants.events({

  'click': function(e, t) {
    // store the curret restaurant ID
    // make sure the event selector is correct!
    t.state.set('currentRestaurant', this._id);

    console.count(t.state.get('currentRestaurant'));
  }
});