---
title: Angular routing introduction
layout: default
---

## Angular routing, introduction

> This document is being edited.  
> This notice will be removed when the edits are complete.

<br> 

Recall the ["Routing" in React](react-routing) notes from a few weeks ago. (Please review them before continuing.)

To summarize, you learned some new ideas:
* The purpose of routing is to implement navigation in an app
* Routing matches a URL/path to a component
* In an app, we must add the router code module, and then design and configure the URLs
* It is possible to define URL parameters
* It is possible to define a "not found" route

As you would expect, Angular has the routing feature. If you understood the configuration and use of routing in React, then you will be comfortable with routing in Angular. 

This document covers some of the *getting started* topics, with the support of the official Angular documentation. Then, in a separate document, we'll take an existing app that has multiple components, and implement routing for it.

For the remainder of the course, we'll continue to work with routing, as we cover *services* and *interactive forms*. For example, next week, we will learn about routing with URL parameters. 

<br>

### Supporting documentation

In the official [Angular.io documentation](https://angular.io/docs) set, there are two main sources of information on routing. 

One is the **TUTORIAL > Routing** area. To preview its contents:
* It continues with the *Tour of Heroes* example
* Routing is added manually to the app
* Its "version 1" approach is to define the route definitions among many source code files; after refactoring, its "version 2" approach gathers them into the preferred way, into the routing module
* It incrementally adds *default* and *not found* routes

In summary, the content is useful to read/skim. (Do that now.) However, your professors think that its learning path should not be considered best practice or authoritative. Today, we will recommend an approach that provides many benefits, including coding ease, better quality, and repeatability. 

The other source of information is the **FUNDAMENTALS > Routing & Navigation** area. To preview its contents:
* It uses the same *Tour of Heroes* problem and data set
* An evolutionary and detailed approach through a wide range of routing and routing-related topics, with much detail
* Includes many topics (router state, router events, guard, child, lazy load, etc.) that are too advanced for our current needs (later in the course, we will cover some of them)

In summary, some of this content is useful to skim. (Do that now.) However, your professors think that its learning path is too detailed and too tied to the *Tour of Heroes* example. As a result, it's not as clear as it could be to present routing topics to you in a way that you can understand, repeat, and implement. As noted above, we will recommend an approach that will be better. 

> It is possible that we will include links to external documentation resources here...

<br>

### Adding routing to an app

The best and easiest way to add the routing feature to an app is to make sure that it has it when the project is *created* for the first time. 

As you learned last week, when learning more about components, we should (must) use the `--routing` option when creating a new project:

`ng new animals --routing -st`

The remainder of this document teaches you how to configure and use routing. 

<br>

**Adding routing to an *existing* app**

We prefer to cover this topic in a [separate document](angular-routing-existing-app). 

It is not very likely that you will be working with an app that does not yet have routing. As a result, we prefer to cover that topic separately, to minimize the distraction from our main message, here in this document.

<br>

### Configure and use routing

At this point in time, we have a project with the routing feature. 

Let's study the project's code, to learn how to recognize routing in an app, and to learn where to find the routing feature. That will enable us to learn where to begin configuring and using it. 

<br>

#### New: app-routing.module.ts

In the `src/app` folder, notice a new `app-routing.module.ts` source code file. Its contents:

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

<br>

Notice the `routes` constant. Soon, we will edit the contents of the array to add *route objects*. Each of these route objects has a *string path*, and the name of a *component class*. 

Before we add each route object, we will `import` the component that it refers to. For example:

```javascript
import { HorseComponent } from "./horse.component";
import { HomeComponent } from "./home.component";
import { PageNotFoundComponent } from "./page-not-found.component";
```

When fully configured, the `routes` constant will look something like this:

```javascript
const routes: Routes = [
  { path: 'horse', component: HorseComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
```

<br>

> Notice - if you're coding the routes while reading this, make sure that:
> 1) the component already exists, and 
> 2) it is imported.

<br>

#### Updated: app.module.ts

