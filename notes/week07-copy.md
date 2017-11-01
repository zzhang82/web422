---
title: WEB422 Week 7
layout: default
---

## WEB422 Week 7 Notes

This week, it's a deep dive into components, the most important architectural part of Angular.

Remember to frequently use the [learning resources](/web422/resources).

<br>

### Term completion proposal

As a starting point, let's assume that we will have four (4) weeks remaining in the term when we return to work. If there are more than four weeks, that's OK. 

If we have only four weeks remaining, I propose that we eliminate the activity that was originally scheduled for the last three weeks of the course, "putting it all together". 

That means staying with a week-long treatment of each of these four topic areas:
1. Components
2. Routing
3. Services
4. Forms

There were originally five (5) assignments to be done. Realistically, that's not possible. So, I propose that we do four (4) smaller assignments. Each will be a week in length. Introduce it in the Tuesday lecture class/session. Maybe some part of it can be checked/verified in the Thursday computer-lab class/session (but maybe not). Make the assignment due BEFORE the next week's Tuesday lecture class/session (so there's no distractions or topic overlap).

Here's the proposed assignments:

<br>

#### Assign 4 - components

Create a project that has multiple components.  

All components will be hosted by the main app-component. Therefore, they will be "stacked" from top to bottom. No routing.  

However, we will need a simple in-memory data source (similar to what was in early steps/parts of the Tour of Heroes tutorial).  

The goal is to *write components that implement/simulates CRUD activity on data*.  We will enhance these components in future weeks (and assignments) as we learn more.  

Also, let's look at an easy way to get the Bootstrap CSS library into the project right from the beginning, so that the content will look nicer. 

Component for the "get all" use case:
* Simple version will use `*ngFor` to render table rows, one for each item in the collection
* Maybe investigate using a nested component to render each item in the collection in a customized manner

Component for the "get one" use case:
* Will render a randomly-selected item from the collection in a nice manner

Component for the "add new" use case:
* Will render a simple form for data entry, perhaps on the left side of the page
* Maybe beside the form, to the right of the form, render it in a way similar to a "get one" use case

Component for the "edit existing" use case:
* Render a selection of existing properties from a randomly-selected item from the collection, and allow/enable "editing"
* Like above, maybe beside the form, render it... 

<br>

#### Assign 5 - routing

Build on the result of Assign 4. That's why it's important to have the due date BEFORE the Tuesday lecture class/session. 

Maybe we can provide a sample solution, a base project or at least some of the components. That will enable problem students to start fresh with a best-practice sample solution. 

Then, build in navigation. Add that to app-component.

Which leads to routing, and its implementation, including support for "back". 

This will result in an app that has separate routed views for each of the CRUD activities (instead of one view with all components/views stacked from top to bottom). 

<br>

#### Assign 6 - services

Ditto above, build on the result of Assign 5. Maybe provide a sample solution etc. 

Then, modify the project so that it uses our web API project (that was used in the early weeks of the course). 

That will require a good and full implementation of the service pattern. We should shoot for coverage of *get all*, *get one*, and *add new* interactions. 

And modification of the component code to accommodate a different data model. 

<br>

#### Assign 7 - forms

Ditto above.

Implement some of the Angular Forms goodness (e.g. data validation etc.) Not so sure about this yet, as this topic is still a bit too far off into the future. 

<br>

### Proposed coverage for this week

Brief review or recall of the "multiple components" step 4 of the Angular Tutorial, which was covered before the strike. 

That was a super simple treatment of "multiple components", in that it resulted in only two components (`app` and `hero-detail`). Obviously we will go much further and deeper this week.

I think we must introduce and use a workflow that will help the students learn about all this, but will help them with workflow techniques for repeatable and reliable app building. 

There are two workflow techniques that can be introduced:
1. Visualization (drawing, sketching)
2. Creating a new component

I don't think that we can talk about components, in the abstract, without making them turn the abstraction into something that they can use as a coding plan. Therefore, I propose that we teach them how to draw - by hand - a screen design for the overall app, and specifically for a component. 

Doing this should really help the rest of the process.

To create a new component, we can hand-write all of hits parts (file > new, for .ts, .html, .css). Or, we can use the Angular CLI. We will cover when and how to use each. 

As a companion, there will *always* be work done in `app.module.ts` to configure the component in the app. Whether hand-edited or auto-done (by the Angular CLI), understanding this is important. 

The topic areas to be learned include: 
* Component structure and syntax (hammer that in, so that each student can hand-write from memory a component's code)
* Peer-level and nested (child) components, uses of, differences, considerations
* Component layout and styling (Bootstrap)
* Creating an in-memory data source (to enable learning of these topics)
* Data binding, the four types

<br>

#### Example/scenario to be used in class

I suggest that we do not use the Assign 4 specs as our in-class example/scenario. 

Instead, we might be able to adapt some of the Tour of Heroes parts, without adhering exactly to the remaining steps in that tutorial. 

What I'm thinking is to introduce an app that does have layout considerations...
* Heading (top matter)
* Navigation band
* Footer (bottom matter)
* Content area, which might have a left-side and right-side content areas, related or not

<br>

### Proposed coverage for the following week, "routing"

<br>
