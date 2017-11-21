---
title: Angular Components Example
layout: default
---

## Angular Components Example

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

### Generate a new project  

At this point, we will assume that you are comftorable using the Angular CLI to create a new project, ie:

  ```
  ng new my-dream-app --routing -st
  ```
  
  **Recall:** 
  
  The `--routing` option adds the code we need for "routing", which is a topic that will be covered in detail next week. Adding routing now (when the new project is created) is a *best practice*. 

The `-st` option does not add "testing" code. One of the effects is that it reduces the size of the project, and makes it slightly faster in the change detection and build processes.

### Adding Bootstrap (3.3.7)

As we have seen, a quick way to kickstart the style / structure of your project is to use the Bootstrap framework.  At the time of writing Bootstrap 3.3.7 is a good choice, however Bootstrap 4 is currently in Beta and is available as well).

We can add this framework using the familiar lines:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```
to the &lt;head&gt; element inside the src/index.html file.  As well as:

```html
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

to the bottom of the &lt;body&gt; element inside the src/index.html file.

#### Create structural components

Create the app's basic structural components:
* Header
* Navigation (named "NavMain")
* Main content (named "Content")
* Secondary content (named "Guide"; often known as a "Sidebar") 
* Footer

This is done with Angular CLI commands:

```text
ng g c header --flat
ng g c navmain --flat
ng g c content --flat
ng g c guide --flat
ng g c footer --flat
```

To review, the `ng g c` command creates the component's source code files, and updates the app module (by adding import-related code). 

A few notes about the source code files and generated code, using the first command above, "header":

In `header.component.ts`:
* A class named `HeaderComponent` is created
* Its selector is `app-header` 

In `header.component.html`, some getting-started text is generated. We always replace that generated text with our own. For example (using Bootstrap classes): 

```html
<div class="header">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h3>Header</h3>
      </div>
    </div>
  </div>
</div>
```

<br>

#### Create components to support routing (discussed next week)

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

At this point, you can edit the HTML template content to meet your needs. For example, the "horse" component has this HTML template to render a Bootstrap 3 "Panel" (the text content is from Wikipedia, and the image is from a Google search):

```html
<div class="horse panel panel-default" id="horse">
  <div class="panel-heading">
    <h3 class="panel-title">Horse</h3>
  </div>
  <div class="panel-body">
    <p>The horse (Equus ferus caballus)[2][3] is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal
      belonging to the taxonomic family Equidae. </p>
    <p>The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large,
      single-toed animal of today. Humans began to domesticate horses around 4000 BC, and their domestication is believed
      to have been widespread by 3000 BC. Horses in the subspecies caballus are domesticated, although some domesticated
      populations live in the wild as feral horses. These feral populations are not true wild horses, as this term is used
      to describe horses that have never been domesticated, such as the endangered Przewalski's horse, a separate subspecies,
      and the only remaining true wild horse. There is an extensive, specialized vocabulary used to describe equine-related
      concepts, covering everything from anatomy to life stages, size, colors, markings, breeds, locomotion, and behavior.</p>
    <img src="http://ashs.com.au/images/New_Buttons-2017-03-24/StudBook3.png" alt="Horse" class="w-25">
  </div>
</div>
```

<br>

### Add route info for the routed components

Edit the app routing module. 

Add the import statements:

```javascript
import { HorseComponent } from "./horse.component";
import { LizardComponent } from "./lizard.component";
import { BearComponent } from "./bear.component";
import { EagleComponent } from "./eagle.component";
import { DolphinComponent } from "./dolphin.component";
import { HomeComponent } from "./home.component";
import { PageNotFoundComponent } from "./page-not-found.component";
```

Next, add *route objects* to the `routes` array:

```js
const routes: Routes = [

  // add routes here, for example...

  { path: 'horse', component: HorseComponent },
  { path: 'lizard', component: LizardComponent },
  { path: 'bear', component: BearComponent },
  { path: 'eagle', component: EagleComponent },
  { path: 'dolphin', component: DolphinComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];
```

<br>

### Building the user interface

In the root of the project's file system, the `index.html` source code file can be left as-is, with no changes required. 

The first substantial change will be in the app component's HTML template. (Why? Because that is used - bootstrapped - when the app loads for the first time.)

Here, we will add elements for each of the structural components:

```html
<div class="container">
  <app-header></app-header>
  <app-navmain></app-navmain>
  <app-content></app-content>
  <app-footer></app-footer>
</div>
```

Notice the `app-content` selector. Let's look at the "content" component next. Only its HTML template is interesting:

```html
<div class="content row">
  <div class="col-md-9">
      <router-outlet></router-outlet>
    </div>
  <div class="col-md-3">
      <app-guide></app-guide>
  </div>
</div>
```

Ah, very interesting. HTML content for the routed component will appear *below* the `<router-outlet>` element. The content will change as a result of user interaction. 

An important idea here is that the selectors for the routed components *do not* appear in any template anywhere. In fact, the `selector` member of the [Component decorator](https://angular.io/api/core/Component) is optional (because it is defined as nullable, `selector?: string`). 

#### Making a routed component appear - navigation

The navigation component - i.e. the menu bar - will be used here to make routed components appear. 

Open the HTML template for the navigation component. Create a standard navigation menu:

```html
<div class="navmain row">
  <ul class="nav">
    <li class="nav-item">
        <a class="nav-link" routerLink="/home"><b>Home page</b></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" routerLink="/horse">Horse</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" routerLink="/lizard">Lizard</a>
    </li>
    <li class="nav-item">
          <a class="nav-link" routerLink="/bear">Bear</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" routerLink="/eagle">Eagle</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" routerLink="/dolphin">Dolphin</a>
    </li>
  </ul>
</div>
```

The result will look something like the following:

![Navigation menu](../media/angular-routing-v1-nav.png)

<br>
