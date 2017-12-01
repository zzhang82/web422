---
title: Angular services introduction
layout: default
---

## Angular services, introduction

> This document is still being edited.  
> This notice will be removed when the edits are complete.  

Ack past coverage of comps and routing  
Now, get data involved, using services as a layer (a specialized module/comp)  
Will learn about the HTTPClient and its bits-and-pieces  

Define or describe what a service is  
Value proposition etc.  
Write code once, use in many places  

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

In the class code, we will add members - properties and methods - which will perform tasks. 


> Edits   

<br>

### Configure and use ( a service )

> Edits  

<br>

> Back to comps and routing...  
> Data flow, binding  
> Routing with parameters (guards? etc.?)

<br>

### Summary, and next actions

In past weeks, we have had a good treatment of *components* and *routing*. The scenarios were simple, in that the goal was to package and display an area of the user interface. Multiple components were created and displayed. 

This week, we learned how to add *services* to an app. This feature gets external (and internal) data and services involved in your app. 

<br>

**Next actions**

In our [getting started example](angular-services-example) document, you will learn to enhance last week's routing example, by adding services. 

<br>
