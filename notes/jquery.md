---
title: jQuery
layout: default
---

## jQuery

Last week we introduced jQuery and it's value proposition as a the "swiss army knife" of the DOM, giving us everything we need to create DHTML.  We finished off the lecture by discussing how we can make AJAX requests using jQuery.  As we saw, this code can be very clean and compact:

```js
$.ajax({
    url: "http://localhost:8081/employees", 
    type: "GET",
    contentType: "application/json"
})
.done(function (employees) {
    console.log(employees)  
})
.fail(function (err) {
    console.log("error: " + err.statusText);
});
```

Today, we will be rounding out our discussion of jQuery by discussing some of jQuery's **Utility** methods, as well as introducing the notion of **jQuery Plugins** and the **Plugin Community**. We will discuss how to handle **form data** (ie: reading / writing information to forms) using jQuery and lastly, how to work with **Bootstrap 3 Components** using jQuery:

## Utility Methods

There are a number of [Utility functions / methods](http://api.jquery.com/category/utilities/) included in jQuery (35\+). We will only discuss some of the ones that we're likely to see in this course. However, all of the methods available are useful and we encourage you to **Bookmark** the full list for future reference.  

### jQuery.data()

Store arbitrary data associated with the specified element and/or return the value that was set.

See: [http://api.jquery.com/jQuery.data/](http://api.jquery.com/jQuery.data/)

```js

```

### jQuery.contains()

Check to see if a DOM element is a descendant of another DOM element.

See:[http://api.jquery.com/jQuery.contains/](http://api.jquery.com/jQuery.contains/)

```js

```

### jQuery.grep()

Finds the elements of an array which satisfy a filter function. The original array is not affected.

See:[http://api.jquery.com/jQuery.grep/](http://api.jquery.com/jQuery.grep/)

```js

```

### jQuery.map()

Translate all items in an array or object to new array of items.

See: [http://api.jquery.com/jQuery.map/](http://api.jquery.com/jQuery.map/)

```js

```

### jQuery.parseHTML()

Parses a string into an array of DOM nodes.

See: [http://api.jquery.com/jQuery.parseHTML/](http://api.jquery.com/jQuery.parseHTML/)

```js
```

### jQuery.unique()

Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.

See: [http://api.jquery.com/jQuery.unique/](http://api.jquery.com/jQuery.unique/)




