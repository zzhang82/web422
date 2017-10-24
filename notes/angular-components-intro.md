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

Tip: Forget about the browser and the web, as you begin to learn about components. Do not be concerned how and when a component appears on the screen.

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

<br>

**The case for dependency injection**

Dependency injection is a technique 

the runtime must know about the technique

<br>
