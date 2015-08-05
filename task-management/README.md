# Task Management / Runners

## What is a task runner?

What exactly is a "task runner," and how does it relate to what we do at One North? We'll let the developers behind [Gulp](http://gulpjs.com), a well-known and respected JavaScript task runner answer that question:

> In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it, a task runner can do most of that mundane work for you—and your team—with basically zero effort.

Once setup, [Gulp](http://gulpjs.com), simplifies the process of performing frequently-needed tasks from the command line. For example, a project might have a task that compiles all of its SASS files. This task could then be run by calling:

```
$ grunt css
```

All One North projects should use [Gulp](http://gulpjs.com) as their task runner, unless compelling reasons to do otherwise exist.

## Gulp Organization

A simple [Gulp](http://gulpjs.com)  setup consists of a single file `(gulpfile.js)` that is placed within a project's root folder. While this may be sufficient for most projects, if the contents of the file become unwieldy, it can be advantageous to break tasks out into their own sub-files.  If this is needed, make use of the `tasks` folder.  You can then use the Gulp plugin `gulp-load` to include all fo the tasks within a specific folder as described in the example below.  To summarize: If appropriate for your project, don't create a monolithic `gulpfile.js` - instead, create a separate file for each defined task.

### Example Structure

Create custom tasks in individual files:
```
./gulpfile.js
./tasks/custom.js (custom task definition)
./tasks/custom-task.js (another custom task definition
```

Make sure that `gulp-load` is installed:
`npm install --save-dev gulp-load`

Pull in all of your gulp tasks using `gulp-load` into your `gulpfile.js`.
```
var gulp = require('gulp');
require('gulp-load')(gulp);

// load tasks from tasks directory and
// dependencies of start with `gulp-` in package.json
gulp.loadTasks("./tasks" + __dirname);
```

### Additional Gulp Documentation

Please refer to the Gulp Documentation when building new Gulp tasks.  It lives in Github here: https://github.com/gulpjs/gulp/tree/master/docs

### Providing Task Descriptions

Developers are encouraged to make a concerted effort to document & comment any tasks they create. For example:

```javascript
// Sprinkles fairy dust on unicorn horns.
gulp.task('fairy_dust', function() {
        // ...
});
```

## Popular Plugins

Hundreds of plugins exist for this platform, but here are a few popular ones to get you started:

* [JSHint](https://npmjs.org/package/grunt-contrib-jshint) - Manages code linting and halts on errors
* [Watch](https://npmjs.org/package/grunt-contrib-watch) - Monitors for saves and changes and runs tasks automatically
* [Concat](https://npmjs.org/package/grunt-contrib-concat) - Joins multiple files into a single, concatenated file
* [Uglify](https://npmjs.org/package/grunt-contrib-uglify) - Compresses and minifies code
* [RequireJS](https://npmjs.org/package/grunt-contrib-requirejs) - Optimizes RequireJS project using r.js
* [Jasmine](https://npmjs.org/package/grunt-contrib-jasmine) - Runs Jasmine tests through PhantomJS (headless)
* [Clean](https://npmjs.org/package/grunt-contrib-clean) - Clear files and folders (helpful to clear builds)
* [Copy](https://npmjs.org/package/grunt-contrib-copy) - Copies files and folders
