EditStatus = new Mongo.Collection("editStatus");

Meteor.methods({
  /**
   * Create a new timestamped EditStatus document.
   * @param syllabusName The Syllabus being edited.
   * @returns {*|any} The docID of the new document.
   */
  addEditStatus: function(syllabusName){
    var docID = EditStatus.insert({editStart: moment().toDate(), editFinished: false, syllabusName: syllabusName});
    return docID;
  },

  /**
   * Set this EditStatus document to indicate that editing is finished.
   * @param editStatusID The docID for the EditStatus document.
   */
  editStatusFinished: function(editStatusID) {
    EditStatus.update(editStatusID, {$set: {editFinished: true}});
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