---
title: Angular components intro
layout: default
---

## Angular components intro

> This document is being edited.

> This notice will be removed when the edits are complete.

(introductory content to orient the reader)

<br>

### What is an Angular component?

The following was summarized from Angular Docs > Fundamentals > [Architecture](https://angular.io/guide/architecture#components)

A *component* controls a patch of screen (display, UI surface, rectangle) called a *view*. 

As code, a component is a class, with a decorator.

The class is JavaScript, specifically TypeScript. It includes all the code needed for the the component's *behaviour* during its lifetime.

A decorator is a function that modifies a class. It has one parameter, which is an object composed of configuration information as key-value pairs.

One of the decorator's properties is a *template*, defines the *appearance* of the component. The template includes HTML, or the name of an HTML file. By definition, HTML is the language of the Angular template. Almost all HTML elements are valid in a template, except for these: `html`, `body`, `base`, and `script`.

Another decorator property is the *selector*. Its value is the name of the custom HTML element in the parent template that becomes the component. 

Tip: For now, forget about the details of the browser and the web, as you begin to learn about components. Do not be concerned about the details of how and when a component appears on the screen. (Update... soften this a bit...)

Tip: Recall iOS programming. A *view controller* manages a *view*. For beginners, the *view* often covers the entire screen area. A *view* is composed of *sub-view items* like labels, buttons, and other "controls" like sliders, table views and their cells, and so on. When you began to learn that, you weren't thinking about the browser and the web, were you?

> Comment: That tip will be useful for me, as I wrap my head around the component architecture.

Keeping the comparison to iOS programming going, an Angular component is similar to an iOS view controller. In iOS, the view markup is most often (for beginners) defined on the *storyboard*, a graphical design surface, on which sub-view items can be placed and configured. In an Angular component, this is implemented by configuring the "templateUrl" property of the @Component() decorator.

### Component initialization (startup)

Import OnInit from @angular/core.

When writing the class declaration, write code that implements OnInit. That includes:  
1. An `implements` statement in the class declaration
2. Code for the `ngOnInit()` method


```typescript
export class HeroListComponent implements OnInit {

  // properties, constructor, methods, etc.

  ngOnInit() {
    // code that should run during initialization
  }
}
```

### Dependency injection introduction

Consider this scenario:
* You are writing a class for whatever reason. Maybe it's a list of heroes (e.g. HeroList) for the user interface.
* It needs - depends upon - something that's in a separate object. Maybe you wrote the separate object's class, or maybe it's part of a library or framework or whatever. Maybe the separate object's class provides the *actual data* about the heroes (e.g. HeroData). 
* In your class (HeroList), you will often do the following to get access to the separate object (HeroData):
  1. Declare a local variable (of type HeroData) to hold a reference to the separate object.
  2. In your class constructor, create an instance of the separate class, and assign it to the local variable.
* Then, your class code (HeroList) can use the state and behaviour of the separate object (HeroData).

In summary, you are *reaching out*, from your code, to some other code that you depend upon. 

This works well for simple scenarios. However, it will fall down as your needs (as the programmer) become more sophisticated, or when the scenario becomes more complex. 

One trouble point happens when the separate object's class is replaced with a new version, perhaps with a different name. If several programmer-written classes use the coding technique described above, then several edits - one for each programmer-written class - will be needed to update the app to use the new version of the separate object's class.

Another trouble point happens when... (testing)

(maybe another, configuration)  
easier to implement, change, test, reuse 

<br>

**The case for dependency injection**

Dependency injection is a technique 

the runtime must know about the technique

your class has a constructor which accepts (i.e. has arguments for) the separate object(s)

we still need a local variable of to hold the reference  
often the type of that local variable is an interface  

client (receiver) must know the interface type and its API

which gives a bit more flexibility to support changes in the future  

instead of *reaching out* to some other code, it *expects to receive* the other code

there's a manager which does the injection (sometimes called an *injector*)

contrasts with "service locator pattern", another reach-out pattern

Some external resources to help you learn DI:

[Wikipedia article](https://en.wikipedia.org/wiki/Dependency_injection) - skim/read the first page or two, and then go right to the [advantages](https://en.wikipedia.org/wiki/Dependency_injection#Advantages) and disadvantages lists

[Martin Fowler article](https://martinfowler.com/articles/injection.html) - skim/read, contrasts dependency injection and service locator patterns

[Anthony Ferrara explains DI](https://www.youtube.com/watch?v=IKD2-MAkXyQ) - 5-minute YouTube video, actually quite useful

<br>

### Dev env setup

Assuming that the Angular bits are installed... you need these:
* Visual Studio Code
* Terminal window(s)
* File explorer (e.g. Finder)
* Browser
* The "console" browser tool

Also, assume the following, on macOS:
* Services menu has "New Terminal at Folder" configured
* Visual Studio Code has command-line start capability

Here's a typical getting-started routine, from scratch:

1. File explorer, navigate...

In your file explorer (e.g. Finder), navigate to the folder that holds your project.

2. Open Terminal...

Right-click the folder, and choose "New Terminal at Folder".

3. Open Visual Studio Code...

In Terminal, run the command `code .` to start Visual Studio Code in the current folder.

4. Run your app...

In Terminal, run the command `ng serve --open` to build and load your project in your default browser.

5. Open the console...

In your default browser, open your dev tools console. That's where build errors will show up.

<br>

### Adding a new component

Use the Angular CLI.

Navigate to the `src` folder.

Assuming that you wish to create a new component named "foo", run this command in Terminal:

```text
ng generate component foo --flat
```

The "--flat" flag will NOT create a folder to enclose the component's source code files. We'll use that for the first while, until the number of files in the app folder gets too unreasonable.

<br>

### How to think about and plan your components

Visualize  
Placeholder  
Wireframe  
etc.

<br>
