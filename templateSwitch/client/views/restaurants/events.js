Template.Restaurants.events({

  'click': function(e, t) {
    var self = this;
    // store the curret restaurant ID
    // make sure the event selector is correct!
    t.state.set('currentRestaurant', self._id);

    console.count(t.state.get('currentRestaurant'));

    Meteor.subscribe('restaurants');
    Meteor.subscribe('restaurant', self._id);

  },

  'click .__reinit': function() {
    Seed.go();
  },
});