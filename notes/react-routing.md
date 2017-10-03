---
title: React routing
layout: default
---

## "Routing" in React

One of the key components in creating a SPA (Single Page Application) is Routing.  When Routing is implemented using a framework like React, we will find that we can browse different URL's within our app without actually reloading the page.  In this case, the components of one URI are swapped out for the components of another, giving the illusion that we're navigating through multiple pages, when we're really just adding / removing components based on the browser URL / history.  Our User-Interface is in sync with the URL.

Recently, the major routing library used to achieve this in react; **React Router** has been updated to [version 4](https://reacttraining.com/react-router/):

> Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering.

<br>

## Getting Started using React Router v4

To start using the React Router library in our web app, we must first fetch react-router-dom using npm (once we have halted our debugging server using ctrl+c), ie:

```
npm install react-router-dom --save
```

Now, let's say that we have 3 top-level components that represent 3 separate views, ie: **Home**, **Projects** and **Project**:

```javascript
class Home extends Component{
  render(){
    return <h1>Home Page</h1>
  }
}

class Projects extends Component{
  render(){
    return <h1>All Projects Page</h1>
  }
}

class Project extends Component{
  render(){
    return <h1>Specific Project Page</h1>
  }
}
```

**Quick Note:** Each of these components (views) currently only renders an `<h1>` element, however in a real application they would be defined in separate files and contain many child components.

If we wish to conditionally render each of the above components (views) based on the following routes:

* "/" renders <Home />
* "/projects" renders <Projects />
* "/project" renders <Project />

we need to modify our App.js file as well as our index.js file.  Starting with 

<br>

### index.js

* "import" the `<BrowserRouter>` Component using `import { BrowserRouter } from 'react-router-dom'` 
* Update the ReactDom.render() method to wrap the `<App />` component in a `<BrowserRouter>` component:
  ```javascript
  ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
  , document.getElementById('root'));
  ```

The above code specifies the type of router that we will be using in our `<App />` component.  This could be either [&lt;BrowserRouter&gt;](https://reacttraining.com/react-router/web/api/BrowserRouter) or [&lt;HashRouter&gt;](https://reacttraining.com/react-router/web/api/HashRouter) - here, we have decited to use `<BrowserRouter>`, as the Hash Router technique is only really intended to support legacy browsers.

<br>

### App.js

* "import the `<Route>` and `<Switch>` Components using `import { Route, Switch} from 'react-router-dom'`
