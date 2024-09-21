# Backend Project 

## NOTES
### What is a dev dependency? 
- These are some packages or dependencies which are used only at the time of development of the project, Nodemon is a dev dependency it is used to restart the local server whenever there is any change in our application. But we won't be needing this package in our production servers. Tailwind CSS is also an example of dev dependency.

#### Nodemon
- Nodemon will watch entry point file (index.js) and whenever there is a change in that file it will just restart the server. In the package.json file we have to write a script: "dev" : "nodemon /src/index.js"
