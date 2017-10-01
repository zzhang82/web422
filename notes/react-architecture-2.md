---
title: React architecture 2
layout: default
---

## Composing a Simple Page (Using Components)

Now that we have learned all about Components in React (Stateful, Statless, Functional, etc).  It's time that we start using this knowledge to create something that resembles a real page using these ideas.

To get started, create **new app** using **create-react-app**.  Once this is complete follow the steps in the terminal to start the development server (ie: **npm start**).  This *should* open a new browser window to **http://localhost:3000**, but if it doesn't - proceed to open up that url now.

Notice how the create-react-app tool has created a pretty cool start page for us already (you should remember this from last week).  However, now that we know a little bit more about how React is used to define and manage "Components", let's disect what's happening here and create our own start page.

Inside the **src/index.js** file is where everything really kicks off.  It's known as the "JavaScript entry point" for our application and it's where we will put our highest level component (ie: `<App />`.  As you can see, this is exactly what create-react-app has done for us:

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

Here, we invoke the [ReactDom.render](https://reactjs.org/docs/react-dom.html#render) method to render our primary "App" element onto the main `<div>` element in `index.html`

You will notice however, that `<App />` isn't defined in index.js and neither is `ReactDOM`.  References to the original source is included via ["import"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statements at the top of the file.  This behaviour is defined in ES6 and it simply functions as a method for us to include modules from other files.  You can think of this as analogous to our "require" statements that we use when writing server code in Node.js.  

In our current application (index.html file), we import the modules **React**, **ReactDOM**, **App** and **registerServiceWorker**.  We can discard the **registerServiceWorker** code for now (for more infomation see: [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/)).  This should leave you with the following code:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

The `import './index.css';` line in the above code simply informs the (Webpack) build process that we wish to include the ./index.css file whenever we include the ./index.js file.  

We obviously need **ReactDOM**, since we're using it to "render" our `<App />` component, however it's not immediately clear what we need the **React** module for.  It turns out, we actually need it to help us render our **JSX**, and if we try to remove it, we encounter the error: `'React' must be in scope when using JSX`.

Lastly, you will notice that we imported our **App** component as well.  Defining large components in their own files is an easy way to keep your React code organized.

Open up the "App.js" file and you will see that we require both the "React" and "{ Component }" modules from "react".  The latter is a "named" import, which allows us to reference the Component object (For more information see: [Named Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)). We also see a "export default App;" line at the bottom of the file.

If we wish to define our component in an external .js file and make it available to be imported in other files, we simply follow the pattern:

```js
import React, { Component } from 'react';
// import whatever else you like here

// Declare your Component here
class SomeComponent extends Component{
  render(){
    return <div>Hello World</div>;
  }
}

// export the component by name
export default SomeComponent; 
``` 
