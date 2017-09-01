---
title: jQuery Review
layout: default
---

## jQuery Review

As we have seen from the notes in WEB322, the jQuery Library is an extremely popular and valuable tool for front-end web application development.  To refresh your memory:

<br>

> "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript."

<br>

Today, we will be re-examining the way that jQuery can help us manipulate the DOM to gain complete control of the elements on the page, including: "Selecting / Accessing Elements", "Watching for Events" & "Updating Elements".

Lastly, we will look at how jQuery can make AJAX calls simple to execute and we will try querying our Teams API for data and updating the DOM.  You can think of this as a way to replace what was initially done in Handlebars.js in WEB322.  However, instead of relying on the server to generate the dynamic content before serving the page, we will shift that logic to the client (in this case, a web browser). By decoupling the data-rendering tasks from the server, we gain more freedom in how we render the data.  This allows us to create richer user experiences across multiple different platforms. 

<br>

Before we start to re-examine creating DHTML with jQuery, we should first grab the sample code from the course [Github Repository](https://github.com/sictweb/web422).  It can be found under **Code Examples/week1**.

To begin, open up the **week1/jQuery** folder and take a look at the index.html page.  Here, you will see a perfectly normal HTML page with some elements on it, ie: a &lt;table&gt;, &lt;form&gt; some input elements, etc.  This page also includes some important css/js files including:

#### CSS

* [The bootstrap 3.3.7 compiled/minified CSS file from the maxcdn.bootstrapcdn.com CDN](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css)
* Our own custom css file (main.css) located in the "css" directory

#### JavaScript

* [The jQuery 3.2.1 minified JS file from the code.jquery.com CDN](https://code.jquery.com/jquery-3.2.1.min.js)
* [The bootstrap 3.3.7 minified JS file from the maxcdn.bootstrapcdn.com CDN](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js)
* Our own custom js file (main.js) located in the "js" directory
<br>
<br>

### The '$(function() { });' or '$(document).ready(function(){ });' functions


It stands to reason that any JavaScript code that deals with accessing elements in the DOM **must** be executed *after* the DOM is built.   It is for this reason that you will see most jQuery code residing in an anonymous function delcared as a parameter to either **$();** or **$(document.ready());**.  When the DOM is ready, the supplied anonymous ("callback") function will be executed, ensuring that any DOM operation within the function will be safe to use.

<br>

### Selecting / Accessing Elements

jQuery has a rich ["selector" framework](https://api.jquery.com/category/selectors/) for getting a reference to a specific element in the DOM.

As we have seen, these selectors typically follow the syntax of CSS selectors (ie: $("#element") in jQuery will reference the DOM element with id="element").  The following table shows some of the most widely used selectors and how they work to access DOM elements in our sample **index.html** page within the **week1/jQuery** folder.

<br>

Selector | Description | Number of Elements Selected
--- | --- | ---
`$( "*" );` | ... | 96
$( "#animal-table" );
$( ".table-heading" );
$( ":input" );
$( ":radio" );
$( ":checkbox" );
$( ":visible" );
$( ":hidden" );
$( "tr:odd" );
$( ".row:has(#animal-table)" );

<br>

## Next Week

* Continuing coverage of jQuery, including topics:
  * [jQuery Utility Methods](http://api.jquery.com/category/utilities/)
  * jQuery Plugin Community: [https://plugins.jquery.com/](https://plugins.jquery.com/) & [NPM](https://www.npmjs.com/browse/keyword/jquery-plugin)
  * Advanced data rendering (Bootstrap, flot, populating forms)
  * Using jQuery to invoke Bootstrap Controls
  * Using jQuery to implement "data binding"



<br>
<br>
<br>
<br>
<br>

Notes (TODO: Remove)

* Selectors
* Event Handling
* DOM Modification
* AJAX
* Using jQuery render our data (Bootstrap tables)

Coming soon...


  
  
