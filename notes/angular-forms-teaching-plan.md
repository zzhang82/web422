---
title: Angular forms teaching plan
layout: default
---

## Angular forms, teaching plan

> This document is being edited.  
> This notice will be removed when the edits are complete.

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

**Links**

[Template syntax guide](https://angular.io/guide/template-syntax#ngModel)

[NgForm](https://angular.io/api/forms/NgForm) directive

[NgModel](https://angular.io/api/forms/NgModel) directive

[SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor) directive

[RadioControlValueAccessor](https://angular.io/api/forms/RadioControlValueAccessor) directive

[CheckboxControlValueAccessor](https://angular.io/api/forms/CheckboxControlValueAccessor) directive

