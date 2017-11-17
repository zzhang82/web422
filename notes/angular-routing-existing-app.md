---
title: Angular routing in existing app
layout: default
---

## Adding routing to an *existing* app

> This document is being edited.  
> This notice will be removed when the edits are complete.

In this document, you will learn how to add the routing feature to an existing app. 

It is not very likely that you will be working with an app that does not yet have routing. But if you do, use this information to help you get started.

( more to come )

Helpful note (in addition to the official docs):  
[SO - add routing module](https://stackoverflow.com/questions/44990030/how-to-add-a-routing-module-to-an-existing-module-in-angular-cli-version-1-1-1)

Another take:  
[Config routing](https://shermandigital.com/blog/configure-routing-in-an-angular-cli-project/)

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
