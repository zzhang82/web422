---
title: Angular Socket.io Introduction
layout: default
---

## Notes

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