In the `src/app` folder, notice the familiar `app.module.ts` source code file. 

The ability of the app to support routing is seen in this file. The code was added because the `--routing` option was used when the project was created. 

First, in the "import" statements near the top, we see:

```javascript
import { AppRoutingModule } from './app-routing.module';
```

Then, in the `@NgModule` decorator, it matches up to an `AppRoutingModule` value in the `imports` array:

```javascript
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
```

<br>

#### Checkpoint...

To summarize so far, routing is recognized in an app by the presence of the app routing module code, and some new code in the app module. 

To preview the rest of the procedure, here's what we must do:
1. Add one or more components that will participate in routing
2. In the HTML markup (i.e. the view code) of the component that will "host" the routed component, add a `<router-outlet>` element
3. In the HTML markup of a navigation component (or any kind of component), use the `routerLink` attribute in the `<a>` element instead of the `href` attribute

<br>

#### Adding a *new* routed component

Although the content in this section is mentioned in the "Notice" callout above, we'll cover it now in a clear and complete fashion. 

Adding a *new* routed component is an easy thing to do, with a clear and unambiguous procedure. In fact, it adds only one more task to the overall task of adding a new component to an app. 

You already know that a new component can be added to an app with an `ng g c foo --flat` command in the Angular CLI. The command will 1) generate the source code files for the new component, and 2) update the app component by adding an "import" statement and a value in the "declarations" array. 

To enable the new component to participate in routing, we must do one more task (which you have seen above):

Edit the `app-routing.module.ts` source code file. Assume we are working with a newly-created app that supports routing.

Near the top, add an "import" statment. Assume that we have an already-existing "horse" component. The import statement will look like the following. It is no different from what you added to the app module:

```javascript
import { HorseComponent } from "./horse.component";
```

Then, add a *route* object to the `routes` array:

```javascript
const routes: Routes = [
  { path: 'horse', component: HorseComponent }
];
```

In summary, this enables a component to participate in routing. There's more to do however, explained next.

<br>

#### Add a router-outlet element to the hosting component

The view for a routed component must appear somewhere, right?

Choose a component that will be the "host" for routed components. Often it will be a simple content container that conceptually enables other content to be swapped in and out (i.e. routed) based on some interaction or context/environmental stimulus. 

Then, in that component's HTML markup, in a suitable location, add a `<router-outlet>` element:

```html
<!-- other markup above -->
<router-outlet></router-outlet>
<!-- other markup below -->
```

At runtime, the HTML markup from the routed component will be added to the document object model (DOM) just below the `<router-outlet>` element. 

<br>

#### Making it appear - the routerLink attribute

How can we cause the view for a routed component to appear? 

Most often - at least for beginner or introductory app scenarios - we use a navigation component. For example, the view code (i.e. the HTML markup) for this kind of component is typically an unordered list of `<a>` (anchor/hyperlink) elements. 

In standard HTML documents, the `href` attribute is used. However, we do NOT use this attribute in links to routed components. Instead, re use the `routerLink` attribute.

> In an `<a>` element, REPLACE the `href` attribute  
> with a `routerLink` attribute. 

For example, assume we are adding a link to the new "horse" component from above. We add a new `<a>` element, as shown below. (The `nav-...` classes are from the Bootstrap styles.)

```html
  <!-- other markup below -->
  <li class="nav-item">
    <a class="nav-link" routerLink="/horse">Horse</a>
  </li>
  <!-- other markup below -->
```

<br>

#### Special routed components and routes

While the tasks above will enable you to successfully define, configure, and use routing, an app needs a few more "special" routing-related tasks. 

First, an app ought to have a "home" view, that serves as its "start page" or "landing page". That's easy to create and code. The component's name can be "home" or "start" or something that makes sense for your app.

Next, an app must have a *route object* to handle an empty route. In other words, if the URL has no segments - just the host name - then the app must know what to show. Assuming that you have already created a "home" component (mentioned in the previous paragraph), add a new *route object* to the `routes` constant in the app routing module:

