---
title: Angular forms introduction
layout: default
---

## Angular forms introduction

In recent weeks, we have had a straight-line topic treatment of components, routing, and services. However, we have mostly avoided the topic of *user interaction*, but now it's time to do that, now that we have a good foundation on which to build. 

As the [official Angular documentation states](https://angular.io/guide/forms), "Forms are the mainstay of business applications. You use forms to log in, submit a help request, place an order, book a flight, schedule a meeting, and perform countless other data-entry tasks."

<br>

**Topic coverage plan**

* First, we describe three ways to do forms in Angular. We will use only one, *Template-driven Forms*. 

* Next, we refresh your memory by showing a simple and standard HTML Form. 

* Then, we show how to configure an Angular app to use HTML forms

* Once the Angular app configured properly, we will add some data in a Component to be used with the form

* We will then show the changes required to the form as well as each of the standard form elements to "bind" our data (using "two-way" binding) and "submit" the form

* Finally, we will illustrate some of the special CSS classes Angular uses to automatically track the "state" of elements, ie: "untouched", "dirty", "invalid", etc

Once this is compete, a brief summary of the highlights and dev tips are presented. 

<br>

### Three ways to do forms in Angular

Angular offers *three* ways to do forms:
1. Template-driven
2. Reactive  
3. Dynamic  

In this course, we will work only with *Template-driven Forms*.

<br>

**Template-driven Forms**

This approach takes advantage of your knowledge of, and skills with an HTML template in a component. 

It builds upon your experience with one-way read-only data binding (using `{{ curly braces syntax }}`), by going further with two-way data binding. 

<br>

**Reactive Forms**

This approach features more programming in the conmponent class, where each element of the form is explicitly declared, configured, and managed. 

We will not work with Reactive Forms in this course. After understanding and working with Template-driven Forms, you will be able to learn what you need to, if or when you need to, work with Reactive Forms. 

<br>

**Dynamic Forms**

This approach is interesting, in that metadata on the data model is used to generate forms dynamically. This replaces the cycle of editing in Template-driven Forms, where we go back-and-forth between the component's class code and its HTML template, when developing a form. 

As above, we will not work with Dynamic Forms in this course. After understanding and working with Template-driven Forms, you will be able to learn what you need to, if or when you need to, work with Dynamic Forms. 

<br>

#### "Standard" HTML Form, without Angular

Here's a simple form, in pure HTML5, which features all of the most typical form elements, ie:
* input (type: "text", "checkbox", "radio")
* textarea
* select (single / "multiple")

It also uses the bootstrap "forms" classes, ie "form-group" and "form-control" for formatting:

```html
<form action="/path/to/handler" method="post">
  <div class="form-group">
    <label for="name">Full Name:</label>
    <input type="text" class="form-control" id="name" name="name" required autofocus>
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" id="description" name="description"></textarea>
  </div>
  <div class="form-group">
    <label for="ownedTransportation">Owned Transportation</label>
    <select multiple class="form-control" id="ownedTransportation" name="ownedTransportation">
      <option value="C">Car</option>
      <option value="B">Bus</option>
      <option value="M">Motorcycle</option>
      <option value="H">Helicopter</option>
    </select>
  </div>
  <div class="form-group">
    <label for="favouriteTransportation">Favourite Transportation</label>
    <select class="form-control" id="favouriteTransportation" name="favouriteTransportation">
      <option value="C">Car</option>
      <option value="B">Bus</option>
      <option value="M">Motorcycle</option>
      <option value="H">Helicopter</option>
    </select>
  </div>
  <input  type="checkbox" id="driverLicence" name="driverLicence" /> <label for="driverLicence">Driver's Licence</label><br />
  <div class="form-group">
    <h5>Vehicle Usage:</h5>
    <input type="radio" id="vehicleUseBusiness" name="vehicleUse" value="business" /> <label for="vehicleUseBusiness"> Business</label><br />
    <input type="radio" id="vehicleUsePleasure" name="vehicleUse" value="pleasure" /> <label for="vehicleUsePleasure"> Pleasure</label><br />
    <input type="radio" id="vehicleUseOther" name="vehicleUse" value="other" /> <label for="vehicleUseOther"> Other</label><br />
  </div>
  <button class="btn btn-primary" type="submit">Create</button>
</form>
```

<br>

It's likely that you have written hundreds of these forms. It's a very well-understood process. 

<br>

#### Configuring an Angular app to use HTML forms

Before making any changes to the form, we must add the Angular forms-handling bits to the project. In the documentation's [Revise *app.module.ts*](https://angular.io/guide/forms#revise-appmodulets) section, we do a task with two related steps:

1. Import the FormsModule
2. Add FormsModule to the "imports" array

#### Adding a Component with data (ie: a data model)

Next, we *always assume* that an Angular form is backed by a data model. The model is defined or maintained in the component class. Its data values are *made available to* the form when it is built and rendered, and *updated by* the form during user interaction and submission. 

For example, consider the following Component.  It contains all the data that is required to populate our "Standard" html, including some class definitions to define the "shape" of the data, as well as some sample data that we can use to "bind" to our form:

```js
import { Component, OnInit } from '@angular/core';

export class Driver{
    name: string; 
    description: string; 
    ownedTransportation: option[]; 
    favouriteTransportation: option; 
    driverLicence: boolean; 
    vehicleUse: string; 
}

export class option{
  value: string;
  text: string;
}

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor() { }
 
  // the data that will be used in the form
  driverData: Driver;

  // Define the preset list of "transportation" options
  transportationList: option[] = [
    {value: "C", text: "Car"},
    {value: "B", text: "Bus"},
    {value: "M", text: "Motorcycle"},
    {value: "H", text: "Helicopter"}
  ];

  ngOnInit() {

    // Populate the "driverData" with some static data (this would normally come from a data service)
    this.driverData = {
      name: "Richard Hammond",
      description: "Richard is a motor vehicle enthusiast",
      ownedTransportation: [{value: "C", text: "Car"}, {value: "M", text: "Motorcycle"}], 
      favouriteTransportation: {value: "M", text: "Motorcycle"},
      driverLicence: true, 
      vehicleUse: "pleasure"
    };
    
  }
}

```

There's a lot going on in the above Component, however there's nothing in there that we haven't seen before.  

We define a "Driver" class that will represent the type of data that we will be "binding" to our form so that it can be modified.  We also define a generic "option" class, which is simply defining what our "options" will look like, ie ```{value: "C", text: "Car"}``` - this can be used as an "option" in an "&lt;select&gt;" list or the value / label used in a radio button.

#### "Binding" the data / Form Events

With our component in place we can begin to update the original "Standard" form to work directly with the data using "two-way binding" syntax:

> You often want to both display a data property and update that property when the user makes changes.
>
> On the element side that takes a combination of setting a specific element property and listening for an element change event.
>
> Angular offers a special two-way data binding syntax for this purpose, ```[(x)]```. The ```[(x)]``` syntax combines the brackets of property binding, ```[x]```, with the parentheses of event binding, ```(x)```.
>
> ([https://angular.io/guide/template-syntax#two-way-binding---](https://angular.io/guide/template-syntax#two-way-binding---))

Since we're working with "Forms" Angular actually provides a very handy **NgModel** Directive that we can bind to, to update our model!

So, every time we have a form element that we wish to "bind" to our Component data, we can use the syntax:

```html
[(ngModel)]='componentProperty'
```

For example, let's see how we can update each of our form element types in our "Simple" form using this syntax, paired with the "DriverComponent" data:

##### input (type="text")

```html
<input type="text" class="form-control" id="name" name="name" [(ngModel)]="driverData.name" required autofocus>
```

Here, we simply add the "two-way" binding syntax with ngModel to reference the "driverData.name" property

##### textarea

```html
<textarea class="form-control" id="description" name="description" [(ngModel)]="driverData.description"></textarea>
```

This is very similar to the **input** example above, ie: we simply add the two-way data binding to ngModel with the correct Component property

##### select (multiple)



##### input (type="text")


##### input (type="text")

#### Handling the Form "Submission"

```
import { NgForm } from "@angular/forms";

aaand

<form #f='ngForm' (ngSubmit)='onSubmit(f)'>

with

  onSubmit(f: NgForm): void { }
```



#### Tracking the "state" of elements using CSS classes

(for more information about HTML5 validation see.......) - we'll just do required here .. to see how we can do template-driven validation, see: https://angular.io/guide/form-validation#template-driven-validation













Well, before making any changes to the form, add the Angular forms-handling bits to the project. In the documentation's [Revise *app.module.ts*](https://angular.io/guide/forms#revise-appmodulets) section, we do a task with two related steps:
1. Import the FormsModule
2. Add FormsModule to the "imports" array

This is a one-time task, per project.

Next, we *always assume* that an Angular form is backed by a data model. The model is defined or maintained in the component class. Its data values are *made available to* the form when it is built and rendered, and *updated by* the form during user interaction and submission. 

Then, here's what the same form (from above) looks like in Angular:

```html
<form #f="ngForm" (ngSubmit)="onSubmit(f)">
  <p>
    <label for="fname">First name:</label><br>
    <input name="fname" required autofocus [(ngModel)]="model.fname">
  </p>
  <p>
    <label for="lname">Last name:</label><br>
    <input name="lname" required [(ngModel)]="model.lname">
  </p>
  <p>
    <button>Create</button>
  </p>
</form>
```

<br>

Not too different, right? Almost the same. 

<br>

**Differences**

There are a couple of notable differences.

The opening `<form>` tag has new attributes:
* Template reference variable to hold the form
* Event handler function name (in the component class) for the form submit action

We use two-way data binding in the form fields:
* Each references a value in a component class variable named "model" (which is an object with two key-value pairs)

This is the clearest distillation of the differences between pure *HTML Forms* and *Angular Template-driven Forms*. All other changes that you may consider making will add features and behaviour to make the user interaction and experience better, and will improve the quality of data we get from the user. 

<br>

**Take-away**

Two-way data-binding is the most notable and most important change. 

> Where have you seen this functionality before?  
> During [our coverage of Knockout](https://sictweb.github.io/web422/notes/knockout), a few weeks ago.

<br>

### Learning more, the details

Now, we turn to the documentation for more. It's all useful, and in the long run, necessary for success when building apps. First time through, it may take a couple of hours, but it's worth the time and effort.

Open the [official Angular documentation](https://angular.io/docs). 

Start with the first topic in **FUNDAMENTALS > Forms**, which is [User Input](https://angular.io/guide/user-input). (You can likely skip / skim / ignore the `$event` binding discussion for now.)

Then, move on to the [Template-driven Forms](https://angular.io/guide/forms) topic. This is the core content that will help you understand and get started with forms in Angular apps. 

Finally, after getting some experience and comfort, use the [Form Validation](https://angular.io/guide/form-validation) content. It rounds out or finishes off the forms topic with discussion and techniques to improve the quality of data coming in from form users. 

Your professors believe that the quality and coverage of these sections are very good, so we will not attempt to rewrite or restate the content. Please use the content as-is. 

<br>

### Summary of the big ideas

While there are *many* new ideas, some new syntax, plenty of Angular parts (directives, classes, etc.), working with forms at a beginner level is not hard. Use the guidance at the top of this document to quickly build success. 

Here are the important "big ideas".

Enable forms for the entire app by adding an import in the app module. It's a one-time task per app. Doing this enables Angular to do its magic whenever a form is declared and used. 

Always plan on using a model - often known or referred to as a *view model* - when using a form. 

If you're thinking that we don't really need a view model when displaying a form for the first time, we would suggest that is wrong. In almost all situations, we want to *push some data* to the form, to make it a better user interaction experience. For example, items in a select list, or default or initial/starter values for some of the form elements. 

Write a function that will handle form submit. It can do anything you want it to do. 

When writing a form, *always* declare a template variable on the opening `<form>` tag. 

Two-way data-binding is a huge feature. Use it when appropriate. Remember it is still appropriate to use one-way read-only data binding to pull in values (curly braces). And, it is still appropriate to define event handlers on form elements (parentheses) if you need special behaviours. 

<br>

Happy programming! Enjoy!

<br>
