---
title: Angular services introduction
layout: default
---

## Angular services, introduction

> This document is still being edited.  
> This notice will be removed when the edits are complete.  

An Angular *service* is a code asset that performs a task. It does not have a user interface. Often its main task will be to perform data service operations (e.g. fetch, add, edit, transform). 

A service can be used by *any* of your app's components. Its use promotes a layered system architecture, also known as a [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns). Enables you to write the code once, and use it in many places. 

<br>

**More about components, and the role of services**

Consider a scenario where an app has many components. Some of the components need to display data that's stored in a database on a server somewhere out there. The data could be fetched in a couple of ways:
1. Wrong way - add the same data-handling code to each component (so that multiple components have the same repeated block of data-handling code)
2. Right way - add the data-handling code to a single *service*, and then call the service from each component

A component should be lean and focused. Its job is to enable the user experience and nothing more. It mediates between the *view* (rendered by the template) and the *application logic* (which often includes some notion of a model). A good component presents properties and methods for data binding. It delegates everything nontrivial to services.

Angular helps you follow these principles by making it easy to factor your application logic into services and make those services available to components through dependency injection.

<br>

**Learning pathway**

In recent weeks, you learned that a *component* is a code asset that manages an area of the user interface. Most often, an app's user interface has many components. 

You also learned that *routing* enables navigation in an app. The user interface is updated, in whole or in part, as the result of a routing action. 

The code examples that supported these topics used static content in the components' user interface templates. This was done to keep the focus on the main topics, components, and then routing. 

This week, we will get data involved. The static content in component templates will be replaced by data that will be fetched from somewhere, and then rendered. Almost always, the data store will be external to the app, and will typically be a web service, like our Teams API. 

As introduced above, a *service* will be used to centralize the task of working with the data store. Learning this topic means that we will be learning much about a number of related topics and techniques, including: 
* Dependency injection
* HttpClient and [asynchrony](https://en.wikipedia.org/wiki/Asynchrony_(computer_programming))
* RxJS
* Observable
* Input directive
* Data binding in component templates
* Structural directives, *ngFor and *ngIf 
* Routing parameters

( more to come )

<br>

### Supporting documentation

While the idea of a service can be understood and appreciated, it has a number of "moving parts" when properly and fully done. 

As a result, there are several documentation sets that will help us get started, and then act as resources for richer or more complex scenarios. 

In the official [Angular.io documentation](https://angular.io/docs) set, there are two main sources of information on services. 

> To be edited.  

One is the **TUTORIAL > Services** area. To preview its contents:
* It continues with the *Tour of Heroes* example

In summary, the content is useful (our opinion coming soon). 

A companion is the **TUTORIAL > HTTP** area. To preview its contents:
* (coming soon)

Another source of information is the **FUNDAMENTALS > HttpClient** area. To preview its contents:
* (coming soon)

In summary, some of this content is useful (our opinion coming soon). 

<br>

### Adding a service to an app

We can use the Angular CLI to add a service. In the example below, a service named "DataService" is added to the app:

`ng g s DataService --module=app --spec false`

As you have seen when creating components, a CamelCase name is transformed into lower case with dash word separators, when it generates the source code files. 

A new source code file is created, named `data-service.service.ts`. Its contents:

```js
import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {

  constructor() { }

}
```

The `@Injectable()` decorator indicates that this service is intended to be "injected" into another component or service at runtime. We'll have more to day about "injection" soon. 

In the class code, we will add members: Properties to hold state, and methods to perform tasks. 


> Edits   

<br>

### Configure and use ( a service )

> Edits  

<br>

> Back to comps and routing...  
> Data flow, binding  
> Routing with parameters (guards? etc.?)

> Maybe discuss a scenario to work through 

( more to come )

<br>

### Dependency injection

Above, you were introduced to the `@Injectable` decorator, which indicates that a service is intended to be "injected" into another component or service at runtime. 

> Being edited...

Injector - Angular piece (not sure what word to use, but I'm pretty sure that it is "module") that maintains a container of service instances that it has previously created. A service is created when it is accessed for the first time.

During compilation, Angular looks at constructor types. And "providers", which are declarations. Together, those are the services that the injector maintains.

The idea behind dependency injection is very simple. You have a component that depends on a service. You do not create that service yourself. Instead, you request one in the constructor, and the framework will provide you one. 

(esoteric? abstract? explain better? By doing so you can depend on interfaces rather than concrete types. This leads to more decoupled code, which enables testability, and other great things.

How is a dependency injected? Into the component's constructor. 

So, I think this is how it goes:
1. Create an interface
2. Create a service class that implements the interface
3. In the component constructor, specify the interface as the parameter type

( more to come )

<br>

### HttpClient and asynchrony

( more to come )

<br>

### RxJS

( more to come )

<br>

### Observable

( more to come )

<br>

### Input directive

> Some from Victor Savkin, The Core Concepts of Angular 2

A component has input and output properties, which can be defined in the component decorator or using property decorators.

Data flows into a component via input properties. Data flows out of a component via output properties.

Input and output properties are the public API of a component. You use them when you instantiate a component in your application.

? 

You can set input properties using property bindings, through square brackets. You can subscribe to output properties using event bindings, through parenthesis.

( more to come )

<br>

### Data binding in component templates

( more to come )

<br>

### Structural directives, *ngFor and *ngIf 

( more to come )

<br>

### Routing parameters

( more to come )

<br>

### Summary, and next actions

In past weeks, we have had a good treatment of *components* and *routing*. The scenarios were simple, in that the goal was to package and display an area of the user interface. Multiple components were created and displayed. 

This week, we learned how to add *services* to an app. This feature gets external (and internal) data and services involved in your app. 

<br>

**Next actions**

In our [getting started example](angular-services-example) document, you will learn to enhance last week's routing example, by adding services. 

<br>
