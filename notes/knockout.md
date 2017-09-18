---
title: Introduction to Knockout.js
layout: default
---

## Introduction to Knockout.js

[Knockout.js](http://knockoutjs.com/) is a JavaScript library that helps you to create rich, responsive display and editor user interfaces with a clean underlying data model. Any time you have sections of UI that update dynamically (e.g., changing depending on the user’s actions or when an external data source changes), KO can help you implement it more simply and maintainably.

### Installation

Since Knockout.js is a **client-side** library, we will include it in the same way that we would include Lodash, Moment.js or jQuery; by downloading it and referencing it in a **&lt;script&gt;** element.  We can also reference the library using the popular [CDNJS Content Delivery Network](https://cdnjs.com/).

* The official, full source code can be downloaded [from here](http://knockoutjs.com/downloads/knockout-3.4.2.js)
* The CDN Link for the minified code is: `https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js`

### Headline features:

* **Elegant dependency tracking** - automatically updates the right parts of your UI whenever your data model changes.
* **Declarative bindings** - a simple and obvious way to connect parts of your UI to your data model. You can construct a complex dynamic UIs easily using arbitrarily nested binding contexts.
* **Trivially extensible** - implement custom behaviors as new declarative bindings for easy reuse in just a few lines of code.

### Data Model? - Enter the "MVVM" Pattern

Knockout.js is an important library for us to examine in this course, because it does an excellent job of introducing the "MVVM" ("Model-View-View Model") design Pattern, as well as introducing us to a more "modern" approach to web app development:

Essentially, MVVM describes how you can keep a potentially sophisticated UI simple by splitting it into three parts:

#### A model: 

Your application’s stored data. This data represents objects and operations in your business domain (e.g., bank accounts that can perform money transfers) and is independent of any UI. When using KO, you will usually make Ajax calls to some server-side code to read and write this stored model data.

#### A view model: 

A pure-code representation of the data and operations on a UI. For example, if you’re implementing a list editor, your view model would be an object holding a list of items, and exposing methods to add and remove items.

Note that this is not the UI itself: it doesn’t have any concept of buttons or display styles. It’s not the persisted data model either - it holds the unsaved data the user is working with. When using KO, your view models are pure JavaScript objects that hold no knowledge of HTML. Keeping the view model abstract in this way lets it stay simple, so you can manage more sophisticated behaviors without getting lost.

#### A view: 

A visible, interactive UI representing the state of the view model. It displays information from the view model, sends commands to the view model (e.g., when the user clicks buttons), and updates whenever the state of the view model changes.

When using KO, your view is simply your HTML document with declarative bindings to link it to the view model. Alternatively, you can use templates that generate HTML using data from your view model.

## Creating a View Model

To start working with Knockout and creating View Models, we should first create a new folder with the following (minimal) file/folder structure:

* js
  * main.js
* index.html

In your index.html file, enter the following boiler plate code (this includes the CDN links to Bootstrap, jQuery and Knockout.js)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <!-- Latest compiled and minified Bootstrap 3.3.7 CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <title>Knockout</title>
    </head>
    <body>

            

        <!-- Latest compiled and minified jQuery 3.2.1 JavaScript -->
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

        <!-- Latest compiled and minified Bootstrap 3.3.7 JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

        <!-- Knockout.js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js"></script>

        <!-- custom JS (main) -->
        <script src="js/main.js"></script>    
    </body>
</html>
```

### Editing main.js and creating a View Model

Fortunately for us, a View Model is defined using a simple object literal, ie:

```js
var myViewModel = {
    personName: 'Bob',
    personAge: 123
};
```

This object's data can be **referenced** in our **view** (index.html) using the following **template**:

```html
The name is <span data-bind="text: personName"></span>            
```

However, if we save both our **main.js** and **index.html** files at this point and run them in the browser, we will find that our HTML isn't updated!  

This is because The **data-bind** attribute isn’t native to HTML, though it is perfectly OK (it’s strictly compliant in HTML 5). But since the browser doesn’t know what it means, you need to activate Knockout to make it take effect:

At the bottom of your **server.js** file, we must add the code to actually apply the "data-bind" properties to our "model"

```js
$(function(){
    ko.applyBindings(myViewModel, $("body")[0]);
});
```

Here, we're telling Knockout (ko) to use the **"myViewModel"** object with all of the bindings (ie: "data-bind") in the **&lt;body&gt;** element. Since we're using jQuery to select the element from the DOM, we are including the "applyBindings" function with a jQuery document.ready callback (ie: `$(function(){ ... });`).  (Quick Note: We use the syntax <a href="https://learn.jquery.com/using-jquery-core/faq/how-do-i-pull-a-native-dom-element-from-a-jquery-object/">$(selector)[0]</a> to fetch the raw DOM element).

Since we have placed our `<span data-bind="text: personName"></span>` code within the &lt;body&gt;, the "text: personName" binding makes sense (it's pulling it from "myViewModel").

Using this syntax actually affords us a lot of flexability, as we can apply different viewModels to different areas of the DOM!, for example, say we have the following two models:

```js
var myPersonModel = {
    personName: 'Bob',
    personAge: 123
};

var myPetModel = {
    petName: 'Fluffy',
    personAge: 6
};
```

We can represent them in separate sections of the DOM:

```html
<div id="person">
    The Person name is <span data-bind="text: personName"></span>  
</div>
<div id="pet">
    The Pet name is <span data-bind="text: petName"></span>    
</div> 
```

And we can apply the "data-bind" properties separately to each &lt;div&gt; container using their respective "id" attributes once again with the **applyBindings()** function:

```js
$(function(){
    ko.applyBindings(myPersonModel, $("#person")[0]);
    ko.applyBindings(myPetModel, $("#pet")[0]);
});
```

## Responding to View Model Changes

So far, we've seen how to create a basic view model and how to display one of its properties using a binding. But one of the key benefits of KO is that it updates your UI automatically when the view model changes. How can KO know when parts of your view model change? Answer: you need to declare your model properties as observables, because these are special JavaScript objects that can notify subscribers about changes, and can automatically detect dependencies.

For example, if we rewrite our simple viewmodel object as follows:

```javascript
var myViewModel = {
    personName: ko.observable('Bob'),
    personAge: ko.observable(123)
};
```

You don’t have to change the view at all - the same **data-bind** syntax will keep working. The difference is that it’s now capable of detecting changes, and when it does, it will update the view automatically.

### Reading and writing observables

For compatibility with older browsers, Knockout defines ko.observable objects as functions.  What this means is that if we want to **get** or **set** the value of a **View Model Property**, we will be invoking the property names as functions.

* To read the observable’s current value, just call the observable with no parameters. In this example, **myViewModel.personName()** will return **'Bob'**, and **myViewModel.personAge()** will return **123**.

* To write a new value to the observable, call the observable and pass the new value as a parameter. For example, calling **myViewModel.personName('Mary')** will change the **name** value to **'Mary'**.

* To write values to multiple observable properties on a model object, you can use chaining syntax. For example, **myViewModel.personName('Mary').personAge(50)** will change the **name** value to **'Mary'** and the **age** value to **50**.

To see this in action, why don't we wire up a **timeout** function to change the data (**myViewModel.personName**) after 2 seconds and see what happens to our view.  In the main.js file, add the following timeout code:

```js
window.setTimeout(function(){
    myViewModel.personName("Dave");
},2000);
```

If we refresh our page, we'll see that "Bob" changes to "Dave" after 2 seconds without us having to write any extra DOM modification code!  The change was "observed" by "text" binding.

## Beyond "text" Binding

Knockout provides many ways of watching the View Model and updating the DOM automatically.  There are even bindings that work with form elements to create **"Two-way"** binding, in which changes to the data presented in the view (ie: form elements) will **automatically update** the correct view model data, keeping them in sync.  

### Bindings (Controlling Text & Appearance)

Knockout.js offers the following binding syntax for dealing with text and the appearance of elements:

<table>
<thead>
<tr>
<th>Binding Type</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="http://knockoutjs.com/documentation/visible-binding.html">The "visible" binding</a></td>
<td>The visible binding causes the associated DOM element to become hidden or visible according to the value you pass to the binding.</td>
<td>

```html
<div data-bind="visible: shouldShowMessage">
```
</td>
</tr>
<tr>
<td><a href="http://knockoutjs.com/documentation/text-binding.html">The "text" binding</a></td>
<td>...</td>
<td>...</td>
</tr>
<tr>
<td><a href="http://knockoutjs.com/documentation/html-binding.html">The "html" binding</a></td>
<td>...</td>
<td>...</td>
</tr>
<tr>
<td><a href="http://knockoutjs.com/documentation/css-binding.html">The "css" binding</a></td>
<td>...</td>
<td>...</td>
</tr>
<tr>
<td><a href="http://knockoutjs.com/documentation/style-binding.html">The "style" binding</a></td>
<td>...</td>
<td>...</td>
</tr>
<tr>
<td><a href="http://knockoutjs.com/documentation/attr-binding.html">The "attr" binding</a></td>
<td>...</td>
<td>...</td>
</tr>
</tbody>
</table>

### Bindings (Control Flow)

Knockout.js offers the following binding syntax for dealing with "control flow", ie: iterating over elements and/or conditionally hiding or showing data:

<table>
<thead>
<tr>
<th>Binding Type</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="">...</a></td>
<td>...</td>
<td>...</td>
</tr>
</tbody>
</table>

### Bindings (Form Fields)

Knockout.js offers the following binding syntax for handling two-way binding between form fields and the View Model, as well as handling events like "click", "checked", "hasFocus", etc.

<table>
<thead>
<tr>
<th>Binding Type</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="">...</a></td>
<td>...</td>
<td>...</td>
</tr>
</tbody>
</table>

## Explicitly Watching for View Model Changes

Sometimes in addition to updating the view,  we wish to execute some *other* code when the View Model data changes (ie, log the data, set a "dirty" flag, update a property, etc).

TODO: [Explicitly subscribing to observables](http://knockoutjs.com/documentation/observables.html)

## Using Existing Data (ie: Teams API)

Creating custom objects in the client side is pretty straightforward (Recall: we define View Model properties as "observables".  However, what if we're pulling down some large-scale data from an API? This is exactly the case with our Teams API, however fortunately Knockout.js **has the answer!**

### The Mapping Plugin

[here](http://knockoutjs.com/documentation/plugins-mapping.html)


<br><br>
Source: [Knockout.js Official Documentation](http://knockoutjs.com/)


## Editing "Employee" Data

Using the methods outlined above, we can very easily..... **TODO**

To see how we can use Knockout.js and the aforementioned properties to implement "Employee" editing, open the **nockout-AJAX** Example located in the week2 folder. We will walk through the solution together in class.


