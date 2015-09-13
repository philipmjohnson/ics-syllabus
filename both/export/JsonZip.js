// Download database as JSON

JsonZip = function () {

  var zip = new ZipZap();
  var dir = "syllabus-json";

  /**
   * @return Returns a string containing the JSON representation of Syllabus data. No _id so suitable for rebuilding the db.
   */
  var getJson = function () {
    // Can't figure out how to exclude to _id field. It should be trivial. The following doesn't work:
    // http://docs.meteor.com/#/full/fieldspecifiers
    //return JSON.stringify(Syllabuses.find({}, {fields: {_id: 0}}).fetch(), null, 2);

    // So here's a manual way to get rid of the _id field.
    var allSyllabuses = Syllabuses.find().fetch();
    var filtered = _.map(allSyllabuses, function (syllabus) {
      return _.omit(syllabus, "_id");
    });
    return JSON.stringify(filtered, null, 2);
  };

  /**
   * Create and download the zip file from the browser.
   */
  this.generate = function () {
    zip.file('syllabus-json/syllabus.json', getJson());
    zip.saveAs(dir + ".zip");
  };

}

