// catalog descriptions: http://www.catalog.hawaii.edu/courses/departments/ics.htm

// Define all the courses with default values and if the database is empty, then add them.

var defaultSyllabuses = [
  {
    "alphaNumber": "ICS 101",
    "creditHours": 4,
    "prerequisites": "",
    "title": "Tools for the Information Age",
    "instructor": "",
    "textbooks": "",
    "objectives": "",
    "policies": "None.",
    "description": "Fundamental concepts and terms of computer technology, application software for problem solving, computer technology trends and impact on individuals and society. ",
    "grading": "",
    "learningOutcomes": [],
    "schedule": ""
  },
  {
    "alphaNumber": "ICS 110",
    "creditHours": 3,
    "prerequisites": "",
    "title": "Introduction to Computer Programming",
    "instructor": "",
    "textbooks": "",
    "objectives": "",
    "policies": "None.",
    "description": "Basic concepts needed to write computer programs. Simple program design and implementation using a specific programming language; (C) C; (D) through animations; (P) Python. Each alpha repeatable unlimited times, but credit earned one time only. ",
    "grading": "",
    "learningOutcomes": [],
    "schedule": ""
  },
  {
    "alphaNumber": "ICS 111",
    "creditHours": 4,
    "prerequisites": "",
    "title": " Introduction to Computer Science I",
    "instructor": "",
    "textbooks": "",
    "objectives": "",
    "policies": "None.",
    "description": "Overview of computer science, writing programs. Pre: Recommended: computer experience. ",
    "grading": "",
    "learningOutcomes": [],
    "schedule": ""
  }
];

if (Syllabuses.find().count() === 0) {
  _.each(defaultSyllabuses, function(syllabus) {
    console.log("initializing a syllabus", syllabus);
  });
}


