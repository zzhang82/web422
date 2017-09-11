---
title: SASS
layout: default
---

## SASS

SASS, or "Syntactically Awesome StyleSheets" is an extension of CSS that adds power and elegance to the basic language. It allows you to use [variables](http://sass-lang.com/guide#topic-2), [nested rules](http://sass-lang.com/guide#topic-3), [mixins](http://sass-lang.com/guide#topic-6), [inline imports](http://sass-lang.com/guide#topic-5), [and more](http://sass-lang.com/documentation/file.SASS_REFERENCE.html), all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized as well as getting small stylesheets up and running quickly.

There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) is an **extension** of the syntax of CSS and the primary syntax that we will be **using in this course**.  The other syntax ("Sass"), provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties.

### Getting Started

SASS functions as a CSS precompiler - that is, it adds functionality to CSS in a layer *above* it and we must run a script / program to convert our SASS files into regular CSS.  Where do we find this program?  There are [plenty](http://sass-lang.com/install) to choose from, ranging from simple command line tools to elaborate GUI applications.  However, we will be sticking with something simple... 

### Using NPM (of course)

NPM - what can't it do?  Today we'll be using it to obtain a package called "[node-sass](https://www.npmjs.com/package/node-sass)":

1. Even though we aren't using Node.js for our application, it still pays to have a "package.json" file in our working directory to manage our dependencies.  In the root of your current working directory (If you're following along with the code examples, it will be the "SASS" directory), create a very simple "package.json" file with an empty list of dependencies:

```json
{
  "dependencies": {}
}
```

2. Once you have saved this file, close it and open your Integrated Terminal in order to execute the command:

  ```
  npm install --save node-sass
  ```

3. Next, we need to add a few directories and files to our working directory:

* CSS
  * *[empty]*
* SASS
  * _reset.scss
  * main.scss
  
4. And finally, to make sure our new "node-sass" CLI works to "watch" our **main.scss** file for changes and correctly update a new file **CSS/main.css**, we must add the following "scripts" property to our "package.json" file:

  ```json
  "scripts": {
    "build-css": "node-sass scss/main.scss css/main.css --include-path scss -w"
  }
  ```

Now, your complete "package.json" file should look something like:

```json
{
  "dependencies": {
    "node-sass": "^4.5.3"
  },
  "scripts": {
    "build-css": "node-sass scss/main.scss css/main.css --include-path scss -w"
  }
}
```

Notice how the "build-css" script is set to run "node-sass" with "**scss/main.scss**" as the ***source*** and "**css/main.css**" as the ***destination***.  There is also the **include-path scss** option (which will help us to import files) and a **-w** flag (which will instruct the script to watch our ***source*** file for changes and automatically update the ***destination***!



Content Sourced from: [Offical SASS Documentation](http://sass-lang.com/)
