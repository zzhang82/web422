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

Open the project for editing (remember the quick-and-easy way to do this, `code .`). 

Then, you can build and run the app with `ng serve --open`. 

<br>

#### Service scenario

The first service we create will deliver a string array of names. It's a simple example, and will enable us to focus on the creation and use of a service. 

Later, we will edit the service, and fetch data from an external source (i.e. outside our app), which will be a web service. 

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

  teachers: string[] = [];
  
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



( more to come )

<br>
