---
title: Angular Deployment Introduction
layout: default
---

## Angular Deployement Introduction

Until now, we've been working with our web applications in a local environment.  We have relied on the frameworks (ie, the integrated "development servers" included in React / Angular) to execute our code on **localhost**.  However, sooner or later we will have to build and publish these applications so that they are available for the public / clients to use. Fortunately, Angular offers An extremely simple "build" process:

### Introducing Angular's "Simplest Build Possible"

From the Angular Documentation:

For the simplest deployment, build for development and copy the output directory to a web server.

* Start with the development build

```
ng build
```

* Copy everything within the output folder (**dist/*** by default) to a folder on the server.
If you copy the files into a server sub-folder, append the build flag, --base-href and set the <base href> (in the index.html file) appropriately.


  For example, if the index.html is on the server at /my/app/index.html, set the base href to <base href="/my/app/"> like this.

```
ng build --base-href=/my/app/
```

  You'll see that the <base href> is set properly in the generated dist/index.html.
  
  If you copy to the server's root directory, omit this step and leave the <base href> alone.
  
  Learn more about the role of <base href> [here](https://angular.io/guide/deployment#base-tag).

* Configure the server to *redirect requests for missing files to **index.html***

<br>

### Applying this to our "MEAN" Stack Heroku Deployment


