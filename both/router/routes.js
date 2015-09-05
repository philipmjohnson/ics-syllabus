Router.route('/', {
  name: 'home'
});

Router.route('/exportJson', {
  name: 'exportJson',
  controller: 'ExportJsonController'
});

Router.route('/exportMarkdown', {
  name: 'exportMarkdown',
  controller: 'ExportMarkdownController'
});

Router.plugin('ensureSignedIn', {
  only: ['']
});
