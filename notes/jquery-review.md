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

Selector | Description | Number of Elements
--- | --- | ---
$( "*" ); | **All Selector:** Selects all elements | 96
$( "#animal-table" );| **id Selector:** Selects a single element with the given id attribute. | 1
$( ".table-heading" );| **class Selector:** Selects all elements with the given class. | 3
$( ":input" );| **input Selector:** Selects all input, textarea, select and button elements. | 9
$( ":radio" );| **radio Selector:** Selects all elements of type radio. | 2
$( ":checkbox" );| **checkbox Selector:** Selects all elements of type checkbox. | 2
$( ":visible" );| **visible Selector:** Selects all elements that are visible. | 80
$( ":hidden" );| **hidden Selector:** Selects all elements that are hidden (the opposite of :visible). | 16
$( "tr:odd" );| **odd Selector:** Selects odd elements, zero-indexed. See also [even](https://api.jquery.com/even-selector/) | 3
$( ".row:has(#animal-table)" );| **has() Selector:** Selects elements which contain at least one element that matches the specified selector. | 1

<br>

As you can see from the above table, it is often the case that a selector will select **more than one** element. This is fine if we want to apply the same operations to a group of elements.  However, if we wish to access each selected element individually,  we can leverage jQuery's [each() function](http://api.jquery.com/jquery.each/) to iterate over the elements in the collection. For Example:

<br>

```javascript
$( "tr:odd" ).each(function(index){
    $(this).css({"background-color":"#eff6f7"}); // color the odd rows gray
});
```

<br>

The .each() function will iterate over every selected element returned by the selector and invoke the provided "callback" function.  You can optionally pass a parameter to the callback function if you wish to know the current index (0, 1, 2, 3, etc).  

During the iteration, the current element can be accessed using "$(this)".  It's a little strange to see "this" wrapped in a jQuery function, however we need to wrap "this" (ie: the current element) into a jQuery object so that we can perform jQuery specific operations on it (ie, using the [.css()](http://api.jquery.com/css/) method).  If we remove the code surrounding "this", we will run into the error:

```
TypeError: this.css is not a function
```
<br>

### Watching for Events

Now that we have access to the element (or elements) we wish to modify in the DOM, we can apply a number of operations to modify their appearance and/or behaviour using jQuery.  One extremely important aspect in creating a reactive and dynamic view (DHTML) is watching a given element for a user / system initiated event and responding to it with custom code.

jQuery provides this functionality via it's [on()](http://api.jquery.com/on/) method:


```
.on( events [, selector ] [, data ], handler )
```

We can apply this method to any selected element in order to wire up ("respond to") an "event" by passing a callback function to the "handler" parameter, ie:

<br>

```javascript
 $(".row").on("change", ":input", function(){ // watch existing "row" div elemennts for when input elements change
     console.log("id: " + $(this).attr("id") + "changed");
 });
```

<br>

What makes this function so powerful is that if we invoke the ".on" method on an element that isn't likely to change (an outer container or "document", for example), we can use the "selector" parameter to apply the callback function to **any** element that matches that selector (even if it's dynamically created in the future).  

This means that even if we use some of jQuery's DOM modification methods (see below) to dynamically create a new input element (contained with an element with class="row") **after** we define the event, it will **still be applied** to the new input element.  This can sometimes lead to event handlers that take the form:

<br>

```javascript
$("document").on("click", "tr", function(){ // watch the whole document for when existing (or new) tr elements are clicked
     console.log("table row clicked!");
});
```

<br>

By defining the "click" element on the entire "document" object and filtering it by only affecting "tr" elememnts, we can guarantee that all "tr" elements will invoke the supplied function when clicked, regardless of when they are created in the future.  This saves us the hassle of wiring up new events every time we create a new element.

<br>

### Updating Elements

The final piece in creating dynamic html (DHTML) is actually modifying the DOM by creating, destroying or modifying elements (nodes) within the DOM tree. JavaScript itself provides a number of methods for dealing with the DOM, however jQuery extends this functionality and provides some new methods as well.  Some of the more common methods are as follows:

<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td>let newDiv = $('&lt;div&gt;');</td>
<td><strong>$('', {})</strong> Create a new element by specifying a string defining a single, standalone, HTML element (e.g. <div/> or <div></div>), followed by an optional object consisting of attributes, events, and methods to call on the newly-created element.</td>
<td>Creates a new "div" element and stores it in the variable: "newDiv"</td>
</tr>
<tr>
<td>newDiv.css({"border":"1px solid lightgray", "padding":"10px"});</td>
<td><strong>.css()</strong> Get the value of a computed style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.</td>
<td></td>
</tr>
<tr>
<td>newDiv.html("&lt;span&gt;New Div!&lt;/span&gt;");</td>
<td><strong>.html()</strong> Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.</td>
<td></td>
</tr>
<tr>
<td>$("#new-content").append(newDiv);</td>
<td><strong>.append()</strong> Insert content, specified by the parameter, to the end of each element in the set of matched elements.</td>
<td></td>
</tr>
<tr>
<td>let newDiv2 = newDiv.clone();</td>
<td><strong>.clone()</strong> Create a deep copy of the set of matched elements.</td>
<td></td>
</tr>
<tr>
<td>newDiv2.attr("id", "clonedDiv1");</td>
<td><strong>.attr()</strong> Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.</td>
<td></td>
</tr>
<tr>
<td>newDiv2.addClass("bg-color-lightgray");</td>
<td><strong>.addClass()</strong> Adds the specified class(es) to each element in the set of matched elements. Also see <a href="https://api.jquery.com/removeclass/">.removeClass()</a></td>
<td></td>
</tr>
<tr>
<td>newDiv2.wrap("&lt;div class='outer'&gt;&lt;/div&gt;");</td>
<td><strong>.wrap()</strong> Wrap an HTML structure around each element in the set of matched elements.</td>
<td></td>
</tr>
<tr>
<td>newDiv2.text("Cloned Div!");</td>
<td><strong>.text()</strong> Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.</td>
<td></td>
</tr>
<tr>
<td>$("#to-be-replaced p").replaceWith(newDiv2);</td>
<td><strong>.replaceWith()</strong> Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.</td>
<td></td>
</tr>
<tr>
<td>$("#exampleInputEmail1").val("from jQuery!");</td>
<td><strong>.val()</strong> Get the current value of the first element in the set of matched elements or set the value of every matched element.</td>
<td></td>
</tr>
</tbody>
</table>



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


  
  
