var displaySyllabusID = "displaySyllabusID";
var selectedSyllabusID = "selectedSyllabusID";

var getSessionID = function(id) {
  return Session.get(id);
};

var setSessionID = function(id) {
  Session.set(id);
}



Template.home.helpers({

  editTimestamp: function() {
    return moment(this.editStart).fromNow();
  },

  editStatusList: function() {
    return EditStatus.find({}, {sort: {editStart: -1}});
  },

  selectedSyllabusDoc: function() {
    return Syllabuses.findOne({"_id": Session.get("displaySyllabusID")});
  },

  syllabusSelectors: function() {
    var makeLabel = function(syllabus) {
      var alpha = syllabus.alphaNumber;
      var title = syllabus.title;
      var getInstructor = function (syllabus) {
        if ((syllabus.instructor == undefined) || (syllabus.instructor.length ===0)) {
          return "No instructor";
        }
        else {
          var indexOfNewLine = syllabus.instructor.indexOf('\n');
          if (indexOfNewLine == -1) {
            return syllabus.instructor;
          }
          else {
            return syllabus.instructor.substring(0, indexOfNewLine);
          }
        }
      }
      return alpha + ": " + title + " (" + getInstructor(syllabus) + ")";
    };
    return _.map(Syllabuses.find({}, {sort: {alphaNumber: 1}}).fetch(), function(syllabus) {
      return {label: makeLabel(syllabus), value: syllabus._id};
    });
  },

  displayID: function () {
    return Session.get("displaySyllabusID");
  }

});

Template.home.events({
  /**
   * Save the newly selected value of the syllabus drop-down in a session variable.
   * @param evt The event indicating the syllabus drop-down has been selected.
   */
  'change #syllabusChooser': function (evt) {
    var syllabusID = $(evt.target).val();
    Session.set("selectedSyllabusID", syllabusID);
  },

  /**
   * Indicate the syllabus document to display when the user "submits" the drop-down selection.
   * @param event The event indicating the user has chosen a selection to display for editing.
   */
  'submit .syllabus-chooser': function (event) {
    // stop the form from submitting
    event.preventDefault();
    // check to see if there is a previously existing editStatusId, and if so, set if to finished.
    if (Session.get("editStatusId")) {
      EditStatus.update(Session.get("editStatusId"), {$set: {editFinished: true}});
    }
    Session.set("displaySyllabusID", Session.get("selectedSyllabusID"));
    // Create an editStatus document indicating the user is now editing a syllabus.
    var syllabusName = Syllabuses.findOne(Session.get("selectedSyllabusID")).alphaNumber;
    var editStatusId = EditStatus.insert({editStart: moment().toDate(), editFinished: false, syllabusName: syllabusName});
    Session.set("editStatusId", editStatusId);
  }
});

AutoForm.addHooks(['insertSyllabusForm'], {
  /**
   * When the user submits a Syllabus document, AutoForm will automatically save it.
   * This method just unsets the form to display so it disappears from view.
   */
  onSuccess: function() {
    // Hide form after successful submit.
    Session.set("displaySyllabusID", undefined);
    // Indicate the syllabus is no longer being edited.
    EditStatus.update(Session.get("editStatusId"), {$set: {editFinished: true}});
    Session.set("editStatusId", undefined);
  }
});
