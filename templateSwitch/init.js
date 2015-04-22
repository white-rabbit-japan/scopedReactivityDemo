Restaurants = new Meteor.Collection('restaurants');

if (Meteor.isClient) {

  Meteor.startup(function() {
    Seed.go();





  });

}
