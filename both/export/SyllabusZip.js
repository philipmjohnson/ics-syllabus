// Converts Syllabus documents into Markdown format

SyllabusZip = function() {

  var dir = "syllabus";
  var zip = new ZipZap();

  /**
   * Given the letter string corresponding to a student learning outcome, return its description.
   * @param slo The letter, "a", "b", "c", etc.
   * @returns {*} The string description, or undefined if not found.
   */
  var lookupSlo = function (slo) {
    return _.find(ICSLearningOutcomes, function (record) {
      return record.value === slo;
    }).label;
  };

  /**
   * Given an array of SLO strings, return a markdown string of their descriptions.
   * @param sloArray Example: ["a", "b"]
   * @returns {string} The markdown itemized list.
   */
  var sloToString = function (sloArray) {
    var sloString = "";
    _.each(sloArray, function (slo) {
      sloString += "* " + lookupSlo(slo) + "\n";
    });
    return sloString;
  };

  /* The Syllabuses in sorted order. */
  var allSyllabuses = Syllabuses.find({}, {sort: {alphaNumber: 1}}).fetch();

  /** Create the zip file containing separate markdown files for each syllabus and an index.md linking to them. */
  this.generate = function() {
    makeIndex();
    makeSyllabusFiles();
    zip.saveAs("syllabus-markdown.zip");
  };

  /** Create the index.md file with links to all syllabus files. */
  var makeIndex = function () {
    var contents = "---\nlayout: default\ntitle: Syllabuses\ntopdiv: container\n---\n\n# ICS Syllabuses\n";

    _.each(allSyllabuses, function(syllabus) {
      contents += "\n  * [" + syllabus.alphaNumber + ": " + syllabus.title + "](" + syllabus.alphaNumber.replace(/\s+/g, '') + ".html)";
    });
    zip.file(dir + "/index.md", contents);
  };

  /**
   * Return a string containing the text for an individual section of the syllabus.
   * Treats lists differently from non-lists.
   * @param title The section title.
   * @param description The section description, either free text or a list.
   * @returns {*} The string for this section in markdown format.
   */
  var makeSection = function(title, description) {
    if (!description || description.length < 10) {
      return "";
    }
    var sectionSeparator = (s(description).startsWith("*") ? "\n\n" : ": ");
    return "\n\n**" + title + "**" + sectionSeparator + description;
  };

  /**
   * Generate the individual files for each syllabus.
   */
  var makeSyllabusFiles = function () {
    _.each(allSyllabuses, function (syllabus) {
      var markdownString = "---\nlayout: default\ntitle: " + syllabus.alphaNumber + "\ntopdiv: container\n---" +
          "\n\n# " + syllabus.alphaNumber + ": " + syllabus.title;
      markdownString +=
          "\n\n" +
              makeSection("Description", syllabus.description) +
              makeSection("Objectives", syllabus.objectives) +
              makeSection("Course Learning Outcomes", syllabus.courseLearningOutcomes) +
              makeSection("Program Learning Outcomes", sloToString(syllabus.learningOutcomes)) +
              makeSection("Prerequisites", syllabus.prerequisites) +
              makeSection("Textbook(s)", syllabus.textbooks) +
              makeSection("Grading", syllabus.grading) +
              makeSection("Policies", syllabus.policies) +
              makeSection("Schedule", syllabus.schedule);

      zip.file(dir + '/' + syllabus.alphaNumber.replace(/\s+/g, '') + '.md', markdownString);
    });
  };
};




