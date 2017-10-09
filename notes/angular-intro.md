---
title: Angular introduction
layout: default
---

## Introduction to Angular

Recall the React intro notes.  
To get started, replace the word "React" with "Angular".  

( more to come)  

Angular is...

<br>

### Relevant history

Angluar, and AngularJS  

AngularJS...  
Misko Hevery, 2009 (announced)  
First appeared on GitHub in October 2010  
Version 1 launched on June 14, 2012  
About 5+ years old as of end-of-2017 and start-of-2018  

Angular...  
Announced in September 2014  
Released in September 2016 (about 1+ years old)  
Complete rewrite, clean cut away from AngularJS  
Two major value propositions: 1) Features, 2) Simplification  


Google...

<br>

### What's similar, and what's different

Features:
* Declarative
* Dependency injection
* ? directives

Extends HTML, manages the DOM, de-emphasize (decouple) direct/explicit DOM manipulation

Decouple client-side app dev concerns from server-side app dev concerns

Declarative programming...
* For UI creation
* Software components connections/connecting

Imperative for...
* Define an app's business logic

Similar:
* Component-based development and architecture
* When fully-configured, can do the same things

Different:
* React more focused to building UIs (maybe)
* Angular is a complete app dev platform 
* Angular programming language is TypeScript

( links to lots of comparison docs )

Similar to React, the big difference is that we will not work directly with the DOM. Yes, our work will affect the rendered DOM, but we cannot use that conceptual model as a foundation for building and modifying the DOM. 

What specifically is different? In Angular, we build the user interface with *components*. 

A component is a JavaScript code container. It includes user interface declarations (markup), and JavaScript code for logic, state management, and communication. The component is responsible for an area (e.g. a rectangle) in the user interface, including rendering and interaction. A component can hold other components, and/or be embedded in a "parent" component. 

This completely changes the architecture and code design of all parts of the app. Until now, we have used a *page-first* approach to app design, where the task to be done, and the workflow to be followed, was designed around a set of pages. Each page used JavaScript to add functionality and user interaction. The browser and the HTML document was at the center of our app-building efforts.

In Angular, it's different. We use an *app-first* design approach, and build the app with components. The HTML document remains only as the default deployment target, in a browser or browser-like object on a device. Angular handles the DOM building and modification tasks. 

In addition, Angular apps also work on iOS and Android platforms, by using the (more to come) libraries. 

In summary:
* The Angular component architecture changes our app design approach 
* We now use an app-first design approach, and build the app with components

<br>

### In summary... (take-aways)

The *browser* is the deployment target.  

In the "old days", programmers targeted *operating systems*. We wrote *for Windows*, or *for Unix*. Even when we wrote for a managed runtime environment (e.g. Java), there was always part of our work - sometimes a big part - that had to respect the services and facilities offered by the platform and device. In other words, we couldn't install an app like the College's *Student Center* on a 2005-era cellphone. (In those days, "smart" cellphones often came with a Java runtime.)  

<br>

### Value proposition of client-side front end dev

Cory House article:
[Here's Why Client-side Rendering Won](https://medium.freecodecamp.org/heres-why-client-side-rendering-won-46a349fadb52) - Medium  

Paraphrasing and summarizing:
* No full page load
* Lazy loading
* Rich iteractions
* Cheap hosting
* Leverages CDN
* Easy deployment
* Enforced separation of concerns
* Learn once, write everywhere
* Same UI Technology for Web, Native Mobile, and Desktop

Does server-side rendering make sense anymore?  
Sure. But in far fewer situations than before. If you're building a mostly static site, server-side rendering will be easier.

<br>
