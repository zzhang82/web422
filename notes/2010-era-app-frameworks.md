---
title: 2010-era app frameworks
layout: default
---

## Client app frameworks that appeared in 2010

Including:
* AngularJS
* Backbone.js (or simply Backbone)
* Ember.js (or simply Ember)
* Knockout (or simply KO)

Goal: Simplify the tangle of event handlers and manual DOM updates that happened when we started to use lots of JavaScript at the client for DOM manipulation.

All except Backbone are templating engines, where you put bindings on DOM elements, for two-way binding.

[Comparison from 2015](https://www.airpair.com/js/javascript-framework-comparison).  

<br>

### AngularJS

Declarative programming.  
Adapts and extends HTML with data binding.  
De-emphasize direct DOM manipulation.  
Decouple DOM manipulation from app logic.  
Decouple client app content and flow from server logic.  

The AngularJS framework works by first reading the HTML page, which has embedded into it additional custom tag attributes. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources.

<br>

### Backbone.js

With Backbone, you represent your data as Models, which can be created, validated, destroyed, and saved to the server. Whenever a UI action causes an attribute of a model to change, the model triggers a "change" event; all the Views that display the model's state can be notified of the change, so that they are able to respond accordingly, re-rendering themselves with the new information. 

In a finished Backbone app, you don't have to write the glue code that looks into the DOM to find an element with a specific id, and update the HTML manually - when the model changes, the views simply update themselves.

Described as a widget-builder.  
Markedly different than the others, [in this respect](https://www.codementor.io/angularjs/tutorial/beginners-angular-ember-backbone).  

<br>

### Ember

SPA, based on MVVM. 

Ember sets out to provide a wholesale solution to the client-side application problem. This is in contrast to many JavaScript frameworks that start by providing a solution to the V in MVC (Model–View–Controller), and attempt to grow from there.

Ember has been an early adopter and pioneer of many standards around JavaScript and the web including promises, web components and ES6 syntax. Yehuda Katz, one of Ember's cofounders, is a member on TC39, which is the committee responsible for future versions of the JavaScript language.

<br>

### Knockout

Developers familiar with ASP.NET MVC or other MV* technologies may see MVVM as a *real-time* form of MVC with declarative syntax. 

In another sense, you can think of KO as a general way to make UIs for editing JSON data.

jQuery is an excellent *low-level* way to manipulate elements and event handlers in a web page. KO solves a different problem.

As soon as your UI gets nontrivial and has a few overlapping behaviors, things can get tricky and expensive to maintain if you only use jQuery. 

Introduced binding - two-way data binding (to be verified). 

Introduced (suggested) the "observable" concept for client web apps (I think, to be verified). 

Knockout is built around three core features:
1. Observables and dependency tracking
2. Declarative bindings
3. Templating

Need to understand the MVVM pattern and the concept of a view model.
