### Deployment Notes 

This is just a short document containing the notes collected when Deploying the Week 10 example to Heroku.

* Opened the solution in Visual Studio Code

* Ran command "ng build" (this will generate a "dist" folder in the solution) (NOTE: Will investigate --prod flag next)

* Copied the **contents** of the "dist" folder (not the folder) to the "public" folder of a Node "Static Server" (see - Code Examples / static-server - this can be used as-is and should be downloaded / cloned)

* Initialized a git repo for the "static-server" folder

* Commit all code to new git repo "initial commit"

* Executed the command "heroku login" (note if the "heroku" cli is not present or working properly, it can be obtained using the command "npm install -g heroku-cli"
  * Note: If you cannot execute any heroku commands and see a WARNING Node version must be >=8.3.0 to use the Heroku CLI, we have to updated Node.js
  * To Upgrade Node.js we can use the commands:
  ```
  sudo npm cache clean -f
  sudo npm install -g n
  sudo n stable
```

* Once Logged in to the heroku cli, executed "heroku create"

* Executed "git push heroku master"

* Copy the link at the end of the output (should be under "Launching...", ie.. someUrl "deployed to Heroku") 

* Paste the link in the browser (working example: [https://fathomless-spire-30005.herokuapp.com/](https://fathomless-spire-30005.herokuapp.com/)

* Profit
