AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  },

  'click [data-action=syllabus-zip]' : function () {
    var syllabusZip = new SyllabusZip();
    syllabusZip.generate();
  },

  'click [data-action=json-zip]' : function () {
    var jsonZip = new JsonZip();
    jsonZip.generate();
  }
});

