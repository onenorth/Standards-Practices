# Continuous Integration and Deployment

> As code is developed, issues that occur can remain undetected until further
into the development process when they become more challenging to debug and
correct. Continuous integration ensures that code is constantly and consistently
passing tests, linting, and building correctly to ensure that unforeseen errors
are minimized early in the development process. The last aspect of this process,
continuous deployment, involves placing the built code onto a server that is
accessible to clients as well as internal staff to see progress and provide
continuous feedback.

* [Local Development](#local-development)
* TeamCity
  * [Overview](#overview)
  * [Preparing Your Repository](#preparing-your-repository)
    * [Front End Only Applications](#front-end-only-applications)
    * [Status Icon](#status-icon)
  * [Configuring Your Project in TeamCity](#configuring-your-project-in-teamcity)
    * [Creation and Access (Engagement Manager)](#creation-and-access-engagement-manager)
    * [Version Control and Build Config (Project Lead)](#version-control-and-build-config-project-lead)
  * [Running and Viewing Builds](#running-and-viewing-builds)
    * [Build Details and Log](#build-details-and-log)
    * [Handling Errors](#handling-errors)
* [Need Help?](#need-help)

## Local Development

During development, engineers should use a tool such as
[grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) to emulate
the continuous integration process. This tool allows various steps of the build
process to be executed any time a change is made to project files. This ensures that
even before the code is committed to source control it receives cursory coverage
from tests and linting.

## TeamCity

[TeamCity](http://www.jetbrains.com/teamcity) is a system for executing continuous
integration and deployment scenarios developed by
[JetBrains](http://www.jetbrains.com). You can access the appendTo
TeamCity server at the address below:

http://teamcity.ap2.us:8111

### Overview

The basic process once all configuration is complete looks like this:

1. A developer changes some code and pushes to a specific branch
1. TeamCity identifies that a change has occurred
1. TeamCity executes a series of build steps, configured by the project lead:
  1. If a server does not exist for this project, one is created on [Digital Ocean](http://digitalocean.com/)
  1. The new code is pulled down on the deployment server
  1. Tests are run on the new code
  1. The old code is replaced with the new code and the application is restarted
1. All build process step output is reported to TeamCity and any notifications are sent

### Preparing Your Repository

All of the implementation for the individual steps of your build process are handled
by the `"scripts"` block of your package.json file. Just to be clear, __all projects
using TeamCity must have a package.json file__, even if they do not implement any of
these build steps.

In your package.json file, create a new object called `"scripts"`, each step of
the build process will have an entry in this object. The value of the entry will
be executed on the command line on your droplet (virtual server). In this manner,
you, the developer, may execute any commands necessary for your build process. All
of the output from these commands will be sent back to TeamCity and reported in
the build log.

Here is an example of how you might configure your package.json file:

```
{
    "name": "my-project",
    ...,
    "scripts": {
        "provision": "apt-get install mongodb",
        "install": "bower install --allow-root"
        "test": "grunt test --no-color",
        "stop": "forever stopall --no-colors",
        "deploy": "grunt build --no-color",
        "start": "forever server/index.js ...  --no-colors"
    }
}
```

Each of the entries in the `"scripts"` block above will be executed at a specific
time during the build process. You can see more about those steps in the
"Configuring Your Project in TeamCity" section below. Here are some important
notes about these steps:

* Commands always run as root, this may affect permissions, so be cautious!
* Each droplet is created from the same image, this image includes:
  * git
  * Node, npm, and nvm (with 0.10.29 set as default)
  * [Grunt](http://gruntjs.com) CLI (you will still need `grunt` as a dependency)
  * [Bower](http://bower.io)
  * Nodejitsu's [Forever](https://github.com/nodejitsu/forever)
  * Ruby and rvm (with 1.9.3p547 as default)
* Some TeamCity build steps perform multiple script actions, here is the full list:
  1. `provision` (the TeamCity build step)
      * `proivision`: executed directly after initial droplet creation (one time)
      * `postprovision`: executed after the droplet is either created or fetched (every time)
      * `install`: executed after provisioning is complete and the code is cloned
  1. `test`
  1. `stop`
  1. `deploy`
  1. `prestart`
  1. `start`

Lastly, note that the `provision` and `test` steps are executed from the
temporary directory that files are cloned into, not the final application
directory. Thus, if the tests fail, the application is never stopped and will
continue to function as before. All other steps are executed from the final
application directory. In general, __your scripts should only use relative
paths to your project code__. However, you can always change the current working
directory in your `"scripts"` block command with a simple `cd /foo/bar;`.

#### Front End Only Applications

If you are only developing a front end application then you will need something
running as a web server to serve up those HTML, CSS, image, and JS files. There are
many options, but a nice simple one is this
[http-server](https://github.com/nodeapps/http-server) built with Node. Since we
have Forever already installed, you could simply add this to your package.json
`"provision"` step and then start the server in your `"start"` line:

```
{
    "scripts": {
        "provision": "npm install -g http-server",
        ...,
        "stop": "forever stopall",
        "start": "forever start /root/.nvm/v0.10.29/bin/http-server path/to/build/dir -s"
    }
}
```

#### Status Icon

The Project Lead should also update the primary README file in the repository adding
a status icon/badge at the very top (next to or under the project name). You will
need to find your build config ID (see the next section) and the line below:

```
[![Build Status](http://teamcity.ap2.us:8111/app/rest/builds/buildType:(id:[BUILD_CONFIG_ID])/statusIcon)](http://teamcity.ap2.us:8111/viewType.html?buildTypeId=[BUILD_CONFIG_ID])
```

__Don't forget to replace `[BUILD_CONFIG_ID]` with your actual build config ID!__

### Configuring Your Project in TeamCity

Generally speaking, the process inside TeamCity is this: the Engagement Manager for a
project will create the new project, then the Project Lead will configure the build
(including version control settings, build steps, and notifications), and then any
team member can view executed builds and run manual builds if necessary.

#### Creation and Access (Engagement Manager)

1. Log into Team City (See the "Need Help?" section below if you need access)
1. Go to the "Solutions Delivery" project and click on "Edit Project Settings" in the top right
1. Scroll down, and click on the "Create subproject" button
1. Enter the name and a very brief description
  (The "Project ID" will be auto-generated, may be best to leave it that way)
1. Click on the "Create" button

This is all that is required to create the project, but no one will have access to it!
The Engagement Manager should then give access to all project team members, including
separate permissions for the Project Lead.

1. Click on the "Administration" link in the top right of the screen, then on "Users" on the left
1. Find the Project Lead in the list and click on "View Roles" on their data row
1. Click on the "Assign Role" button, then select "Project Lead" from the "Role" field
1. Find the newly created project in the "Scope" field and click "Assign" at the bottom
1. Repeat this process for each team member, but select the "Project Team Member" role in the dropdown menu

#### Version Control and Build Config (Project Lead)

Once the project is created and access is granted the TeamCity build is ready to be
configured by the Project Lead. The first step is setting up the connection to the
git repository:

1. From the dashboard, click on the project name, then on "Edit project settings" in the top right
1. Click on "VCS Roots" in the left menu, then on the "Create VCS Root" button
1. Select the type of version control ("git") and you will see more input options
1. Enter a VCS root name (anything will do) and the ID will be auto-generated
1. Enter the repo URL in the "Fetch URL" field (this should look like: "git@github.com:appendto/project-name.git...")
1. If necessary, change the "Default branch" field
1. Select "Default Private Key" for the "Authentication Method" and use "git" as the username
  * Note: this step may be changing, stay tuned.
1. All other options should be fine on their defaults (change at your own risk), so click the "Create" button

With the version control settings entered, the last step is to configure the build
steps:

1. In the left menu select "General Settings"
  (If you are coming back later, you may need to click "Edit project settings" in the top right)
1. Click on the "Create Build Configuration" button under "Build Configurations"
1. Give the configuration a name (anything will do) and the ID will be auto-generated
  * _Note that you will need your build config ID in order to add a status icon to your repository README file!_
1. Select a relevant template in the "Based on template" field, most likely the "Front end or Node project" will work for you
1. After selecting the template, you will be asked to enter some parameters
  * __Ignore the "vcsroot.url" field__. This field is necessary based on the template, but the value will be pulled from the VCS setup earlier.
  * Note that many of the templates ask for a "subdomain", this should be unique within our Digital Ocean account, it serves as the subdomain where your app will be available (for example, use "my-project" to result in a URL of "http://my-project.a2staging.com")
1. Click on the "Create" button
1. You should wind up on the build configuration settings page for this new build, if not, you can access it by clicking on the build name from the main project settings page
1. Once on the build configuration page, click on "Version Control Settings" in the left menu
1. Click on the "Attach VCS root" button and select the root you created in the steps above
1. Click the "Attach" button
1. Lastly, click on "Parameters" in the left menu, then "Delete" next to the "vcsroot.ul" parameter
  * If you don't delete this parameter, then TeamCity will try to use an empty string for your git fetch URL!

At this point your setup may be complete. If necessary, you can go into the
"Build Steps" screen and disable any unnecessary steps. However,
_do not disable the `provision` or `deploy` steps_, they are necessary for proper
operation. Note that even if you are not using a specific step in your project you
may leave the build step in place, it will be ignored if there is nothing to do.

Lastly, note that your first build will be creating a new virtual machine (droplet)
in our Digital Ocean account. Because of this, the first build run may take longer
than usual.

### Running and Viewing Builds

Your project build will run automatically when changes are pushed to the branch
you specified in the steps above in the "Version Control and Build Config" section.
There is a 60 second delay so that any pushes in quick succession will be rolled
into one build run. That said, any team member can manually submit a build to run.
When doing so, you should first check that there are no builds already running.

You can see all builds (past and currently running) on the build config page. From
the dashboard, click on your project's name, then on the name of your build config.
Alternately, you can click directly on the build config name from your dashboard.
This page will show you if TeamCity has detected any "Pending changes" that will
spawn a new build run, whether or not the build is currently running
("Current status"), and the recent history of builds. Any green icon
(![success](http://teamcity.ap2.us:8111/img/buildStates/buildSuccessful.png))
indicates a successful build, and a red icon
(![failure](http://teamcity.ap2.us:8111/img/buildStates/buildFailed.png))
indicates failure (and the exit code will be displayed).

#### Build Details and Log

You can click on any build (currently running or past) to see the details. The
entry page for a specific build run is not terribly exciting for successes, on
failrures it displays any error output (but not the full log). Clicking on the
"Build Log" tab will display the full log for that run. Note that if this is a
currently executing run, the log will update as each step completes.

You can expand each step of the build log using the "+" icon next to the step
number, but it will open automatically to any errors. Error entries will appear
in <span style="color:red;">red</span>, with other useful information highlighted
in <span style="color:orange;">orange</span>. All interaction with the code on
your droplet is done via `ssh`, thus any output will be delivered once the `ssh`
command finishes execution. As such, do not be concerned if you do not immediately
see any output from a particular step, you will see it once the command is
completed, either successfully or not.

#### Handling Errors

As mentioned in the section above, the "Build Log" will show you all output from
the commands sent to your virtual machine (droplet). This output will often
contain any errors that occurred as well. That said, sometimes the root of an
error is harder to uncover. Here are couple common errors that are difficult to
discern:

```
{ [Error: ssh returned with error code: 255] code: 17 }
```

or

```
{ [Error: ssh returned with error code: 127] code: 17 }
```

Both of the errors above have to do with the proper set up of your server and
typically have to do with access to specific commands. For example, you may try to
use a global `npm` module to start your application, but forgot to install the
module in your `"provision"` step when your droplet is created.

If you still cannot determine the error, it may be helpful to contact one of the
TeamCity administrators (see below) to look at the log files and attempt to run
a command "manually" on the target droplet. (This is something you can do
yourself, but we can help!)

Once you discover the error, it may be useful to see what the change was that
caused it. You can click on the "Changes" tab to display exactly what changed to
spawn this run. There are options to see what files changed, what the commit
messages were, and who made the change. If you don't see any changes on this tab
then the build run was most likely submitted manually.

## Need Help?

If you have any questions about this process or have any technical difficulties,
please contact Jordan Kasper or Nick Cloud.

If you need access to the system or your project, your first contact should be your
Engagement Manager. If they are unavailable or unable to add you, then you should
contact Matt Hildebrand (or if absolutely necessary, Jordan or Nick).
