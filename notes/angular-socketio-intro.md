---
title: Angular Socket.io Introduction
layout: default
---

## Socket.io Introduction

We have now reached a point in our Angular learning where we can start to play with some of the more interesting tools and libraries.  We are familiar with the basics of how to create Compoments, Services, Routes, Forms with Two-Way Binding and even how to use some of the testing frameworks used by Angular. However, one common tool that is often used in modern applications is still missing from our skillset: Sockets, specifically the "Socket.io" library.

Essentially, Socket.io enables "realtime, bi-directional communication between web clients and servers".  It can be extremely useful for pushing messages to the client.  As an example use case, we will discuss how we can leverage this to create realtime "chat" functionality.

From the Socket.io documentation: 

> Writing a chat application with popular web applications stacks like LAMP (PHP) has traditionally been very hard. It involves polling the server for changes, keeping track of timestamps, and it’s a lot slower than it should be.

> Sockets have traditionally been the solution around which most realtime chat systems are architected, providing a bi-directional communication channel between a client and a server.

> This means that the server can push messages to clients. Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients.

### Getting Started

Creating any application that makes use of socket.io, requires two parts: a **client** and a **server**.  We will start with creating the **server** piece, before developing an Angular application that connects to it.

1. Create a new folder called "Week12Example"
2. Within that folder, create a "chatServer" folder and open it in Visual Studio Code
3. We will create a Node/Express server using our usual steps, ie:
    - Create a file **server.js** but leave it empty for now.
    - Run the command "npm init" in the Integrated Terminal
    - Install & Save "express" - `npm install --save express`
    - Install & Save "socket.io" - `npm install --save socket.io`
4. Enter the following code for "server.js":

```js
const express = require("express");
const app = express();
const path = require("path");

const HTTP_PORT = process.env.PORT || 8080;

// setup socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected'); // show when the user connected

    socket.on('disconnect', function(){
      console.log('user disconnected'); // show when the user disconnected
    });

    socket.on('chat message', function(msg){ // when the socket recieves a "chat message"
        console.log("user sent: " + msg);
        io.emit('chat message', msg); // send the message back to the users
    });
  });

http.listen(HTTP_PORT,()=>{ // note - we use http here, not app
    console.log("listening on: " + HTTP_PORT);
});
```

Before we move on, let's explain what's going on in the above code.





- I first created a simple express server "chatServer":

```js
const express = require("express");
const app = express();
const path = require("path");

// get socket.io going
var http = require('http').Server(app);
var io = require('socket.io')(http);

const HTTP_PORT = process.env.PORT || 8080;

// setup the static folder 
app.use(express.static("public"));

io.on('connection', function(socket){
    console.log('a user connected'); // show when the user connected

    socket.on('disconnect', function(){
      console.log('user disconnected'); // show when the user disconnected
    });

    socket.on('chat message', function(msg){ // when the socket recieves a "chat message"
        console.log("user sent: " + msg);
        io.emit('chat message', 'a user sent: ' + msg); // send the message back to the users
    });
  });

http.listen(HTTP_PORT,()=>{ // note - we use http here, not app
    console.log("listening on: " + HTTP_PORT);
});
```

- I then created a simple "index.html" file to connect: 

```html
<!doctype html>
<html>
  <head>
    <title>Socket.IO Connection Test</title>
     <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>
     
     <script>
      var socket = io.connect('http://localhost:8080');
      socket.on('connect', function(data) {
          socket.emit('chat message', 'Hello World');
      });
      socket.on('chat message', function(msg){
        console.log("recieved: " + msg);
      });
    
    </script>
  </head>
  <body>
   <p>Testing Socket Connection</p>
  </body>
</html>
```
- I then created a new angular app with 'routing'

- added the libraries

- `npm install --save socket.io-client`
- `npm install --save-dev @types/socket.io-client`
- `npm install --save @types/socket.io-client --only=dev`

- I then needed to update the file: tsconfig.app.json to add the types (ie, add "socket.io-client" to the "types" array

```
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "baseUrl": "./",
    "module": "es2015",
    "types": ["socket.io-client"]
  },
  "exclude": [
    "test.ts",
    "**/*.spec.ts"
  ]
}
```

- added a new service:

- ng g s socketIo --module=app

```js
```


- added a new component "chatWindow" - `ng g c chatWindow`

```js
```

- uncommented out the "public" bit from server.js (it's a simple chat server now)

- need to add forms module... ie in app.module.ts

```
import { FormsModule } from '@angular/forms';

[...]

@NgModule({
  imports: [
    [...]
    FormsModule
  ],
  [...]
})
```

- updated the chatWindow template:

