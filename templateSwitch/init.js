if (Meteor.isClient) {
  Restaurants = new Meteor.Collection;

  Meteor.startup(function() {
    Restaurants.insert({name: "Chinese"});
    Restaurants.insert({name: "Thai"});
    Restaurants.insert({name: "Japanese"});
    Restaurants.insert({name: "Indonesian"});
    Restaurants.insert({name: "Italian"});

  });
}
