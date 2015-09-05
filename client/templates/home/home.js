Template.home.rendered = function() {

};

Template.home.helpers({

  selectedSyllabusDoc: function() {
    return Syllabuses.findOne({"_id": Session.get("displaySyllabusID")});
  },

  syllabusSelectors: function() {
    return _.map(Syllabuses.find().fetch(), function(syllabus) {
      return {label: syllabus.alphaNumber + ": " + syllabus.title, value: syllabus._id};
    });
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
    console.log("Submit");
    Session.set("displaySyllabusID", Session.get("selectedSyllabusID"));
  }
});
