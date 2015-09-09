ExportMarkdownController = AppController.extend({
  waitOn: function() {
    //return this.subscribe('items');
  },
  data: {
    items: Syllabuses.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Export Markdown');
  }
});

ExportJsonController.events({
  'click [data-action=doSomething]': function (event) {
    event.preventDefault();
  }
});