Syllabuses = new Mongo.Collection("syllabuses");

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
    label: "Student learning outcomes",
    autoform: {
      type: "select-checkbox",
      options: function () {
        return [
          {value: 'a', label: 'apply knowledge of computing and mathematics appropriate to the discipline'},
          {value: 'b', label: 'analyze a problem, and identify and define the computing requirements'},
          {
            value: 'c',
            label: 'design, implement, and evaluate a computer-based system, process, component, or program'
          },
          {value: 'd', label: 'function effectively on teams to accomplish a common goal'},
          {
            value: 'e',
            label: 'understand professional, ethical, legal, security and social issues and responsibilities'
          },
          {value: 'f', label: 'communicate effectively with a range of audiences'},
          {
            value: 'g',
            label: 'analyze the local and global impact of computing on individuals, organizations, and society'
          },
          {value: 'h', label: 'recognize the need for and an ability to engage in continuing professional development'},
          {value: 'i', label: 'use current techniques, skills, and tools necessary for computing practice'},
          {
            value: 'j',
            label: 'use and apply current technical concepts and practices in the core information technologies'
          },
          {value: 'k', label: 'identify and analyze user needs'},
          {value: 'l', label: 'effectively integrate IT-based solutions into the user environment'},
          {value: 'm', label: 'understand best practices and standards and their application'},
          {value: 'n', label: 'assist in the creation of an effective project plan'},
        ];
      }
    }
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