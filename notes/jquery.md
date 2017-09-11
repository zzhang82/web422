---
title: jQuery
layout: default
---

## jQuery

Last week we introduced jQuery and it's value proposition as a the "swiss army knife" of the DOM, giving us everything we need to create DHTML (ie: selecting elements, watching for / responding to events & updating the DOM).  We finished off the lecture by discussing how we can make AJAX requests using jQuery.  As we saw, this code can be very clean and compact:

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

Today, we will be rounding out our discussion of jQuery by discussing some of jQuery's **Utility** methods, as well as introducing the notion of **jQuery Plugins** and the **Plugin Community**. We will discuss how to handle **form data** (ie: reading / writing form information) using jQuery and lastly, how to work with **Bootstrap 3 Components** using jQuery:

## Utility Methods

There are a number of [Utility functions / methods](http://api.jquery.com/category/utilities/) included in jQuery (35\+). We will only discuss some of the ones that we're likely to see in this course. However, all of the methods available are useful and we encourage you to **Bookmark** the full list for future reference.  

### jQuery.data()

Store arbitrary data associated with the specified element and/or return the value that was set.

See: [http://api.jquery.com/jQuery.data/](http://api.jquery.com/jQuery.data/)

```js
var div = $( "div" )[ 0 ];

jQuery.data( div, "test", {
  first: 16,
  last: "pizza!"
});

jQuery.data( div, "test" ).first; // => 16
jQuery.data( div, "test" ).last; // => "pizza!"
```

### jQuery.removeData()

Remove a previously-stored piece of data.

See: http://api.jquery.com/jQuery.removeData/

```js
jQuery.removeData( div, "test" );

jQuery.data( div, "test" ).first; // => TypeError: Cannot read property 'first' of undefined
```

### jQuery.contains()

Check to see if a DOM element is a descendant of another DOM element.

See:[http://api.jquery.com/jQuery.contains/](http://api.jquery.com/jQuery.contains/)

```js
$.contains( $("ul")[0], $("li")[0] ); // true
$.contains( $("li")[0], $("ul")[0] ); // false
```

### jQuery.grep()

Finds the elements of an array which satisfy a filter function. The original array is not affected.

See:[http://api.jquery.com/jQuery.grep/](http://api.jquery.com/jQuery.grep/)

```js
let arr  = $.grep(employees, function( employee ) {
    return employee.Position.PositionName == "Full Stack Developer";
}); // => 35 "employee" objects returned
```

### jQuery.map()

Translate all items in an array or object to new array of items.

See: [http://api.jquery.com/jQuery.map/](http://api.jquery.com/jQuery.map/)

```js
$.map(employees, function( val, i ) {
    val.LastName = val.LastName + "!";
}); // => transform all last names to end in "!"
```

### jQuery.parseHTML()

Parses a string into an array of DOM nodes.

See: [http://api.jquery.com/jQuery.parseHTML/](http://api.jquery.com/jQuery.parseHTML/)

```js
let htmlArr = $.parseHTML( "hello, <b>my name is</b> jQuery." ); // => 3 elements: 'hello, ', <b> and ' jQuery.'
```

## Handling Form Data

jQuery has a very nice interface for handling form values.  The following sections illustrate how we can **get**, **set** and correctly **clear** the values of **text** / **password**, **checkbox**, **radiobutton**, **textarea** and **select (single / multiple)** elements.  

If you’re following along with the “Code Samples” the following functionality is located in the “week2/jQuery-AJAX” folder

### text / password elements

```html
<input type="text" class="form-control" id="inputEmail" placeholder="Email">
input type="password" class="form-control" id="inputPassword" placeholder="Password">
```

***Set***
```js
$("#inputEmail").val("from jQuery"); // set to "from jQuery"
$("#inputPassword").val("abc"); // set to "abc"
```

***Get***
```js
$("#inputEmail").val(); 
$("#inputPassword").val();
```

***Clear***
```js
$("#inputEmail").val(""); 
$("#inputPassword").val("");
```




