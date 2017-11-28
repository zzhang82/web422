---
title: Angular Components Continued
layout: default
---

## Angular Components Continued

Before we move on to more advanced topics in Angular, it's important that we really understand some of the fundamental details about Components.  Since an Angular application is essentially a "tree of Angular components", we will continue to work with Components throughout the remainder of this course.  We will often circle back to some of these core concepts and expand upon them to add new functionality to our applications.

For the next few sections, assume that we would like to create and work with two extremely trivial components: "RedBoxComponent" (&lt;app-red-box&gt;&lt;/app-red-box&gt; and "BlueBoxComponent" (&lt;app-blue-box&gt;&lt;/app-blue-box&gt;. The whole point of each component is to display a message inside either a **red box** or a **blue box**

### Review: Creating Components Using the Angular CLI

To add one of our components, ie the "RedBox", we typically use the Angular CLI.  In this case, we wish to create a new component called "RedBox", so the command would be:

```
ng generate component RedBox --flat
```

This would create the following 4 files in the src/app directory (Note: it will *not* create a new directory for the component - this is because the "flat" flag was used:

* red-box-component.css
* red-box-component.html
* red-box.component.spec.ts
* red-box.component.ts

Our main component is defined in the TypeScript file "red-box.component.ts" while the .html file provides the "template" for our comopnent and the .css file provides the style for our component (scoped to "app-red-box").  At this point we aren't particulairly concerned with "red-box.component.spec.ts" file.  It's created to help us "unit test" the component (using [Jasmine](https://jasmine.github.io/2.4/introduction.html) / [Karma](https://karma-runner.github.io/1.0/index.html)), however at this point we aren't concerned with testing, so this file can effectively be ignored for the time being.

### Structure of an Angular Component

If we open the red-box.component.ts file we should see the following code:

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-box',
  templateUrl: './red-box.component.html',
  styleUrls: ['./red-box.component.css']
})
export class RedBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

The angular CLI has automatically included some important code:

* The "import" statement to access the ["Component"](https://angular.io/api/core/Component) decorator and the ["OnInit"](https://angular.io/api/core/OnInit) interface from @angular/core.

* Default values for the @Component decorator, including the component "selector" (for element: &lt;app-red-box&gt;&lt;/app-red-box&gt;&lt;/app-red-box&gt;) and the urls for the newly added "template" (.html) / "style" (.css) files. 

* A class definition for our "RedBoxComponent" that implements the "OnInit" Lifecycle method (explained below), as well as provides a skeleton for a "constructor" method (used to initialize the fields of the class - optionally using dependant objects passed into the constructor when it's instantiated (see: ["Dependaency Injection"](https://angular.io/guide/dependency-injection) - this will be discussed further when we discuss "services"/"Providers")

### Component Lifecycle Hooks

After creating a component/directive by calling its constructor, Angular calls the lifecycle hook methods at specific moments.  For detailed information, we will refer to:

**[Angular's official documentation on Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)**


### Component / Template Data Binding


### Component Interaction


### Review: Angular Directives


#### Attribute Directives


#### Structural Directives


