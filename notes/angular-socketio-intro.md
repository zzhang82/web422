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
2. Within that folder, create a "chatServer" folder
3. Open the "Week12Example" folder in Visual Studio Code and right-click the "chatServer" folder - choose "open in Terminal".  You can expand this folder, as it will be our "working folder"
4. We will create a Node/Express server using our usual steps, ie:
    - Create a file **server.js** but leave it empty for now.
    - Run the command "npm init" in the Integrated Terminal
    - Install & Save "express" - `npm install --save express`
    - Install & Save "socket.io" - `npm install --save socket.io`
5. Enter the following code for "server.js":

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
    
    // assign them a temporary user name:
    let tempUserName = "User-" + Math.floor(Math.random() * (100000 - 1 + 1)) + 1; 

    socket.on('disconnect', function(){
      console.log('user disconnected'); // show when the user disconnected
    });

    socket.on('chat message', function(msg){ // when the socket recieves a "chat message"
        console.log("user sent: " + msg);
        io.emit('chat message', tempUserName + ": " + msg); // send the message back to the users
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

```js
// assign them a temporary user name:
    let tempUserName = "User-" + Math.floor(Math.random() * (100000 - 1 + 1)) + 1; 
```

To help distinguish which user wrote which message, we simply create a "tempUserName" that consists of the text "User-" followed by a random number between 1 and 100000 inclusive.

<br>

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
    iio.emit('chat message', tempUserName + ": " + msg); // send the message back to the users
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

If we run the server now, we should see the text: "recieved: User-xx Hello World" (where xx is a random number) in the Console! Our server has successfully recieved the message and sent it back out to our clients.  Once we implement a more dynamic client, we will see how this will work across multiple connections to 'chat message' on 'http://localhost:8080'.

<br>

### Writing a Client (Using Angular)

Now that we know our server is capable of sending and receiving messages, we can write an Angular app as the "client" to communicate with the server.

**Before we begin**: Please note that we must keep the server running in the background, so that our Angular app will have something to connect to.  Therefore, we will *not* stop the server or close the Integrated Terminal window.

With the server still running, click the "+" icon next to the dropdown in the top-right corner of the Integrated Terminal (this will open a 2nd Terminal).  With this new Terminal window open, ensure that your working directory is the "Week12Example" directory (ie, `pwd`).  While in this directory, create a new Angular application (with Routing) called "chatApp", ie: `ng n chatApp --routing`.  Once this is complete, change your working directory to "chatApp" and expand the "chatApp" folder.

<br >

#### Step 1: Enable Angular Forms & Bootstrap 3

We will be using a simple web form to write "chat" messages, so we must enable Angular Forms.  Recall, this involves adding the "FormsModule" to the "@NgModule" imports array within **app.module.ts**, ie:

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

Additionally, we will use Bootstrap 3 to ensure that our UI is consistant.  Add the following CSS/JS imports to the index.html file:

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

```
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="crossorigin="anonymous"></script>
```

```
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

<br>

#### Step 2: Setting up the "socket.io" Client Library

For us to use the features of socket.io on the client side in Angular, we must use NPM to obtain the "socket.io-client" library, as well as some packages defining the "types", so that TypeScript will recognize our new code.

In the Integrated terminal, execute the following 3 "npm install" commands:

- `npm install --save socket.io-client`
- `npm install --save-dev @types/socket.io-client`
- `npm install --save @types/socket.io-client --only=dev`

Once this is complete, we must add the new "socket.io-client" to the **"types"** array within the file **"tsconfig.app.json"**, ie:

```js
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

<br>

#### Step 3: Adding a new ChatService

Our application will be making use of socket.io within a "service".  To create this service, we use our usual Angular CLI code: `ng g s Chat --module=app`.  

With our new ChatService created, we can update chat.service.ts to use the following code: 

```js
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject } from "rxjs/Subject";  

@Injectable()
export class ChatService {

  private socket: SocketIOClient.Socket; // The client instance of socket.io
  public getMessages: any; 

  constructor() {
    this.getMessages = new Subject(); 
    
    this.socket = io.connect('http://localhost:8080');

    this.socket.on('chat message', (msg) => {
      this.getMessages.next(msg); // send the new message
    });

  }

  sendMessage(msg){
    this.socket.emit('chat message', msg);
  }

}
```

Here, you will notice that we import the required files for "socket.io-client" and "Subject" (Recall, "Subjects" are a special kind of Observable - for a quick explanation of the differences, see: http://javascript.tutorialhorizon.com/2017/03/23/rxjs-subject-vs-observable/ ). 

We declare a local "socket" as type "SocketIOClient.Socket" and connect to it within the constructor function using our familiar "io.connect" code.  We also make use of the socket.on() method, only instead of outputting the "msg" to the console (as we did in our test code), we will instead use our "getMessages" Subject to send the message out to the "Subscribers" of the service, using it's "next()" method.

Lastly, we include a "sendMessage()" method that simply sends a given message to the socket, using the familiar socket.emit() method from the test code

<br>

#### Step 4: Adding a new ChatWindowComponent

For our example, we will place all of the code within a single "ChatWindowCompoment".  To create this Component, execute the usual Angular CLI code: `ng g c chatWindow`

With our new ChatWindowComponent created, we can update chat-window.compoment.ts to use the following code: 

```js
import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  private getMessagesSub: any;
  messages: string[] = [];
  currentMessage: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.getMessagesSub = this.chatService.getMessages.subscribe((data) => {
      this.messages.push(data);
    });
  }    

  sendMessage(){
    this.chatService.sendMessage(this.currentMessage);
    this.currentMessage = "";
  }

  ngOnDestroy(){    
     if(this.getMessagesSub){this.getMessagesSub.unsubscribe();}   
  } 

}

```

At first glance, it looks like there's a lot going on in this Compoment, but really we're following along with the Angular Service design pattern that we've been working with for the past few weeks.  In this case, we:

- Declare a **getMessagesSub** to hold a reference to the subscription to **chatService.getMessages** (so that we can "unsubscribe" to it in the **ngOnDestroy** lifecycle method

- Declare a "messages" property that will hold an array of Strings (the messages recieved from **chatService.getMessages**)

- Declare a "currentMessage" property that will hold the message that the user has entered (to be added to the chat).

- Inject the "ChatService" into our class as "chatService" using the constructor.

- Subscribe to the getMessages property of "this.chatService" and push any incoming chats into the "messages" array

- Declare a "sendMessage()" method that will invoke the "sendMessage" method of "chatService" with the value of "this.currentMessage" before clearing it for the next entry

- Destroy the "getMessages" subscription on the ngOnDestroy lifecycle method

<br>

#### Step 5: Updating ChatWindowComponent Template

We now have everything in place to create the template for our ChatWindow Component.  Enter the following code in the "chat-window.compoment.html" file:

```html
<div class="well" style="height: 300px; overflow-y: scroll; margin-top:15px">
  <div *ngFor="let message of messages">{{message}}</div>
</div>

<form (ngSubmit)="sendMessage()">
    <input type="text" name="currentMessage" class="form-control" [(ngModel)]="currentMessage" />
    <br />
    <button type="submit" class="btn btn-primary" >Send Message</button>
</form>
```

Here, we have a "well" with a few simple inline styles added (these should be moved into chat-window.component.css), that is used to contain a &lt;div&gt; element for every "message" in the "messages" array.  This can be thought of as our "chat window".  Beneath this is a very small form consisting of a text box and submit button.  The textbox is bound (using two-way binding) to the "currentMessage" property and when the form submits, the "sendMessage()" method is invoked.

<br>

#### Step 6: Updating app.compoment.html

Everything is nearly ready for testing, the only thing left is to update app.component.html to include our ChatWindowComponent (`<app-chat-window></app-chat-window>`).  Since we're using Bootstrap 3, we will ensure that this component sits within the responsive grid system:

```html
<div class="container">
  <div class="row">
    <div class="col-md-12">
    <app-chat-window></app-chat-window>
  </div>
  </div>
</div> 
```

<br>

#### Step 7: Testing &amp; Future Work

The application should now be ready for testing.  You should be able to serve the app and open multiple windows to `http://localhost:4200` and be able to enter chat messages that are echoed in every window.

This is a good start in getting a proof-of-concept chat window going, but there's lots of room for improvement.  For example, we can add a feature that lets users choose their own user name or even log in prior to using the chat window.  We could also persist existing message boards using MongoDB so that new users can see an existing conversation when they first log in, or continue a conversation later on.  We could even implement different chat "rooms" (see the documentation for "Rooms and Namespaces" in the [official socket.io documentation](https://socket.io/docs/rooms-and-namespaces/).  

Another interesting use case might be an application with a single "project lead" that assigns "tasks" to users in the application.  If a logged-in user recieves a "task", we can use socket.io to alert that user immediately that a new task has been assigned to them.  This can be done *without* constantly polling the database / API for "task" updates (the traditional approach to solving this problem).

