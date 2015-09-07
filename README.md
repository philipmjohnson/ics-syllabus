## Logging in

To use, retrieve the following page from http://icssyllabusmanager.meteor.com/

![](https://raw.githubusercontent.com/philipmjohnson/ics-syllabus/master/public/documentation/home-page.png)

Click the "Sign in" button to obtain the login screen:

![](https://raw.githubusercontent.com/philipmjohnson/ics-syllabus/master/public/documentation/login-screen.png)

Login with the credentials that you have been supplied with, which will bring you to this screen:

![](https://raw.githubusercontent.com/philipmjohnson/ics-syllabus/master/public/documentation/after-login.png)

This screen has the following features:

  * An "Export" menu in the navbar, allowing access to all completed syllabuses in a variety of formats (see below).

  * An "ICS" pull-down menu in the navbar, currently allowing you only to logout.

  * A pull-down menu allowing you to select a syllabus to work on.

  * A pane showing what syllabuses have been edited **by any user**, and whether they still appear to be edited.  Note that "ICS 435" appears to be currently edited by another user. There is no ability to "lock" a syllabus for editing, so this window (updated in real-time) lets you know of any concurrent edits underway.

## Editing a syllabus

Clicking on the pull-down menu displays a list of all syllabuses available for editing:

![](https://raw.githubusercontent.com/philipmjohnson/ics-syllabus/master/public/documentation/pulldown-menu.png)

At this time, only undergraduate courses are available.  If an undergrad course is missing, contact Philip and he will add it.

If you select ICS 313 and press the "Edit" button, the following page will appear:

![](https://raw.githubusercontent.com/philipmjohnson/ics-syllabus/master/public/documentation/edit-syllabus.png)

Some things to note:

  * The "Objectives" field still needs to be filled in. Since there are detailed course-specific learning outcomes, it would be reasonable to have this field say: "(See course-specific learning outcomes)".

  * The footer window now displays "Started editing ICS 313 a few seconds ago". This window is updated in real-time for all users.

  * The user who was editing ICS 435 when we first logged in has now finished.

After finishing your edits, you must press the "Save" button to save them to the database.  When you do that, the form disappears and the page displays something like this:

![](https://raw.githubusercontent.com/philipmjohnson/ics-syllabus/master/public/documentation/finished-editing.png)

As you can see, the footer window now shows that you have finished editing the ICS 313 syllabus.

## Exporting syllabus data

The ICS Syllabus Manager currently allows syllabus data to be exported in two formats: json and readme.

Pulling down the "Export" menu from the navbar and selecting JSON retrieves a page containing the current database contents in JSON format:

![](https://raw.githubusercontent.com/philipmjohnson/ics-syllabus/master/public/documentation/export-json.png)

You can click inside the textarea, press control-a to select the entire contents, control-c to copy, and then paste this data into another file using an editor of your choice.

Note that if another user saves out data while this window is open, the contents will be automatically refreshed.

JSON format is convenient if you wish to perform post-processing on the Syllabus data.

The second supported export format is markdown.  Select the markdown item in the Export navbar menu to retrieve this page:

![](https://raw.githubusercontent.com/philipmjohnson/ics-syllabus/master/public/documentation/export-markdown.png)

## About concurrent access

The ICS Syllabus Manager implements "optimistic" concurrency control.  This means the following:

  * Two users can edit the same syllabus at the same time.  If User1 saves a syllabus while User2 is editing, then User2's browser will be immediately updated with the latest saved content on a field-by-field basis. If User1 and User2 edit different fields, then there is no problem.  However, if both User1 and User2 edit the same field (say, "Objectives"), then when User1 saves the syllabus, the system will update the Objectives field to contain those saved changes and the edits made by User2 will be lost.

  * To prevent clobbering someone else's edits, please check the footer window that displays which syllabuses are being editing in real-time.  You probably shouldn't edit a syllabus if someone else is already editing it.

## Syllabus specification review hints

Every syllabus has been "assigned" to a faculty member for review and completion.  The name of the assigned faculty member appears in the menu of syllabuses. In addition, we will email out the list of faculty members and the course syllabuses they have been assigned to review.  When reviewing a syllabus, please keep the following hints in mind:

### Use "markdown" format

Markdown is an extremely simple format.  To indicate bullet lists, start the list item with "*".

### Description

This is taken from the course catalog and generally does not need to be changed.

### Course objectives, Student learning outcomes

These two categories can overlap. For example, you might include various learning outcomes as part of the course objectives.  If you feel that the course objectives also specify the student learning outcomes, then you can write "See course objectives" as the entry for Student learning outcomes.

### Textbooks

If the course does not involve a textbook, you can state "Course notes".

### Grading and student evaluation

According to UH guidelines, the assessment tools (exams, quizzes, projects, papers, etc.) that will be used should be given, as well as the weight attributed to each (such as a percentage of the final grade).

Also note that UH requires a final exam (except in writing courses, directed reading, creative arts, research, seminars, internships, and field experiences) and must be taken during the scheduled examination period.

### Classroom policies

All UH policies are implied and do not need to be included.  Only include policies special to this course. In most cases, you can just state "None".

### Weekly schedule of topics and readings, including exam dates.

In general, create a list of weeks with a one line summary of the topics each week.  If the same topic is covered for multiple weeks, you can combine. Here is an example of a week-by-week schedule

```
* Week 1: Java compiler, flow of program
* Week 2: Variables, conditionals, loops
* Week 3: Variables and operators, conditionals, loops
* Weeks 4,5: Classes
* Weeks 6,7,8: Classes, loops, conditionals, arrays
* Weeks 9, 10, 11: Classes, file I/O, loops, conditionals
* Weeks 12, 13, 14, 15: Recursion, 2D arrays,
* Week 16: Inheritance
* Week 17: Final exam
```

In most cases, the PCC expects the syllabus to contain a week-by-week list of topics along with the readings. Dates or deadlines for various evaluation mechanisms (projects, quizzes, exams) should also be indicated.

They also indicate that a weekly schedule may not be appropriate for certain courses (research, seminars, project-based) courses, but that there must be a statement of the course objective(s), the procedures to be followed in the course, and a fairly specific statement on procedures for evaluating students.

For example, ICS 414 is a project-based course. Here is the description of its schedule:

<blockquote>
_This is a project-based course. Students split into teams to design, implement, test, and evaluate a moderate-scale software system.  Classroom sessions are a mix of weekly team meetings, monthly milestone deliverables, and monthly formal reviews. Individual evaluation of each team member occurs twice a month through meetings with the instructor to assess progress and group participation.  Evaluations of the progress of the entire group occur 4 times during the semester (once per month). The evaluations assess whether adequate progress on the project is being made, the quality of the artifacts being produced by the team, the efficiency of the group process, and the types of group communication in use and their effectiveness._
</blockquote>







