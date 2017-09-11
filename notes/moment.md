---
title: Moment.js
layout: default
---

## Moment.js

[Moment.js](https://momentjs.com/) is a JavaScript utility library designed to make the handling of date / datetime objects much simpler.  It encapsulates a native Date object in order to provide extra manipulation, querying, display, validation and localization options.

### Downloading Moment.js

Moment.js exists as a single, minified .js file that can either be [downloaded](https://momentjs.com/downloads/moment-with-locales.min.js) (with or without all locales) and included in your local solution, or referenced using [the CDN](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js) (with or without all locales) in your pages/views. It is also available [via NPM](https://www.npmjs.com/package/moment) and can be used in your Node.js server applications as well.

### The Full Documentation

We will not be covering every faset of the Moment.js library during this lecture, however it is an extremely valuable resource and we recommend [**Bookmarking the Documentation**](https://momentjs.com/docs/) for future reference.

### Working with Moment.js

The following core pieces of functionality will provide a solid foundation for working with Moment.js in the future.  For the below examples, we will be using the string representation of Zsa zsa Mannering's start date, ie:

```
let hireDate = "2010-11-07T04:00:00.000Z"; // Zsa zsa Mannering's hire date in our "Employees" Collection
```

If you’re following along with the “Code Samples” the following functionality is located in the “week2/Moment” folder

### Setting the "Locale"

```js
// moment.locale("fr-CA"); // Try out Quebec French
```

### Creating a "Moment"

```js
let mDate = moment(hireDate); // create a new "moment" object
```

### Setting UTC Mode & Displaying Data

```js
mDate.utc(); // switch to "UTC" mode

// display the UTC date
let mDate1 = mDate.format('LLLL'); // Sunday, November 7, 2010 4:00 AM
```

### Setting "Local" Mode & Displaying Data

```js
mDate.local(); // switch to "local" mode

// display a localized date (now offset to Local Time)
let mDate2 = mDate.format('LLLL'); // Sunday, November 7, 2010 12:00 AM
```

### Display Options

```js
let mDate3 = mDate.format('MMMM Do YYYY, h:mm:ss a');   // November 7th 2010, 12:00:00 am
let mDate4 = mDate.format('dddd');                      // Sunday
let mDate5 = mDate.format("MMM Do YYYY");               // Nov 7th 2010
let mDate6 = mDate.format('[date:] MM/DD/YYYY');        // date: 11/07/2010
let mDate7 = mDate.format();                            // 2010-11-07T00:00:00-04:00
```

For a full list of formatting options, see: [https://momentjs.com/docs/#/displaying/format](https://momentjs.com/docs/#/displaying/format)



## Updating jquery-AJAX to show Dates

To see how we can use Moment to show dates for employees within our Teams API, open the **Moment-AJAX** Example located in the **week2** folder. We will walk through the solution together in class.


