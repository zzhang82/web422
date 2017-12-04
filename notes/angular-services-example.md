---
title: Angular services example
layout: default
---

## Angular services example

> This document is still being edited.  
> This notice will be removed when the edits are complete.  

In this document, you will learn how to add and use a service in an app. It's the app that was worked on in the past few weeks, as we learned more about components and routing. Here, we will make the changes to support and use services. 

<br>

### Getting started

Fetch the week 8 code example from [the course's GitHub code repository](https://github.com/sictweb/web422). 

Using Terminal, open the `week8` folder. Then, run the `npm update` command to refresh the modules. 

Open the project for editing. Remember the quick-and-easy way to do this:  
`code .` 

Then, you can build and run the app with this:  
`ng serve --open`. 

<br>

#### Service scenario

The first service we create will deliver a string array of names. It's a simple example, and will enable us to focus on the creation and use of a service. 

Later, we will edit the service to implement a more complex and typical scenario, to fetch data from an external source (i.e. outside our app), which will be a web service. 

<br>

#### Add a new service

In the [Adding a service to an app](angular-services-intro#adding-a-service-to-an-app) section of the "intro" notes, you learned how to add a service to an app. We used the Angular CLI:

`ng g s DataService --module=app --spec false`

It created a new source code file, and it updated the app module. 

<br>

#### Make the new service do something

As stated above, the service's first task is to deliver a string array of names. 

In Visual Studio Code, open the service's source code file (`data-manager.service.ts`) for editing. Notice that the `DataManagerService` class is empty, except for a constructor stub. 

Let's do the following:
1. Add an empty string array property
2. Initialize its contents in the constructor
3. Add a function to delivery the array contents

At the end, the source code will look something like this:

```js
import { Injectable } from '@angular/core';

@Injectable()
export class DataManagerService {

  // Properties

  private teachers: string[] = [];
  
  constructor() { 
    // Load the teachers collection
    this.teachers.push('Pat');
    this.teachers.push('Peter');
    this.teachers.push('Sharmin');
    this.teachers.push('Sunny');
    this.teachers.push('James');
  }

  // Functions

  getTeachers() {
    return this.teachers;
  }

}
```

> Yes, we could have done all this work inside the `getTeachers()` function, but hey - we wanted to give you the typical experience of coding many members in a class. 

At this point, the code for the service is ready. Let's use it in a few components. 

<br>

#### Use the service 

The goal is to use the service in the start/home page (component) of the app. Use this pattern to configure a component to be able to use a service:
1. Add an import statement
2. Add a parameter to the constructor

Open the start/home component class file (`start.component.ts`) for editing. Add this import statement near the top:

```js
import { DataManagerService } from "./data-manager.service";
```

Add a parameter for the data manager service to the class constructor. For example: 

```js
  constructor(private m: DataManagerService) { }
```

Now we are ready to use the service's public properties and functions, anywhere in our component's code. 

<br>

**Best practice - use the ngOnInit when appropriate**

To prepare for the scenario in which we will fetch data from an external web service, we will use a *best practice* pattern. We use this pattern whenever we need to data from a service when our component loads for the first time. 

In our component class, we will need a string array property to hold the data. (Then, the property will be available in our HTML template.)

```js
  teachers: string[];
```

Then, in the `ngOnInit` function - and NOT the constructor function - we will call into the service to get the data we need for our component's new string array property. 

```js
  ngOnInit() {
    this.teachers = this.m.getTeachers();
  }
```

Soon, we will adapt this pattern even more. In this simple example, the service is delivering the data immediately, from its own state. However, a more typical scenario is that the service is fetching from an external web service, and it may take time to complete the fetch. As a result, we will adapt the pattern to recognize this asynchronous behaviour.

Back to the task at hand. At this point, our component has data in the `teachers` property. How can we render the data in the view? Open the component's HTML template (`start.component.html`) for editing. 

In the panel body div, add another element:

```html
<p>First name in the collection: \{\{ teachers[0] \}\}</p>
```

We're using simple read-only binding syntax, to extract the first element of the `teachers` array/collection. It should show this:

![One name](../media/angular-services-render1.png)

Now we can improve its appearance, by rendering *all* names in the teacher array/collection. We will use an `ngFor` *structural directive* that renders an element for each item in the collection. Replace the just-added element with this new content:

```html
    <p>All teachers:</p>
    <ul>
      <li *ngFor='let t of teachers'>
        \{\{ t \}\}
      </li>
    </ul>
```

It should show this:

![One name](../media/angular-services-render2.png)

( more to come )

<br>
