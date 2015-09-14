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

// Publish/subscribe to the entire Collection
if (Meteor.isServer) {
  Meteor.publish("editStatus", function () {
    return EditStatus.find();
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("editStatus");
}