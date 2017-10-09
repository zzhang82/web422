---
title: Angular architecture cut
layout: default
---

## Angular architecture content cut from the notes

FYI

<br>


### Component

A component controls a user interface or user interaction item in an application:  
* UI element
* Screen
* Route

An app has, or builds, a component *tree*, at runtime.  

A component is defined by source code files:
* *component-name*.ts - TypeScript (JavaScript)
* *component-name*.html - markup and binding expressions

<br>

#### component-name.ts structure

Component structure:
* import statements
* component metadata directive
* component source code

Component metadata directive...  
Format is: @Component({object})  
Object has some key-value pairs  
selector: name of custom HTML element that this component controls  
directives

[Component](https://angular.io/docs/ts/latest/guide/glossary.html#!#component) - App class responsible for exposing data to a view, and handling the view's display and user interaction logic. (Is the "controller" role in the pure MVC - not "ASP.NET MVC" - pattern.) A plain class becomes a component by adding the "@Component() decorator. 

More info about a component: Should be lean. Don't fetch data from a server. Or validate user input (huh?). Delegate these tasks to a service.  

A component's job is to enable the user experience and nothing more. It mediates between the view (rendered by the template) and the application logic (which often includes some notion of a model). A good component presents properties and methods for data binding. It delegates everything nontrivial to services.

Angular helps you follow these principles by making it easy to factor your application logic into services and make those services available to components through dependency injection.

[Template](https://angular.io/docs/ts/latest/guide/glossary.html#!#template) - Some HTML for a view, guided (controlled) most often by a component. 

[View](https://angular.io/docs/ts/latest/guide/glossary.html#!#view) - A portion of the screen, displays content, responds to user interaction. The term "view" is often used as a synonym to "component". 

More info about a view: Often contains other views. A view may be loaded/unloaded by navigation, under the control of a router. 

[Directive]() - Most fundamental feature. Associated with an HTML element or attribute. Responsible for creating, updating, interacting with an HTML element in the browser DOM.

More info about a directive: Can be one of three kinds:
* Component directive - Combines an HTML template with logic/code (in a class) to render a view, which ends up as a "component". Building block of an app. Most common.
* [Attribute directive](https://angular.io/docs/ts/latest/guide/attribute-directives.html) - Listen to and/or modify an HTML element. Changes the appearance or behaviour of an element, component, or another directive. Their syntax looks like an HTML attribute (hence their name). For example, `<input [(ngModel)]="hero.name">`
* [Structural directive](https://angular.io/docs/ts/latest/guide/structural-directives.html) - Render and modify HTML layout. For example, `*ngFor` will repeatedly render the element. And, `*ngIf` will render the element if the condition is true.  

[Decorator]() - An ES2016 function syntax to define metadata for a class, its members, and function arguments. Add just above, or to the left, of the item.  

[Router]() - View navigation, which causes view replacement (destruction, creation). Configure routing for a component by using `RouterConfig`. 

[Service]() - Task needed by the app. Small and focused. Is a class with an `@Injectable` decorator. For example, logging, data, message, calculator, etc. Taken together, all services in an app are considered to be "application logic".  

[Injector]() - Angular piece (not sure what word to use) that maintains a container of service instances that it has previously created. A service is created when it is accessed for the first time. 

More about dependency injection: During compilation, Angular looks at constructor types. And "providers", which are declarations. Together, those are the services that the injector maintains.

Add providers to the root module, which makes the same instance available everywhere in the app. Or add to a component, and the service will exist only for the use of that component.

<br>

#### Defining input and output properties

Component decorator or property decorator (?).  

These are the public API of a component.  

In the ts file, inside the class declaration:  
@Input() var-name: var-type;  
@Output() var-name: var-type; // typicall for event emitters  

In the html file, inside the custom HTML element:  
Can **set** input property with [var-name]  
Can **subscribe** to output proerty using event bindings, with (var-name)

<br>



### Resources, references

[The Core Concepts of Angular](https://vsavkin.com/the-core-concepts-of-angular-2-c3d6cbe04d04) - Victor Savkin, the author, was on the Angular core team at Google, and built the dependency injection, change detection, forms, and router modules.  

<br>

### Big ideas, and things that are "new"

components, dependency injection, bindings

Custom HTML elements (just like React)

Standards-based efforts - [Web Components](https://www.webcomponents.org/introduction)

Angular CLI for building bits and pieces.  

TypeScript.

Brad Frost - [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)

<br>

