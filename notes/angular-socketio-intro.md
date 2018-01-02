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

<br>

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

<br>

Before we move on, let's explain what's going on in the above code.

<br>

```js
const express = require("express");
const app = express();
const path = require("path");

const HTTP_PORT = process.env.PORT || 8080;
```

This is fairly standard and was discussed in detail during our time in WEB322.  Essentially it loads the "express" & "path" modules as well as sets the port to either 8080 *or* the PORT identified within an environment variable (used by Heroku).

<br>

```js
// setup socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);
```

This code is a little different than what we're used to when working with Express in Node.js.  Here, we require the 'http' module, and invoke it's "Server" function with the express "app" to return an http server instance (ie "http"). We will be
referencing "http" instead of "app" when listening on our "HTTP_PORT".  We also require the "socket.io" library and provide the "http" server that we will "bind" our socket to.  This must be an "http" server, and will not work with "app" (which is why we must use the "http" module).

<br>

```js
io.on('connection', function (socket) {
    console.log('a user connected'); // show when the user connected

    // ...
});
```

This block of code specifies a callback function to be executed when a client "connects" to the socket.  A reference to the socket is provided to the function.  It is within this callback that we will wire up all of our "socket" events using this reference.  

<br>

To confirm that the client is indeed connected, we will simply output "a user connected" to the console.  

```js
socket.on('disconnect', function () {
    console.log('user disconnected'); // show when the user disconnected
});
```

Here, we wire up the "disconnect" event and simply output "user disconnected" to the console.

<br>

```js
socket.on('chat message', function (msg) { // when the socket recieves a "chat message"
    console.log("user sent: " + msg);
    io.emit('chat message', msg); // send the message back to the users
});
```

This is the most interesting piece of code in our server.js file, as it handles both incoming and outgoing messages.  The "event" is "chat message" - a custom "event" that we will use in our **client** code as a means of directing our communication.  

The callback function provides the actual "chat message" message sent to the server as the "msg" parameter.  To send this message back to **all clients** listening to "chat message" (we will see this when we write the **client**), we call `io.emit()` and specify the event (ie, "chat message"), as well as the data (ie, msg).  

**Note:** If we wanted to only communicate this message back to the original sender, we would use `socket.emit()` instead.

<br>

```js
http.listen(HTTP_PORT,()=>{ // note - we use http here, not app
    console.log("listening on: " + HTTP_PORT);
});
```

Lastly, we make a call to the "listen" method as usual.  However, we must call it on the "http" server instance, *instead* of the express "app" (as we have traditionally done).

<br>

### Testing Our Server

Before we move on to create an Angular application to serve as a **client**, we should write a simple page to test the server as it is.  To do this, we can simply create an **index.html** file within a **"public"** directory.  This will approximate our Angular app that we will create next.

Once this file (public/index.html) is created, enter the following HTML:

```html
<html>
  <head>
     <title>Socket.IO Connection Test</title>
     <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>
     
     <script>
      var socket = io.connect('http://localhost:8080'); // we can also use io.connect() to connect to the current host
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

Before we can run our server and see our "chat message" echoed back to us, we need to tell the server where to find the "public" files.  This is done by adding the middleware function call (near the top of server.js - beneath the line that specifies HTTP_PORT):

```js
app.use(express.static("public"));
```

If we run the server now, we should see the text: "recieved: Hello World" in the Console! Our server has successfully recieved the message and sent it back out to our clients.  Once we implement a more dynamic client, we will see how this will work across multiple connections to 'chat message' on 'http://localhost:8080'.

<br>

### Writing a Client (Using Angular)

Now that we know our server is capable of sending and receiving messages, we can write an Angular app as the "client" to communicate with the server.

In the same 


<br><br><br><br>
### (Notes)

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

