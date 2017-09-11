---
title: Lodash
layout: default
---

## Introduction to Lodash

> "Lodash is a toolkit of Javascript functions that provides clean, performant methods for manipulating objects and collections. It is a "fork" of the Underscore library and provides additional functionality as well as some serious performance improvements. If you aren't using Lodash, you should be." ~John Lindquist

As John puts it, Lodash is a toolkit or library of functions that extend some of the current working JavaScript core functionaltiy.  Even with new versions of JavaScript (ie: [ES6 and Beyond)](https://en.wikipedia.org/wiki/ECMAScript#Versions) starting to catch up to all of the libraries and toolkits developed over the last decade or so, Lodash still proves itself as something many JS developers still can't live without.

### Downloading Lodash

Like most JavaScript libraries, Lodash exists as a single, minified .js file that you can either [download](https://raw.githubusercontent.com/lodash/lodash/4.17.4/dist/lodash.core.min.js) and include in your local solution, or [reference the CDN](https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js) in your pages/views.  If you're thinking that you might want to use it in your Node.js server applications, you can do that as well [via NPM](https://www.npmjs.com/package/lodash).

### The Full Documentation

Lodash is a very large, comprehensive library and covering it in it's entierity is well beyond the scope of this class.  Instead, we will introduce some of the more interesting pieces of functionality that we're likely to come across during this semester.  

However, you should absolutely [**Bookmark the Documentation Page**](https://lodash.com/docs/) and always check it before you start working with Objects, Collections, Strings, Dates, etc.  The chances are very good that there's ***something*** in there that will help optomize your code and make your life easier.

### The Fun Stuff

As previously stated, this is only a sampling of some of the more interesting and most accessable features of the Lodash library.  We will use some of these to add primitave paging and filtering functionality to last week's **jQuery-AJAX** example.  

If you're following along with the "Code Samples" the following functionality is located in the **"week2/Lodash"** folder

### Sample Data

For the following code examples, we will assume that we have a Flintstones-inspired **users** collection that contains the following data:

```js
let users = [
    { 'user': 'fred',    'active': false, 'age': 40 },
    { 'user': 'pebbles', 'active': false, 'age': 1  },
    { 'user': 'barney',  'active': true,  'age': 36 }
];
```

## Array Methods

### \_.chunk(array, [size=1])

Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements. See: [https://lodash.com/docs/4.17.4#chunk](https://lodash.com/docs/4.17.4#chunk)

```js
let chunk1 = _.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']] 
let chunk2 = _.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
let chunk3 = _.chunk(users, 2); // objects for [['fred', 'pebbles'], 'barney']
```

### \_.findIndex(array, [predicate=_.identity], [fromIndex=0])

Returns the index of the first element **predicate** returns truthy for, instead of the element itself. 

See: [https://lodash.com/docs/4.17.4#findIndex](https://lodash.com/docs/4.17.4#findIndex) and also [https://lodash.com/docs/4.17.4#findLastIndex](https://lodash.com/docs/4.17.4#findLastIndex) and [https://lodash.com/docs/4.17.4#find](https://lodash.com/docs/4.17.4#find)

```js
let findIndex1 = _.findIndex(users, function(user) { 
    return user.user == 'fred'; 
}); // => 1
```

### \_.take(array, [n=1])

Creates a slice of array with n elements taken from the beginning.

See: [https://lodash.com/docs/4.17.4#take](https://lodash.com/docs/4.17.4#take)

```js
 let take1 = _.take(users,2) // => objects for ['fred, pebbles']
```

## Collection Methods

### \_.filter(collection, [predicate=_.identity])

... See: [https://lodash.com/docs/4.17.4#filter](https://lodash.com/docs/4.17.4#filter) and also: [https://lodash.com/docs/4.17.4#find](https://lodash.com/docs/4.17.4#find)

```js

```

### 

... See: 

```js

```

### 

... See: 

```js

```

## Number Methods

### 

... See: 

```js

```

## Object Methods

### 

... See: 

```js

```

### 

... See: 

```js

```

## String Methods

### 

... See: 

```js

```

### 

... See: 

```js

```







