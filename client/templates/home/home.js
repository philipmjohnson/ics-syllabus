Template.home.rendered = function() {

};

Template.home.helpers({

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
  'change #syllabusChooser': function (evt) {
    var syllabusID = $(evt.target).val();
    Session.set("selectedSyllabusID", syllabusID);
  },

  'submit .syllabus-chooser': function (event) {
    // stop the form from submitting
    event.preventDefault();
    Session.set("displaySyllabusID", Session.get("selectedSyllabusID"));
  }
});

// Trying to get form to clear after submit event. Not happening.
AutoForm.addHooks(['insertSyllabusForm'], {
  onSuccess: function() {
    Session.set("displaySyllabusID", undefined);
    //Session.set("selectedSyllabusID", undefined);
    //Session.keys = {};
  }
});
