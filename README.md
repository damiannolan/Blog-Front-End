# Overview

## An AngularJS Blogging application based on the Tumblr dashboard.

This repository contains the Front End submission of a 3rd Year Undergraduate project in Data Representation and Querying.
The project aims to demonstrate a well-managed and steady effort to create a useful and easy-to-use web application.

The Front End acts as a Consumer of a Back End API written in the programming language Python using the
[Flask](http://flask.pocoo.org/) framework. The repository for the Back End API can be found [Here!](https://github.com/seantking/Blog-back-end)

The application features the ability to retrieve, create and delete blog posts using AngularJS's
[$http](https://docs.angularjs.org/api/ng/service/$http) and [$q](https://docs.angularjs.org/api/ng/service/$q) services
 together with the endpoints/routes offered by the Python Flask API.

### Teamwork

- Damian Nolan
- Sean King

A large portion of this project was done using 'Pair Programming', an Agile Software Development technique in which two
programmers work together at one workstation.
We felt this was an effective workflow as we both got to understand the full scope of the project.

To get started head on over to the [Back End Respository](https://github.com/seantking/Blog-back-end) and get setup!

## Installation

1. Clone the repository

2. Install prerequisites

        bower install

        npm install

3. Type 'gulp watch' into the command line from the base directory in order to start the program 

4. Login using the mock login

        Username: username

        Password: password

### Dependencies

- [AngularJS](https://angularjs.org/)
- [Bootstrap](http://getbootstrap.com/)
- [Gulp](http://gulpjs.com/)
- [Moment](http://momentjs.com/)

### Model

![alt text](http://i.imgur.com/nByY6Lo.png)

### Architecture

In terms of architecture we focused on creating loosely coupled components that can be easily understood and tested. A large emphasis was placed on structuring the directory in such a way that each UI component is entirely encapsulated within a directory containing all javascript, templates and sass files that the component needs to run effectively. 

We decided on AngularJS for the front-end and Flask for the backend. Both frameworks allow for quick setup and have extensive libraries and documentation available.

### Developer guidelines

A gulp file has been created in order to automate certain tasks. Typing 'gulp watch' into the command line from within the root directory will launch the project via localhost port specified within the gulp.js file. Saving any file will relaunch the browser and show changes automatically. When a SCSS file changes gulp will compile the SCSS file into CSS and minify each CSS file. The gulp file has been created in such a way that new tasks can be added with ease. It is suggested that you modify the gulp file to your own needs. 

### Suggestions for additional features

- Login with real authentication 
- Additional users 
- Testing framework added in order to test each component 
- User profiles
- Like feature
- Ability to subscripe to multiple users 


