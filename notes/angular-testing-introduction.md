---
title: Angular Testing Introduction
layout: default
---

## Introduction to Angular Testing

Throughout our discussion of Angular, we have largely been ignoring the test features that have been made available to us.  For example, we have opted to ignore the spec files and "skip tests" using the "-st" command when creating a "new" application (skipping the creation the spec files altogether, as well as excluding the end-to-end (e2e) testing functionality).

However, running e2e tests & unit testing is an extremely important(https://www.agiletestingframework.com/atf/testing/unit-testing/) part of the Agile development cycle.  For example, unit / e2e testing:

* Guards against changes that break existing code (“regressions”).

* Clarifies what the code does both when used as intended and when faced with deviant conditions.

* Reveals mistakes in design and implementation. Tests shine a harsh light on the code from many angles. When a part of the application seems hard to test, the root cause is often a design flaw, something to cure now rather than later when it becomes expensive to fix.

So, to take full advantage of all the built in testing functionality that Angular provides, we will be primairly referring to the excellent [documentation](https://angular.io/guide/testing) (re-printed here with extra comments where applicable).

<br>

### Tools and technologies

You can write and run Angular tests with a variety of tools and technologies. This guide describes specific choices that are known to work well.

<table width="100%">
  <colgroup><col width="20%">
  
  <col width="80%">
  
  </colgroup><tbody><tr>
    <th>
      Technology
    </th>
    <th>
      Purpose
    </th>
  </tr>
  <tr style="top">
    <td style="vertical-align: top">
      Jasmine
    </td>
    <td>
<p>      The <a href="http://jasmine.github.io/2.4/introduction.html">Jasmine test framework</a>
provides everything needed to write basic tests.
It ships with an HTML test runner that executes tests in the browser.</p>
    </td>
  </tr>
  <tr style="top">
    <td style="vertical-align: top">
      Angular testing utilities
    </td>
    <td>
<p>      Angular testing utilities create a test environment
for the Angular application code under test.
Use them to condition and control parts of the application as they
interact <em>within</em> the Angular environment.</p>
    </td>
  </tr>
  <tr style="top">
    <td style="vertical-align: top">
      Karma
    </td>
    <td>
<p>      The <a href="https://karma-runner.github.io/1.0/index.html">karma test runner</a>
is ideal for writing and running unit tests while developing the application.
It can be an integral part of the project's development and continuous integration processes.
This guide describes how to set up and run tests with karma.</p>
    </td>
  </tr>
  <tr style="top">
    <td style="vertical-align: top">
      Protractor
    </td>
    <td>
<p>      Use protractor to write and run <em>end-to-end</em> (e2e) tests.
End-to-end tests explore the application <em>as users experience it</em>.
In e2e testing, one process runs the real application
and a second process runs protractor tests that simulate user behavior
and assert that the application respond in the browser as expected.</p>
    </td>
  </tr>
</tbody></table>

<br>

### Setup

Fortunately, since we have been making exclusive use of the Angular CLI to create "new" apps for us, everything we need to get started testing our software is already included.  

For example, if we create a "new" app with the following command:

```
ng new myApp --routing
```

We will get a new Angular application with "routing" enabled out of the box - this isn't anything new.  However, until now we haven't discussed a few of the key files that are added **outside** the src/app directory, including; karma.conf.js, protractor.conf.js, app.component.spec & the e2e folder (below).

For now, let's see how we can perform our first, simple unit test:

1. Create a new file called 1st.spec.ts in the application root folder, src/app/



