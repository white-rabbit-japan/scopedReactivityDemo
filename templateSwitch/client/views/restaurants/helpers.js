Template.Restaurants.helpers({
  Restaurant: function() {
    return Restaurants.find();
  },

  currentRestaurant: function() {
    // check whether this restaurant is selected. "this" refers to the current
    // context, eg. the current restaurant in the loop
    return Template.instance().state.equals("currentRestaurant", this._id);
  },

  dataDump: function() {
    //var data = Restaurants.find({}).fetch());
    //var arrayLength = data.length;
    //for (var i = 0; i < arrayLength; i++) {
    return Restaurants.find({}).fetch();

    //Do something
  },

  stringify: function() {
    return JSON.stringify(this);
  },
});

Template.menuItems.helpers({
  selectedName: function() {
    return Template.parentData(1).name;
  },

  selectedStatus: function() {
    return Template.parentData(1).status;
  },

  selectedPhone: function() {
    return Template.parentData(1).phone;
  },

})



