Template.exportMarkdown.helpers({

  markdowndata: function () {

    var allSyllabuses = Syllabuses.find({}, {sort: {alphaNumber: 1}}).fetch();

    // Helper function: Return the text corresponding to a SLO identifier ("a", "b", "c"...)
    var lookupSlo = function (slo) {
      return _.find(ICSLearningOutcomes, function (record) {
        return record.value === slo;
      }).label;
    };
    // Helper function: Given an array of SLO identifiers, return a string containing their textual definitions.
    var sloToString = function (sloArray) {
      var sloString = "";
      _.each(sloArray, function (slo) {
        sloString += "\n   * " + lookupSlo(slo);
      });
      return sloString;
    };

    // Now generate the markdown string.
    var markdownString = "";
    _.each(allSyllabuses, function (syllabus) {
      markdownString +=
          "\n\n# Course syllabus for: " + syllabus.alphaNumber +
          "\n## a. Course alpha and number, and course title." +
          "\n   " + syllabus.alphaNumber + " " + syllabus.title +
          "\n## b. Instructor name and contact information." +
          "\n   " + syllabus.instructor +
          "\n## c. Course description." +
          "\n   " + syllabus.instructor +
          "\n## d. Course objectives." +
          "\n   " + syllabus.objectives +
          "\n## e.1. Student Learning Outcomes (Course-specific)." +
          "\n  " + syllabus.courseLearningOutcomes +
          "\n## e.2. Student Learning Outcomes (ICS Degree Program)" +
          "   " + sloToString(syllabus.learningOutcomes) +
          "\n## f. Number of credit hours." +
          "\n   " + syllabus.creditHours +
          "\n## g. Prerequisites." +
          "\n   " + syllabus.prerequisites +
          "\n## h. Textbooks, required readings." +
          "\n   " + syllabus.textbooks +
          "\n## i. Grading and Student Evaluation." +
          "\n   " + syllabus.grading +
          "\n## j. Classroom policies" +
          "\n   " + syllabus.policies +
          "\n## k. Weekly schedule of topics and readings, including exam dates." +
          "\n   " + syllabus.schedule;
    });
    return markdownString;
  }

});
