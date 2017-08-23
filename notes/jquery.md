---
title: jQuery
layout: default
---

## jQuery

Goal: DOM manipulation.

See [Wikipedia article](https://en.wikipedia.org/wiki/JQuery).  

Neutralize browser differences.  
DOM navigation and modification improvements (using CSS selectors).  
Make Ajax easier.  
Scoping for JavaScript variables.  
Event handling improvements.  
Helpers to make some things work better and easier.  
Page oriented (no state management when navigating to a different server-delivered page)

$ is a jQuery function, which really is a *factory method*.

Utility functions are called with $. prefix. For example:
* `$.each(...` - run a function on each item in a collection
* `$.ajax(...` - create an Ajax request

Starting point, typical:  
`$(document).ready(handler) // handler is a function`  
...or...  
`$(handler) // handler is a function`  

No concept of an underlying data model.

<br>

(jQuery Topics - Rough)

Review

* Including jQuery in our Projects 
  * Client Side JS & $(document).ready()
* jQuery Selectors 
  * Accessing the Selected Elements
* Event Handling
* DOM Modification
* Using AJAX

New

* Using jQuery to talk to the Teams API & Update the DOM
* jQuery UI 




### Other libraries

Including:
* Underscore
* Lodash
* Moment

(see other document)
