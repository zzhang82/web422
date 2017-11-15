---
title: Angular components example
layout: default
---

## Angular components example

> This document is being edited.

> This notice will be removed when the edits are complete.

In this document, you will create an app with several components. 

The goal is to become comfortable with the idea of components, and the process of creating and displaying them. 

<br>

### Getting started, new project

Your professors believe that it is important to plan your work *before writing code*. How?

Visualize what you are trying to do, and then quickly draw a simple diagram. (Diagramming skills are important for a programmer. These skills help you plan and later code more effectively. They also help you communicate with others, whether understanding someone else's plan, or selling your plan to someone else.)

A simple diagram will help you identify the information and functionality that your app needs. It will also naturally suggest what components it will need (and later services and so on). 

> Do this *BEFORE WRITING CODE*. 

For our example app, here's what we're trying to do. Each rectangle will (or could) have information and/or functionality inside.   

![Multiple components](../media/angular-components-v1.png)

<br>

#### Generate a new project  

We will use the Angular CLI to generate a new project. It is the preferred way to do so, mostly because it offers you (as the developer) more, and it improves the developer experience.

As noted above, we are creating an app that works with animals - information about animals, and some kind of undefined functionality. 

Before, you may have seen (and used) a simple Angular CLI command that created a new simple project. Starting now, we'll use a command with some additional options. In Terminal, while in your projects folder, run this command:

`ng new animals --routing -st`

<br>
<br>
<br>

> **Hey Pat...**  
> I am suggesting (recommending) that we *always* add the `--routing` option when creating new projects.  
> Let's try to get students into the habit of doing this. I cannot foresee any downside to doing this with the kind of apps that we/they are likely to create.  
> Doing this is *way easier* than manually coding/adding routing after-the-fact to an existing project.  
> Please comment/discuss if you think differently.  

<br>
<br>
<br>

The `--routing` option adds the code we need for "routing", which is a topic that will be covered in detail next week. Adding routing now (when the new project is created) is a *best practice*. 

The `-st` option does not add "testing" code. One of the effects is that it reduces the size of the project, and perhaps makes it a bit faster in the change detection and build processes.

<br>

**Optional - reduce the project size even further**

If you want to reduce the size of the project even further, we can add one more option to the "ng new" command:

`ng new animals --minimal --routing -st`

The `--minimal` option does this. However, it has a side effect that we will probably not like, so if you do choose this option, please make one change to eliminate the side effect. How?

Open, for editing, the project's `.angular-cli.json` configuration file. 

Change the value of the `inlineStyle` and `inlineTemplate` properties to `false`. 

<br>

#### Create structural components

Create the app's basic structural components:
* Header
* Navigation (named "NavMain")
* Main content (named "Content")
* Secondary content (named "Guide")
* Footer

This is done with Angular CLI commands:

```text
ng g c header --flat
ng g c navmain --flat
ng g c content --flat
ng g c guide --flat
ng g c footer --flat
```

<br>

#### Create components to support routing

Create components to support routing:
* Home (a home or start page)
* Page not found (named "PageNotFound")

This is done with Angular CLI commands:

```text
ng g c home --flat
ng g c PageNotFound --flat
```

Notice the use of CamelCase on the "PageNotFound" name. The Angular CLI will parse that, and make the component's file name assets use lower case, with dash separators between the words. Nice. 

<br> 

#### Create components to hold content

Finally, create components to hold content; we'll use an *animals* theme:
* Horse
* Lizard
* Bear
* Eagle
* Dolphin

This is done with Angular CLI commands:

```text
ng g c horse --flat
ng g c lizard --flat
ng g c bear --flat
ng g c eagle --flat
ng g c dolphin --flat
```

<br>

> ( more to come )

<br>