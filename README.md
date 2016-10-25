# sumo-app — the seed for AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to utilize the angularjs infrastructure for building dialog with team & related employee selection


## Getting Started

To get you started you can simply clone the sumo-app repository and install the dependencies:

### Prerequisites

You need git to clone the sumo-app repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test sumo-app. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone sumo-app

Clone the sumo-app repository using [git][git]:

```
git clone https://github.com/RL-shashikantmaharshi/sumo-app.git
cd sumo-app
```

If you just want to start a new project without the sumo-app commit history then you can do:

```bash
git clone --depth=1 https://github.com/RL-shashikantmaharshi/sumo-app.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.

### References

For more information on available source code visit [ANGULAR-SEED](https://github.com/angular/angular-seed) project.
For more advanced setup please visit [CLEVERSTACK-ANGULAR-SEED](https://github.com/CleverStack/angular-seed) project.