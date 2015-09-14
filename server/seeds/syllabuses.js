// catalog descriptions: http://www.catalog.hawaii.edu/courses/departments/ics.htm

// Define all the courses with default values and if the database is empty, then add them.

var defaultSyllabuses = [
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
    "alphaNumber": "ICS 212",
    "creditHours": 3,
    "title": "Program Structure",
    "description": "Program organization paradigms, programming environments, implementation of a module from specifications, the C and C++ programming languages. Pre: 211 or consent.",
    "instructor": "Ravi Narayan\nrnarayan@hawaii.edu",
    "prerequisites": "211 or consent."
  },
  {
    "alphaNumber": "ICS 331",
    "creditHours": 4,
    "title": "Logic Design and Microprocessors",
    "instructor": "Peter-Michael Seidel",
    "description": "Basic machine architecture, microprocessors, bus organization, circuit elements, logic circuit analysis and design, microcomputer system design. Pre: 212 and 241, or consent.",
    "prerequisites": "212 and 241, or consent.",
    "grading": "11 Lab Assignments (20%)\n6 Homeworks (40%)\n3 Exams (40%)",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "h",
      "i"
    ],
    "objectives": "-\tStudents have sufficient knowledge of digital logic to take part in joint teams with electronic engineers in the design, configuration and application of digital hardware.\n-\tStudents can relate their understanding of computer architecture to the following items: electronics, digital logic, data representation, system architecture, micro operations, instruction set architecture, machine and assembly language, memory and data storage.\n-\tStudents can construct and debug combinational and sequential circuits.\n-\tStudents can construct, program and debug microprocessor circuits.",
    "policies": "Grading for ICS 331 Lab Assignments:\nLab assignments must be demonstrated in the lab to the TA and the TA determines the grading in each lab assignment. Most lab assignments just have to be passed, but there will also be some lab assignments where a more detailed grade than pass/fail is given that depends on the quality of the presented solution.\n\nTurning in assignments:\nFor general questions, turn in a detailed write-up of your solutions that include the solution and explanations how you got to your solutions. For assignments involving programming also submit the program listing (source code) and program test runs that demonstrate your program’s behavior. NOTE: Keep backup copies of your work. These could be important if there are questions about the completion of your work.\n\nThere is no contingency for late work.\n\nAcademic Dishonesty:\nThe occurrence of academic dishonesty will result in a grade of 0 for the assignment or exam and a memo in your ICS department file describing the incident. This will be done for each student involved. Should there be more than one memo of this type in your file, the incident will be referred to the Dean of Students.\nDisciplinary Sanctions - http://www.hawaii.edu/student/conduct/discipline.html\nSanctions include: Warning, Probation, Rescission of Grades or Degree, Suspension & Expulsion.\nFor more information on Academic Dishonesty see:\nhttp://www.hawaii.edu/student/conduct/imper.html",
    "textbooks": "Digital Logic Design:  A Rigorous Approach\nGuy Even & Moti Medina, ISBN-10 1107027535, Cambridge University Press, 368 pages, 2012.\nOnline copy available at: http://hyde.eng.tau.ac.il/Even-Medina/master.pdf",
    "schedule": "Discrete Math Background\nComputer system organization\nDigital logic elements\nCombinational logic design \nMachine level representation of data\nFunctional circuit modules\nSequential logic design and FSMs\nMachine level processor organization\nand microarchitecture.\nAssembly language and assembly level machine organization.\nImplementation of simple processor in logic simulation tool.\nImplementation of computer game on simple processor."
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
    "alphaNumber": "ICS 469",
    "title": "Cognitive Science",
    "instructor": "Martha Crosby"
  },
  {
    "alphaNumber": "ICS 431",
    "creditHours": 3,
    "prerequisites": "331 or EE 361/361L.",
    "title": "Computer Architecture",
    "instructor": "Peter-Michael Seidel",
    "description": "Memory management, control flow, interrupt mechanisms, multiprocessor systems, special-purpose devices.",
    "grading": "Projects (40%), Homeworks (35%), Exams (25%)",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i"
    ],
    "objectives": "-\tStudents have a solid understanding of the fundamentals in computer architectures.\n-\tStudents can implement simple computer architectures and their submodules.\n-\tStudents can simulate simple computer architectures.\n-\tStudents can quantitatively evaluate simple computer designs and their sub-modules.\n-\tStudents can relate computer architecture to system software and the performance of application programs.",
    "schedule": "Computer Performance, Quantitative Evaluation, Instruction Set Architectures, Pipelining, Interrupts, Memory Hierarchies, Speculative Execution, Simulation and Verification.",
    "textbooks": "S. M. Mueller & W. J. Paul, Computer Architecture - Complexity&Correctness, ISBN 3-540-67481-0, Springer Verlag, 2000.\n\nJohn P. Shen & Mikko H. Lipasti, Modern Processor Design, ISBN 0-07-057064-7, McGraw Hill, 2005."
  },
  {
    "alphaNumber": "ICS 211",
    "courseLearningOutcomes": "* Use and implement abstract data types such as lists, stacks, queues, and trees.\n* Select the appropriate searching or sorting algorithm base on the algorithm’s behavior.\n* Develop recursive algorithms and programs.\n* Use standard libraries or packages as well as advanced object-oriented programming techniques (polymorphism, inheritance, and encapsulation).\n* Produce robust and secure programs using exception handling and extensive program testing.",
    "creditHours": 4,
    "description": "Reinforce and strengthen problem-solving skills using abstract data types and introduce software development practices. Emphasize the use of searching and sorting algorithms and their complexity, recursion, object-oriented programming, and data structures.",
    "grading": "Grades are assigned based on your performance on:\n  * Two midterm exams and a final, each worth 10% of the grade for at total of 30% of the grade.\n  * Assignments, worth a total of 40% of the grade.\n  * Lecture quizzes, worth 15% of the grade.\n  * Lab attendance, worth 15% of the grade.\n  * There will also be up to 5% extra credit awarded by each TA.\n\nGrading will use the standard cutoffs of 97% (A+), 93% (A), 90% (A-), 87% (B+), 83% (B), 80% (B-), 77% (C+), 73% (C), 70% (C-), 67% (D+), 63% (D), 60% (D-).",
    "instructor": "Carleton Moore\nPOST 307B\ncmoore@hawaii.edu\n956-6920",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "i",
      "j"
    ],
    "objectives": "* Learn and implement standard data structures, including linked lists, stacks, queues, hash tables, and binary trees.\n* Learn and implement standard algorithms for sorting and searching and tree traversal\n* Learn and use the basics of algorithm analysis and complexity, including big-O notation\n* Be exposed to software engineering techniques such as: abstract data types, separation of definition and implementation, encapsulation, information hiding, testing and code reviews.\n* Learn and use object oriented programming in Java by designing, implementing, reviewing and testing solutions to problems\n* Learn to write algebraic equations in prefix, infix and postfix notation using preorder, inorder and postorder traversals\n* Learning to program in Java is only one of the goals for this course, but may be the most important: fluency in Java is needed to apply many of the other tools and information presented in this course as well as in subsequent ICS courses.",
    "prerequisites": "grade of \"B\" or higher in 111 or consent.",
    "schedule": "* Week 1 - Java Review\n* Week 2 - Object Oriented Programming\n* Week 3 - Simple Sorting\n* Week 4 - Array Lists\n* Week 5 - Linked Lists\n* Week 6 - Iterators\n* Week 7 - Midterm 1\n* Week 8 - Stacks\n* Week 9 - Queues\n* Week 10 - Recursion\n* Week 11 - Trees\n* Week 12 - Binary Data\n* Week 13 - Midterm 2\n* Week 14 - Complex Sorting Algorithms\n* Week 15 - Hashtables\n* Week 16 - Course Review",
    "textbooks": "Data Structures: Abstraction and Design Using Java, Second Edition, by Elliot B. Koffman and Paul A. T. Wolfgang, Wiley 2010.",
    "title": "Introduction to Computer Science II"
  },
  {
    "alphaNumber": "ICS 241",
    "courseLearningOutcomes": "* Students can describe an idea in the language of mathematics clearly and rigorously.\n* Students can prove or disprove a given assertion by using proving techniques such as direct proof, indirect proof (proof by contradiction), proof by contrapositive, proof by induction, and proof by construction.\n* Students can solve problems on a variety of topics in discrete mathematics such as recurrence systems, relations, counting, graph theory, Boolean algebra, logic circuit design, formal language theory, automata theory, and theory of computation.\n* Students can read & write pseudocode of an algorithm in a given grammar expressed in BNF.\n* Students can describe a trace of given pseudocode's execution for a given input.",
    "creditHours": 3,
    "description": "Program correctness, recurrence relations and their solutions, divide and conquer relations, relations and their properties, graph theory, trees and their applications, Boolean algebra, introduction to formal languages and automata theory. Pre: 141 or consent. FS",
    "grading": "10% in-class exercises\n90% midterms and final.",
    "instructor": "Kazuo Sugihara\nPOST 314H \nsugihara@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b"
    ],
    "objectives": "* To introduce a variety of topics in discrete mathematics\n* To develop ability of modeling, reasoning, proving, analysis, and algorithmic problem solving\n* To present examples of applications of discrete mathematics to computer science\n\n* To have students learn mathematical writing as the basis of technical writing",
    "policies": "None.",
    "prerequisites": "141 or consent.",
    "schedule": "* Week 1: Boolean Algebra\n* Week 2: Logic Circuits\n* Week 3: Linear Algebra\n* Week 4: Relations\n* Week 5: Graphs, Midterm\n* Week 6: Graphs\n* Week 7: Graphs\n* Week 8: Trees\n* Week 9: Trees\n* Week 10: Recurrences\n* Week 11: Counting\n* Week 12: Formal Languages\n* Week 13: Regular expressions, Midterm\n* Week 14: Turing machines\n* Week 15: Predicate logic\n* Week 16: Review\n* Week 17: Final Exam",
    "textbooks": "Kenneth H. Rosen, Discrete Mathematics and Its Applications, 7th Edition, McGraw-Hill, 2012.",
    "title": "Discrete Mathematics for Computer Science II"
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
    "schedule": "* Week 1. Introduction\n* Week 2. Local Shading Models\n* Week 3. Color: Physics, Color Perception, Color Spaces\n* Week 4. Linear Filters and Convolution\n* Week 5. Edge Detection\n* Week 6. Texture\n* Week 7. Basic Multi-view Geometry, Stereo\n* Week 8. Segmentation: Clustering, Midterm Exam\n* Week 9. Segmentation: Model Fitting\n* Week 10. Segmentation: Probabilistic Methods\n* Week 11. Tracking\n* Week 12. Template Matching using Classifiers\n* Week 13. Object Recognition\n* Week 14. Image Retrieval\n* Week 15. Image-based Rendering\n* Week 16. Project Presentation\n* Week 17. Final Exam",
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
    "alphaNumber": "ICS 313",
    "courseLearningOutcomes": "* Understand the differences among programming languages and paradigms as well as how these differences impact the development and maintenance of programs, such as development ease (time and effort), program correctness (including errors), code maintenance (understandability and extensibility), code execution (speed and image size), and code portability (hardware and compilers/interpreters).\n* Have the ability to program in different programming paradigms/styles, including functional and logic languages like Common Lisp or Scheme and Prolog.\n* Understand scripting languages such as Perl or JavaScript and their use.\n* Have the ability to represent and solve problems at an abstract level before coding them in a particular language.\n* Have the ability to understand new programming language concepts, and assess the ease with which these features may be implemented in a programming language.\n* Be able to choose the best programming language(s) for a project. Justify the choice with well-reasoned arguments based on language characteristics and the development environment such as the expertise of the programmer(s), resources and workplace politics.",
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
    "objectives": "See Learning Outcomes",
    "policies": "none",
    "prerequisites": "212 and 241, or consent.",
    "schedule": "* Week 1: Intro\n* Week 2: Functional languages, Prolog\n* Week 3: Syntax, Prolog\n* Week 4: Scope, Prolog\n* Week 5: Semantics, Prolog\n* Week 6: Functional languages, Lisp\n* Week 7: Control flow, Lisp\n* Week 8: Review, Lisp \n* Week 9: Midterm\n* Week 10:  Data types, Lips\n* Week 11: Scripting, Python\n* Week 12: Subroutines, Python\n* Week 13, 14, 15: Concurrency, Python\n* Week 16: Review\n* Week 17: Final exam",
    "textbooks": "Programming Language Pragmatics, Third Edition, by Michael L. Scott, publisher: Morgan Kaufmann, ISBN: 978-0123745149.",
    "title": "Programming Language Theory"
  },
  {
    "alphaNumber": "ICS 314",
    "courseLearningOutcomes": "(See course objectives.)",
    "creditHours": 3,
    "description": "System specification, modeling and analysis, prototyping, hierarchal design, program design methods, cost estimation, project management, computer-aided software design. Team-oriented software-design project. Pre: 211 or consent.",
    "grading": "Technical writing (30%)\nCode and other artifacts (30%)\nMidterm and final (10%)\nIn class activities (30%)",
    "instructor": "Philip Johnson\njohnson@hawaii.edu\nPOST 307",
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
    "objectives": "ICS 314 is a fast-paced immersion into significant software engineering concepts and technologies. Students will gain competancy with:\n  * Software engineering concepts\n  * Software engineering technologies\n  * Design\n  * Quality assurance\n  * Professional development and portfolios\n  * Technical writing\n  * Open source software engineering",
    "policies": "None.",
    "prerequisites": "211 or consent.",
    "schedule": "ICS 314 consists of the following modules. The number of weeks devoted to each is indicated in parentheses:\n* Introduction to the course (1)\n* Professional persona (1)\n* Open Source Software (1)\n* Coding (1)\n* Configuration Management (1)\n* Development Environments (1)\n* Quality Assurance (2)\n* User Interface Design (2)\n* Application Design (3)\n* Data Design (2)\n* Requirements Design (1)",
    "textbooks": "Course notes.",
    "title": "Software Engineering I"
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
    "alphaNumber": "ICS 355",
    "creditHours": 3,
    "title": "Security and Trust I: Resource Protections",
    "instructor": "Dusko Pavlovic\ndusko@hawaii.edu",
    "description": "Security and trust in computers, networks, and society. Security models. Access and authorization. Availability and Denial-of-Service. Trust processes and network interactions.",
    "prerequisites": "241 or (MATH 301 and 371).",
    "textbooks": "1. Lecture Notes\n2. Dieter Gollman, Computer Security (Wiley 2011, 3rd ed)\n3. Ross Anderson, Security Engineering (Wiley 2008, 2nd ed)",
    "objectives": "Students can explain and structure the basic concepts and techniques needed by every security professional.",
    "grading": "Homework assignments (30%)\nIn-Class assignments (30%)\nExams (40%)",
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
    "alphaNumber": "ICS 425",
    "courseLearningOutcomes": "See objectives.",
    "description": "Theoretical results, security policy, encryption, key management, digital signatures, certificates, passwords. Ethics: privacy, computer crime, professional ethics. Effects of the computer revolution on society.",
    "grading": "Participation (10%)\nHomework (4) (70%)\nFinal (20%)",
    "instructor": "Barbara Endicott-Popovsky\nendicott@hawaii.edu",
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
    "objectives": "* Analyze the information assurance (IA) context \n* Analyze and design IA policies and plans \n* Apply the principles of management \n* Understand and apply the information perspective",
    "policies": "Due to the special nature of Computer Security certain additions to the above policies will be in effect, they are the following: \n\n* Where appropriate, every experiment run in conjunction with this course will have certain rules and regulations regarding its conduct. These will be explained when the assignments are given and students are expected to comply with any additional restrictions. \n* To the extent that classroom computers are used to stage attacks under controlled circumstances, they will be physically disconnected from all external networks. All student users must maintain this lack of connection and must verify this lack of connection (with instructor help) before running any malicious code or exploit. \n* Students may be allowed to attempt to run harmful software and obtain root access on classroom computers isolated from the network, as long as the students in question agree to fix any problems they cause (e.g. hardware damaging code). \n* Security flaws and other problems should be pointed out immediately to the instructor. \n* Any student running an exploit in connection with assignments in this class must file an Exploit Approval form with the instructor, before running any malicious code or attempting any exploit on any classroom computer. \n* Students are responsible for the consequences of any actions they take without the knowledge of the lab instructor.",
    "prerequisites": "at least two ICS 300-level courses or consent.",
    "schedule": "* Week 1: Overview\n* Weeks 2, 3: IA Policy, law, and regulations\n* Week 4: IA Policies, IA Framework & Access Control Systems\n* Week 5: Security Planning \n* Week 6: Security Operations, Certification, Accreditation\n* Week 7: Incident Response and Disaster Recovery\n* Week 8: Technologies and Mechanisms\n* Week 9: Security Architecture and Network Security\n* Week 10: Cryptography\n* Week 11: Key Management and Digital Signatures\n* Week 12: Authentication: attacking passwords, challenge-response systems\n* Week 13: IA Auditing\n* Week 14: Security Awareness Training\n* Week 15: Presentations\n* Week 16: Review\n* Week 17: Final exam",
    "textbooks": "Course notes.",
    "title": "Computer Security and Ethics"
  },
  {
    "alphaNumber": "ICS 426",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "Information flow, confinement, information assurance, malicious programs, vulnerability analysis, network security, writing secure programs.",
    "grading": "Homework (4) 40%\nMidterm: 10%\nFinal project: 20%\nFinal exam: 15%\nParticipation: 5%",
    "instructor": "Barbara Endicott-Popovsky\nendicott@hawaii.edu",
    "learningOutcomes": [
      "a",
      "c",
      "d",
      "e"
    ],
    "objectives": "* Develop your own framework for thinking about the ethical consequences of major technological impacts\n* Analyze several major issues threatening the security of information in society\n* Learn and apply the 24 Deadly Sins of Software Development\n* Understand and apply IT network defense strategies",
    "policies": "None",
    "prerequisites": "351 or 451, or consent.",
    "schedule": "* Weeks 1, 2: Overview\n* Weeks 3, 4: Insider Threat\n* Weeks 5, 6: Data breach\n* Week 7: Midterm\n* Weeks 8, 9: Implementation Sins: Security Flaws\n* Weeks 10, 11: Cryptographic Sins\n* Weeks 12, 13: Networking Sins\n* Weeks 14, 15, 16: Final project\n* Week 17: Final exam",
    "textbooks": "Dark, Melissa, ed. (2010). Information Assurance and Security Ethics in Complex Systems: Interdisciplinary Perspectives. ISBN: 978-1-61692-245-0\n \nHoward, M., LeBlanc, D and Viega, J. (2009) 24 Deadly Sins of Software Security: Programming Flaws and How to Fix Them. New York: McGraw-Hill.\nISBN: 978-0-07-162675-0",
    "title": "Computer System Security"
  },
  {
    "alphaNumber": "ICS 455",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "Channel security. Trojan and noninterference. Basic concepts of cryptology. Cryptographic primitives. Protocols for authentication and key establishment.",
    "grading": "Homework (4) 40%\nFinal exam 60%",
    "instructor": "Dusko Pavlovic\ndusko@hawaii.edu",
    "learningOutcomes": [
      "a",
      "e",
      "g"
    ],
    "objectives": "* Students can apply the computational and mathematical models relevant for information assurance in cyber space.\n* Students can analyze the problems of information assurance, and identify and define the computing requirements and cryptographic techniques appropriate to its solution.\n* Students can design, implement, and evaluate a computer-based system, process, component, or program to meet security requirements of noninterference, confidentiality, or authenticity and integrity.\n* Students can function effectively on teams to accomplish a common goal.\n* Students have an understanding of social issues of information assurance.\n* Students can communicate effectively with a range of audiences concerned with the problems of information assurance in cyber space.\n* Students can analyze the local and global impact of information technologies and their security repercussions on individuals, organizations, and society.\n* Students can recognize the need for and an ability to engage in continuing professional and career development in the area of cyber security.\n* Students can use current techniques, skills, and tools necessary solving the basic problems confidentiality and privacy, or authenticity and integrity.",
    "policies": "None",
    "prerequisites": "355",
    "schedule": "1. Introduction: Private communication in a public world\n2. Information, channel and noninterference\n3. Encryption and cryptanalysis\n4. Modes of operation and stream cipher\n5. Key establishment\n6. Authentication\n7. Challenge-Response and Matching Conversation\n8. Protocol Derivations\n9. Man-in-the-Middle and Impersonation\n10. Pervasive security and multi-channel authentication\n11. Review",
    "textbooks": "1. Lecture Notes\n2. Charlie Kaufman, Radia Perlman and Mike Speciner, Network Security (Prentice Hall 2002, 2nd ed.)\n3. Douglas Stinson, Cryptography. Theory and Practice (Chapman and Hall 2005, 3rd ed.)",
    "title": "Security and Trust II: Information Assurance"
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
    "instructor": "Nodari Sitchinava",
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
    "prerequisites": "311 with C or better",
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
    "schedule": "* Part 1\t20-Feb\n* Part 2\t20-Mar\n* Part 3\t24-Apr\n* Resubmit\t8-May",
    "textbooks": "none",
    "title": "Design for Mobile Devices"
  },
  {
    "alphaNumber": "ICS 111",
    "courseLearningOutcomes": "* Be able to deconstruct problems to develop algorithms and eventually program code.\n* Be able to develop simple data structures in object oriented form.\n* Be able to develop running software that involves the reading of data, storage of data, and depiction of data using graphics, sound and interactivity.\n* Be able to present their work to an audience.",
    "creditHours": 4,
    "description": "An overview of the fundamentals of computer science emphasizing problem solving, algorithm development, implementation, and debugging/testing using an object-oriented programming language.",
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
    "objectives": "Program Learning Objective:\nThe objective is to introduce students about the broad field of data visualization, and relevant software tools, so that they are able to obtain basic mastery of the skills needed to: 1. turn raw data into effective visualizations of the data, 2. evaluate the efficacy of visualizations.\n\nInstitutional Learning Objective:\n\n1. Know- Breadth and Depth of Knowledge\n\nStudents will develop their understanding of the world with emphasis on Hawai’i by the use of geospatial data sets in the class, producing visualizations and therefore potentially hidden insights into regions of the world in relation to each other. Data may be about the economy, energy use, climate, for example.\n\n2. Do - Intellectual and Practical Skills\n\nStudents improve their abilities to think critically and creatively through designing, questioning and critiquing the visualizations produced by experts as well as their peers. Students conduct research by examining visualizations approaches used frequently online and described in conference and journal articles. Students improve their communication and reporting skills by having to give an oral presentation and demonstration of their visualization.\n\n3. Value - Personal and Social Responsibility\n\nStudents demonstrate excellence, integrity, and engagement through team-based collaborative projects that require them to learn how to work with differences in cultures and personal identities. Students will gain a better understanding of issues relating to the stewardship of he natural environment and civic participation in their communities through the data sets they will attempt to interpret and visualize.!",
    "prerequisites": "two ICS 300-level courses.",
    "schedule": "* Week 1: Introduction to Data Visualization, History of Visualization, Examples of Visualizations\n* Week 2: Introduction to tools for interactive data visualization on the Web such as Javascript, D3.js, Kinetic.js, Xmdv\n* Week 3: Fundamentals for creating effective tables and charts.\n* Week 4: Introduction to Information Visualization & Human Perception with Examples\n* Week 5: Project 1 presentations\n* Week 6: Project 1 presentations\n* Week 7: Introduction to Geospatial Visualization\n* Week 8: Introduction to Privacy Issues in Data Visualization\n* Week 9: Introduction to Social Network Visualization, Project 2 presentations\n* Week 10: Project 2 presentations\n* Week 11: SPRING BREAK\n* Week 12: Introduction to Scientific and Medical Visualization\n* Week 13: Introduction to Dynamic Data Visualization\n* Week 14: Visual Analytics\n* Week 15: Introduction to Big Data Visualization!\n* Week 16: Project 3 presentations",
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
    "schedule": "* Week 1: History and Taxonomy of video games\n* Week 2: Brainstorming and Designing the gameplay o Project planning\n* Week 3: Presentation of game play designs\n* Week 4: Introduction to game development tools\n* Week 5: Introduction to 3D computer graphics and stereoscopic computer graphics o Presentation of project planning timelines\n* Week 6: Software structure of a video game / real-time game loop design o In class review of project progress\n* Week 7: Deconstructing a game, In class review of project progress\n* Week 8: Sound and psychoacoustics, In class review of project progress\n* Week 9: Physical and perceptual limits of game players o User interfaces for gaming, In class review of project progress\n* Week 10: Mid-Semester Project Presentation\n* Week 11: SPRING BREAK\n* Week 12: Artificial Intelligence for games, In class review of project progress\n* Week 13: Game physics, Techniques for special visual effects in gaming (e.g. motion blur, lens flare, real time shadows, reflections), \n* Week 14: In class review of project progress\n* Week 15: Issues in multiplayer and networked game development o Hardware architectures of video game platforms, In class review of project progress\n* Week 16: Final Project Presentation, Final project document due",
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
    "schedule": "* Week 1: History and philosophy of AI \n* Week 2: Intelligent agents\n* Week 3 & 4: Search and heuristics\n* Week 5 & 6: Logic and planning \n* Week 7 & 8: Machine learning\n* Week 9: Evolutionary computation\n* Week 10 & 11: Natural language processing \n* Week 12: Perception\n* Week 13: Robotics\n* Week 14: Review",
    "textbooks": "Artificial Intelligence: A Modern Approach, by Stuart Russell and Peter Norvig",
    "title": "Artificial Intelligence"
  },
  {
    "alphaNumber": "ICS 215",
    "courseLearningOutcomes": "See objectives.",
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
    "objectives": "* Use regular expressions to solve different problems.\n* Produce robust client and server side scripts in a variety of scripting languages using software engineering techniques such as review and extensive program testing.\n* Handle user and system generated events using various scripting languages.\n* Validate user input using various scripting languages for security purposes.",
    "policies": "None",
    "prerequisites": "211 (or concurrent), or consent.",
    "schedule": "* Week 1: Introduction, course description and rules\n* Weeks 2 - 4: Regular Expressions\n* Weeks 5 - 7: JavaScript\n* Weeks 8 - 10: PHP\n* Weeks 11 - 13: Perl\n* Weeks 14 - 16: Python",
    "textbooks": "none, Class Notes.",
    "title": "Introduction to Scripting"
  },
  {
    "alphaNumber": "ICS 415",
    "courseLearningOutcomes": "See objectives",
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
    "objectives": "The student will:\n* Create valid Web pages using HTML(5).\n* Style HTML pages using CSS.\n* Be able to develop their own style sheets.\n* Create web sites that work across many different display devices.\n* Understand the basics of the JavaScript language.\n* Create and use JavaScript programs.\n* Learn about a modern web technology.\n* Create an 8 to 10 minute presentation about the technology.\n* Develop a responsive web site.",
    "policies": "Watch screen casts out side of class. In class work on exercises, practicing web development skills.",
    "prerequisites": "311 or consent",
    "schedule": "* Week 1: Introduction to the course\n* Week 2: HTML(5) and CSS\n* Week 3: Responsive Web Design and Bootstrap\n* Weeks 4, 5: JavaScript and jQuery\n* Weeks 6, 7: Meteor\n* Weeks 8 - 11: Technology Presentations\n* Weeks 12 - 16: Final Project",
    "textbooks": "Course Notes",
    "title": "Introduction to Programming for the Web"
  },
  {
    "alphaNumber": "ICS 390",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "The course concentrates on the theory and practice of computer and information ethics. It covers the basics of ethical decision‐making, and emphasizes group work and presentations. Topics studied in the course include risk and reliability, privacy, info‐war, crime, access, business ethics, copyright, patents, and other relevant, timely issues. The class uses writing (term papers, weekly on-line written discussions and reviews, and critiques) to promote the learning of course materials. The class uses oral presentations and activities (presentations, class discussions, critiques, lab sessions, contact hours, and teaching) to promote learning courses materials.",
    "grading": "2 essays (8% each), on-line discussion (27%), in-class discussion and facilitation (15%), presentation (8%), lab and open lab support (14%), teaching (18%), instructional critique (2%).",
    "instructor": "Martha Crosby\ncrosby@hawaii.edu",
    "learningOutcomes": [
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "n"
    ],
    "objectives": "* Students can explain different ethical schools of thought.\n* Students can apply ethical reasoning skills to situations.\n* Students can develop and implement lesson plans.\n* Students can effectively communicate in various situations.\n* Students can explain legal, moral, and ethical issues concerning technology.\n* Students can explain the impact of computers in society, locally, and globally.",
    "policies": "-\tPlagiarism will not be tolerated. All sources must be cited. Instruction on how to correctly cite a source will be given before the first paper is due. An assignment including plagiarized material will receive an F. \n-\tLate assignments will lose 10% for each day late (starting immediately after the time the assignment is due). The final essay and on-line discussions will not be accepted for credit if they are submitted late.  All assignments are required, even if they are too late to be worth anything.  \n-\tAttendance is required at all course sessions. If a student would like to make-up missed work due to a valid excused absence, the student must contact the instructor and provide documentation for the excused absence on the day the student returns to class.",
    "prerequisites": "101 (Alpha) and consent.",
    "schedule": "* Week 1: Class Orientation, \n* Week 2: Discussion leader and mediation techniques, academic honesty, and time management, \n* Week 3: Catalysts for Change, \n* Week 4: Intro to Ethics, \n* Week 5: Networking, \n* Week 6: Intellectual Property, \n* Week 7: Information Privacy, \n* Week 8: Privacy and the Government, \n* Week 9: Computer and Network Security, \n* Week 10: Computer Reliability, \n* Week 11: Professional Ethics, \n* Week 12: Work and Wealth, \n* Week 13-Week16: Final Presentations",
    "textbooks": "Ethics for the Information Age, 6th Edition, Michael J. Quinn",
    "title": "Computing Ethics for Lab Assistants"
  },
  {
    "alphaNumber": "ICS 101",
    "courseLearningOutcomes": "Students will develop a broad understanding of various areas of computer science.\nStudents will learn how to search for information using Boolean operators.\nStudents will learn how data is transferred on the Internet. \nStudents will learn to select and use software to solve problems.\nStudents will use productivity and multimedia software in their areas of interest.\nStudents will understand the importance of learning core skills and keeping their skills up-to-date. \nStudents will learn how to use text-based and GUI-based operating systems.\nStudents will work in teams to present information.",
    "creditHours": 4,
    "description": "Fundamental concepts and terms of computer technology, application software for problem solving, computer technology trends and impact on individuals and society.",
    "grading": "* lecture activities (11.5%), \n* on-line lectures (12%), \n* 3 exams/tests (17%), \n* 4 practical quizzes (15%), \n* simulation assignments (18%), \n* projects (26.5%)",
    "instructor": "Martha Crosby\ncrosby@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "d",
      "e",
      "f",
      "h",
      "i",
      "j",
      "m",
      "n"
    ],
    "objectives": "Students will develop a broad overview of various areas of computer science.\nStudents will learn to select and use software to solve problems.\nStudents will develop an understanding of productivity.\nStudents will develop an understanding of multimedia.\nStudents will understand the importance of learning core skills and keeping their skills up-to-date. \nStudents will learn how to use different types of operating systems.\nStudents will work in teams to present information.",
    "policies": "None.",
    "schedule": "* Week 1: Orientation, OS basics, boolean searching, email\n* Week 2: Information assurance, file management, file compression, word processing, \n* Week 3: Networking, word processing, \n* Week 4: Number systems, presentations, \n* Week 5: presentations skills, presentation development, \n* Week 6: Databases, spreadsheets, \n* Week 7: exam, spreadsheets, \n* Week 8: Conditional logic, spreadsheets, \n* Week 9: Computer visualization, spreadsheets, \n* Week 10: History and anatomy of computer games, vector graphics, \n* Week 11: Computer graphics, bitmap graphics, \n* Week 12: Social computing, text-based operating systems, \n* Week 13: Interface design, Web development, \n* Week 14: algorithms, Web development, \n* Week 15: introduction to programming, \n* Week 16: Review, \n* Week 17: final exam",
    "textbooks": "ICS 101 Workbook (Department of Information and Computer Sciences, SimNet software (McGraw-Hill), iClicker",
    "title": "Tools for the Information Age"
  },
  {
    "alphaNumber": "ICS 311",
    "courseLearningOutcomes": "* Students are aware of fundamental algorithms of computer science, and their associated data structures and problem solving techniques.\n* Students can compose a problem formulation of a real-world problem mathematically.\n* Students can decide whether given pseudocode is correct for a given problem formulation; construct a counterexample if the given pseudocode is incorrect; and outline a proof for its correctness otherwise.\n* Students can design a correct algorithm for a given problem and describe the algorithm as pseudocode in a given pseudocode syntax.\n* Students can analyze the worst-case and best-case space and time complexities of a given algorithm.\n* Students can create a software program for accurately implementing an algorithm specified in pseudocode. Students can implement software objects meeting Abstract Data Type specifications.\n* Students can produce a software product including documentation for given requirements & design specifications.",
    "creditHours": 4,
    "description": "Design and correctness of algorithms, including divide-and-conquer, greedy and dynamic programming methods. Complexity analyses using recurrence relations, probabilistic methods, and NP-completeness. Applications to order statistics, disjoint sets, B-trees and balanced trees, graphs, network flows, and string matching.",
    "grading": "3 projects (worth 10% each)\n3 midterms (worth 10% each)\nin-class assignments (worth 20% total)\nfinal exam (worth 20%)",
    "instructor": "Kazuo Sugihara\nPOST 314H\nsugihara@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "f"
    ],
    "objectives": "* To introduce a variety of topics in discrete mathematics\n* To develop ability of modeling, reasoning, proving, analysis, and algorithmic problem solving\n* To present examples of applications of discrete mathematics to computer science\n* To have students learn mathematical writing as the basis of technical writing",
    "policies": "10% in-class\n90% midterms and final",
    "prerequisites": "211 and 241, or consent.",
    "schedule": "* Week 1: Introduction\n* Week 2: Growth of functions\n* Week 3: Abstract data types\n* Week 4: Probabilistic analysis\n* Week 5: Hash tables\n* Week 6: Divide and conquer algorithms\n* Week 7: Binary search trees\n* Week 8: Heap sort\n* Week 9: Quick sort\n* Week 10: Balanced trees\n* Week 11: Dynamic programming\n* Week 12: Greedy algorithms\n* Week 13: Graphs\n* Week 14: Amortized analysis\n* Week 15: Disjoint sets\n* Week 16: Review\n* Week 17: Final exam\n\nEach week requires reading one chapter from the text, approximately 30 pages on average per week.",
    "textbooks": "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest and Clifford Stein, Introduction to Algorithms, Third Edition, The MIT Press, 2009.",
    "title": "Algorithms"
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
    "policies": "none",
    "prerequisites": "212 (or concurrent), or consent.",
    "schedule": "* Week 1: Introduction and historical perspective\n* Week 2: Computer architecture principles\n* Week 3: Numbers and computers\n* Week 4: The x86 architecture\n* Weeks 5,6: The NASM assembly programming environment\n* Week 7,8,9: Essential assembly programming\n* Week 10: Bit operations\n* Week 11: Subprograms\n* Week 13: Regular expressions, lexical analysis\n* Week 14: Context-free grammars, syntactic analysis\n* Week 15: Linking, Loading, Debugging",
    "textbooks": "PC Assembly Language, A. Carter (http://www.drpaulcarter.com/pcasm/)\nNASM User Manual (http://www.nasm.us/doc/)",
    "title": "Machine-Level and Systems Programming"
  },
  {
    "alphaNumber": "ICS 432",
    "courseLearningOutcomes": "(See objectives)",
    "creditHours": 3,
    "description": "Principles of concurrent and high performance programming. Multi-threading in C and Java for shared-memory programming. Distributed memory programming with Java. Introduction to cluster computing. A-F only.",
    "grading": "Homework and programming assignments (60%)\nMidterm (15%)\nFinal (25%)",
    "instructor": "Henri Casanova\nhenric@hawaii.edu",
    "learningOutcomes": [
      "b",
      "c"
    ],
    "objectives": "* Master concepts of program performance optimization, of multi-core architectures, and of concurrent programming. \n* Become proficient in performance tuning of non-concurrent C programs.\t\t\n* Become proficient in multi-threaded programming in C and in Java.\t\n* Gain hands-on experience in debugging and performance tuning of multi-threaded programs on multi-core architectures.\n* Gain exposure to advanced high-performance computing topics such as cluster computing and GPU programming.\t\t\t\t\t\t \n* Be engaged in a final project in which all the knowledge acquired in the course is applied to optimizing the performance of real-world software.",
    "policies": "none",
    "prerequisites": "212 or consent.",
    "schedule": "* Week 1: Review of processes and threads\n* Week 2: Java threads and thread safety, Java Swing\n* Week 3: Thread Synchronization with Locks and Condition Variables\n* Week 4: Threads in C with Pthreads\n* Week 5: Semaphores and Monitors\n* Week 6, 7: Classic Concurrency Problems\n* Week 7: The java.util.concurrent package\n* Week 8: Measures of program performance and sequential program optimization\n* Week 9: Concurrency and Performance\n* Week 10: Multithreading with OpenMP\n* Weeks 11, 12: Shared-memory programming for Performance\n* Week 13: Identifying bottlenecks, profiling\n* Week 14: Hardware and Concurrency\n* Week 15: Distributed systems, final review",
    "textbooks": "No textbook, only lecture notes.",
    "title": "Concurrent and High-Performance Programming"
  },
  {
    "alphaNumber": "ICS 351",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "Overview of the internet and its capabilities; introduction to HTTP, TCP/IP, ethernet, and wireless 802.11; routers, switches, and NAT; network and wireless security; practical experience in designing and implementing networks.",
    "grading": "Labs (60%)\nQuizzes (30%)\nFinal exam (10%)",
    "instructor": "Edo Biagioni\nesb@hawaii.edu",
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
    "objectives": "* Design and build networks using routers and switches \n* Manage, monitor, and find problems with networks \n* Learn elements of the TCP/IP protocol suite \n* Become familiar with network configuration of routers and hosts \n* Learn about routing protocols in use in the Internet \n* Learn elements of network security, including firewalls and NAT",
    "policies": "Attendance is mandatory (but not graded). In particular, participation in the lab sessions is necessary in order to successfully do the lab reports.\n\nLab reports are due on time, with a loss of 20% of the points for every day they are late. Quizzes and exams must be taken early or on time, unless there are well-documented extenuating circumstances, in which case the same 20% per day rule will apply (and only if student makes special arrangements with the instructor to take the quiz late).\n\nNo food or drinks in the lab.",
    "prerequisites": "141 and 211, or consent.",
    "schedule": "* Week 1: Intro\n* Week 2: Commands, network monitoring, protocols\n* Week 3: Addressing, masks, routing\n* Week 4: Masks, networks, subnetworks\n* Week 5: Routing, OSPF, BGP\n* Week 6: Routing, multi-casting\n* Week 7: TCP\n* Week 8: NAT, network configuration\n* Week 9: DNS\n* Week 10: 802.11, IPv6, HTTP\n* Week 11: HTTPS, SNMP\n* Week 12: Wireless ad-hoc networks\n* Week 13: Security, \n* Week 14: Review\n* Week 15: Networking problems and solutions\n* Week 16: Networking problems and solutions\n* Week 17: Final exam",
    "textbooks": "Mastering Networks -- An Internet Lab Manual 5.0\", by Jörg Liebeherr and Magda el Zarki, 2004.",
    "title": "Network Design and Management"
  },
  {
    "alphaNumber": "ICS 290",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 1,
    "description": "Exploration of the specialties of computer science. Meets every two weeks for 2.5 hours to explore specific areas in computer science. CR/NC only. (Once a year)",
    "grading": "Writings that summarize the presentations (80%)\nFinal exam (20%)",
    "instructor": "Curtis Ikehara\ncikehara@hawaii.edu",
    "learningOutcomes": [
      "e",
      "g"
    ],
    "objectives": "* Students are exposed to a variety of careers through presentations by local high technology professionals.",
    "policies": "None.",
    "schedule": "This is a seminar-style course. Students listen to presentation by a variety of local high technology professionals about careers in their discipline. \n\nReadings are assigned prior to each presentation so that students can familiarize themselves with the computing discipline to be presented. On average, about 10 pages per presentation.",
    "textbooks": "Course notes.",
    "title": "Computer Science Careers: An Exploration of the Specialties of Computer Science"
  },
  {
    "alphaNumber": "ICS 451",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "Network analysis, architecture, digital signal analysis and design; circuit switching, packet switching, packet broadcasting; protocols and standards; local area networks; satellite networks; ALOHA channels; examples.",
    "grading": "assignments (45%), 2 exams and a final, each worth 15% of the grade (total 45%), 2 reviews of your colleagues' assignments (total 10%).",
    "instructor": "Edo Biagioni\nesb@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "e",
      "h",
      "i",
      "j"
    ],
    "objectives": "In this course, students will:\n* learn about computer networking, focusing on the fundamental design principles of computer networks and protocols.\n*  study networks of practical importance, including the Internet, TCP/IP, and wireless networks.\n*  learn to write in C computer programs to work with the network, specifically implementing clients, servers, and protocols.",
    "policies": "None",
    "prerequisites": "212 and 311, or consent",
    "schedule": "* week 1: course overview, sockets API, network application programming\n* week 2: sockets API in C, Windows, C programming reminders, layered reference models, Internet and OSI reference models\n* week 3: Application Layer, Domain Name System\n* week 4: email, HTTP\n* week 5: transport layer, Alternating Bit Protocol, sliding window, reliable transmission, connections\n* week 6: exam review and exam\n* week 7: TCP connections, TCB, Nagle Algorithm, UDP, congestion control\n* week 8: network layer protocols, packet forwarding, virtual circuits, static routing, distance-vector routing\n* week 9: link-state Routing, IP: addresses, netmasks, headers, fragmentation, \n* week 10: IPv6 socket programming, ICMP including ping and traceroute, ARP\n* week 11: summary of IP processing, DHCP, IPv6, Firewalls, NAT, IP routing: RIP, OSPF\n* week 12: exam review and exam\n* week 13: IP routing: domains, policy, BGP, data link layer, framing, error detection and correction \n* week 14: Medium Access Control, ALOHA Net, CSMA, PPP, Ethernet\n* week 15: Ethernet hubs and switches, Spanning Tree Protocol, Virtual LANs, 802.11 and ad-hoc networks, 802.11 security\n* week 16: course review",
    "textbooks": "\"Computer Networking : Principles, Protocols and Practice\", by Olivier Bonaventure, freely available at http://inl.info.ucl.ac.be/CNP3",
    "title": "Data Networks"
  },
  {
    "alphaNumber": "ICS 210",
    "courseLearningOutcomes": "The primary goal of this course is to help you understand how information systems and society co-evolve.  We will investigate and discuss historical and current information systems—which include technologies, institutions and people—with an eye toward understanding on a social level both how they operate and why.",
    "creditHours": 3,
    "description": "Lecture/discussion critically explores sociopolitical dimensions of Information and Communication Technology (ICT), and the information professions. A-F only. Pre: departmental approval. (Once a year)",
    "grading": "Information flow assignment (10%)\nInformation seeking journal (10%)\nOpen mic session (20%)\nMidterm (20%)\nFinal project (20%)\nFinal exam (10%)\nExercises and participation (10%)",
    "instructor": "Rich Gazan",
    "learningOutcomes": [
      "e",
      "g"
    ],
    "objectives": "* Students understand the impact of computers on society.\n* Students have a better understanding of information technology careers.",
    "policies": "My role in this course is to introduce you to a range of concepts related to information and its role in society, and to provide an environment where you can demonstrate your understanding and apply these concepts to situations that interest you.  The format of the course will be lecture/discussion.\n\nThe issues covered in this course draw from a diverse set of fields and traditions which go beyond computer science.  The textbook chapters provide an overall structure to the main course concepts, but we will explore additional applications of course-related issues in current events and other resources as well.  Expect to find, read and discuss additional relevant material outside the textbook, and to share what you find with the class.  Readings and lectures will not overlap completely, and may change throughout the term.  You will be responsible for demonstrating understanding of all course content.\n\nCome to class having read and understood the day’s readings—you can guarantee yourself an excellent participation grade if you come prepared with well-grounded questions.  You will be expected to complete all readings and assignments professionally and on time, and to participate actively in class discussions, both in person and online. \n\nYou must complete all assignments to pass this course.  Late assignments will be penalized five points up to 24 hours late, plus two points for every additional day past the due date, unless prior arrangements are made with the instructor.",
    "prerequisites": "departmental approval.",
    "schedule": "* Wk 1, Introduction and overview\n* Wk 2, Fundamental concepts of information (Information flow assignment)\n* Wk 3, Information needs & seeking behavior\n* Wk 4, History of information systems (Open mic proposal)\n* Wk 5, Current information systems (Open mic session)\n* Wk 6, Information institutions (Open mic session)\n* Wk 7, Information work (Open mic session; Information seeking journal)\n* Wk 8, The information society\n* Wk 9, Economics of information\n* Wk 10, Information policy and power \n* Wk 11, no class meeting (take-home Midterm)\n* Wk 12, Post-midterm review and discussion\n* Wk 13, Copyright and privacy (Final project proposals)\n* Wk 14, Information ethics\n* Wk 15, Information in the future\n* Wk 16, Final project presentations\n* Wk 17, Final exam",
    "textbooks": "Lester, June and Wallace C. Koehler Jr. (2007).  Fundamentals of Information Studies: Understanding Information and Its Environment (2nd edition).  New York: Neal-Schuman.",
    "title": "Information Systems in Society"
  },
  {
    "alphaNumber": "ICS 424",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "Experience producing applications with at least two different applications frameworks.",
    "grading": "7 technical papers (50%)\n7 programming assignments (50%)",
    "instructor": "Wes Peterson\nwes@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "e",
      "f",
      "i",
      "m"
    ],
    "objectives": "* Students have experience with at least two application frameworks (Microsoft Foundation Classes and OpenGL).\n* Students can write technical reports on a variety of topics related to application framework design and implementation.",
    "prerequisites": "212, 311, and 313; or consent.",
    "schedule": "This class is organized into 8 two week modules.  In each of the first 7 modules, students are required to write one program using an application framework (either Microsoft MFC or OpenGL) and write one technical report (from a supplied reading list).\n\nIn the final two weeks, the class works together to develop a summary of lessons learned.",
    "textbooks": "Course notes",
    "title": "Application Frameworks"
  },
  {
    "alphaNumber": "ICS 442",
    "courseLearningOutcomes": "See objectives",
    "creditHours": 3,
    "description": "Applications of mathematical methods in computer science with emphasis on discrete mathematics, numerical computation, algebraic models, operations research.",
    "grading": "1 midterm (30%)\n1 final project (50%)\n1 final exam (20%)",
    "instructor": "Art Lew\nartlew@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "i",
      "j"
    ],
    "objectives": "* Students will have an understanding of when and how to apply various analytical techniques.\n* Students will get an in-depth understanding of dynamic programming as an analytical techniques.",
    "policies": "None",
    "prerequisites": "311 or consent",
    "schedule": "Week 1: Overview of analytical models and methods\t\nWeek 2: Applications of analytical models and methods\t\nWeek 3: Modeling of DP Problems\t\nWeek 4: The DP Specification Language gDPS\t\nWeek 5: DP Problem Specifications in gDPS\t\nWeeks 6-9: : Bellman Nets: A Class of Petri Nets\t\nWeeks 10-14: Design and Implementation of DP Tool\t\nWeeks 15-16: Other Solver Results\nWeek 17: Final exam",
    "textbooks": "Dynamic Programming, A. Lew and H. Mauch",
    "title": "Analytical Models and Methods"
  },
  {
    "alphaNumber": "ICS 441",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "Grammars, sequential machines, equivalence, minimalization, analysis and synthesis, regular expressions, computability, unsolvability, Gödel's theorem, Turing machines.",
    "grading": "A few assignments (100%) in which students have to solve given theoretical problems and write technical reports on their solutions to the given problems, where the last assignment is the take-home final exam",
    "instructor": "Kazuo Sugihara\nsugihara@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b"
    ],
    "objectives": "* Students can write rigorous proofs.\n* Students can compose analytical arguments.\n* Students can conduct theoretical research on topics in fields of their interests.\n* Students can write theoretical papers.",
    "policies": "none",
    "prerequisites": "311 or consent",
    "schedule": "* Weeks 1-2: Basics of Formal Languages and Automata Theory (Review of ICS241)\n* Weeks 3-5: Regular Sets, Regular Grammars and Finite Automata. Assignment 1\n* Weeks 6-8: Context-Free Languages, Regular Grammars and Pushdown Automata, Assignment 2\n* Weeks 9-10: Turing Machines\n* Weeks 11-12: Computability\n* Weeks 13-15: Computational Complexity Theory Assignment 3\n* Week 16 Review\n* Week 17: Final exam",
    "textbooks": "\"Introduction to Automata Theory, Languages, and Computation,\" John E. Hopcroft and Jeffrey D. Ullman",
    "title": "Theory of Computation"
  },
  {
    "alphaNumber": "ICS 452",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "Sensors, actuators, signal processing, paradigms of robotic software design, introduction to machine learning, introduction to computer vision, and robot-to-human interaction.",
    "grading": "3 homework assignments (30%)\nFinal project (40%)\nFinal exam (20%)\nInclass participation (10%)",
    "instructor": "Curtis Ikehara\ncikehara@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "g",
      "i"
    ],
    "objectives": "* Students will have completed several programming assignments and will also\nhave implemented a project so that they can acquire experience in software\ndesign for robotics.\n* Students will understand basic hardware aspects of robotics and how\nprogramming is influences by robotic hardware issues.\n* Students will understand the design principles and implement dataflow\nprogramming for robotics.\n* Students will understand the programming issues of robotic programming for\nindividual robots as well as multiple cooperating robots.\n* Students will be proficient at programming both semi-autonomous and\nautonomous robotic systems.\n* Students will learn to add robustness to their software to compensate for sensor and actuator problems.",
    "policies": "None.",
    "prerequisites": "Two ICS 300-level courses or consent. Recommended: 312 and 313.",
    "schedule": "Week 1: Introduction\nWeeks 2, 3 Robotics hardware\nWeek 4, 5: Movement planning\nWeek 6: Robust software\nWeek 7: Signal processing algorithms\nWeeks 8, 9: Computer vision\nWeeks 10, 11: Machine learning\nWeeks 12-15: Advance robotics topics\nWeek 16: Project presentations\nWeek 17: Final exam",
    "textbooks": "Computational Principles of Mobile Robotics, 2nd Edition, Gregory\nDudek & Michael Jenkin, Paperback, ISBN:9780521692120, July 2010",
    "title": "Software Design for Robotics"
  },
  {
    "alphaNumber": "ICS 481",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "Fundamentals of computer graphics including graphics hardware, representation, manipulation, and display of two- and three-dimensional objects, use of commercial software.",
    "grading": "* Required projects (4 ): 40% \n* Term project: 30%\n* Midterm 15%\n* Final (15%)",
    "instructor": "Stephen Itoga\nitoga@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "i"
    ],
    "objectives": "* Introduce students to all aspects of computer graphics: hardware, software, applications \n* Understand the basic concepts underlying computer graphics \n* Gain experience with at least one graphical application programming interface (OpenGL) \n* Carry out a large programming project of your choice \n* Become well versed in the basic procedures for developing graphical software",
    "policies": "None.",
    "prerequisites": "311 and either MATH 216, MATH 242, or MATH 252A; or consent.",
    "schedule": "Weeks 1, 2: Introduction\nWeeks 3, 4: Drawing geometric objects\nWeeks 5, 6, 7, 8: Viewing objects\nWeek 9: Color\nWeek 10: Lighting\nWeek 11: Display lists\nWeek 12: Frame buffers\nWeeks 13, 14: Advanced topics\nWeeks 15, 16: Presentations\nWeek 17: Final exam",
    "textbooks": "OpenGL Programming Guide, Addison-Wesley.",
    "title": "Introduction to Computer Graphics"
  },
  {
    "alphaNumber": "ICS 419",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "Scientific, psychological and philosophical bases of systems design, including a survey of human-factors and ergonomic standards; the nature of innovation and creativity as it relates to systems design. Web-enhanced course.",
    "grading": "Final exam (10%)\nHomework (60%)\nFinal project (30%)",
    "instructor": "Dennis Streveler\nstrev@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "e",
      "f",
      "g",
      "i"
    ],
    "objectives": "* Students can apply top-down and bottom-up design principles.\n* Students can evaluate the quality of designed artifacts.\n* Students can apply human-computer interaction principles to design.",
    "policies": "None.",
    "prerequisites": "two ICS 300-level courses with grade of B or better, or consent.",
    "schedule": "Topics are blended throughout the course. Here is the rough amount of time spent on each topic:\n\n* Introduction to system design (2 weeks)\n* Top-down design thinking (3 weeks)\n* Principles of industrial design (2 weeks)\n* Bottom up design (2 weeks)\n* Human-computer interaction (3 weeks)\n* Ergonomics (2 weeks)\n* Review and project presentations (2 weeks)",
    "textbooks": "Norman, The Design of Everyday Things, 1988-2002",
    "title": "The Science, Psychology and Philosophy of Systems Design"
  },
  {
    "alphaNumber": "ICS 462",
    "courseLearningOutcomes": "* Students will be able to extend an existing game program by adding AI code\n* Students will be able to program goal-oriented movement of non-player characters\n* Students will be able to write code to find near-optimal paths using A* search and other techniques\n* Students will be able to write decision making code utilizing decision trees, state machines, fuzzy logic, production systems, and/or scripts\n* Students will understand and apply machine learning algorithms to games\n* Students will experience AI program competitions\n* Students will be able to successfully present ideas, code, and techniques both individually and as part of a group (Oral focus)\n* Students will be able to write descriptive, comparative, and critiquing papers on game AI (Writing Intensive)",
    "creditHours": 3,
    "description": "Techniques to stimulate intelligence in video games: movement, pathfinding with A* search, decision/behavior trees, state machines, machine learning, tactics. Extend games with your own AI implementations; experience \"shootout\" contests for the best AI algorithm/implementation.",
    "grading": "15% on assignments, 5% on quizzes, 10% on the Midterm exam, 20% on the Final exam, 40% on oral presentations",
    "instructor": "David Chin\nchin@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "d",
      "f",
      "i"
    ],
    "objectives": "See Learning Outcomes",
    "policies": "none",
    "prerequisites": "212 and (314 or 361) and (PHYS 151 or PHYS 170)",
    "schedule": "* Week 1: Introduction: AI vs. Game AI; Introduction to BZFlag, the target game for this class\n* Week 2: Presenting to Win\n* Week 3: Movement, Basic 2D & Physics; Movement in BZFlag\n* Week 4: Jumping, Coordinated Movement, Motor Control & 3D; Individual Presentation: My Game Feature Proposal\n* Week 5: Pathfinding, Basic; Pathfinding in BZFlag\n* Week 6: Pathfinding, Advanced; more on Pathfinding in BZFlag\n* Week 7: Decision Trees, State Machines & Behavior Trees; Applying Decision Making to BZFlag \n* Week 8: Fuzzy Logic, Markov Systems & Goal-Oriented Behavior; Individual Presentation: Code Review\n* Week 9: Rule-Based Systems,Blackboard Architectures,Scripting and Action Execution; Review for Midterm\n* Week 10: Midterm Exam; Final Project Description\n* Week 11: Waypoint Tactics and Tactical Analyses; Tactics in BZFlag\n* Week 12: Tactical Pathfinding and Coordinated Action\n* Week 13: more on Tactics in BZFlag; Machine Learning \n* Week 14: Decision Learning with Naive Bayes Classifiers and ID3; Reinforcement Learning and Artificial Neural Networks \n* Week 15: Group Presentation: AI Techniques Used for AI Shootout; Final Project AI Shootout \n* Week 16: Review for Final Exam; Group Presentation: Post-Mortem Analysis of AI Shootout",
    "textbooks": "Artificial Intelligence for Games, Second Edition by Ian Millington and John Funge; Presenting to Win: The Art of Telling Your Story, Updated and Expanded Edition by Jerry Weissman",
    "title": "Artificial Intelligence for Games"
  },
  {
    "alphaNumber": "ICS 361",
    "courseLearningOutcomes": "• Students are familiar with the fundamental concepts and algorithms of Artificial\nIntelligence including searching, planning, problem solving, logic and knowledge\nrepresentation.\n• Students are able to implement AI algorithms in a functional (e.g., Scheme or Lisp) or logic (e.g., Prolog) programming language.\n• Students appreciate the problems, current limitations and future potential of AI\n• Students are able to recognize when AI techniques might be successfully applied to problem and when the problem is beyond the current state-of-the-art in AI\n• Students have successfully implemented several small AI programs.",
    "creditHours": 3,
    "description": "Introduction to the theory of Artificial Intelligence and the practical application of AI techniques in Functional (Common LISP and/or Scheme) and Logic (Prolog) programming languages. Students gain practical experience through programming assignments and projects. A-F only.",
    "grading": "40% on assignments\n20% on in-class quizzes\n15% on the midterm exam\n25% on the final exam.",
    "instructor": "David N. Chin\nchin@hawaii.edu\nPOST 317",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "i"
    ],
    "objectives": "The objective of the course is to expose students to the concepts in artificial intelligence and the functional and logic programming paradigms. This is fundamental knowledge for all computer science students as described in the current ACM (Association for Computing Machinery) curriculum recommendations. Artificial intelligence has only been available to seniors (400 level) and infrequently offered at UH. The addition of this course will bring the fundamentals of artificial intelligence along with alternative programming paradigms to more students. This course integrates with the new curriculum and provides an alternative to ICS313, programming language theory, which is a requirement for ICS majors.",
    "policies": "none",
    "prerequisites": "241 and (212 or 215), or consent.",
    "schedule": "* Week 1: Course introduction and goals, why study AI Programming? An overview of past and present artificial intelligence programming\n* Week 2: Functional programming, the Lisp top-level loop, basic syntax and semantics.\n* Week 3: Creating functions and programs in Lisp for solving problems, basic search techniques in state spaces\n* Week 4: Built-in operations, variables and data types in Lisp, list processing\n* Week 5: Static and dynamic scoping, depth-first, breadth-first and iterative deepening searches\n* Week 6: Lisp macros, destructive operations, complex data structures\n* Week 7: Informed search algorithms, best-first and A*. Knowledge representation for search problems \n* Week 8: Expert Systems, forward and backward chaining, applications in specialized areas such as medicine\n* Week 9: Intelligent agents, agent environments, agent architectures, and reasoning methods\n* Weeks 10-11: Midterm exam, Logic Programming\n* Week 12: Predicate logic, deduction, introduction to programming in Prolog * * Week 13: Resolution, Prolog databases, theorem proving\n* Week 14: Backtracking, Prolog control structures\n* Week 15: Building expert systems in Prolog, knowledge engineering\n* Week 16: Design and implementation of large AI programs, knowledge acquisition",
    "textbooks": "AI Algorithms, Data Structures, and Idioms in Prolog, Lisp, and Java, 6th edition by George F. Luger and William A Stubblefield, Addison Wesley. \nArtificial Intelligence: Structures and Strategies for Complex Problem Solving, 6th edition by George F. Luger, Addison Wesley.",
    "title": "Introduction to Artificial Intelligence Programming"
  },
  {
    "alphaNumber": "ICS 475",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "Introduction to bioinformatics to computer sciences students by focusing on how computer sciences techniques can be used for the storage, analysis, prediction and simulation of biological sequences (DNA, RNA and proteins).",
    "grading": "Quizzes and exercises (40%), \nScientific papers and assignment (25%) \nFinal exam (35%)",
    "instructor": "Guylaine Poisson\nguylaine@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "d",
      "i"
    ],
    "objectives": "* Gain knowledge of the bioinformatics field of research\n* Get familiar with a selection of fundamental bioinformatics problems.\n* Gain knowledge of fundamental bioinformatics tools and methods.\n* Gain experience in implementation and analysis of a selection of common bioinformatics algorithms.\n* Gain experience in the study of a specific bioinformatics research subject.",
    "policies": "none",
    "prerequisites": "one ICS 300-level course or consent.",
    "schedule": "* Week 1: What is Bioinformatics?\n* Week 2: Database\n* Week 3: DNA, RNA and protein sequences\n* Week 4: Sequence alignment. \n* Week 5-6: Database search and multiple alignment\n* Week 7-8: Phylogenetics \n* Week 9-10: Annotation and Machine learning\n* Week 11: Nucleic Acid secondary structure prediction. \n* Week 12-15: Special topics\n* Week 16: Revision",
    "textbooks": "none",
    "title": "Introduction to Bioinformatics Sequences and Genomes Analysis"
  },
  {
    "alphaNumber": "ICS 476",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "Study of commonly used bioinformatic algorithms, with an emphasis on string, tree, and graph algorithms. Presentation of probabilistic and clustering methods. Implementation of the studied algorithms and design of applications.",
    "grading": "Programming assignment: 30%\nClass participation: 10%\nMidterm exam: 30%\nFinal Exam : 30%",
    "instructor": "Guylaine Poisson\nguylaine@hawaii.edu",
    "learningOutcomes": [
      "a",
      "b",
      "c",
      "i"
    ],
    "objectives": "* Understand how popular bioinformatics algorithms work\n* Learn how to design algorithms for solving biological problems\n* Be able to implement and use these algorithms in tool development in a context of biological data analysis\n* Gain knowledge needed to understand more advanced topics and current research literature in the field of bioinformatics.",
    "policies": "none",
    "prerequisites": "475 or consent.",
    "schedule": "* Week 1: Algorithm and Complexity\n* Week 2-3: Mapping DNA and Finding Signals: Exhaustive Search\n* Week 4: Genome Rearrangement and Signals: Greedy Algorithm\n* Week 4-7: Sequence Comparison and Gene Prediction: Dynamic Programming\n* Week 8: Midterm Exam\n* Week 9: Comparing Sequences: Divide and Conquer Algorithms\n* Week 10-12: Sequencing DNA, DNA Arrays: Graph Algorithm\n* Week 13-14: Repeat Analysis and Sequence Comparison: Combinatorial Pattern Matching\n* Week 15-16 : DNA Arrays and Evolution: Clustering and Trees",
    "textbooks": "Jones, N.C. and Pevzner P.A. An Introduction to Bioinformatics Algorithms MIT Press",
    "title": "Bioinformatics Algorithms and Tool Development"
  },
  {
    "alphaNumber": "ICS 222",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "What is computer science about? What is the difference between computers and other machines? What are the limits of computation? Are there computers that are not machines? Understand the basic issues of computability, complexity, and network effects, and learn to apply them in the practice of computation.",
    "grading": "3 homework assignments (25%), midterm test (25%), project and class presentation (25%), final exam (25%)",
    "instructor": "Dusko Pavlovic",
    "objectives": "* Students encounter the basic models of data processing and computation, and are capable to perform high level analyses\n\n* Students understand the meaning and the consequences of reductions and equivalences between the basic models of data processing and computation\n\n* Students are familiar with the main hierarchies of classes of languages \n\n* Students gain a clear understanding of the idea of computation, as universal and partial evaluation of programs.\n\n* Students understand computational complexity and hardness, and are capable to perform basic complexity analyses.\n\n* Students are familiar with the role of randomness in computation.\n\n* Students understand the need and the techniques for building their solutions of hard engineering problems in computation on the solid foundations of computer science\n\n* Students are able to discern and analyze local aspects of computation from the network effects. \n\n* Students can function effectively in teams to accomplish a common goal.\n\n* Students have an understanding of social issues of computation.\n\n* Students can communicate effectively with a range of audiences concerned with the basic problems of computation.\n\n* Students can analyze the local and global impact of computation on individuals, organizations, and society.\n\n* Students can recognize the need for and an ability to engage in continuing professional and career development in the diverse areas of computer science and engineering.",
    "policies": "none",
    "prerequisites": "141 or consent",
    "schedule": "* Week 1: Examples of computation\n* Week 2-3: Automata and state machines\n* Week 4: Languages\n* Week 5: Universal computers and partial evaluators \n* Week 6: The Church-Turing Thesis\n* Week 7: Computability and decidability\n* Week 8: Midterm test\n* Week 8-9: Complexity measures, hardness and completeness\n* Week 10: Complexity classes and feasible computation\n* Week 11: Randomized computation \n* Week 12: One-way and trapdoor functions\n* Week 13: Network computation and the limits of programming\n* Week 14: Computational processes in nature\n* Week 15-16: Overview of results and problems of Computer Science\n* Week 16: Final exam",
    "textbooks": "1. Michael Sipser, Introduction to the Theory of Computation\n2. John E. Savage, Models of Computation: Exploring the Power of Computing",
    "title": "Basic Concepts of Computer Science"
  },
  {
    "alphaNumber": "ICS 423",
    "courseLearningOutcomes": "See objectives.",
    "creditHours": 3,
    "description": "History of secret communication and confidential data storage. Elements of cryptography and cryptanalysis.  Classical ciphers. Symmetric key cryptography. Public key cryptography. Data security in cyber space.",
    "grading": "3 homework assignments (25%), midterm test (25%), project and class presentation (25%), final exam (25%)",
    "instructor": "Dusko Pavlovic\ndusko@hawaii.edu",
    "objectives": "* Students understand the main techniques of data security and secret communication, from classical ciphers to modern crypto systems.\n* Students acquire a basic capability to reason about secrecy and evaluate security of simple cryptographic constructs within the main models\n* Students are able to analyze the need and the suitability of cryptographic primitives in standard applications.\n* Students are provided a solid foundation for study non-textbook cryptography and of practical cryptographic applications\n* Students' knowledge of data protection and cryptographic techniques is sufficient for practical applications and for research into security.\n* Students can function effectively in teams to accomplish a common goal.\n* Students have an understanding of social issues of data security and confidentiality, and of particular cryptological and cryptanalytic techniques.\n* Students can communicate effectively with a range of audiences concerned with the basic problems of data protections and cryptography.\n* Students can analyze the impact of cryptography on individuals, organizations, and society.",
    "policies": "none",
    "prerequisites": "222 or consent",
    "schedule": "* Week 1. Introduction: History of secret communication and data security\n* Week 2-3. Classical ciphers and cryptanalysis\n* Week 4-7. Information theory of secret communication\n    (a) Probability and information \n    (b) Perfect secrecy\n    (c) Redundancy and unicity distance \n* Week 8. Midterm Test\n* Week 8-11. Symmetric key cryptography\n    (a) Confusion and diffusion \n    (b) Feistel networks\n    (c) Block ciphers \n    (d) Stream ciphers\n* Week 12-15. Public key cryptography\n    (a) One-way and trapdoor functions \n    (b) Classic public key primitives\n    (c) Semantic and adaptive security\n* Week 16. Overview and outlook \n* Week 16. Final exam",
    "textbooks": "1. Douglas R. Stinson, Cryptography. Theory and Practice. (3rd edition) Chapman and Hall 2005 \n2. Serge Vaudenay, A Classical Introduction to Cryptography. Springer 2006\n3. Alan G. Konheim, Computer Security and Cryptography. Wiley 2007",
    "title": "Data Security and Cryptography I"
  },
  {
    "alphaNumber": "ICS 435",
    "creditHours": 3,
    "description": "Introduction to machine learning concepts with a focus on relevant ideas from computational neuroscience. Information processing and learning in the nervous system. Neural networks. Supervised and unsupervised learning. Basics of statistical learning theory.",
    "instructor": "Susanne Still\nsstill@hawaii.edu",
    "policies": "none",
    "prerequisites": "311 or consent. Recommended: MATH 307.",
    "schedule": "15 week syllabus, two lectures per week = 30 Lectures.\n\nLecture 1: Introductory Lecture: Introduction to machine learning and computational neuroscience.\n\nLecture 2-3: Basic maths skills: review of important mathematical methods, such as differential equations, linear algebra, calculus of variations, probability theory - specifics depend on student needs.\n\nLecture 4-5: Basic neuroscience:\n– Neurons, Synapses.\n– Information processing and adaptation in the nervous system. \n\nLecture 6-8: From real neurons to artificial neurons:\n– Realistic biophysical model: Hodgkin-Huxley model. \n– Simplifications:\n∗ Morris-Leccar model.\n∗ Integrate-and-fire model \n∗ Threshold units.\n\nLecture 9-10: Mathematical models of learning: \n– Hebbian learning.\n– Spike-timing dependent plasticity.\n\nLecture 11: From biophysics to machine learning algorithms: the Perceptron algorithm - theory and implementation.\n\nLecture 12-15: Feed-forward artificial neural networks:\n– Theory and implementation.\n– Selected applications to contemporary problems. Subject areas are listed below - specifics are adjusted to student interests.\n\nLecture 16-20: Support Vector Machines (SVMs):\n– Introduction to support vector learning.\n– Selected applications of SVMs. Subject areas are listed below - specifics are adjusted to student interests.\n\nLecture 21-25: Recurrent Neural networks:\n– Hopfield network.\n– Simple recurrent networks.\n– Selected applications of recurrent networks, including associative memory and content-addressable memory (CAM).\n\nLecture 26-30: Unsupervised learning:\n– Undergraduate level introduction to cluster analysis: concepts and different types of clustering algorithms.\n– K-means and vector quantization.\n– Applications: image segmentation, data mining, and other areas (see below) - specifics are adjusted to student interests.\n\nApplication subject areas include: robotics, computer vision, speech recognition, time series analysis, renewable energies, mathematical finance, geophysics, medical imaging, and bioinformatics. Students are allowed to add subjects.",
    "textbooks": "none",
    "title": "Machine Learning Fundamentals"
  },
  {
    "alphaNumber": "ICS 464",
    "courseLearningOutcomes": "- Understand the basic principles of human-computer interaction.\n- Be knowledgeable about the basic human information processing systems of perception, cognition, and action.\n- Be knowledgeable about how attention, affect, and environment influence human behavior.\n- Understand how to discover and describe the characteristics of diverse users of information systems.\n- Understand and have experience applying several interaction design principles.\n- Understand and have experience using several user evaluation techniques. \n- Understand how interaction design fits into the iterative development process.\n- Be familiar with interaction designers’ tools and work practices, including needs and requirements gathering, iterative prototyping, user testing, field studies, and both oral and written design presentation.",
    "creditHours": 3,
    "description": "Application of concepts and methodologies of human factors, psychology and software engineering to address ergonomic, cognitive, and social factors in the design and evaluation of human-computer systems.",
    "grading": "Participation: 15%\n2 exams: 15% each\nProject: 55%\n\t\nGrade Calculation: \n >89=A, 80-89=B, 70-79=C, 60-69=D, <60=F \nPlus and minus are part of the final grade.\nAll work must be completed to receive a grade in the course.",
    "instructor": "Scott Robertson\nscottpr@hawaii.edu",
    "learningOutcomes": [
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "k",
      "l",
      "m",
      "n"
    ],
    "objectives": "- Understand the basic principles of human-computer interaction.\n- Be knowledgeable about the basic human information processing systems of perception, cognition, and action.\n- Be knowledgeable about how attention, affect, and environment influence human behavior.\n- Understand how to discover and describe the characteristics of diverse users of information systems.\n- Understand and have experience applying several interaction design principles.\n- Understand and have experience using several user evaluation techniques. \n- Understand how interaction design fits into the iterative development process.\n- Be familiar with interaction designers’ tools and work practices, including needs and requirements gathering, iterative prototyping, user testing, field studies, and both oral and written design presentation.",
    "policies": "Activities\nEach week we will have a lecture on Monday and an interactive seminar session on Wednesday. In the seminar session we will discuss:\n•\tChapter readings for the week\n•\tAny articles assigned for the week\n•\tProject ideas and progress\nThe Wednesday interactive seminar is your opportunity to participate in discussion and earn points for the participation requirement.\n\nProject\nThe course project will involve designing an interactive application based on user requirements. In the first couple of weeks we will form groups (3-4 people each) and pick interesting and challenging topics. In the next couple of weeks the groups will plan goals and a schedule for: A user study? Fieldwork observations? A survey? A prototype with iterations? A requirements document? Etc. This will all make sense as the course evolves.\nThe final output of the group projects will be:\n•\tPeriodic progress reports on seminar days throughout the semester.\n•\tA presentation in the second-to-last week\n•\tA poster at a design showcase\n•\tA final report summarizing what the group did (due during finals week).",
    "prerequisites": "two ICS 300-level courses or consent.",
    "schedule": "Week 1: What is Interaction Design?\nWeek 2: Understanding and Conceptualizing Interaction\nWeek 3: Understanding Users\nWeek 4: Collaboration and Communication\nWeek 5: Affect\nWeek 6: Exam 1 (RSP 1-5, DOET 1-3, ED 1-3)\nWeek 6: Interfaces and Interactions\nWeek 7: Project ideas\nWeek 8: Data Gathering\nWeek 9: Data Analysis and Presentation\nWeek 10: Process of Interaction Design\nWeek 11: Exam 2 (RSP 6-8, DOET 4-6, ED 5)\nWeek 11: Project progress\nWeek 12: Identifying Needs and Requirements\nWeek 13: Design, Prototyping\nWeek 14: Evaluation\nWeek 15: Usability Testing and Fieldwork\nWeek 16: Analytical Evaluation\nPresentations\nPresentations",
    "textbooks": "Sharp, H., Rogers, Y, & Preece, J. (2011). Interaction Design: Beyond Human-Computer Interaction. Second Edition. John Wiley & Sons. \n\nNorman, D. (2013). The design of everyday things. Revised and expanded edition. Basic Books.\n\nNorman, D. (2004). Emotional design. Basic Books.",
    "title": "Human Computer Interaction I"
  }
];



//////////////////////////////////////////////////////////////////////////////////////////////////////

if (Syllabuses.find().count() === 0) {
  _.each(defaultSyllabuses, function(syllabus) {
    console.log("initializing a syllabus", syllabus.alphaNumber);
    Syllabuses.insert(syllabus);
  });
}

if (Syllabuses.find({alphaNumber: "ICS 469"}).count() === 0) {
  console.log("inserting ICS 469");
  Syllabuses.insert({alphaNumber: "ICS 469", title: "Cognitive Science", instructor: "Martha Crosby"});
}


var users=[
  {email: Meteor.settings.email, username: Meteor.settings.username, password: Meteor.settings.password, roles:['admin']}
];

if (Meteor.users.find().count() === 0) {
  _.each(users, function (user) {
    Accounts.createUser({
      email: user.email,
      username: user.username,
      password: user.password,
      profile: {name: user.username},
      roles: user.roles
    });
  });
}


