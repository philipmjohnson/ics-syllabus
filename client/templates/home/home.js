Template.home.rendered = function() {

};

Template.home.helpers({

  selectedSyllabusDoc: function() {
    return Syllabuses.findOne({"alphaNumber": "ICS 111"});
  },

  syllabusSelectors: function() {
    console.log("Syllabuses: ", Syllabuses.find());
    return _.map(Syllabuses.find().fetch(), function(syllabus) {
      return {label: syllabus.alphaNumber + ": " + syllabus.title, value: syllabus._id};
    });
  }

});
