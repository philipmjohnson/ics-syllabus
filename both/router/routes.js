Router.route('/', {
  name: 'home'
});

Router.route('/export', {
  name: 'export',
  controller: 'ExportController'
});

Router.plugin('ensureSignedIn', {
  only: ['']
});
