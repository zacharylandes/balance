Activities = new Meteor.Collection("Activities");

Meteor.methods({
  insertActivity: function(activity) {

    return Activities.insert({
               activity:activity,
              createdBy:  Meteor.userId()
        });

  },

  removeActivity: function(id) {
    check(id, String);
    return pleasure.remove(id); achievement.remove(id); add.remove(id), cat.remove(id), name.remove(id)
  }
})
