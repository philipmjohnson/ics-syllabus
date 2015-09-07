Provides support for managing ICS course syllabuses.

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







