EditStatus = new Mongo.Collection("editStatus");

EditStatus.allow({
  insert: function (userId, doc) {
    // only allow posting if you are logged in
    return true;
  },
  update: function (userId, doc) {
    // only allow updating if you are logged in
    return true;
  },
  remove: function (userID, doc) {
    //only allow deleting if you are owner
    return true;
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("editStatus", function () {
    return EditStatus.find();
  });
}

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("editStatus");
}


//Items.before.insert(function (userId, doc) {
//  doc.createdAt = moment().toDate();
//});