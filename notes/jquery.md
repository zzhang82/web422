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

Today, we will be rounding out our discussion of jQuery by discussing some of jQuery's **Utility** methods, as well as how to handle **form data** (ie: reading / writing form information) using jQuery. Lastly, we will have a quick discussion on working with **Bootstrap 3 Components** using jQuery:

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

If you’re following along with the “Code Samples” the following functionality is located in the “week2/jQuery” folder

### text / password elements

```html
<input type="text" class="form-control" id="inputEmail" placeholder="Email">
<input type="password" class="form-control" id="inputPassword" placeholder="Password">
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

### checkbox elements

```html
<input type="checkbox" id="checkbox1"> Checkbox
```

***Set***
```js
$("#checkbox1").prop("checked", true); // set to "checked"
```

***Get***
```js
$("#checkbox1").prop("checked"); // true / false
```

***Clear***
```js
$("#checkbox1").prop("checked", false);
```

### radiobutton elements

```html
<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"> Option One
<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"> Option Two
```

***Set***
```js
$('input[name=optionsRadios][value=' + 'option2' + ']').prop("checked", true ); // set "option 2" to checked
```

***Get***
```js
$('input[name=optionsRadios]:checked').val(); // get the value of the checked "optionsRadio"
```

***Clear***
```js
$('input[name=optionsRadios]').prop("checked", false);
```

### textarea elements

```html
<textarea class="form-control" rows="3" id="textarea1"></textarea>
```

***Set***
```js
$("#textarea1").val("from jQuery"); // set to "from jQuery"
```

***Get***
```js
$("#textarea1").val();
```

***Clear***
```js
$("#textarea1").val("");
```

### select (single / multiple) elements

```html
<select class="form-control" id="select1">
    <option value="">Please Select</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
</select>
<select multiple="" class="form-control" id="select2">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
</select>
```

***Set***
```js
$("#select1").val(3); // set to "Three"
$("#select2").val([4,5]); // set to "Four" and "Five"
```

***Get***
```js
$("#select1").val();
$("#select2").val();
```

***Clear***
```js
$("#select1").val("");
$("#select2").val("");
```

## jQuery & Bootstrap

The Bootstrap UI framework has become so instrumental in the construction of modern, responsive web apps; largety due to it's execellent design patterns, modern tooling and wealth of online resources and templates.  However, we have only really used it's CSS (and minimal) JavaScript capabilities.  In order to unlock Bootstrap's full potential as a UI/UX framework, is to familiarize ourselves with the interactive UI components and the jQuery API used to invoke/manipulate them.  

As we have seen, we don't necessairly need to touch any JS code to make use of some of the interactive components.  The bootstrap framework uses jQuery in an unobtrusive way, by utalizing '**data-**' attributes, ie:

```html
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>
```

However, what if we wish to launch a modal window at a different (unknown) time? For example; when an AJAX request completes?  This is where the [Programmatic API](https://getbootstrap.com/docs/3.3/javascript/#js-programmatic-api) comes in to play. It gives us more power and flexability to work with the compoments.

Using the API we can interact with all of Bootstrap's JavaScript components programmatically (from JavaScript).  The following examples illustrate how we can use the API to take advantage of some of Bootstraps most useful components:

### Modal Window

Arguably one of the most important elements in modern UI/UX design is the "modal" window.  We can use it to display error/success warnings or focus the user's attention on a specific task.

