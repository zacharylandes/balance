Activities = new Meteor.Collection("Activities");

Meteor.methods({
  insertActivity: function(activity) {
    activity = activity;
    check(activity.name, String);
    check(activity.pleasure, Number);
    check(activity.achievement, Number);
    check(activity.score, Number);

    return Activities.insert({activity:activity,
          createdAt: new Date(),            // current time
          owner: Meteor.userId(),           // _id of logged in user
        });

  },

  removeActivity: function(id) {
    check(id, String);
    return pleasure.remove(id); achievement.remove(id); add.remove(id), cat.remove(id), name.remove(id)
  }
})
