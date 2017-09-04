---
title: State and REST
layout: default
---

## State and REST

> Thoughts in progress...

The "money" section 5, [Representational State Transfer](http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm), in Roy's dissertation.

Others...

[Contents](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)

[Software Architecture](http://www.ics.uci.edu/~fielding/pubs/dissertation/software_arch.htm)

[Network-based Architectural Styles](http://www.ics.uci.edu/~fielding/pubs/dissertation/net_arch_styles.htm)

<br>

**State**

Let's discuss *state* in this section of the notes. 

In a web app or web service context, the meaning of the word *state* is the *current value of a resource*. 

At the server, a resource could be in the form of an item in a persistent store (i.e. a database system), or it could be in the form of an item that is generated upon request. That difference doesn't matter; what matters is that when a resource is requested, its current state is sent, or *transferred*, as the response. 

A resource's state can be *changed* (or modified), of course. The stimulus for the change can originate from anywhere in the distributed system, ranging from server-based batch or automatic processes that modify the persistent store (apart from or separately from the web app or web service), through to client-sent requests that are received by a web app or web service. 

In summary, we can think about state in the following way:

Think about a typical client app, which could be a browser, or an app on a smartphone. The client app wants to read (get, fetch) some data. 

As you have learned above, a client can request a *representation* of a resource. 

The *state* of the resource is *transferred*, from the server (web app or web service), to the client app. 

In other words, <u><b>re</b></u>presentational <u><b>s</b></u>tate <u><b>t</b></u>ransfer. Commonly known as REST. 

> Does this work the other way?  
> When a client app changes the state of an resource?  
> Yes.  
> A client can send a request that includes a *representation* of a resource. (For example, an HTTP POST or PUT request.)  
> The *state* of the resource is *transferred*, from the client app to the server (web app or web service).  
> Upon acceptance (and validation etc.), the server appends to or updates the resource in the persistent store.  



roy fielding

parts of a web server...  
TCP/IP stack  
http listener
runtime, execution environment for static and dynamic requests
logger
file system
persistent store manager

state management...  
server has a data store to persist resources (state persistence, permanent)  
in HTTP, every request is atomic  

server's request-handling process: GET static resource
1. server receives a request for a resource
2. if the request is for a static resource that's in the file system, the server simply locates and fetches the resource
3. assemble the response, which includes metadata and the representation of the resource, and then send the response
4. log the fact that the request-response happened
5. return to listening mode

request-handling process: GET dynamically-generated resource
1. server receives a request for a resource
2. load the program code that does the dynamic generation
3. assemble the response, which includes metadata and the representation of the resource, and then send the response
4. unload the code that dynamically generated the resource
5. log the fact that the request-response happened
6. return to listening mode

the main point is that the server effectively treats every request as separate / discrete / atomic, and DOES NOT actively maintain any notion of a continual logical session

in other words, no state maintenance or state management at the server

this runs counter to a fimilar message-passing activity we as people do... a face-to-face or voice telephone conversation, in which each person in this kind of interactive information exchange maintains state naturally; each can easily recall what was said a few moments ago, and build upon that 

maybe define what a "session" is when used in a networked app context

if the state of a (message exchange) session is important to maintain, it's done by the requester

old web apps did more of this at the server, but scale is a problem  
new web apps are designed for fast networks and fast client execution platforms (browsers or native like iOS or Android)

shopping cart, bad direct analogy, because it's a hybrid  
anonymous shopping is stateless  
but if you're authenticated, the server will use that to create a shopping cart that's persisted in the data store 
the server's MEMORY (active request-serving process) is not maintaining the shopping cart state in this situation  
it's in the database  

<br>

**REST**

Now we can circle back to REST. 

**RE**presentational **S**tate **T**ransfer



<br>

### TBA

let's get back to...

In the previous web programming course, you got started with this task in the [Week 9 coverage](http://zenit.senecac.on.ca/~patrick.crawford/index.php/web322/course-notes/week9-class1/) (Ajax Review / Practical Ajax Programming). 


REST is an architectural style for designing networked apps

remember curl

hmmm... in part of the course, use a public api
* youtube
* github
* instagram
* etc.

would be a good/efficient way to begin learning about auth too





