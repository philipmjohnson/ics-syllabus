// catalog descriptions: http://www.catalog.hawaii.edu/courses/departments/ics.htm

// Define all the courses with default values and if the database is empty, then add them.

var defaultSyllabuses = [
  {
    "alphaNumber": "ICS 101",
    "creditHours": 4,
    "title": "Tools for the Information Age",
    "policies": "None.",
    "description": "Fundamental concepts and terms of computer technology, application software for problem solving, computer technology trends and impact on individuals and society.",
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
    "schedule": "Each week a demonstrational problem is used to teach relevant computer science concepts, and to give students multiple instances in the use of programming language constructs.\n\nDemonstrational problem is translated into an algorithm and then program code. This code is then modified/enhanced in the lab sessions which are held twice a week to give students hands-on experience with watching how the behavior of the program changes when modified to encourage exploration.\n\nQuizzes are held once a week during lab sections. Students review quiz answers immediately after quiz is completed.\n\n* Week 1: Java compiler, flow of program\n* Week 2: Variables, conditionals, loops\n* Week 3: Variables and operators, conditionals, loops\n* Week 4,5: Classes\n* Week 6,7,8: Classes, loops, conditionals, arrays\n* Week 9, 10, 11: Classes, file I/O, loops, conditionals\n* Week 12, 13, 14, 15: Recursion, 2D arrays, \n* Week 16: Inheritance\n* Week 17: FInal exam",
    "courseLearningOutcomes": "* Be able to deconstruct problems to develop algorithms and eventually program code.\n* Be able to develop simple data structures in object oriented form.\n* Be able to develop running software that involves the reading of data, storage of data, and depiction of data using graphics, sound and interactivity."
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
    "instructor": "Kazuo Sugihara\nPOST 314H \nsugihara@hawaii.edu",
    "prerequisites": "141 or consent.",
    "textbooks": "Kenneth H. Rosen, Discrete Mathematics and Its Applications, 7th Edition, McGraw-Hill, 2012.",
    "objectives": "* To introduce a variety of topics in discrete mathematics\n* To develop ability of modeling, reasoning, proving, analysis, and algorithmic problem solving\n* To present examples of applications of discrete mathematics to computer science\n\n* To have students learn mathematical writing as the basis of technical writing",
    "grading": "10% in-class exercises\n90% midterms and final.",
    "learningOutcomes": [
      "a",
      "b"
    ],
    "courseLearningOutcomes": "* Students can describe an idea in the language of mathematics clearly and rigorously.\n* Students can prove or disprove a given assertion by using proving techniques such as direct proof, indirect proof (proof by contradiction), proof by contrapositive, proof by induction, and proof by construction.\n* Students can solve problems on a variety of topics in discrete mathematics such as recurrence systems, relations, counting, graph theory, Boolean algebra, logic circuit design, formal language theory, automata theory, and theory of computation.\n* Students can read & write pseudocode of an algorithm in a given grammar expressed in BNF.\n* Students can describe a trace of given pseudocode's execution for a given input.",
    "schedule": "Week 1: Boolean Algebra\nWeek 2: Logic Circuits\nWeek 3: Linear Algebra\nWeek 4: Relations\nWeek 5: Graphs, Midterm\nWeek 6: Graphs\nWeek 7: Graphs\nWeek 8: Trees\nWeek 9: Trees\nWeek 10: Recurrences\nWeek 11: Counting\nWeek 12: Formal Languages\nWeek 13: Regular expressions, Midterm\nWeek 14: Turing machines\nWeek 15: Predicate logic\nWeek 16: Review\nWeek 17: Final Exam"
  },
  {
    "alphaNumber": "ICS 141",
    "creditHours": 3,
    "title": "Discrete Mathematics for Computer Science I",
    "instructor": "Kyungim Baek\nOffice: POST 314F\nEmail: kyungim@hawaii.edu\nTel: (808) 956 8560",
    "description": "Logic, sets, functions, matrices, algorithmic concepts, mathematical reasoning, recursion, counting techniques, probability theory. FS",
    "objectives": "This course covers mathematical topics such as logic, set theory, algorithms, mathematical reasoning, counting, combinatorics, and probability theory. A strong understanding of these topics is essential for problem solving, computer programming, data structures, algorithms, language translation, networking, computer architecture, operating systems, database, and software engineering.",
    "learningOutcomes": [
      "a",
      "b",
      "c"
    ],
    "textbooks": "K. H. Rosen, Discrete Mathematics and Its Applications, 7th Edition, McGraw Hill",
    "policies": "No makeup exams will be given unless the instructor is provided with official documented proof of an emergency that prevented you from attending the exam. In the case of an emergency, the instructor must be contacted within 48 hours after the absence.\nHomework assignment is due at the beginning of class on the assigned due date. If you hand in late work without approval of the instructor you may receive zero credit. Late submission may be accepted on a case by case basis for up to 24 hours after the due with 40% penalty for lateness without exception.\nCooperation on Assignments\nCheating and plagiarism as defined in the University Catalog will result with an F for the class and the incident will be reported to the ICS Department Chair for further action. This policy will be applied to those who copy other’s work and who allow their work to be copied.\nYou are allowed to discuss strategies for solving homework assignments with other students, however collaboration on solutions/codes, sharing or copying of solutions/codes is not allowed. This policy will be strictly enforced.\nYou may consult public literature (books, articles, etc.) for information, but you must cite each source of ideas you adopt.\nElectronic video and/or audio recording is not permitted during this class.",
    "grading": "Homework assignments: 20% \nMidterm exam I, II: 45% (22.5% for each)\nFinal exam: 25%\nRecitation attendance: 10%",
    "courseLearningOutcomes": "* Understand foundations of mathematics and symbolic techniques in the context of problem solving.\n* Apply formal methods of symbolic propositional and predicate logic.\n* Learn about the algebra of sets, functions, sequences, and summations.\n* Understand the formal metrics for measuring the growth of functions (big-O, Ω, and Ө) and apply these metrics to analyzing the complexity of algorithms (both iterative and recursive algorithms).\n* Learn how numbers are represented in binary and other bases, and as a product of primes.\n* Understand mathematical reasoning by understanding and exercising several proof techniques, such as direct proofs, proof by counterexample, proof by contraposition, proof by contradiction, mathematical induction, and strong induction.\n* Demonstrate basic counting principles, compute permutations and combinations, and interpret the meaning in the context of the particular application.\n* Understand discrete probability concepts – calculate probabilities of events and expectations of random variables, differentiate between dependent and independent events, understand and apply Bayes theorem to dependent events.",
    "schedule": "* Week 1: Introduction, Propositional Logic\n* Week 2: Propositional Equivalences, Predicates and Quantifiers\n* Week 3: Nested Quantifiers, Rules of Inference\n* Week 4: Proofs, Sets \n* Week 5: Set Operators, Functions\n* Week 6: Exam I, Functions\n* Week 7: Sequences and Summations, Matrices\n* Week 8: Algorithms, Growth of Functions\n* Week 9: Complexity of Algorithms \n* Week 10: Divisibility, Integers and Algorithms, Primes and GCD\n* Week 11: Mathematical Induction, Exam II\n* Week 12: Recursive Definitions\n* Week 13: Recursive Algorithms, Basics of Counting\n* Week 14: Permutations and Combinations\n* Week 15: Discrete Probability, Bayes’ Theorem,\n* Week 16: Expected Value and Variances\n* Week 17: Final Exam"
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
    "instructor": "Carleton Moore\nPOST 307B\ncmoore@hawaii.edu\n956-6920",
    "description": "Reinforce and strengthen problem-solving skills using abstract data types and introduce software development practices. Emphasize the use of searching and sorting algorithms and their complexity, recursion, object-oriented programming, and data structures.",
    "creditHours": 4,
    "textbooks": "Data Structures: Abstraction and Design Using Java, Second Edition, by Elliot B. Koffman and Paul A. T. Wolfgang, Wiley 2010.",
    "objectives": "* Learn and implement standard data structures, including linked lists, stacks, queues, hash tables, and binary trees.\n* Learn and implement standard algorithms for sorting and searching and tree traversal\n* Learn and use the basics of algorithm analysis and complexity, including big-O notation\n* Be exposed to software engineering techniques such as: abstract data types, separation of definition and implementation, encapsulation, information hiding, testing and code reviews.\n* Learn and use object oriented programming in Java by designing, implementing, reviewing and testing solutions to problems\n* Learn to write algebraic equations in prefix, infix and postfix notation using preorder, inorder and postorder traversals\n* Learning to program in Java is only one of the goals for this course, but may be the most important: fluency in Java is needed to apply many of the other tools and information presented in this course as well as in subsequent ICS courses.",
    "grading": "Grades are assigned based on your performance on:\n  * Two midterm exams and a final, each worth 10% of the grade for at total of 30% of the grade.\n  * Assignments, worth a total of 40% of the grade.\n  * Lecture quizzes, worth 15% of the grade.\n  * Lab attendance, worth 15% of the grade.\n  * There will also be up to 5% extra credit awarded by each TA.\n\nGrading will use the standard cutoffs of 97% (A+), 93% (A), 90% (A-), 87% (B+), 83% (B), 80% (B-), 77% (C+), 73% (C), 70% (C-), 67% (D+), 63% (D), 60% (D-).",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "i",
      "j"
    ],
    "courseLearningOutcomes": "* Use and implement abstract data types such as lists, stacks, queues, and trees.\n* Select the appropriate searching or sorting algorithm base on the algorithm’s behavior.\n* Develop recursive algorithms and programs.\n* Use standard libraries or packages as well as advanced object-oriented programming techniques (polymorphism, inheritance, and encapsulation).\n* Produce robust and secure programs using exception handling and extensive program testing.",
    "schedule": "Week 1 - Java Review\nWeek 2 - Object Oriented Programming\nWeek 3 - Simple Sorting\nWeek 4 - Array Lists\nWeek 5 - Linked Lists\nWeek 6 - Iterators\nWeek 7 - Midterm 1\nWeek 8 - Stacks\nWeek 9 - Queues\nWeek 10 - Recursion\nWeek 11 - Trees\nWeek 12 - Binary Data\nWeek 13 - Midterm 2\nWeek 14 - Complex Sorting Algorithms\nWeek 15 - Hashtables\nWeek 16 - Course Review"
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
    "description": "Design and correctness of algorithms, including divide-and-conquer, greedy and dynamic programming methods. Complexity analyses using recurrence relations, probabilistic methods, and NP-completeness. Applications to order statistics, disjoint sets, B-trees and balanced trees, graphs, network flows, and string matching.",
    "instructor": "Kazuo Sugihara\nPOST 314H\nsugihara@hawaii.edu",
    "prerequisites": "211 and 241, or consent.",
    "textbooks": "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest and Clifford Stein, Introduction to Algorithms, Third Edition, The MIT Press, 2009.",
    "objectives": "* To introduce a variety of topics in discrete mathematics\n* To develop ability of modeling, reasoning, proving, analysis, and algorithmic problem solving\n* To present examples of applications of discrete mathematics to computer science\n* To have students learn mathematical writing as the basis of technical writing",
    "policies": "10% in-class\n90% midterms and final",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "f"
    ],
    "courseLearningOutcomes": "* Students are aware of fundamental algorithms of computer science, and their associated data structures and problem solving techniques.\n* Students can compose a problem formulation of a real-world problem mathematically.\n* Students can decide whether given pseudocode is correct for a given problem formulation; construct a counterexample if the given pseudocode is incorrect; and outline a proof for its correctness otherwise.\n* Students can design a correct algorithm for a given problem and describe the algorithm as pseudocode in a given pseudocode syntax.\n* Students can analyze the worst-case and best-case space and time complexities of a given algorithm.\n* Students can create a software program for accurately implementing an algorithm specified in pseudocode. Students can implement software objects meeting Abstract Data Type specifications.\n* Students can produce a software product including documentation for given requirements & design specifications."
  },
  {
    "alphaNumber": "ICS 312",
    "title": "Machine-Level and Systems Programming",
    "instructor": "Henri Casanova\nhenric@hawaii.edu",
    "description": "Machine organization, machine instructions, addressing modes, assembler language, subroutine linkage, linking to higher-level languages, interface to operating systems, introduction to assemblers, loaders and compilers. Pre: 212 (or concurrent), or consent.",
    "prerequisites": "212 (or concurrent), or consent.",
    "textbooks": "PC Assembly Language, A. Carter (http://www.drpaulcarter.com/pcasm/)\nNASM User Manual (http://www.nasm.us/doc/)",
    "objectives": "* Students understand the underlying principle behind machine-level data representations, computing, and programming\n* Students are proficient with assembly programming for the x86 architecture, including register operations, control structures, bitwise operations, and subprograms\n* Students understand the underlying principles behind compiling, linking, loading, and debugging\n* Students gain some hands-on experience with developing a small compiler",
    "grading": "In-class quizzes (always on Tuesdays, for each Module): 10%\nHomework and programming assignments: 55%\nMidterm: 15%\nFinal: 20%",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "i"
    ],
    "courseLearningOutcomes": "(See objectives.)"
  },
  {
    "alphaNumber": "ICS 313",
    "title": "Programming Language Theory",
    "instructor": "David N. Chin\nchin@hawaii.edu\nPOST 317",
    "description": "Syntax, semantics, control structures, variable binding and scopes, data and control abstractions. Programming in functional (LISP) and logic (Prolog) programming styles. Pre: 212 and 241, or consent.",
    "prerequisites": "212 and 241, or consent.",
    "textbooks": "Programming Language Pragmatics, Third Edition, by Michael L. Scott, publisher: Morgan Kaufmann, ISBN: 978-0123745149.",
    "grading": "40% on assignments, 10% on quizzes, 20% on the Midterm exam, 30% on the Final exam.",
    "learningOutcomes": [
      "b",
      "c",
      "e",
      "h",
      "i"
    ],
    "courseLearningOutcomes": "* Understand the differences among programming languages and paradigms as well as how these differences impact the development and maintenance of programs, such as development ease (time and effort), program correctness (including errors), code maintenance (understandability and extensibility), code execution (speed and image size), and code portability (hardware and compilers/interpreters).\n* Have the ability to program in different programming paradigms/styles, including functional and logic languages like Common Lisp or Scheme and Prolog.\n* Understand scripting languages such as Pearl or JavaScript and their use.\n* Have the ability to represent and solve problems at an abstract level before coding them in a particular language.\n* Have the ability to understand new programming language concepts, and assess the ease with which these features may be implemented in a programming language.\n* Be able to choose the best programming language(s) for a project. Justify the choice with well-reasoned arguments based on language characteristics and the development environment such as the expertise of the programmer(s), resources and workplace politics.",
    "schedule": "Week 1: Intro\nWeek 2: Functional languages, Prolog\nWeek 3: Syntax, Prolog\nWeek 4: Scope, Prolog\nWeek 5: Semantics, Prolog\nWeek 6: Functional languages, Lisp\nWeek 7: Control flow, Lisp\nWeek 8: Review, Lisp \nWeek 9: Midterm\nWeek 10:  Data types, Lips\nWeek 11: Scripting, Python\nWeek 12: Subroutines, Python\nWeek 13, 14, 15: Concurrency, Python\nWeek 16: Review\nWeek 17: Final exam"
  },
  {
    "alphaNumber": "ICS 314",
    "creditHours": 3,
    "title": "Software Engineering I",
    "description": "System specification, modeling and analysis, prototyping, hierarchal design, program design methods, cost estimation, project management, computer-aided software design. Team-oriented software-design project. Pre: 211 or consent.",
    "instructor": "Philip Johnson\njohnson@hawaii.edu\nPOST 307",
    "prerequisites": "211 or consent.",
    "textbooks": "Course notes.",
    "objectives": "ICS 314 is a fast-paced immersion into significant software engineering concepts and technologies. Students will gain competancy with:\n  * Software engineering concepts\n  * Software engineering technologies\n  * Design\n  * Quality assurance\n  * Professional development and portfolios\n  * Technical writing\n  * Open source software engineering",
    "grading": "Technical writing (30%)\nCode and other artifacts (30%)\nMidterm and final (10%)\nIn class activities (30%)",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n"
    ],
    "courseLearningOutcomes": "(See course objectives.)",
    "schedule": "ICS 314 consists of the following modules. The number of weeks devoted to each is indicated in parentheses:\n* Introduction to the course (1)\n* Professional persona (1)\n* Open Source Software (1)\n* Coding (1)\n* Configuration Management (1)\n* Development Environments (1)\n* Quality Assurance (2)\n* User Interface Design (2)\n* Application Design (3)\n* Data Design (2)\n* Requirements Design (1)"
  },
  {
    "alphaNumber": "ICS 321",
    "title": "Data Storage and Retrieval",
    "instructor": "Lipyeow Lim\nPOST 303E\nlipyeow@hawaii.edu",
    "description": "Data storage devices, timing and capacity, programming for files, hashed and indexed files, introduction to relational database systems. Pre: 211 or consent.",
    "prerequisites": "211 or consent.",
    "textbooks": "Database Systems: The Complete Book (2nd Edition).  Hector Garcia-Molina, Jeff Ullman, and Jennifer Widom.  ISBN-13: 978-0-13-187325-4.",
    "objectives": "* Students have a broad understanding of database concepts and database management system software\n* Students have a high-level understanding of major DBMS components and their function\n* Students can model an application's data requirements using conceptual modeling tools like ER diagrams and design database schemas based on the conceptual model.\n* Students can write SQL commands to create tables and indexes, insert/update/delete data, and query data in a relational DBMS.\n* Students can develop a data-intensive application using DBMS APIs.",
    "grading": "Quizzes before every lecture/class (15%)\nAssignment 1: Searching large files (10%)\nAssignment 2: SQL queries (10%)\nAssignment 3: Java Web Application (5%)\nAssignment 4: ER Modeling (10%)\nAssignment 5: DBMS Application Project (10%)\nMidterm Exam (20%)\nFinal Exam (20%)",
    "learningOutcomes": [
      "a",
      "c",
      "i",
      "j",
      "k"
    ],
    "courseLearningOutcomes": "* Students have a broad understanding of database concepts and database management system software\n* Students have a high-level understanding of major DBMS components and their function\n* Students can model an application's data requirements using conceptual modeling tools like ER diagrams and design database schemas based on the conceptual model.\n* Students can write SQL commands to create tables and indexes, insert/update/delete data, and query data in a relational DBMS.\n* Students can develop a data-intensive application using DBMS APIs.",
    "schedule": "Week 1: Introduction & Overview of Database Systems\nWeek 2: Relational Model of Data\nWeek 3: Algebraic & Logical Query Languages\nWeek 4, 5: The Database Language SQL \nWeek 6: SQL in a Server Environment\nWeek 7: Midterm Review and Exam\nWeek 8: High-level Database Models: ER models\nWeek 9: Design Theory for Relational Databases: Functional dependencies\nWeek 10: Design Theory for Relational Databases: Normal Forms\nWeek 11: Constraints, Triggers, Views & Indexing\nWeek 12: Overview of Transaction Processing\nWeek 13: Overview of Storage & Indexing\nWeek 14: Overview of Query Processing & Optimization\nWeek 15: XML & Semi-structured Data Models\nWeek 16: Project Presentation\nWeek 17: Final exam"
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
    "instructor": "Ravi Narayan\nrnarayan@hawaii.edu",
    "description": "Operating system concepts and structure, processes and threads, CPU scheduling, memory management, scheduling, file systems, inter-process communication, virtualization, popular operating systems. A-F only.",
    "prerequisites": "211",
    "objectives": "* Role of operating systems.\n* Principles of operating system design and kernel implementation.\n* Key features of operating systems of practical importance, including Linux and Windows.\n* Principles of and gain hands-on experience with memory and virtual memory\nmanagement\n* Principles of and and gain hands-on experience with process and thread\nmanagement\n• Principles of and gain hands-on experience with process and thread\ncommunication\n* File systems design principles",
    "grading": "Homework (50%)\nQuizzes, Midterm, Final (50%)",
    "learningOutcomes": [
      "c",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n"
    ],
    "schedule": "Week 1: \nWeek 2: \nWeek 3: \nWeek 4: \nWeek 5: \nWeek 6: \nWeek 7: \nWeek 8: \nWeek 9: \nWeek 10: \nWeek 11: \nWeek 12: \nWeek 13: \nWeek 14: \nWeek 15: \nWeek 16:\nWeek 17: Final exam"
  },
  {
    "alphaNumber": "ICS 351",
    "creditHours": 3,
    "title": "Network Design and Management",
    "instructor": "Edo Biagioni\nesb@hawaii.edu",
    "description": "Overview of the internet and its capabilities; introduction to HTTP, TCP/IP, ethernet, and wireless 802.11; routers, switches, and NAT; network and wireless security; practical experience in designing and implementing networks.",
    "prerequisites": "141 and 211, or consent.",
    "textbooks": "Mastering Networks -- An Internet Lab Manual 5.0\", by Jörg Liebeherr and Magda el Zarki, 2004.",
    "objectives": "* Design and build networks using routers and switches \n* Manage, monitor, and find problems with networks \n* Learn elements of the TCP/IP protocol suite \n* Become familiar with network configuration of routers and hosts \n* Learn about routing protocols in use in the Internet \n* Learn elements of network security, including firewalls and NAT",
    "grading": "Labs (60%)\nQuizzes (30%)\nFinal exam (10%)",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "h",
      "i",
      "j",
      "l",
      "m",
      "n"
    ],
    "schedule": "* Week 1: Intro\n* Week 2: Commands, network monitoring, protocols\n* Week 3: Addressing, masks, routing\n* Week 4: Masks, networks, subnetworks\n* Week 5: Routing, OSPF, BGP\n* Week 6: Routing, multi-casting\n* Week 7: TCP\n* Week 8: NAT, network configuration\n* Week 9: DNS\n* Week 10: 802.11, IPv6, HTTP\n* Week 11: HTTPS, SNMP\n* Week 12: Wireless ad-hoc networks\n* Week 13: Security, \n* Week 14: Review\n* Week 15: Networking problems and solutions\n* Week 16: Networking problems and solutions\n* Week 17: Final exam"
  },
  {
    "alphaNumber": "ICS 355",
    "creditHours": 3,
    "title": "Security and Trust I: Resource Protections",
    "instructor": "Dusko Pavlovic\ndusko@hawaii.edu",
    "description": "Security and trust in computers, networks, and society. Security models. Access and authorization. Availability and Denial-of-Service. Trust processes and network interactions.",
    "prerequisites": "241 or (MATH 301 and 371).",
    "textbooks": "1. Lecture Notes\n2. Dieter Gollman, Computer Security (Wiley 2011, 3rd ed)\n3. Ross Anderson, Security Engineering (Wiley 2008, 2nd ed)",
    "objectives": "Explain and structure the basic concepts and techniques needed by every security professional.",
    "grading": "4 Homework assignments (40%)\nFinal (60%)",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j"
    ],
    "schedule": "1. Assets and attacks. Prevention, detection and deterrence.\n2. Physical security, computer security, system security, data security.\n3. Perimeter and defense in depth.\n4. Trust process. Trust transformation and relocation. Web of trust.\n5. Reputation and feedback\n6. Access control and authorization\n7. Security models and multi-level security\n8. Availability and Denial-of-Service\n9. Malware and fraud\n10. Privacy and anonymity"
  },
  {
    "alphaNumber": "ICS 361",
    "creditHours": 3,
    "title": "Introduction to Artificial Intelligence Programming",
    "instructor": "David N. Chin\nchin@hawaii.edu\nPOST 317",
    "description": "Introduction to the theory of Artificial Intelligence and the practical application of AI techniques in Functional (Common LISP and/or Scheme) and Logic (Prolog) programming languages. Students gain practical experience through programming assignments and projects. A-F only.",
    "prerequisites": "241 and (212 or 215), or consent.",
    "textbooks": "AI Algorithms, Data Structures, and Idioms in Prolog, Lisp, and Java, 6th edition by George F. Luger and William A Stubblefield, Addison Wesley. \nArtificial Intelligence: Structures and Strategies for Complex Problem Solving, 6th edition by George F. Luger, Addison Wesley.",
    "grading": "40% on assignments\n20% on in-class quizzes\n15% on the midterm exam\n25% on the final exam.",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "i"
    ],
    "schedule": "* Week 1: Intro\n* Week 2: Predicate calculus\n* Week 3, 4, 5: Common Lisp, search\n* Week 6: Knowledge representation\n* Week 7: Semantic networks\n* Week 8: Reasoning under uncertainty\n* Week 9: Midterm\n* Week 10, 11, 12, 13:  Machine learning, Prolog\n* Week 14, 15: Natural languages processing\n* Week 16: Review\n* Week 17: Final exam"
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
    "instructor": "Philip Johnson\njohnson@hawaii.edu\nPOST 307",
    "description": "Continuation of 314. Project management, quality, and productivity control, testing and validation, team management. Team-oriented software-implementation project.",
    "prerequisites": "314",
    "textbooks": "Course notes",
    "objectives": "* Develop ability to design, manage, and implement a medium-scale software system.",
    "grading": "Project (Intermediate deliverables) 80%\nFinal project 20%",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n"
    ],
    "schedule": "This is a project-based course. Students split into teams to design, implement, test, and evaluate a moderate-scale software system.  Classroom sessions are a mix of weekly team meetings, monthly milestone deliverables, and monthly formal reviews."
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
    "instructor": "Barbara Endicott-Popovsky\nendicott@hawaii.edu",
    "description": "Theoretical results, security policy, encryption, key management, digital signatures, certificates, passwords. Ethics: privacy, computer crime, professional ethics. Effects of the computer revolution on society.",
    "prerequisites": "at least two ICS 300-level courses or consent.",
    "textbooks": "Course notes.",
    "objectives": "* Analyze the information assurance (IA) context \n* Analyze and design IA policies and plans \n* Apply the principles of management \n* Understand and apply the information perspective",
    "policies": "Due to the special nature of Computer Security certain additions to the above policies will be in effect, they are the following: \n\n* Where appropriate, every experiment run in conjunction with this course will have certain rules and regulations regarding its conduct. These will be explained when the assignments are given and students are expected to comply with any additional restrictions. \n* To the extent that classroom computers are used to stage attacks under controlled circumstances, they will be physically disconnected from all external networks. All student users must maintain this lack of connection and must verify this lack of connection (with instructor help) before running any malicious code or exploit. \n* Students may be allowed to attempt to run harmful software and obtain root access on classroom computers isolated from the network, as long as the students in question agree to fix any problems they cause (e.g. hardware damaging code). \n* Security flaws and other problems should be pointed out immediately to the instructor. \n* Any student running an exploit in connection with assignments in this class must file an Exploit Approval form with the instructor, before running any malicious code or attempting any exploit on any classroom computer. \n* Students are responsible for the consequences of any actions they take without the knowledge of the lab instructor.",
    "grading": "Participation (10%)\nHomework (4) (70%)\nFinal (20%)",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "i",
      "j"
    ],
    "schedule": "* Week 1: Overview\n* Weeks 2, 3: IA Policy, law, and regulations\n* Week 4: IA Policies, IA Framework & Access Control Systems\n* Week 5: Security Planning \n* Week 6: Security Operations, Certification, Accreditation\n* Week 7: Incident Response and Disaster Recovery\n* Week 8: Technologies and Mechanisms\n* Week 9: Security Architecture and Network Security\n* Week 10: Cryptography\n* Week 11: Key Management and Digital Signatures\n* Week 12: Authentication: attacking passwords, challenge-response systems\n* Week 13: IA Auditing\n* Week 14: Security Awareness Training\n* Week 15: Presentations\n* Week 16: Review\n* Week 17: Final exam"
  },
  {
    "alphaNumber": "ICS 426",
    "creditHours": 3,
    "title": "Computer System Security",
    "instructor": "Barbara Endicott-Popovsky\nendicott@hawaii.edu",
    "description": "Information flow, confinement, information assurance, malicious programs, vulnerability analysis, network security, writing secure programs.",
    "prerequisites": "351 or 451, or consent.",
    "textbooks": "Dark, Melissa, ed. (2010). Information Assurance and Security Ethics in Complex Systems: Interdisciplinary Perspectives. ISBN: 978-1-61692-245-0\n \nHoward, M., LeBlanc, D and Viega, J. (2009) 24 Deadly Sins of Software Security: Programming Flaws and How to Fix Them. New York: McGraw-Hill.\nISBN: 978-0-07-162675-0",
    "objectives": "* Develop your own framework for thinking about the ethical consequences of major technological impacts\n* Analyze several major issues threatening the security of information in society\n* Learn and apply the 24 Deadly Sins of Software Development\n* Understand and apply IT network defense strategies",
    "grading": "Homework (4) 40%\nMidterm: 10%\nFinal project: 20%\nFinal exam: 15%\nParticipation: 5%",
    "learningOutcomes": [
      "a",
      "c",
      "d",
      "e"
    ],
    "schedule": "* Weeks 1, 2: Overview\n* Weeks 3, 4: Insider Threat\n* Weeks 5, 6: Data breach\n* Week 7: Midterm\n* Weeks 8, 9: Implementation Sins: Security Flaws\n* Weeks 10, 11: Cryptographic Sins\n* Weeks 12, 13: Networking Sins\n* Weeks 14, 15, 16: Final project\n* Week 17: Final exam"
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
    "prerequisites": "212 or consent.",
    "textbooks": "Course notes.",
    "objectives": "* Master concepts of program performance optimization, of multi-core architectures, and of concurrent programming. \n* Become proficient in performance tuning of non-concurrent C programs.\t\t\n* Become proficient in multi-threaded programming in C and in Java.\t\n* Gain hands-on experience in debugging and performance tuning of multi-threaded programs on multi-core architectures.\n* Gain exposure to advanced high-performance computing topics such as cluster computing and GPU programming.\t\t\t\t\t\t \n* Be engaged in a final project in which all the knowledge acquired in the course is applied to optimizing the performance of real-world software.",
    "grading": "Homework and programming assignments (60%)\nMidterm (15%)\nFinal (25%)",
    "learningOutcomes": [
      "b",
      "c"
    ],
    "courseLearningOutcomes": "(See objectives)",
    "schedule": "* Week 1: Review of processes and threads\n* Week 2: Java threads and thread safety\n* Week 3: Java Swing\n* Week 4: Thread Synchronization with Locks and Condition Variables\n* Week 5: Threads in C with Pthreads\n* Week 6: Semaphores and Monitors\n* Week 7: Classic Concurrency Problems\n* Week 8: Concurrency and Performance\n* Week 9: Shared Memory and Performance\n* Week 10: OpenMP\n* Weeks 11, 12: Programming for Performance\n* Weeks 13, 14: Hardware and Concurrency\n* Week 15: Distributed Computing\n* Week 16: Review\n* Week 17: Final exam"
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
    "description": "Channel security. Trojan and noninterference. Basic concepts of cryptology. Cryptographic primitives. Protocols for authentication and key establishment.",
    "textbooks": "1. Lecture Notes\n2. Charlie Kaufman, Radia Perlman and Mike Speciner, Network Security (Prentice Hall 2002, 2nd ed.)\n3. Douglas Stinson, Cryptography. Theory and Practice (Chapman and Hall 2005, 3rd ed.)",
    "objectives": "* Students can apply the computational and mathematical models relevant for information assurance in cyber space.\n* Students can analyze the problems of information assurance, and identify and define the computing requirements and cryptographic techniques appropriate to its solution.\n* Students can design, implement, and evaluate a computer-based system, process, component, or program to meet security requirements of noninterference, confidentiality, or authenticity and integrity.\n* Students can function effectively on teams to accomplish a common goal.\n* Students have an understanding of social issues of information assurance.\n* Students can communicate effectively with a range of audiences concerned with the problems of information assurance in cyber space.\n* Students can analyze the local and global impact of information technologies and their security repercussions on individuals, organizations, and society.\n* Students can recognize the need for and an ability to engage in continuing professional and career development in the area of cyber security.\n* Students can use current techniques, skills, and tools necessary solving the basic problems confidentiality and privacy, or authenticity and integrity.",
    "grading": "Homework (4) 40%\nFinal exam 60%",
    "learningOutcomes": [
      "a",
      "e",
      "g"
    ],
    "schedule": "1. Introduction: Private communication in a public world\n2. Information, channel and noninterference\n3. Encryption and cryptanalysis\n4. Modes of operation and stream cipher\n5. Key establishment\n6. Authentication\n7. Challenge-Response and Matching Conversation\n8. Protocol Derivations\n9. Man-in-the-Middle and Impersonation\n10. Pervasive security and multi-channel authentication\n11. Review"
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


