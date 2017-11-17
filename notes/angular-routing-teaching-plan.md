---
title: Angular routing teaching plan
layout: default
---

## Angular routing, teaching plan

> This document is being edited.  
> This notice will be removed when the edits are complete.

<br> 

Go through the tutorial, quickly/briefly (mostly for awareness and orientation)  
Pick and choose the highlights  
Not much new was learned there  

Then go to the FUNDAMENTALS > Routing & Navigation  
Work our way through that  
Again, focus on the engineering aspects  

Router features include (from the docs):
* can interpret a URL as an instruction to navigate to a view
* can pass optional parameters along to the view component 
* can bind the router to links on a page
* can navigate imperatively when the user clicks a button, selects from a drop box, or in response to some other stimulus from any source
* and the router logs activity in the browser's history feature so the back and forward buttons work as well

Routes (URL paths) must be defined. In the base config, there's no "by convention" route templates. This contrasts with other kinds of apps (e.g. ASP.NET MVC, which Peter is familiar with), which have a default route template. (In other words, if you follow the convention, and there's no route code to write in those "by convention" kinds of apps.)

Order of the defined routes matters.  
More specific to less specific.  
Or, put another way, consider a scenario where you have more than one route that begins with the same segment. Place the *more specific* route(s) (i.e. the one with more segments, and/or URL parameters, and/or query string paramaeters) above the *less specific* route(s). 

Route array id of type Routes. A few notes to get started:
* path is a string; it's assumed (configured) that the string is added to the "base" href in index.html (its value is `"/"`)
* as a result, the path string does *NOT* begin with a forward slash
* empty path is often used todo a default redirect
* path ** is a wildcard, to match any non-configured route; often used for 404 not found component (or redirect)
* component names the component with the view to be displayed
* data is optional, can pass an object to the component/view

The router outlet element (`<router-outlet>`) is a placeholder, often seen in simple apps in the app-component.html source code file.  
At runtime, Angular places the component's HTML just below the `<router-outlet>` element. 

To create a link to a routed component, use an `<a>` element. However, replace the `href` attribute with a `routerLink` attribute.  

Often, a `<nav>` element encloses a set of links. Add a `routerLinkActive` attribute to the `<nav>` element so that it will add the CSS "active" class to the active/clicked link. A nice visual help cue/hint for the browser user. 

The first part of the document's [summary](https://angular.io/guide/router#summary) is good and useful.  
The [sample app in action](https://angular.io/guide/router#the-sample-application-in-action) has all the working pieces. 

The docs FUNDAMENTALS > Routing & Navigation coverage is just too much for our purposes.

<br>

**Suggestion**  
Leave route parameters until the next week, when we learn services  
Doing that will give context and deeper meaning to the topic

Other things to note:
* Routed components don't need a selector 

<br>
