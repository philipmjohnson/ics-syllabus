// catalog descriptions: http://www.catalog.hawaii.edu/courses/departments/ics.htm

// Define all the courses with default values and if the database is empty, then add them.

var defaultSyllabuses = [
  {
    "alphaNumber": "ICS 101",
    "creditHours": 4,
    "title": "Tools for the Information Age",
    "policies": "None.",
    "description": "Fundamental concepts and terms of computer technology, application software for problem solving, computer technology trends and impact on individuals and society.",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d"
    ]
  },
  {
    "alphaNumber": "ICS 110",
    "creditHours": 3,
    "title": "Introduction to Computer Programming",
    "policies": "None.",
    "description": "Basic concepts needed to write computer programs. Simple program design and implementation using a specific programming language; (C) C; (D) through animations; (P) Python. Each alpha repeatable unlimited times, but credit earned one time only.",
    "learningOutcomes": []
  },
  {
    "alphaNumber": "ICS 111",
    "creditHours": 4,
    "title": "Introduction to Computer Science I",
    "policies": "None.",
    "description": "Overview of computer science, writing programs. Pre: Recommended: computer experience.",
    "learningOutcomes": [
      "a"
    ]
  },
  {alphaNumber: "141"},
  {alphaNumber: "210"},
  {alphaNumber: "211"},
  {alphaNumber: "212"},
  {alphaNumber: "215"},
  {alphaNumber: "241"},
  {alphaNumber: "290"},
  {alphaNumber: "311"}

];



//////////////////////////////////////////////////////////////////////////////////////////////////////

if (Syllabuses.find().count() === 0) {
  _.each(defaultSyllabuses, function(syllabus) {
    console.log("initializing a syllabus", syllabus.alphaNumber);
    Syllabuses.insert(syllabus);
  });
}

var users=[
  {email: "icsinfo@hawaii.edu", username: "ics", name: "ICS", roles:['admin']}
];

if (Meteor.users.find().count() === 0) {
  _.each(users, function (user) {
    Accounts.createUser({
      email: user.email,
      password: "knuth",
      profile: {username: user.username},
      profile: {name: user.name},
      roles: user.roles
    });
  });
}


