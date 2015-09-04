if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        title: 'ICS Syllabus Manager',
        suffix: ' :ICS Syllabus Manager'
      }
  });
}
