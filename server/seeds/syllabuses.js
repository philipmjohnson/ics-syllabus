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
    "alphaNumber": "ICS 315",
    "creditHours": 3,
    "title": "Web Design and Management",
    "instructor": "Jan Stelovsky\njanst@hawaii.edu",
    "prerequisites": "215 or consent."
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
    "alphaNumber": "ICS 222",
    "creditHours": 3,
    "title": "Introduction to computation",
    "instructor": "Dusko Pavlovic"
  },
  {
    "alphaNumber": "ICS 210",
    "title": "Information Systems in Society",
    "description": "Lecture/discussion critically explores sociopolitical dimensions of Information and Communication Technology (ICT), and the information professions. A-F only. Pre: departmental approval. (Once a year)"
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
    "alphaNumber": "ICS 290",
    "creditHours": 1,
    "title": "Computer Science Careers: An Exploration of the Specialties of Computer Science",
    "description": "Exploration of the specialties of computer science. Meets every two week for 2.5 hours to explore specific areas in computer science. CR/NC only. (Once a year)"
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
    "alphaNumber": "ICS 390",
    "creditHours": 3,
    "title": "Computing Ethics for Lab Assistants",
    "instructor": "Martha Crosby\ncrosby@hawaii.edu",
    "description": "A lecture/discussion/internship on ethical issues and instructional techniques for students assisting a laboratory section of ICS 101. The class uses multiple significant writing and oral presentation activities to help students learn course content.",
    "prerequisites": "101 (Alpha) and consent."
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
    "description": "Legal, ethical and technology issues in computer access, confidentiality, authentication, privacy and intellectual property.",
    "instructor": "Dusko Pavlovic\ndusko@hawaii.edu",
    "prerequisites": "both 311 and 312, or consent.",
    "title": "Computer Security"
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
    "alphaNumber": "ICS 424",
    "creditHours": 3,
    "description": "Experience producing applications with at least two different applications frameworks.",
    "instructor": "Philip Johnson\njohnson@hawaii.edu",
    "prerequisites": "212, 311, and 313; or consent.",
    "title": "Application Frameworks"
  },
  {
    "alphaNumber": "ICS 483",
    "courseLearningOutcomes": "* Students understand basic concepts, terminology, principles, models and methods in computer vision and image understanding.\n* Students have a broad knowledge for understanding advanced topics and scientific literature in the field of computer vision.\n* Students can describe the problems and basic methods of edge detection, texture analysis, stereo analysis, image segmentation, tracking, image retrieval, object recognition.\n* Students can implement and systematically test fundamental methods/algorithms of computer vision, image processing, and image analysis.\n* Students can design a computer vision system for a specific problem.\n* Students can present applications of computer vision systems and identify the limitations of current vision systems.",
    "creditHours": 3,
    "description": "Introductory course in computer vision. Topics include image formation, image processing and filtering, edge detection, texture analysis and synthesis, binocular stereo, segmentation, tracking, object recognition and applications.",
    "grading": "Homework Assignments (25%)\nCourse Project (30%)\nMidterm Exam (20%)\nFinal Exam (25%)",
    "instructor": "Kyungim Baek\nkyungim@hawaii.edu",
    "learningOutcomes": [
      "a",
      "c",
      "i",
      "j"
    ],
    "objectives": "See course-specific learning outcomes.",
    "policies": "Late policy: If you hand in late work without approval of the instructor you may receive zero credit.",
    "prerequisites": "212 and 311, or consent.",
    "schedule": "Week 1. Introduction\nWeek 2. Local Shading Models\nWeek 3. Color: Physics, Color Perception, Color Spaces\nWeek 4. Linear Filters and Convolution\nWeek 5. Edge Detection\nWeek 6. Texture\nWeek 7. Basic Multi-view Geometry, Stereo\nWeek 8. Segmentation: Clustering, Midterm Exam\nWeek 9. Segmentation: Model Fitting\nWeek 10. Segmentation: Probabilistic Methods\nWeek 11. Tracking\nWeek 12. Template Matching using Classifiers\nWeek 13. Object Recognition\nWeek 14. Image Retrieval\nWeek 15. Image-based Rendering\nWeek 16. Project Presentation\nWeek 17. Final Exam",
    "textbooks": "Computer Vision: A Modern Approach, Second Edition, byDavid A. Forsyth and Jean Ponce, Publisher: Pearson, ISBN-13: 978-0136085928",
    "title": "Computer Vision"
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
    "courseLearningOutcomes": "(See objectives.)",
    "creditHours": 3,
    "description": "Machine organization, machine instructions, addressing modes, assembler language, subroutine linkage, linking to higher-level languages, interface to operating systems, introduction to assemblers, loaders and compilers. Pre: 212 (or concurrent), or consent.",
    "grading": "In-class quizzes (always on Tuesdays, for each Module): 10%\nHomework and programming assignments: 55%\nMidterm: 15%\nFinal: 20%",
    "instructor": "Henri Casanova\nhenric@hawaii.edu\nPOST 310",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "i"
    ],
    "objectives": "* Students understand the underlying principle behind machine-level data representations, computing, and programming\n* Students are proficient with assembly programming for the x86 architecture, including register operations, control structures, bitwise operations, and subprograms\n* Students understand the underlying principles behind compiling, linking, loading, and debugging\n* Students gain some hands-on experience with developing a small compiler",
    "prerequisites": "212 (or concurrent), or consent.",
    "textbooks": "PC Assembly Language, A. Carter (http://www.drpaulcarter.com/pcasm/)\nNASM User Manual (http://www.nasm.us/doc/)",
    "title": "Machine-Level and Systems Programming"
  },
  {
    "alphaNumber": "ICS 313",
    "courseLearningOutcomes": "* Understand the differences among programming languages and paradigms as well as how these differences impact the development and maintenance of programs, such as development ease (time and effort), program correctness (including errors), code maintenance (understandability and extensibility), code execution (speed and image size), and code portability (hardware and compilers/interpreters).\n* Have the ability to program in different programming paradigms/styles, including functional and logic languages like Common Lisp or Scheme and Prolog.\n* Understand scripting languages such as Pearl or JavaScript and their use.\n* Have the ability to represent and solve problems at an abstract level before coding them in a particular language.\n* Have the ability to understand new programming language concepts, and assess the ease with which these features may be implemented in a programming language.\n* Be able to choose the best programming language(s) for a project. Justify the choice with well-reasoned arguments based on language characteristics and the development environment such as the expertise of the programmer(s), resources and workplace politics.",
    "creditHours": 3,
    "description": "Syntax, semantics, control structures, variable binding and scopes, data and control abstractions. Programming in functional (LISP) and logic (Prolog) programming styles. Pre: 212 and 241, or consent.",
    "grading": "40% on assignments, 10% on quizzes, 20% on the Midterm exam, 30% on the Final exam.",
    "instructor": "David N. Chin\nchin@hawaii.edu\nPOST 317",
    "learningOutcomes": [
      "b",
      "c",
      "e",
      "h",
      "i"
    ],
    "prerequisites": "212 and 241, or consent.",
    "schedule": "Week 1: Intro\nWeek 2: Functional languages, Prolog\nWeek 3: Syntax, Prolog\nWeek 4: Scope, Prolog\nWeek 5: Semantics, Prolog\nWeek 6: Functional languages, Lisp\nWeek 7: Control flow, Lisp\nWeek 8: Review, Lisp \nWeek 9: Midterm\nWeek 10:  Data types, Lips\nWeek 11: Scripting, Python\nWeek 12: Subroutines, Python\nWeek 13, 14, 15: Concurrency, Python\nWeek 16: Review\nWeek 17: Final exam",
    "textbooks": "Programming Language Pragmatics, Third Edition, by Michael L. Scott, publisher: Morgan Kaufmann, ISBN: 978-0123745149.",
    "title": "Programming Language Theory"
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
  },
  {
    "alphaNumber": "ICS 414",
    "creditHours": 3,
    "description": "Continuation of 314. Project management, quality, and productivity control, testing and validation, team management. Team-oriented software-implementation project.",
    "grading": "Project (Intermediate deliverables) 80%\nFinal project 20%",
    "instructor": "Philip Johnson\njohnson@hawaii.edu\nPOST 307",
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
    "objectives": "* Develop ability to design, manage, and implement a medium-scale software system.",
    "prerequisites": "314",
    "schedule": "This is a project-based course. Students split into teams to design, implement, test, and evaluate a moderate-scale software system.  Classroom sessions are a mix of weekly team meetings, monthly milestone deliverables, and monthly formal reviews. Individual evaluation of each team member occurs twice a month through meetings with the instructor to assess progress and group participation.  Evaluations of the progress of the entire group occur 4 times during the semester (once per month). The evaluations assess whether adequate progress on the project is being made, the quality of the artifacts being produced by the team, the efficiency of the group process, and the types of group communication in use and their effectiveness.",
    "textbooks": "Course notes",
    "title": "Software Engineering II"
  },
  {
    "alphaNumber": "ICS 321",
    "courseLearningOutcomes": "* Students have a broad understanding of database concepts and database management system software\n* Students have a high-level understanding of major DBMS components and their function\n* Students can model an application's data requirements using conceptual modeling tools like ER diagrams and design database schemas based on the conceptual model.\n* Students can write SQL commands to create tables and indexes, insert/update/delete data, and query data in a relational DBMS.\n* Students can develop a data-intensive application using DBMS APIs.",
    "description": "Data storage devices, timing and capacity, programming for files, hashed and indexed files, introduction to relational database systems. Pre: 211 or consent.",
    "grading": "Quizzes before every lecture/class (15%)\nAssignment 1: Searching large files (10%)\nAssignment 2: SQL queries (10%)\nAssignment 3: Java Web Application (5%)\nAssignment 4: ER Modeling (10%)\nAssignment 5: DBMS Application Project (10%)\nMidterm Exam (20%)\nFinal Exam (20%)",
    "instructor": "Lipyeow Lim\nPOST 303E\nlipyeow@hawaii.edu",
    "learningOutcomes": [
      "a",
      "c",
      "i",
      "j",
      "k"
    ],
    "objectives": "* Students have a broad understanding of database concepts and database management system software\n* Students have a high-level understanding of major DBMS components and their function\n* Students can model an application's data requirements using conceptual modeling tools like ER diagrams and design database schemas based on the conceptual model.\n* Students can write SQL commands to create tables and indexes, insert/update/delete data, and query data in a relational DBMS.\n* Students can develop a data-intensive application using DBMS APIs.",
    "policies": "None.",
    "prerequisites": "211 or consent.",
    "schedule": "* Week 1: Introduction & Overview of Database Systems (Ch.1)\n* Week 2: Relational Model of Data (Ch. 2)\n* Week 3: Algebraic & Logical Query Languages (Ch. 5)\n* Week 4, 5: The Database Language SQL (Ch. 6)\n* Week 6: SQL in a Server Environment (Ch. 9)\n* Week 7: Midterm Review and Exam\n* Week 8: High-level Database Models: ER models (Ch. 4)\n* Week 9: Design Theory for Relational Databases: Functional dependencies (Ch. 3)\n* Week 10: Design Theory for Relational Databases: Normal Forms (Ch. 3)\n* Week 11: Constraints, Triggers, Views & Indexing (Ch. 7,8)\n* Week 12: Overview of Transaction Processing (Ch. 17,18)\n* Week 13: Overview of Storage & Indexing (Ch. 13,14)\n* Week 14: Overview of Query Processing & Optimization (Ch 15,16)\n* Week 15: XML & Semi-structured Data Models (Ch 11,12)\n* Week 16: Project Presentation\n* Week 17: Final exam",
    "textbooks": "Database Systems: The Complete Book (2nd Edition).  Hector Garcia-Molina, Jeff Ullman, and Jennifer Widom.  ISBN-13: 978-0-13-187325-4.",
    "title": "Data Storage and Retrieval"
  },
  {
    "alphaNumber": "ICS 421",
    "courseLearningOutcomes": "See course objectives.",
    "creditHours": 3,
    "description": "Principles of database systems, data modeling, relational models, database design, query languages, query optimization, concurrency control data security.",
    "grading": "15% Quizzes\n40% Homework (Programming) Assignments\n20% Project\n15% Mid-term exam\n10% Final Exam",
    "instructor": "Lipyeow Lim\nlipyeow@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "i",
      "j",
      "k"
    ],
    "objectives": "* Students have a deeper understanding of advanced database technologies including performance tuning, data warehousing, parallel and distributed databases.\n* Students are able to install and deploy DBMS software for large data sets\n* Students are able to program big data applications using database APIs",
    "policies": "None.",
    "prerequisites": "311 and 321, or consent.",
    "schedule": "* Week 1: Introduction & Database Design (Ch. 2)\n* Week 2: Relational Model & Normal Forms (Ch. 3,19)\n* Week 3: Relational Algebra, SQL, Application Programming (Ch. 4,5,6)\n* Week 4: Parallel & Distributed DBs (Ch.22)\n* Week 5: Query Evaluation (Ch. 12,13,14,22)\n* Week 6: Storage, Tree-based Indexes (Ch. 8,9,10)\n* Week 7: Hash Indexes, Query Optimization (Ch. 11,15)\n* Week 8: Transaction Management (Ch 16,17,18)\n* Week 9: Midterm Review & Exam\n* Week 10: Distributed Transactions, Data Warehousing (Ch 22, 25)\n* Week 11: Data Warehousing (Ch. 25)\n* Week 12: Data Mining (Ch. 26)\n* Week 13: Performance Tuning (Ch. 20)\n* Week 14: Security, Other Types of Databases (Ch. 21)\n* Week 15: Project Presentations\n* Week 16: Final review and exam",
    "textbooks": "Database Management Systems, Third Edition. Raghu Ramakrishnan and Johannes Gehrke. ISBN: 0-07-246563-8.",
    "title": "Database Systems"
  },
  {
    "alphaNumber": "ICS 443",
    "courseLearningOutcomes": "* Students will be able to identify various models of parallel computation\n* Students will be able to list fundamental parallel algorithms \n* Students will be able to use learned techniques to implement parallel algorithms on modern many-core architectures\n* Students will be able to carry out analysis of parallel algorithms\n* Students will be able to differentiate between efficient and inefficient parallel algorithms\n* Students will be able to design efficient parallel algorithms\n * Students will be able to check parallel algorithms for correctness \n * Students will be able to analyze the runtime and efficiency of parallel algorithms.",
    "creditHours": 3,
    "description": "Introduction to parallel models of computation and design and analysis of parallel algorithms.",
    "grading": "The students will be graded on class participation (20\\%), homeworks (40\\%), and the final exam (40\\%).",
    "instructor": "Nodari Sitchinava, Henri Casanova",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "f",
      "h",
      "i"
    ],
    "objectives": "* The students will be aware of current models of parallel computation\n* The students will be proficient with algorithmic techniques for  designing parallel algorithms\n* The students will be able to apply these techniques to design new parallel algorithm\n* The students will be able to analyze the efficiency of parallel algorithms",
    "policies": "Late homework policy: Homeworks are due on Thursday at 1:30pm (the beginning of the lecture). Late homeworks can be emailed to the instructor. Penalty for late homeworks is a letter grade reduction (e.g. from A to B) for within each 24 hours that it is late. For example, submission of homework that deserves a letter grade A will be graded B if submitted between Thursday 1:30pm and Friday 1:30pm; will be graded C if submitted before Saturday 1:30pm; and will be graded D if submitted before Sunday 1:30pm. Extenuating circumstances do arise, therefore, a single homework will be accepted up to 72 hours late without any reduction in grade.",
    "prerequisites": "311, 314",
    "schedule": "* Week 1: Introduction, models of parallel computation, Brent's scheduling principle\n* Week 2: Parallel scan, prefix sums\n* Week 3: Searching, selection, basic sorting\n* Week 4: Sorting networks, 0-1 principle\n* Week 5: List ranking, pointer jumping, symmetry breaking\n* Week 6: Tree algorithms\n* Week 7: Lowest common ancestors, range minima queries\n* Week 8, 9: Graph algorithms: Connected and biconnected components, minimum spanning trees, shortest paths\n* Week 10,11:Computational Geometry: convex hull, half-plane intersection, planesweep \n* Week 12-13: Linear algebra: matrix-matrix and matrix-vector multiplication\n* Week 14: Numerical algorithms\n* Week 15: String algorithms\n* Week 16: Advanced models of computation, limits of parallelism, P-completeness",
    "textbooks": "Joseph Jaja, Introduction to Parallel Algorithms, Addison Wesley, 1992.",
    "title": "Parallel Algorithms"
  },
  {
    "alphaNumber": "ICS 466",
    "courseLearningOutcomes": "Students have: \n* An understanding of the current state of the mobile industry, and its likely near future. \n* An understanding of the history of mobile devices, platforms, software, carriers, infrastructure and markets.\n* An understanding of the principles of design for mobile devices, and of how those principles are applied on currently available mobile platforms. \n* The ability to plan, design and implement a mobile application, site or service.\n* The ability to give a clear and concise verbal description of a mobile application, site or service (i.e. an “elevator pitch”).\n* The ability to storyboard, film, narrate and edit a short video on a mobile application, site or service. \n* The ability to write clearly, professionally and effectively.",
    "creditHours": 3,
    "description": "Lecture introducing design issues, programming languages, operating systems and mark-up languages for internet-enabled mobile devices, such as cell phones and PDAs.",
    "grading": "* Postings: 2.5% (1% for the original post, 1% for the review, and 0.5% for the response to the review) per week x 14 weeks = 35%\n* Project (60%). Each team project part will be evaluated based on the written work and the video presentation.\ni. Project proposal/design (15%): Teams will submit a description (~5 pages) of the proposed project, and will also give a short video presentation.\nii. Project design/implementation (15%): A partial or full (depending on the scale of the proposal) implementation of the project described in the proposal. Teams will submit documentation (~5 pages) of the implementation, and will present the implementation to the class in a short video.\niii. Project evaluation (15%): An evaluation of the implemented project, using real users (probably classmates) and sound evaluation techniques. (10% on own evaluation / 5% evaluation of other team, for a total of ~5 pages)\niv. Final project submission (15%): Teams will resubmit stages I-III as described above, incorporating feedback from the professor and from other students, and will present their full project in a short video.\nv.\tOther activities (5%): TBD. For example, Hackathon participation.",
    "instructor": "Kim Binsted\nbinsted@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "f",
      "h",
      "i"
    ],
    "objectives": "Internet-enabled mobile devices, such as cell phones, e-readers and tablet computers, are increasingly common. This course helps students understand the relevant issues in designing for such devices, and teaches them about current and future standards, practices, programming languages and operating systems for mobile devices. It also encourages students to think about how non-technical issues – business models, cultural attitudes, and so on – can affect mobile design. The course is organized around a term project, in which students design, implement and test a mobile-oriented service or site. Students are encouraged to adopt an entrepreneurial attitude towards their projects, and should consider target markets, revenue streams etc., as well as technical and design issues.",
    "policies": "Students must adequately complete all writing and oral assignments to pass the course with a D grade or better. Students who do not complete all writing and oral assignments will get a D- or an F and will not earn W or O Focus credit.\n\nLate project documents/videos lose 10%/day, starting at 5pm on due date. Documents/videos over 5 days late will be graded out of 50%. All documents/videos must be handed in by May 8. Weekly Laulima postings will not be graded if posted after the due date. \n\nFor all evaluated work, students may hand in a draft at least one week before the due date, for detailed feedback.\n\nAn occurrence of academic dishonesty will result in a grade of 0 for the assignment or exam and a memo in your ICS department file describing the incident.  Should there already be a memo of this type in your file, you will receive an F for the course, and the incident will be referred to the Dean of Students.",
    "prerequisites": "314 or consent.",
    "schedule": "Part 1\t20-Feb\nPart 2\t20-Mar\nPart 3\t24-Apr\nResubmit\t8-May",
    "textbooks": "none",
    "title": "Design for Mobile Devices"
  },
  {
    "alphaNumber": "ICS 111",
    "courseLearningOutcomes": "* Be able to deconstruct problems to develop algorithms and eventually program code.\n* Be able to develop simple data structures in object oriented form.\n* Be able to develop running software that involves the reading of data, storage of data, and depiction of data using graphics, sound and interactivity.\n* Be able to present their work to an audience.",
    "creditHours": 4,
    "description": "An overview of the fundamentals of computer science emphasizing problem solving, algorithm development, implementation, and debugging/testing using an object­-oriented programming language.",
    "grading": "Competency Quizzes: (38% of grade)\nFinal: (5% of grade)\nProjects: (30% of grade)\nLab Assignments: (27% of grade)",
    "instructor": "Jason Leigh",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "f",
      "h",
      "i",
      "k"
    ],
    "objectives": "* Learn how to translate problems to algorithms to code.\n* Learn basics of programming with a modern programming language, such as Java, Python, etc.\n* Apply principles to development of running program codes that involve the use of computer graphics, interaction and sound.\n* Provide projects that require the development of codes relevant to modern use of computers- ability to parse data, store data, construct finite state automata, develop capability to control graphics, sound and interactivity.",
    "policies": "Students are expected to participate in lectures, and laboratory sessions.",
    "schedule": "Each week a demonstrational problem is used to teach relevant computer science concepts, and to give students multiple instances in the use of programming language constructs.\n\nDemonstrational problem is translated into an algorithm and then program code. This code is then modified/enhanced in the lab sessions which are held twice a week to give students hands-on experience with watching how the behavior of the program changes when modified to encourage exploration.\n\nQuizzes are held once a week during lab sections. Students review quiz answers immediately after quiz is completed.\n\n* Week 1: Java compiler, flow of program\n* Week 2: Variables, conditionals, loops\n* Week 3: Variables and operators, conditionals, loops\n* Weeks 4,5: Classes\n* Weeks 6,7,8: Classes, loops, conditionals, arrays\n* Weeks 9, 10, 11: Classes, file I/O, loops, conditionals\n* Weeks 12, 13, 14, 15: Recursion, 2D arrays, \n* Week 16: Inheritance\n* Week 17: FInal exam",
    "textbooks": "Course notes.",
    "title": "Introduction to Computer Science I"
  },
  {
    "alphaNumber": "ICS 484",
    "courseLearningOutcomes": "1. Students develop software programs for producing data visualizations.\n2. Students learn about the nuances in the different types of data visualizations- including information visualization, geospatial visualization, scientific visualization, social network visualization, medical visualization,\n3. Students can evaluate data visualization approaches critically.\n4. Students can present and explain their data visualizations.\n5. Students can learn to work in teams to co-develop data visualizations.",
    "creditHours": 3,
    "description": "Introduction to data visualization through practical techniques for turning data into images to produce insight. Topics include: information visualization, geospatial visualization, scientific visualization, social network visualization, and medical visualization.",
    "grading": "Project 1, 2, 3 - each 30% of grade\nClass participation: 10% of grade",
    "instructor": "Jason Leigh\nleighj@hawaii.edu",
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
      "l",
      "m",
      "n"
    ],
    "objectives": "Program Learning Objective:\n\nThe objective is to introduce students about the broad field of data visualization, and relevant software tools, so that they are able to obtain basic mastery of the skills needed to: 1. turn raw data into effective visualizations of the data, 2. evaluate the efficacy of visualizations.\n\nInstitutional Learning Objective:\n\n1. Know- Breadth and Depth of Knowledge\n\nStudents will develop their understanding of the world with emphasis on Hawai’i by the use of geospatial data sets in the class, producing visualizations and therefore potentially hidden insights into regions of the world in relation to each other. Data may be about the economy, energy use, climate, for example.\n\n2. Do - Intellectual and Practical Skills\n\nStudents improve their abilities to think critically and creatively through designing, questioning and critiquing the visualizations produced by experts as well as their peers. Students conduct research by examining visualizations approaches used frequently online and described in conference and journal articles. Students improve their communication and reporting skills by having to give an oral presentation and demonstration of their visualization.\n\n3. Value - Personal and Social Responsibility\n\nStudents demonstrate excellence, integrity, and engagement through team-based collaborative projects that require them to learn how to work with differences in cultures and personal identities. Students will gain a better understanding of issues relating to the stewardship of he natural environment and civic participation in their communities through the data sets they will attempt to interpret and visualize.!",
    "prerequisites": "two ICS 300-level courses.",
    "schedule": "Week 1\nIntroduction to Data Visualization, History of Visualization, Examples of Visualizations\n\nWeek 2\nIntroduction to tools for interactive data visualization on the Web such as Javascript, D3.js, Kinetic.js, Xmdv\n\nWeek 3\nFundamentals for creating effective tables and charts.\n\nWeek 4\nIntroduction to Information Visualization & Human Perception with Examples\n\nweek 5\nProject 1 presentations\n\nWeek 6\nProject 1 presentations\n\nWeek 7\nIntroduction to Geospatial Visualization\n\nWeek 8\nIntroduction to Privacy Issues in Data Visualization\n\nWeek 9\nIntroduction to Social Network Visualization\nProject 2 presentations\n\nWeek 10\nProject 2 presentations\n\nWeek 11\nSPRING BREAK\n\nWeek 12\nIntroduction to Scientific and Medical Visualization\n\nWeek 13\nIntroduction to Dynamic Data Visualization\n\nWeek 14\nVisual Analytics\n\nWeek 15\nIntroduction to Big Data Visualization!\n\nWeek 16!\nProject 3 presentations",
    "textbooks": "Matthew O. Ward, Interactive Data Visualization: Foundations, Techniques, and Applications, A K Peters/CRC Press.\n\nSelected Papers from IEEE Visualization Conference Proceedings",
    "title": "Data Visualization"
  },
  {
    "alphaNumber": "ICS 485",
    "courseLearningOutcomes": "1. Students will remember key rules of thumb in video game design.\n2. Students will understand how video game design decisions are made.\n3. Students will apply video game design rules toward the development of video games.\n4. Students will analyze algorithms for constructing games.\n5. Student will evaluate effective and ineffective video game design rules.\n6. Students will create an entire vertical slice of a video game from concept to implementation.",
    "creditHours": 3,
    "description": "Students will team design, build, and demonstrate video games or related interactive entertainment environments and applications. Topics will include emerging computer science techniques relevant to the development of these types of environments.",
    "grading": "Project 1 - 20%\nProject 2 - 80%",
    "instructor": "Jason Leigh\nleighj@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "f",
      "h",
      "i",
      "j",
      "k"
    ],
    "objectives": "To teach students:\n1. to conceptualize effective game play.\n2. to develop storyboards exemplifying game play.\n3. how to apply techniques to implement game play. These include: Artificial Intelligence,\nComputer Graphics, User Interface Design, Psycho Acoustics, Human Perception.\n4. how to manage a multi-disciplinary game development team.\n5. how to evaluate game play.",
    "policies": "none",
    "prerequisites": "two ICS 300-level courses.",
    "schedule": "Week 1\no History and Taxonomy of video games\n• Week2\no Brainstorming and Designing the gameplay o Project planning\n• Week3\no Presentation of game play designs\n• Week4\no Introduction to game development tools\n• Week5\no Introduction to 3D computer graphics and stereoscopic computer graphics o Presentation of project planning timelines\n• Week6\no Software structure of a video game / real-time game loop design o In class review of project progress\n• Week7\no Deconstructing a game\no In class review of project progress • Week8\no Sound and psychoacoustics\no In class review of project progress • Week9\no Physical and perceptual limits of game players o User interfaces for gaming\no In class review of project progress\n• Week 10\no Mid-Semester Project Presentation\n• Week 11\no SPRING BREAK\n• Week 12\no Artificial Intelligence for games\no In class review of project progress\n• Week 13\no Game physics\no Techniques for special visual effects in gaming (e.g. motion blur, lens flare, real time shadows, reflections)\no In class review of project progress\n• Week 15\no Issues in multiplayer and networked game development o Hardware architectures of video game platforms\no In class review of project progress\n• Week 16\no Final Project Presentation\no Final project document due",
    "textbooks": "Course notes",
    "title": "Video Game Design and Development"
  },
  {
    "alphaNumber": "ICS 461",
    "courseLearningOutcomes": "* To understand the historical, cultural and philosophical underpinnings of AI.\n* To be familiar with the wide range of goals and approaches that define the field of AI.\n* To understand the importance of representation and search in AI and in computer science in general, and to be able to describe key representation strategies and search algorithms.\n* To understand and be able to describe in some detail some of the sub-fields of AI, including planning, machine learning, robotics, natural language processing and autonomous agents.\n* To be familiar with the key algorithms associated with these sub-fields, and to be able to describe their strengths and weaknesses.\n* Given a real-world problem, to be able to suggest AI approaches that might be appropriate for that problem.\n* To be able to read and think critically about articles on current AI research and development.",
    "creditHours": 3,
    "description": "Survey of artificial intelligence: natural language processing, vision and robotics, expert systems. Emphasis on fundamental concepts: search, planning, and problem solving, logic, knowledge representation.",
    "grading": "Assignments (6): 15% each, 90% total\nOnline contributions: 10%  \n\nAssignments are strictly due at midnight on the due date. After that, assignments will lose 10% per day for each day late, up to five. After five days, the assignment will be graded out of 50%. All assignments must be completed satisfactorily to pass the course with a D grade or better.",
    "instructor": "Kim Binsted\nbinsted@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "f",
      "i"
    ],
    "objectives": "See learning outcomes.",
    "policies": "Plagiarism and cheating are not tolerated in this course. If a student is caught cheating or plagiarizing, s/he will fail the course, and further disciplinary action may be taken.",
    "prerequisites": "311 or consent.",
    "schedule": "Week 1: History and philosophy of AI \nWeek 2: Intelligent agents\nWeek 3 & 4: Search and heuristics\nWeek 5 & 6: Logic and planning \nWeek 7 & 8: Machine learning\nWeek 9: Evolutionary computation\nWeek 10 & 11: Natural language processing \nWeek 12: Perception\nWeek 13: Robotics\nWeek 14: Review",
    "textbooks": "Artificial Intelligence: A Modern Approach, by Stuart Russell and Peter Norvig",
    "title": "Artificial Intelligence"
  },
  {
    "alphaNumber": "ICS 215",
    "courseLearningOutcomes": "1. Use regular expressions to solve different problems.\n\n2. Produce robust client and server side scripts in a variety of scripting languages using software engineering techniques such as review and extensive program testing.\n\n3. Handle user and system generated events using various scripting languages.\n\n4. Validate user input using various scripting languages for security purposes.",
    "creditHours": 3,
    "description": "Introduction to scripting languages for the integration of applications and systems. Scripting in operating systems, web pages, server-side application integration, regular expressions, event handling, input validation, selection, repetition, parameter passing, Perl, JavaScript, and PHP. A-F only. Pre: 211 (or concurrent), or consent. (Once a year)",
    "grading": "In class quizzes (100%)",
    "instructor": "Carleton Moore\ncmoore@hawaii.edu",
    "learningOutcomes": [
      "b",
      "c",
      "d",
      "f",
      "i"
    ],
    "objectives": "1. Use regular expressions to solve different problems.\n2. Produce robust client and server side scripts in a variety of scripting languages using software engineering techniques such as review and extensive program testing.\n3. Handle user and system generated events using various scripting languages.\n4. Validate user input using various scripting languages for security purposes.",
    "prerequisites": "211 (or concurrent), or consent.",
    "schedule": "Week 1: Introduction, course description and rules\nWeeks 2 - 4: Regular Expressions\nWeeks 5 - 7: JavaScript\nWeeks 8 - 10: PHP\nWeeks 11 - 13: Perl\nWeeks 14 - 16: Python",
    "textbooks": "none, Class Notes.",
    "title": "Introduction to Scripting"
  },
  {
    "alphaNumber": "ICS 415",
    "courseLearningOutcomes": "The student will:\nCreate valid Web pages using HTML(5).\nStyle HTML pages using CSS.\nBe able to develop their own style sheets.\nCreate web sites that work across many different display devices.\nUnderstand the basics of the JavaScript language.\nCreate and use JavaScript programs.\nLearn about a modern web technology.\nCreate an 8 to 10 minute presentation about the technology.\nDevelop a responsive web site.",
    "creditHours": 3,
    "description": "Introduction to emerging technologies for construction of World Wide Web (WWW)-based software. Covers programming and scripting languages used for the creation of WWW sites and client-server programming. Students will complete a medium-sized software project that uses languages and concepts discussed in class.",
    "grading": "10 Assignments, 30%\nIn class quizzes, 30%\nTechnology presentation 15%\nFinal Project 25%",
    "instructor": "Carleton Moore\ncmoore@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "i"
    ],
    "objectives": "The student will:\nCreate valid Web pages using HTML(5).\nStyle HTML pages using CSS.\nBe able to develop their own style sheets.\nCreate web sites that work across many different display devices.\nUnderstand the basics of the JavaScript language.\nCreate and use JavaScript programs.\nLearn about a modern web technology.\nCreate an 8 to 10 minute presentation about the technology.\nDevelop a responsive web site.",
    "policies": "Watch screen casts out side of class. In class work on exercises, practicing web development skills.",
    "prerequisites": "311 or consent",
    "schedule": "Week 1: Introduction to the course\nWeek 2: HTML(5) and CSS\nWeek 3: Responsive Web Design and Bootstrap\nWeeks 4, 5: JavaScript and jQuery\nWeeks 6, 7: Meteor\nWeeks 8 - 11: Technology Presentations\nWeeks 12 - 16: Final Project",
    "textbooks": "Course Notes",
    "title": "Introduction to Programming for the Web"
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


