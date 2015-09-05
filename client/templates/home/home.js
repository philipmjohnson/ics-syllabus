Template.home.rendered = function() {

};

Template.home.helpers({

  selectedSyllabusDoc: function() {
    return Syllabuses.findOne({"alphaNumber": "ICS 111"});
  }

});
