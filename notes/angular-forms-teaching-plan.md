---
title: Angular forms teaching plan
layout: default
---

## Angular forms, teaching plan

> This document is being edited.  
> This notice will be removed when the edits are complete.

<br>

### Documentation examples, and testing them

Teach and demonstrate this to students...

Using Angular CLI, generate a new project:  
`ng new Testing --routing -sg -st`

In Terminal, navigate to the project's folder.

Open the project in Visual Studio Code:  
`code .`

In Terminal, build and run the project:  
`ng serve --open`

In the browser, show the JavaScript console dev tool.

In VS Code, open these two source code files for editing:
* `app.component.ts`
* `app.component.html`

From a code example, copy-paste code to the appropriate location, replacing existing code. Save the changes, and then switch to the browser to see and test the result.

<br> 

### Big ideas content

Form-specific directives

Getting data into a form:
* need a model
* can fetch using a service
* or can use a component's input properties

ngModel syntax - banana in a box (football in a box)

NgForm directive

Template variable

Declare a template variable for the form  
`<form #heroForm='ngForm'>`  
Variable name is heroForm  
Can use this in the component class  
The value `ngForm` is a reference (pointer) to the `NgForm` directive that runs the form  
We did not add an `NgForm` directive  
Angular did, as a result of importing `FormsModule`  
Becomes active by default, no special syntax needed  

Value of two-way data binding...  
For add-new, simple situations (all new data), the value is limited  
For add-new, where we need to do some work when the data is being entered (lookups etc.), and before save/submit, the value increases  
For edit-existing, value is obvious  

`<form>` element changes...
* remove action and method attributes
* replace with ngSubmit event handler

The effect is that the function named in the ngSubmit event handler replaces the URL-specified action resource. 

If we create/designate a local template variable for the form (the value is ngForm), then we get full access to every form property. (Metadata.)

<br>
