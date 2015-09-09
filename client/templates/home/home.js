/* Strings used to retrieve properties from Session object. */
var displaySyllabusKey = "displaySyllabusKey";
var selectedSyllabusKey = "selectedSyllabusKey";
var editStatusKey = "editStatusKey";

/**
 * Get the value of the Session object associated with key.
 * @param key The key string.
 * @returns {any} The Session object.
 */
var getSessionID = function(key) {
  return Session.get(key);
};

/**
 * Set the value of the Session object associated with key.
 * @param key The key string.
 * @param value The new value for the Session object.
 */
var setSessionID = function(key, value) {
  Session.set(key, value);
};

Template.home.helpers({

  /**
   * @returns {*} A string indicating how long since this editing session started.
   */
  editTimestamp: function() {
    return moment(this.editStart).fromNow();
  },

  /**
   * @returns {any|Mongo.Cursor} The EditStatus collection in reverse chronological order.
   */
  editStatusList: function() {
    return EditStatus.find({}, {sort: {editStart: -1}});
  },

  /**
   * @returns {any} The Syllabus associated with the currently selected syllabus in the dropdown menu, or undefined.
   */
  selectedSyllabusDoc: function() {
    return Syllabuses.findOne({"_id": getSessionID(displaySyllabusKey)});
  },

  /**
   * @returns {any|Array} A sorted array of objects, each object containing a Syllabus label and it's Doc ID.
   */
  syllabusSelectors: function() {
    var makeLabel = function(syllabus) {
      var alpha = syllabus.alphaNumber;
      var title = syllabus.title;
      var getInstructor = function (syllabus) {
        if ((syllabus.instructor === undefined) || (syllabus.instructor.length ===0)) {
          return "No instructor";
        }
        else {
          var indexOfNewLine = syllabus.instructor.indexOf('\n');
          if (indexOfNewLine === -1) {
            return syllabus.instructor;
          }
          else {
            return syllabus.instructor.substring(0, indexOfNewLine);
          }
        }
      };
      return alpha + ": " + title + " (" + getInstructor(syllabus) + ")";
    };
    return _.map(Syllabuses.find({}, {sort: {alphaNumber: 1}}).fetch(), function(syllabus) {
      return {label: makeLabel(syllabus), value: syllabus._id};
    });
  },

  /**
   * @returns {any} Returns the docID of the currently selected syllabus in the dropdown menu.
   */
  displayID: function () {
    return getSessionID(displaySyllabusKey);
  }

});

Template.home.events({

  /**
   * When a user changes the selected syllabus in the dropdown menu, update the associated Session variable.
   * @param evt The event indicating the syllabus drop-down has been changed.
   */
  'change #syllabusChooser': function (evt) {
    var syllabusID = $(evt.target).val();
    setSessionID(selectedSyllabusKey, syllabusID);
  },

  /**
   * Indicate the syllabus document to display when the user "submits" the drop-down selection.
   * @param event The event indicating the user has chosen a selection to display for editing.
   */
  'submit .syllabus-chooser': function (event) {
    // stop the form from submitting
    event.preventDefault();
    // check to see if there is a previously existing editStatusId, and if so, set if to finished.
    if (getSessionID(editStatusKey)) {
      EditStatus.update(getSessionID(editStatusKey), {$set: {editFinished: true}});
    }
    setSessionID(displaySyllabusKey, getSessionID(selectedSyllabusKey));
    // Create an editStatus document indicating the user is now editing a syllabus.
    var syllabusName = Syllabuses.findOne(getSessionID(selectedSyllabusKey)).alphaNumber;
    var editStatusDocID = EditStatus.insert({editStart: moment().toDate(), editFinished: false, syllabusName: syllabusName});
    setSessionID(editStatusKey, editStatusDocID);
  }
});

AutoForm.addHooks(['insertSyllabusForm'], {

  /**
   * When the user saves a syllabus, unset the editStatus Session variable to remove the form from view.
   * Also note that editing has finished in the EditStatus collection.
   */
  onSuccess: function() {
    // Hide form after successful submit.
    setSessionID(displaySyllabusKey, undefined);
    // Indicate the syllabus is no longer being edited.
    EditStatus.update(getSessionID(editStatusKey), {$set: {editFinished: true}});
    setSessionID(editStatusKey, undefined);
  }
});

/**
 * When the user closes the window, indicate that the editing session is finished.
 */
Meteor.startup(function() {
  $(window).on("beforeunload", function() {
    if (getSessionID(editStatusKey)) {
      EditStatus.update(getSessionID(editStatusKey), {$set: {editFinished: true}});
    }
  });
});
