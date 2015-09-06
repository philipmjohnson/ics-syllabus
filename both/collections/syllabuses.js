Syllabuses = new Mongo.Collection("syllabuses");

Syllabuses.allow({
  insert: function (userId, doc) {
    // only allow posting if you are logged in
    return true;
  },
  update: function (userId, doc) {
    // only allow updating if you are logged in
    return true;
  },
  remove: function (userID, doc) {
    //only allow deleting if you are owner
    return true;
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("syllabuses", function () {
    return Syllabuses.find();
  });
}

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("syllabuses");
}

ICSLearningOutcomes = [
  {value: 'a', label: 'a. Students can apply knowledge of computing and mathematics appropriate to the discipline'},

  {
    value: 'b',
    label: 'b. Students can analyze a problem, and identify and define the computing requirements appropriate to its solution'
  },
  {
    value: 'c',
    label: 'c. Students can design, implement, and evaluate a computer-based system, process, component, or program to meet desired needs'
  },
  {value: 'd', label: 'd. Students can function effectively on teams to accomplish a common goal'},
  {
    value: 'e',
    label: 'e. Students have an understanding of professional, ethical, legal, security and social issues and responsibilities'
  },
  {value: 'f', label: 'f. Students can communicate effectively with a range of audiences'},
  {
    value: 'g',
    label: 'g. Students can analyze the local and global impact of computing on individuals, organizations, and society'
  },
  {
    value: 'h',
    label: 'h. Students can recognize the need for and an ability to engage in continuing professional development'
  },
  {value: 'i', label: 'i. Students can use current techniques, skills, and tools necessary for computing practice'},
  {
    value: 'j',
    label: 'j. An ability to use and apply current technical concepts and practices in the core information technologies. [BA IT only]'
  },
  {
    value: 'k',
    label: 'k. An ability to identify and analyze user needs and take them into account in the selection, creation, evaluation and administration of computer-based systems. [BA IT only]'
  },
  {
    value: 'l',
    label: 'l. An ability to effectively integrate IT-based solutions into the user environment. [BA IT only]'
  },
  {value: 'm', label: 'm. An understanding of best practices and standards and their application. [BA IT only]'},
  {value: 'n', label: 'n. An ability to assist in the creation of an effective project plan. [BA IT only]'}
];

Syllabuses.attachSchema(new SimpleSchema({
  alphaNumber: {
    type: String,
    label: "Course",
    optional: true,
    max: 10
  },
  title: {
    type: String,
    optional: true,
    label: "Title"
  },
  instructor: {
    type: String,
    optional: true,
    label: "Instructor"
  },
  description: {
    type: String,
    optional: true,
    label: "Description"
  },
  objectives: {
    type: String,
    optional: true,
    label: "Objectives"
  },
  learningOutcomes: {
    type: [String],
    optional: true,
    label: "Learning outcomes (ICS Degree Program)",
    autoform: {
      type: "select-checkbox",
      options: function () {
        return ICSLearningOutcomes;
      }
    }
  },
  courseLearningOutcomes: {
    type: String,
    optional: true,
    label: "Learning outcomes (Course-specific)"
  },
  creditHours: {
    type: Number,
    optional: true,
    label: "Credit Hrs"
  },
  prerequisites: {
    type: String,
    optional: true,
    label: "Prereqs"
  },
  textbooks: {
    type: String,
    optional: true,
    label: "Textbooks"
  },
  grading: {
    type: String,
    optional: true,
    label: "Grading and student evaluation"
  },
  policies: {
    type: String,
    optional: true,
    label: "Classroom policies"
  },
  schedule: {
    type: String,
    optional: true,
    label: "Weekly schedule of topics, including exams"
  }

}));

//Items.before.insert(function (userId, doc) {
//  doc.createdAt = moment().toDate();
//});