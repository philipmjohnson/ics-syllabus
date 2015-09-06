// catalog descriptions: http://www.catalog.hawaii.edu/courses/departments/ics.htm

// Define all the courses with default values and if the database is empty, then add them.

var defaultSyllabuses = [
  {
    "alphaNumber": "ICS 101",
    "creditHours": 4,
    "title": "Tools for the Information Age",
    "policies": "None.",
    "description": "Fundamental 33 concepts and terms of computer technology, application software for problem solving, computer technology trends and impact on individuals and society.",
    "instructor": "Martha Crosby",
    "learningOutcomes": [
      "a",
      "b"
    ]
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
    "policies": "Students are expected to participate in lectures, and laboratory sessions.",
    "description": "An overview of the fundamentals of computer science emphasizing problem solving, algorithm development, implementation, and debugging/testing using an object­-oriented programming language.",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "k"
    ],
    "instructor": "Jason Leigh",
    "textbooks": "Course notes.",
    "objectives": "* Learn how to translate problems to algorithms to code.\n* Learn basics of programming with a modern programming language, such as Java, Python, etc.\n* Apply principles to development of running program codes that involve the use of computer graphics, interaction and sound.\n* Provide projects that require the development of codes relevant to modern use of computers- ability to parse data, store data, construct finite state automata, develop capability to control graphics, sound and interactivity.",
    "grading": "Competency Quizzes: (45% of grade)\nFinal: (10% of grade)\nAssignments: (50% of grade)",
    "schedule": "Each week a demonstrational problem is used to teach relevant computer science concepts, and to give students multiple instances in the use of programming language constructs.\n\nDemonstrational problem is translated into an algorithm and then program code. This code is then modified/enhanced in the lab sessions which are held twice a week to give students hands-on experience with watching how the behavior of the program changes when modified to encourage exploration.\n\nQuizzes are held once a week during lab sections. Students review quiz answers immediately after quiz is completed.\n\n* Week 1: Java compiler, flow of program\n* Week 2: Variables, conditionals, loops\n* Week 3: Variables and operators, conditionals, loops\n* Week 4,5: Classes\n* Week 6,7,8: Classes, loops, conditionals, arrays\n* Week 9, 10, 11: Classes, file I/O, loops, conditionals\n* Week 12, 13, 14, 15: Recursion, 2D arrays, \n* Week 16: Inheritance\n* Week 17: FInal exam"
  },
  {
    "alphaNumber": "ICS 315",
    "creditHours": 3,
    "title": "Web Design and Management",
    "instructor": "Jan Stelovsky\njanst@hawaii.edu",
    "prerequisites": "215 or consent."
  },
  {
    "alphaNumber": "ICS 461",
    "creditHours": 3,
    "prerequisites": "311 or consent.",
    "title": "Artificial Intelligence",
    "instructor": "Kim Binsted\nbinsted@hawaii.edu",
    "description": "Survey of artificial intelligence: natural language processing, vision and robotics, expert systems. Emphasis on fundamental concepts: search, planning, and problem solving, logic, knowledge representation."
  },
  {
    "alphaNumber": "ICS 462",
    "creditHours": 3,
    "prerequisites": "212 and (314 or 361) and (PHYS 151 or PHYS 170)",
    "title": "Artificial Intelligence for Games",
    "instructor": "David Chin\nchin@hawaii.edu",
    "description": "Techniques to stimulate intelligence in video games: movement, pathfinding with A* search, decision/behavior trees, state machines, machine learning, tactics. Extend games with your own AI implementations; experience \"shootout\" contests for the best AI algorithm/implementation."
  },
  {
    "alphaNumber": "ICS 464",
    "creditHours": 3,
    "prerequisites": "two ICS 300-level courses or consent.",
    "title": "Human Computer Interaction I",
    "instructor": "Dan Suthers\nsuthers@hawaii.edu",
    "description": "Application of concepts and methodologies of human factors, psychology and software engineering to address ergonomic, cognitive, and social factors in the design and evaluation of human-computer systems."
  },
  {
    "alphaNumber": "ICS 465",
    "creditHours": 3,
    "prerequisites": "311",
    "title": "Introduction to Hypermedia",
    "instructor": "Jan Stelovsky\njanst@hawaii.edu",
    "description": "Basic issues of interactive access to information in various formats on computers. Available hardware and software: editing, integration, programming. Implementation of a sample information system."
  },
  {
    "alphaNumber": "ICS 466",
    "creditHours": 3,
    "prerequisites": "314 or consent.",
    "title": "Design for Mobile Devices",
    "instructor": "Kim Binsted\nbinsted@hawaii.edu",
    "description": "Lecture introducing design issues, programming languages, operating systems and mark-up languages for internet-enabled mobile devices, such as cell phones and PDAs."
  },
  {
    "alphaNumber": "ICS 471",
    "creditHours": 3,
    "prerequisites": "241 and 311, or consent.",
    "title": "Probability, Statistics, and Queuing",
    "instructor": "Lipyeow Lim\nlipyeow@hawaii.edu",
    "description": "A hands-on introduction to probability, statistical inference, regression, Markov chains, queuing theory. Use of an interactive statistical graphics environment such as R."
  },
  {
    "alphaNumber": "ICS 475",
    "creditHours": 3,
    "prerequisites": "one ICS 300-level course or consent.",
    "title": "Introduction to Bioinformatics Sequences and Genomes Analysis",
    "instructor": "Guylaine Poisson\nguylaine@hawaii.edu",
    "description": "Introduction to bioinformatics to computer sciences students by focusing on how computer sciences techniques can be used for the storage, analysis, prediction and simulation of biological sequences (DNA, RNA and proteins)."
  },
  {
    "alphaNumber": "ICS 476",
    "creditHours": 3,
    "prerequisites": "475 or consent.",
    "title": "Bioinformatics Algorithms and Tool Development",
    "instructor": "Guylaine Poisson\nguylaine@hawaii.edu",
    "description": "Study of commonly used bioinformatic algorithms, with an emphasis on string, tree, and graph algorithms. Presentation of probabilistic and clustering methods. Implementation of the studied algorithms and design of applications."
  },
  {
    "alphaNumber": "ICS 481",
    "creditHours": 3,
    "prerequisites": "311 and either MATH 216, MATH 242, or MATH 252A; or consent.",
    "title": "Introduction to Computer Graphics",
    "instructor": "Stephen Itoga\nitoga@hawaii.edu",
    "description": "Fundamentals of computer graphics including graphics hardware, representation, manipulation, and display of two- and three-dimensional objects, use of commercial software."
  },
  {
    "alphaNumber": "ICS 483",
    "creditHours": 3,
    "prerequisites": "212 and 311, or consent.",
    "title": "Computer Vision",
    "instructor": "Kyungim Baek\nkyungim@hawaii.edu",
    "description": "Introductory course in computer vision. Topics include image formation, image processing and filtering, edge detection, texture analysis and synthesis, binocular stereo, segmentation, tracking, object recognition and applications."
  },
  {
    "alphaNumber": "ICS 424",
    "creditHours": 3,
    "title": "Application Frameworks",
    "description": "Experience producing applications with at least two different applications frameworks.",
    "prerequisites": "212, 311, and 313; or consent."
  },
  {
    "alphaNumber": "ICS 484",
    "creditHours": 3,
    "prerequisites": "two ICS 300-level courses.",
    "title": "Data Visualization",
    "instructor": "Jason Leigh\nleighj@hawaii.edu",
    "description": "Introduction to data visualization through practical techniques for turning data into images to produce insight. Topics include: information visualization, geospatial visualization, scientific visualization, social network visualization, and medical visualization."
  },
  {
    "alphaNumber": "ICS 485",
    "creditHours": 3,
    "prerequisites": "two ICS 300-level courses.",
    "title": "Video Game Design and Development",
    "instructor": "Jason Leigh\nleighj@hawaii.edu",
    "description": "Students will team design, build, and demonstrate video games or related interactive entertainment environments and applications. Topics will include emerging computer science techniques relevant to the development of these types of environments."
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
    "instructor": "Kazuo Sugihara",
    "prerequisites": "141 or consent."
  },
  {
    "alphaNumber": "ICS 141",
    "creditHours": 3,
    "title": "Discrete Mathematics for Computer Science I",
    "instructor": "Kyungim Baek",
    "description": "Logic, sets, functions, matrices, algorithmic concepts, mathematical reasoning, recursion, counting techniques, probability theory. FS",
    "objectives": "This course covers mathematical topics such as logic, set theory, algorithms, mathematical reasoning, counting, combinatorics, and probability theory. A strong understanding of these topics is essential for problem solving, computer programming, data structures, algorithms, language translation, networking, computer architecture, operating systems, database, and software engineering.",
    "learningOutcomes": [
      "a",
      "b",
      "c"
    ]
  },
  {
    "alphaNumber": "ICS 210",
    "title": "Information Systems in Society",
    "description": "Lecture/discussion critically explores sociopolitical dimensions of Information and Communication Technology (ICT), and the information professions. A-F only. Pre: departmental approval. (Once a year)"
  },
  {
    "alphaNumber": "ICS 211",
    "prerequisites": "grade of \"B\" or higher in 111 or consent.",
    "title": "Introduction to Computer Science II",
    "instructor": "Carleton Moore",
    "description": "(3 Lec, 1 3-hr. Lab) Algorithms and their complexity, introduction to software engineering, data structures, searching and sorting algorithms, numerical errors. Pre: grade of \"B\" or higher in 111 or consent."
  },
  {
    "alphaNumber": "ICS 212",
    "creditHours": 3,
    "title": "Program Structure",
    "description": "Program organization paradigms, programming environments, implementation of a module from specifications, the C and C++ programming languages. Pre: 211 or consent.",
    "instructor": "Ravi Narayan\nrnarayan@hawaii.edu",
    "prerequisites": "211 or consent."
  },
  {
    "alphaNumber": "ICS 215",
    "creditHours": 3,
    "title": "Introduction to Scripting",
    "description": "Introduction to scripting languages for the integration of applications and systems. Scripting in operating systems, web pages, server-side application integration, regular expressions, event handling, input validation, selection, repetition, parameter passing, Perl, JavaScript, and PHP. A-F only. Pre: 211 (or concurrent), or consent. (Once a year)",
    "instructor": "Carleton Moore\ncmoore@hawaii.edu",
    "prerequisites": "211 (or concurrent), or consent."
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
    "instructor": "Kazuo Sugihara",
    "prerequisites": "211 and 241, or consent."
  },
  {
    "alphaNumber": "ICS 312",
    "title": "Machine-Level and Systems Programming",
    "instructor": "Henri Casanova",
    "description": "Machine organization, machine instructions, addressing modes, assembler language, subroutine linkage, linking to higher-level languages, interface to operating systems, introduction to assemblers, loaders and compilers. Pre: 212 (or concurrent), or consent.",
    "prerequisites": "212 (or concurrent), or consent."
  },
  {
    "alphaNumber": "ICS 313",
    "title": "Programming Language Theory",
    "instructor": "David Chin",
    "description": "Syntax, semantics, control structures, variable binding and scopes, data and control abstractions. Programming in functional (LISP) and logic (Prolog) programming styles. Pre: 212 and 241, or consent.",
    "prerequisites": "212 and 241, or consent."
  },
  {
    "alphaNumber": "ICS 314",
    "creditHours": 3,
    "title": "Software Engineering I",
    "description": "System specification, modeling and analysis, prototyping, hierarchal design, program design methods, cost estimation, project management, computer-aided software design. Team-oriented software-design project. Pre: 211 or consent.",
    "instructor": "Philip Johnson\njohnson@hawaii.edu, POST 307",
    "prerequisites": "211 or consent."
  },
  {
    "alphaNumber": "ICS 321",
    "title": "Data Storage and Retrieval",
    "instructor": "Lipyeow Lim\nlipyeow@hawaii.edu",
    "description": "Data storage devices, timing and capacity, programming for files, hashed and indexed files, introduction to relational database systems. Pre: 211 or consent.",
    "prerequisites": "211 or consent."
  },
  {
    "alphaNumber": "ICS 331",
    "creditHours": 4,
    "title": "Logic Design and Microprocessors",
    "instructor": "Peter-Michael Seidel",
    "description": "Basic machine architecture, microprocessors, bus organization, circuit elements, logic circuit analysis and design, microcomputer system design. Pre: 212 and 241, or consent.",
    "prerequisites": "212 and 241, or consent."
  },
  {
    "alphaNumber": "ICS 332",
    "creditHours": 3,
    "title": "Operating Systems",
    "instructor": "Ravi Narayan",
    "description": "Operating system concepts and structure, processes and threads, CPU scheduling, memory management, scheduling, file systems, inter-process communication, virtualization, popular operating systems. A-F only.",
    "prerequisites": "211"
  },
  {
    "alphaNumber": "ICS 351",
    "creditHours": 3,
    "title": "Network Design and Management",
    "instructor": "Edo Biagioni\nesb@hawaii.edu",
    "description": "Overview of the internet and its capabilities; introduction to HTTP, TCP/IP, ethernet, and wireless 802.11; routers, switches, and NAT; network and wireless security; practical experience in designing and implementing networks.",
    "prerequisites": "141 and 211, or consent."
  },
  {
    "alphaNumber": "ICS 355",
    "creditHours": 3,
    "title": "Security and Trust I: Resource Protections",
    "instructor": "Dusko Pavlovic",
    "description": "Security and trust in computers, networks, and society. Security models. Access and authorization. Availability and Denial-of-Service. Trust processes and network interactions.",
    "prerequisites": "241 or (MATH 301 and 371)."
  },
  {
    "alphaNumber": "ICS 361",
    "creditHours": 3,
    "title": "Introduction to Artificial Intelligence Programming",
    "instructor": "David Chin\nchin@hawaii.edu",
    "description": "Introduction to the theory of Artificial Intelligence and the practical application of AI techniques in Functional (Common LISP and/or Scheme) and Logic (Prolog) programming languages. Students gain practical experience through programming assignments and projects. A-F only.",
    "prerequisites": "241 and (212 or 215), or consent."
  },
  {
    "alphaNumber": "ICS 390",
    "creditHours": 3,
    "title": "Computing Ethics for Lab Assistants",
    "instructor": "Martha Crosby\ncrosby@hawaii.edu",
    "description": "A lecture/discussion/internship on ethical issues and instructional techniques for students assisting a laboratory section of ICS 101. The class uses multiple significant writing and oral presentation activities to help students learn course content.",
    "prerequisites": "101 (Alpha) and consent."
  },
  {
    "alphaNumber": "ICS 414",
    "creditHours": 3,
    "title": "Software Engineering II",
    "instructor": "Philip Johnson\njohnson@hawaii.edu",
    "description": "Continuation of 314. Project management, quality, and productivity control, testing and validation, team management. Team-oriented software-implementation project.",
    "prerequisites": "314"
  },
  {
    "alphaNumber": "ICS 415",
    "creditHours": 3,
    "title": "Introduction to Programming for the Web",
    "instructor": "Carleton Moore\ncmoore@hawaii.edu",
    "description": "Introduction to emerging technologies for construction of World Wide Web (WWW)-based software. Covers programming and scripting languages used for the creation of WWW sites and client-server programming. Students will complete a medium-sized software project that uses languages and concepts discussed in class.",
    "prerequisites": "311 or consent"
  },
  {
    "alphaNumber": "ICS 419",
    "creditHours": 3,
    "title": "The Science, Psychology and Philosophy of Systems Design",
    "description": "Scientific, psychological and philosophical bases of systems design, including a survey of human-factors and ergonomic standards; the nature of innovation and creativity as it relates to systems design. Web-enhanced course.",
    "instructor": "Dennis Streveler\nstrev@hawaii.edu",
    "prerequisites": "two ICS 300-level courses with grade of B or better, or consent."
  },
  {
    "alphaNumber": "ICS 421",
    "creditHours": 3,
    "title": "Database Systems",
    "instructor": "Lipyeow Lim\nlipyeow@hawaii.edu",
    "description": "Principles of database systems, data modeling, relational models, database design, query languages, query optimization, concurrency control data security.",
    "prerequisites": "311 and 321, or consent."
  },
  {
    "alphaNumber": "ICS 422",
    "creditHours": 3,
    "title": "Data Processing",
    "instructor": "Lipyeow Lim\nlipyeow@hawaii.edu",
    "description": "Role of data processing in organizations, programming practices, ethics, sequential and indexed file processing, report writing, online transaction processing",
    "prerequisites": "321 or consent."
  },
  {
    "alphaNumber": "ICS 423",
    "creditHours": 3,
    "title": "Computer Security",
    "instructor": "Barbara Endicott-Popovsky\nendicott@uw.edu",
    "description": "Legal, ethical and technology issues in computer access, confidentiality, authentication, privacy and intellectual property.",
    "prerequisites": "both 311 and 312, or consent."
  },
  {
    "alphaNumber": "ICS 425",
    "title": "Computer Security and Ethics",
    "instructor": "Barbara Endicott-Popovsky\nendicott@uw.edu",
    "description": "Theoretical results, security policy, encryption, key management, digital signatures, certificates, passwords. Ethics: privacy, computer crime, professional ethics. Effects of the computer revolution on society.",
    "prerequisites": "at least two ICS 300-level courses or consent."
  },
  {
    "alphaNumber": "ICS 426",
    "creditHours": 3,
    "title": "Computer System Security",
    "instructor": "Barbara Endicott-Popovsky\nendicott@uw.edu",
    "description": "Information flow, confinement, information assurance, malicious programs, vulnerability analysis, network security, writing secure programs.",
    "prerequisites": "351 or 451, or consent."
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
    "description": "Principles of concurrent and high performance programming. Multi-threading in C and Java for shared-memory programming. Distributed memory programming with Java. Introduction to cluster computing. A-F only.",
    "prerequisites": "212 or consent."
  },
  {
    "alphaNumber": "ICS 435",
    "creditHours": 3,
    "title": "Machine Learning Fundamentals",
    "instructor": "Susanne Still\nsstill@hawaii.edu",
    "description": "Introduction to machine learning concepts with a focus on relevant ideas from computational neuroscience. Information processing and learning in the nervous system. Neural networks. Supervised and unsupervised learning. Basics of statistical learning theory.",
    "prerequisites": "311 or consent. Recommended: MATH 307."
  },
  {
    "alphaNumber": "ICS 441",
    "creditHours": 3,
    "prerequisites": "311 or consent",
    "title": "Theory of Computation",
    "instructor": "Kazuo Sugihara\nsugihara@hawaii.edu",
    "description": "Grammars, sequential machines, equivalence, minimalization, analysis and synthesis, regular expressions, computability, unsolvability, Gödel's theorem, Turing machines."
  },
  {
    "alphaNumber": "ICS 442",
    "creditHours": 3,
    "prerequisites": "311 or consent",
    "title": "Analytical Models and Methods",
    "description": "Applications of mathematical methods in computer science with emphasis on discrete mathematics, numerical computation, algebraic models, operations research."
  },
  {
    "alphaNumber": "ICS 443",
    "creditHours": 3,
    "prerequisites": "311",
    "title": "Parallel Algorithms",
    "instructor": "Nodari Sitchinava",
    "description": "Introduction to parallel models of computation and design and analysis of parallel algorithms."
  },
  {
    "alphaNumber": "ICS 451",
    "creditHours": 3,
    "prerequisites": "212 and 311, or consent",
    "title": "Data Networks",
    "instructor": "Edo Biagioni\nesb@hawaii.edu",
    "description": "Network analysis, architecture, digital signal analysis and design; circuit switching, packet switching, packet broadcasting; protocols and standards; local area networks; satellite networks; ALOHA channels; examples."
  },
  {
    "alphaNumber": "ICS 452",
    "creditHours": 3,
    "prerequisites": "Two ICS 300-level courses or consent. Recommended: 312 and 313.",
    "title": "Software Design for Robotics",
    "description": "Sensors, actuators, signal processing, paradigms of robotic software design, introduction to machine learning, introduction to computer vision, and robot-to-human interaction."
  },
  {
    "alphaNumber": "ICS 455",
    "creditHours": 3,
    "prerequisites": "355",
    "title": "Security and Trust II: Information Assurance",
    "instructor": "Dusko Pavlovic\ndusko@hawaii.edu",
    "description": "Channel security. Trojan and noninterference. Basic concepts of cryptology. Cryptographic primitives. Protocols for authentication and key establishment."
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