```javascript
const routes: Routes = [
  // existing route objects
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
```

Finally, an app must have a component that will appear whenever an invalid (non-existing) URL is entered or processed. This is the classic "page not found" use case. To accomplish this, create a new component using the Angular CLI, and pay attention to the use of upper and lower case, by using CamelCase:

```text
ng g c PageNotFound --flat
```

The Angular CLI will look at the CamelCase name, and generate properly-named source code files and a JavaScript class. 

Then, in the app routing module, add another *route object* to the `routes` array:

```javascript
const routes: Routes = [
  // existing route objects
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
```

( more to come )

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## resume edits here

<br>
<br>
<br>
<br>


Return to the tutorial  
Pick and choose the highlights  
Done - not much new was learned there  

Then go to the FUNDAMENTALS > Routing & Navigation  
Work our way through that  
Again, focus on the engineering aspects  

Router features include (from the docs):
* can interpret a URL as an instruction to navigate to a view
* can pass optional parameters along to the view component 
* can bind the router to links on a page
* can navigate imperatively when the user clicks a button, selects from a drop box, or in response to some other stimulus from any source
* and the router logs activity in the browser's history feature so the back and forward buttons work as well

Routes (URL paths) must be defined. In the base config, there's no "by convention" route templates. This contrasts with ASP.NET MVC apps, which have a default route template. (Follow the convention, and there's no route code to write.)

Order of the defined routes matters.  
More specific to less specific.  
Or, put another way, consider a scenario where you have more than one route that begins with the same segment. Place the *more specific* route(s) (i.e. the one with more segments, and/or URL parameters, and/or query string paramaeters) above the *less specific* route(s). 

Route array id of type Routes. A few notes to get started:
* path is a string; it's assumed (configured) that the string is added to the "base" href in index.html (its value is `"/"`)
* as a result, the path string does *NOT* begin with a forward slash
* empty path is often used todo a default redirect
* path ** is a wildcard, to match any non-configured route; often used for 404 not found component (or redirect)
* component names the component with the view to be displayed
* data is optional, can pass an object to the component/view

The router outlet element (`<router-outlet>`) is a placeholder, often seen in simple apps in the app-component.html source code file.  
At runtime, Angular places the component's HTML just below the `<router-outlet>` element. 

To create a link to a routed component, use an `<a>` element. However, replace the `href` attribute with a `routerLink` attribute.  

Often, a `<nav>` element encloses a set of links. Add a `routerLinkActive` attribute to the `<nav>` element so that it will add the CSS "active" class to the active/clicked link. A nice visual help cue/hint for the browser user. 

The first part of the document's [summary](https://angular.io/guide/router#summary) is good and useful.  
(ooh - I'm having a *deja vu* moment when writing this, from a long time ago!)

The [sample app in action](https://angular.io/guide/router#the-sample-application-in-action) has all the working pieces. 

After looking at several examples, including how-to's (tutorials) and guides, I think that it's best to extract the "how to" rules to a checklist, then dive right in to code the app you're working on. The above "sample app in action" part of the document will likely provide us with all we need to make the checklist. 

One item that should be on the checklist is for the programmer to list (write out!) all the URL paths that are likely to be needed in the app. 

The docs FUNDAMENTALS > Routing & Navigation coverage is just too much for our purposes.

<br>

### Adding routing to an app (our guidance)

> Editing is in progress...  
> Will have to carefully go through this

To get started, 

When creating a new project, can add the `--routing` option to create an `app-routing.module.ts` file

So... can:
1. add to existing project, or
2. generate a new project with routing

Generate a module that will be dedicated to routing.

```
ng g module app-routing
```

In `app.module.ts`, import the router module.

```javascript
import { Router } from "@angular/router";
```

<br>

<br>

**Suggestion**  
Leave route parameters until the next week, when we learn services  
Doing that will give context and deeper meaning to the topic

( more to come )

Other things to note:
* Routed components don't need a selector (check this out)
*

<br>
