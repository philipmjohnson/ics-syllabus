// catalog descriptions: http://www.catalog.hawaii.edu/courses/departments/ics.htm

// Define all the courses with default values and if the database is empty, then add them.

var defaultSyllabuses = [
  {
    "alphaNumber": "ICS 101",
    "creditHours": 4,
    "title": "Tools for the Information Age",
    "policies": "None.",
    "description": "Fundamental concepts and terms of computer technology, application software for problem solving, computer technology trends and impact on individuals and society.",
    "instructor": "Martha Crosby"
  },
  {
    "alphaNumber": "ICS 110",
    "creditHours": 3,
    "title": "Introduction to Computer Programming",
    "policies": "None.",
    "description": "Basic concepts needed to write computer programs. Simple program design and implementation using a specific programming language; (C) C; (D) through animations; (P) Python. Each alpha repeatable unlimited times, but credit earned one time only.",
    "instructor": "Guylaine Poisson"
  },
  {
    "alphaNumber": "ICS 111",
    "creditHours": 4,
    "title": "Introduction to Computer Science I",
    "policies": "None.",
    "description": "Overview of computer science, writing programs. Pre: Recommended: computer experience.",
    "learningOutcomes": [
      "a"
    ],
    "instructor": "Jason Leigh"
  },
  {
    "alphaNumber": "ICS 141",
    "creditHours": 3,
    "title": "Discrete Mathematics for Computer Science I",
    "instructor": "Kyungim Baek",
    "description": "Logic, sets, functions, matrices, algorithmic concepts, mathematical reasoning, recursion, counting techniques, probability theory. FS"
  },
  {
    "alphaNumber": "ICS 210",
    "title": "Information Systems in Society",
    "description": "Lecture/discussion critically explores sociopolitical dimensions of Information and Communication Technology (ICT), and the information professions. A-F only. Pre: departmental approval. (Once a year)"
  },
  {
    "alphaNumber": "ICS 211",
    "prerequisites": "ICS 111",
    "title": "Introduction to Computer Science II",
    "instructor": "Carleton Moore",
    "description": "(3 Lec, 1 3-hr. Lab) Algorithms and their complexity, introduction to software engineering, data structures, searching and sorting algorithms, numerical errors. Pre: grade of \"B\" or higher in 111 or consent."
  },
  {
    "alphaNumber": "ICS 212",
    "creditHours": 3,
    "title": "Program Structure",
    "description": "Program organization paradigms, programming environments, implementation of a module from specifications, the C and C++ programming languages. Pre: 211 or consent."
  },
  {
    "alphaNumber": "ICS 215",
    "creditHours": 3,
    "title": "Introduction to Scripting",
    "description": "Introduction to scripting languages for the integration of applications and systems. Scripting in operating systems, web pages, server-side application integration, regular expressions, event handling, input validation, selection, repetition, parameter passing, Perl, JavaScript, and PHP. A-F only. Pre: 211 (or concurrent), or consent. (Once a year)"
  },
  {
    "alphaNumber": "ICS 222",
    "creditHours": 3,
    "title": "Introduction to computation",
    "instructor": "Dusko Pavlovic"
  },
  {
    "alphaNumber": "ICS 241",
    "creditHours": 3,
    "title": "Discrete Mathematics for Computer Science II",
    "description": "Program correctness, recurrence relations and their solutions, divide and conquer relations, relations and their properties, graph theory, trees and their applications, Boolean algebra, introduction to formal languages and automata theory. Pre: 141 or consent. FS",
    "instructor": "Kazuo Sugihara"
  },
  {
    "alphaNumber": "ICS 290",
    "creditHours": 1,
    "title": "Computer Science Careers: An Exploration of the Specialties of Computer Science",
    "description": "Exploration of the specialties of computer science. Meets every two week for 2.5 hours to explore specific areas in computer science. CR/NC only. (Once a year)"
  },
  {
    "alphaNumber": "ICS 311",
    "creditHours": 4,
    "title": "Algorithms",
    "description": "(4 1-hr Lec) Design and correctness of algorithms, including divide-and-conquer, greedy and dynamic programming methods. Complexity analyses using recurrence relations, probabilistic methods, and NP-completeness. Applications to order statistics, disjoint sets, B-trees and balanced trees, graphs, network flows, and string matching. Pre: 211 and 241, or consent.",
    "instructor": "Kazuo Sugihara"
  },
  {
    "alphaNumber": "ICS 312",
    "title": "Machine-Level and Systems Programming",
    "instructor": "Henri Casanova",
    "description": "Machine organization, machine instructions, addressing modes, assembler language, subroutine linkage, linking to higher-level languages, interface to operating systems, introduction to assemblers, loaders and compilers. Pre: 212 (or concurrent), or consent."
  },
  {
    "alphaNumber": "ICS 313",
    "title": "Programming Language Theory",
    "instructor": "David Chin",
    "description": "Syntax, semantics, control structures, variable binding and scopes, data and control abstractions. Programming in functional (LISP) and logic (Prolog) programming styles. Pre: 212 and 241, or consent."
  },
  {
    "alphaNumber": "ICS 314",
    "creditHours": 3,
    "title": "Software Engineering I",
    "description": "System specification, modeling and analysis, prototyping, hierarchal design, program design methods, cost estimation, project management, computer-aided software design. Team-oriented software-design project. Pre: 211 or consent.",
    "instructor": "Philip Johnson\njohnson@hawaii.edu, POST 307"
  },
  {
    "alphaNumber": "ICS 315",
    "creditHours": 3,
    "title": "Web Design and Management"
  },
  {
    "alphaNumber": "ICS 321",
    "title": "Data Storage and Retrieval",
    "instructor": "Lipyeow Lim\nlipyeow@hawaii.edu",
    "description": "Data storage devices, timing and capacity, programming for files, hashed and indexed files, introduction to relational database systems. Pre: 211 or consent."
  },
  {
    "alphaNumber": "ICS 331",
    "creditHours": 4,
    "title": "Logic Design and Microprocessors",
    "instructor": "Peter-Michael Seidel",
    "description": "Basic machine architecture, microprocessors, bus organization, circuit elements, logic circuit analysis and design, microcomputer system design. Pre: 212 and 241, or consent."
  },
  {
    "alphaNumber": "ICS 332",
    "creditHours": 3,
    "title": "Operating Systems",
    "instructor": "Ravi Narayan",
    "description": "Operating system concepts and structure, processes and threads, CPU scheduling, memory management, scheduling, file systems, inter-process communication, virtualization, popular operating systems. A-F only."
  },
  {
    "alphaNumber": "ICS 351",
    "creditHours": 3,
    "title": "Network Design and Management",
    "instructor": "Edo Biagioni\nesb@hawaii.edu",
    "description": "Overview of the internet and its capabilities; introduction to HTTP, TCP/IP, ethernet, and wireless 802.11; routers, switches, and NAT; network and wireless security; practical experience in designing and implementing networks."
  },
  {
    "alphaNumber": "ICS 355",
    "creditHours": 3,
    "title": "Security and Trust I: Resource Protections",
    "instructor": "Dusko Pavlovic",
    "description": "Security and trust in computers, networks, and society. Security models. Access and authorization. Availability and Denial-of-Service. Trust processes and network interactions."
  },
  {
    "alphaNumber": "ICS 361",
    "creditHours": 3,
    "title": "Introduction to Artificial Intelligence Programming",
    "instructor": "David Chin\nchin@hawaii.edu",
    "description": "Introduction to the theory of Artificial Intelligence and the practical application of AI techniques in Functional (Common LISP and/or Scheme) and Logic (Prolog) programming languages. Students gain practical experience through programming assignments and projects. A-F only."
  },
  {
    "alphaNumber": "ICS 390",
    "creditHours": 3,
    "title": "Computing Ethics for Lab Assistants",
    "instructor": "Martha Crosby\ncrosby@hawaii.edu",
    "description": "A lecture/discussion/internship on ethical issues and instructional techniques for students assisting a laboratory section of ICS 101. The class uses multiple significant writing and oral presentation activities to help students learn course content."
  },
  {
    "alphaNumber": "ICS 414",
    "creditHours": 3,
    "title": "Software Engineering II",
    "instructor": "Philip Johnson\njohnson@hawaii.edu",
    "description": "Continuation of 314. Project management, quality, and productivity control, testing and validation, team management. Team-oriented software-implementation project."
  },
  {
    "alphaNumber": "ICS 415",
    "creditHours": 3,
    "title": "Introduction to Programming for the Web",
    "instructor": "Carleton Moore\ncmoore@hawaii.edu",
    "description": "Introduction to emerging technologies for construction of World Wide Web (WWW)-based software. Covers programming and scripting languages used for the creation of WWW sites and client-server programming. Students will complete a medium-sized software project that uses languages and concepts discussed in class."
  },
  {
    "alphaNumber": "ICS 419",
    "creditHours": 3,
    "title": "The Science, Psychology and Philosophy of Systems Design",
    "description": "Scientific, psychological and philosophical bases of systems design, including a survey of human-factors and ergonomic standards; the nature of innovation and creativity as it relates to systems design. Web-enhanced course.",
    "instructor": "Dennis Streveler\nstrev@hawaii.edu"
  },
  {
    "alphaNumber": "ICS 421",
    "creditHours": 3,
    "title": "Database Systems",
    "instructor": "Lipyeow Lim\nlipyeow@hawaii.edu",
    "description": "Principles of database systems, data modeling, relational models, database design, query languages, query optimization, concurrency control data security."
  },
  {
    "alphaNumber": "ICS 422",
    "creditHours": 3,
    "title": "Data Processing",
    "instructor": "Lipyeow Lim\nlipyeow@hawaii.edu",
    "description": "Role of data processing in organizations, programming practices, ethics, sequential and indexed file processing, report writing, online transaction processing"
  },
  {
    "alphaNumber": "ICS 423",
    "creditHours": 3,
    "title": "Computer Security",
    "instructor": "Barbara Endicott-Popovsky\nendicott@uw.edu",
    "description": "Legal, ethical and technology issues in computer access, confidentiality, authentication, privacy and intellectual property."
  },
  {
    "alphaNumber": "ICS 424",
    "creditHours": 3,
    "title": "Application Frameworks",
    "description": "Experience producing applications with at least two different applications frameworks."
  },
  {
    "alphaNumber": "ICS 425",
    "title": "Computer Security and Ethics",
    "instructor": "Barbara Endicott-Popovsky\nendicott@uw.edu",
    "description": "Theoretical results, security policy, encryption, key management, digital signatures, certificates, passwords. Ethics: privacy, computer crime, professional ethics. Effects of the computer revolution on society."
  },
  {
    "alphaNumber": "ICS 426",
    "creditHours": 3,
    "title": "Computer System Security",
    "instructor": "Barbara Endicott-Popovsky\nendicott@uw.edu",
    "description": "Information flow, confinement, information assurance, malicious programs, vulnerability analysis, network security, writing secure programs."
  },
  {
    "alphaNumber": "ICS 431",
    "creditHours": 3,
    "prerequisites": "331 or EE 361/361L.",
    "title": "Computer Architecture",
    "instructor": "Peter-Michael Seidel",
    "description": "Memory management, control flow, interrupt mechanisms, multiprocessor systems, special-purpose devices."
  },
  {
    "alphaNumber": "ICS 432",
    "creditHours": 3,
    "title": "Concurrent and High-Performance Programming",
    "instructor": "Henri Casanova\nhenric@hawaii.edu",
    "description": "Principles of concurrent and high performance programming. Multi-threading in C and Java for shared-memory programming. Distributed memory programming with Java. Introduction to cluster computing. A-F only."
  },
  {
    "alphaNumber": "ICS 435",
    "creditHours": 3,
    "title": "Machine Learning Fundamentals",
    "instructor": "Susanne Still\nsstill@hawaii.edu",
    "description": "Introduction to machine learning concepts with a focus on relevant ideas from computational neuroscience. Information processing and learning in the nervous system. Neural networks. Supervised and unsupervised learning. Basics of statistical learning theory."
  },
  {
    "alphaNumber": "ICS 441"
  },
  {
    "alphaNumber": "ICS 442"
  },
  {
    "alphaNumber": "ICS 443"
  },
  {
    "alphaNumber": "ICS 451"
  },
  {
    "alphaNumber": "ICS 452"
  },
  {
    "alphaNumber": "ICS 455"
  },
  {
    "alphaNumber": "ICS 461"
  },
  {
    "alphaNumber": "ICS 462"
  },
  {
    "alphaNumber": "ICS 464"
  },
  {
    "alphaNumber": "ICS 465"
  },
  {
    "alphaNumber": "ICS 466"
  },
  {
    "alphaNumber": "ICS 471"
  },
  {
    "alphaNumber": "ICS 475"
  },
  {
    "alphaNumber": "ICS 476"
  },
  {
    "alphaNumber": "ICS 481"
  },
  {
    "alphaNumber": "ICS 483"
  },
  {
    "alphaNumber": "ICS 484"
  },
  {
    "alphaNumber": "ICS 485"
  }
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


