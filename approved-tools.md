# Approved Tools, Frameworks, and Patterns

This document is a living document. It is meant to serve as a record of every tool, framework, pattern, etc., that OneNorth has discussed, vetted, and approved for standard use in all projects, internal or commercial.

If you feel any necessary content is missing or would like to suggest modifications to the list, **[follow this link to submit your request](#making-modifications-to-the-technologies)**

### Content
  1. [Client-side (browser) development](#client-side-development)  
    - [Frameworks](#frameworks)
    - [Utility Frameworks](#utility-frameworks)
    - [DOM Manipulation](#dom-manipulation)
    - [Feature Testing & Polyfills](#Feature-Testing--Polyfills)
    - [Date Management](#Date-Management)
    - [Pub/Sub](#pubsub)
    - [Event Emitters](#event-emitters)
    - [Templates](#templates)
    - [Data Binding](#data-binding)
    - [Promises](#promises)
    - [Widgets](#widgets)
    - [Input & Interactions](#input--interactions)
    - [Data & Endpoint Mocking](#data--endpoint-mocking)
    - [Client Side Routing](#client-side-Routing)
    - [Finite State Machines](#finite-state-machines)
  1. [CSS](#css)
    - [CSS Reset/Foundation](#css-resetfoundation)
    - [CSS Preprocessor](#css-preprocessor)
    - [CSS Styleguide](#css-styleguide)
  1. [Tools](#tools)
    - [Task Runner](#task-runner)
    - [Code Modularity](#code-modularity)
    - [Project Scaffolding](#project-scaffolding)
    - [Code quality](#code-quality)
    - [Formatting](code-formattingconsistency)
  1. [Server-side (node.js) development](#server-side-nodejs-development)


-----

## Client-side Development

### Frameworks
- [Angular](https://angularjs.org/) - Consider your use cases before adding

### Utility Frameworks
- [Underscore](http://underscorejs.org/)
- [Lo-Dash](https://lodash.com/)

### DOM Manipulation
- [jQuery](http://jquery.org)

### Feature Testing & Polyfills
- [Modernizr](http://modernizr.com/) - Configure your feature detection from the beginning of the projects

### Date Management
- [moment.js](http://momentjs.com/) Parse, validate, manipulate, and display dates in JavaScript.

### Pub/Sub
_The Standards and Practices Board would like to consider the standardization of conventions and patterns in this area._

- jQuery Custom Events
- [Amplify Pub/Sub](http://amplifyjs.com)
- [Postal.js](https://github.com/postaljs/postal.js)
- [Angular.js brodcast/emit](angularBroadcast) (When *already* using Angular)

### Event Emitters
- [Observables &amp; Computed Observables](http://knockoutjs.com/) (Knockout)

### Templates
- [Handlebars](http://handlebarsjs.com/)
- [Underscore Templates](underscoreTemplates)
- [Lo-Dash Templates](lodashTemplates)

### Data Binding
- [Knockout](http://knockoutjs.com/)
- [Facebook React](https://github.com/facebook/react)

### Promises

- [jQuery Promises](https://api.jquery.com/promise/) (When *already* using jQuery)
- [Angular $q](angularPromise) (When *already* using Angular)

### Widgets

#### Carousels
- [Slickjs](http://kenwheeler.github.io/slick/)

#### Calendar/Date Picker Widgets
- [Pick a date](https://github.com/amsul/pickadate.js)
- [jQuery UI Datepicker](https://jqueryui.com/datepicker/)

#### AutoComplete
- [Typeahead](https://github.com/twitter/typeahead.js)
- [Jquery autocomplete](https://jqueryui.com/autocomplete/)

#### Videos
- [videojs](http://www.videojs.com/) - (provides fallback video support for older browsers, otherwise stick to html5 and provide fallback video format support for firefox).

#### UI  Select dropdowns

- [Chosen](https://github.com/harvesthq/chosen) - Chosen is a library for making long, unwieldy select boxes more friendly

- [Selectize](http://brianreavis.github.io/selectize.js) - Selectize is the hybrid of a textbox and select box. It's jQuery-based and it's useful for tagging, contact lists, country selectors.

*Under Consideration*
- [Kendo UI Core][https://github.com/telerik/kendo-ui-core]
- [Select2][select2]

### Input & Interactions
- [Hammer.js](hammerjs)

### Data & Endpoint Mocking

- [jQuery Mockjax](mockjax)
- [Faker.js](https://github.com/marak/Faker.js/)

### Client Side Routing
_We recommend not using client-side routing and to primarily rely on server-side routing._

When changing the client-side URL, you must also use [History.js](https://github.com/browserstate/history.js/)

[Angular Routes](https://docs.angularjs.org/api/ngRoute/service/$route) (When *already* using Angular)

### Finite State Machines

- [Machina.js](http://machina-js.org/)

### Money, Formatting, & Internationalization

- [Accounting.js](http://openexchangerates.github.io/accounting.js/)

##CSS

### CSS Reset/Foundation

- [normalize.css](https://github.com/necolas/normalize.css)

### CSS Preprocessor

- [Sass](Sass) (via node-sass)

### CSS Styleguide
- [Kickstart Styleguide](https://github.com/onenorth/kickstart-styleguide)

## Tools

### Task Runner

- [Gulp](http://gulpjs.com/)

### Code Modularity

- [Browserify](http://browserify.org/)

### Project Scaffolding

- [Yeoman](http://yeoman.io/?v=1.0)

### Code quality

- [jshint](http://www.jshint.com/)

*Under Consideration*

- eslint

### Code formatting/consistency

- [jsbeautifier](https://github.com/tarunc/gulp-jsbeautifier)
- [editorconfig](http://editorconfig.org/)


## Server-side (node.js) development

### Package Management
- [npm](http://npmjs.com)

### Automation tools

- [nodemon](http://nodemon.io/)

### Build tools

- [gulp](http://gulpjs.com/)

### Code quality
- [jshint](http://www.jshint.com/)

### General utilities
- [underscore*](http://underscorejs.org/)
- [lodash](http://lodash.com/)

### Flow control/promises

*Under Consideration*
- [async](https://github.com/caolan/async)
- [when](https://github.com/cujojs/when)
- [q](https://github.com/kriskowal/q)

### Eventing

*Under Consideration*

- [EventEmitter2](https://github.com/asyncly/EventEmitter2)
- [EventEmitter3](https://github.com/3rd-Eden/EventEmitter3)

### Data access

*Under Consideration*

- [mongoose](http://mongoosejs.com/) (mongodb)
- [node-mysql](https://github.com/felixge/node-mysql) (mysql)
- [node_redis](https://github.com/mranney/node_redis) (redis)

### Web servers

- [express](http://expressjs.com/)

### Authentication

- [passport*](http://passportjs.org/)

### HTTP requests

*Under Consideration*

- [request](https://github.com/mikeal/request)

### Unit testing

- [mocha](https://visionmedia.github.io/mocha/)

*Under Consideration*

- [chai*](http://chaijs.com/)
- [nock](https://github.com/pgte/nock)

-----

## Making Modifications to the Technologies

When you come across the situation where you need to use a different tool or solution than is provided in our [Approved Tools](/approved-tools.md) list, please read feel free to bring the matter up with the Standards &amp; Practices Board. This can be done via internal communication, GitHub Issue, or a Pull Request against this document. Before you do please follow the following processes:

### Process 1: Project Specific

When a developer feels they are unable to use an existing approved library, pattern, or framework for a needed solution, they must notify their project lead. In the case where there is no approved tools covering this type of problem and a new 3rd party library is to be used, they must also notify their project lead. If there are no approved tools for the problem, and they plan to code it themselves, no notification is needed (This covers the bulk of our creative effort at One North).

**Two steps:**

1. Give the project lead the following information (A formalized “heads-up” on the direction):
	* What approved solution (if any) would not work in this situation with brief reasoning on why it failed to meet the needs.
	* What direction the developer plans to take (Roll-your-own or new 3rd party framework)
	* If a 3rd party framework is to be used, provide relevant Source (Github/BitBucket/etc) and Website links to the project lead.

2. The project lead should provide immediate approval for the new direction unless:
	* They feel strongly an approved solution actually can (and thus should) be utilized.
	* The 3rd party framework’s license is incompatible with the project or unclear.

### Process 2: Permanent Addition to Approved Technology List

Our list of [approved technologies](/approved-tools.md) will change over time. When an One North developer would like to see a new technology added to the list, they must follow this process:

1. Create a new Issue in the Standards and Practices repo that should identify why they feel it should be added, how it differs from an existing tool (if there is one), and relevant links to source code, project website and existing documentation.
2. One North developers can discuss this addition in the pull request comments.
3. At least 3 developers, including 1 senior developer must be in support of the addition before serious attention will be paid to the issue.
4. Once the consensus seems to be in favor of addition, the S&P board will finalize the decision and report to the Issue.
5. At this point, it is up to original poster to add necessary documentation and example files and issue a pull request.
6. The final step, once all files are ready, is for a member of the S&P board to merge the request into the repository.
