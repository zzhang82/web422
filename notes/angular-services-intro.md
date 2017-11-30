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

( more to come )

<br>

### Supporting documentation

In the official [Angular.io documentation](https://angular.io/docs) set, there are two main sources of information on services. 

> To be edited.  

One is the **TUTORIAL > Routing** area. To preview its contents:
* It continues with the *Tour of Heroes* example
* Routing is added manually to the app
* Its "version 1" approach is to define the route definitions among many source code files; after refactoring, its "version 2" approach gathers them into the preferred way, into the routing module
* It incrementally adds *default* and *not found* routes

In summary, the content is useful to read/skim. (Do that now.) However, your professors think that its learning path should not be considered best practice or authoritative. Today, we will recommend an approach that provides many benefits, including coding ease, better quality, and repeatability. 

The other source of information is the **FUNDAMENTALS > Routing & Navigation** area. To preview its contents:
* It uses the same *Tour of Heroes* problem and data set
* An evolutionary and detailed approach through a wide range of routing and routing-related topics, with much detail
* Includes many topics (router state, router events, guard, child, lazy load, etc.) that are too advanced for our current needs (later in the course, we will cover some of them)

In summary, some of this content is useful to skim. (Do that now.) However, your professors think that its learning path is too detailed and too tied to the *Tour of Heroes* example. As a result, it's not as clear as it could be in presenting routing topics to you in a way that you can understand, repeat, and implement. As noted above, we will recommend an approach that will be better. 

<br>

### Adding a service to an app

> Edits  

`ng g s foo --module=app`

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
