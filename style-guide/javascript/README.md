# JavaScript Code Style Guide

It is assumed that when writing JavaScript, the developer should prioritize usage of native JavaScript methods over an included library or framework.  Including and using a library or framework should provide bigger value then is lost by including the library an adding to the weight of the page.

In order to simplify the process of maintaining consistency in JavaScript code formatting
the use of [Grunt-JSBeautifier](https://npmjs.org/package/grunt-jsbeautifier) is recommended.
It can be easily integrated (similar to JSHint) and can automatically correct formatting when
run as a Grunt process. An example of the Grunt configuration is shown below, and the `.jsbeautifyrc`
contained in this directory can be utilized to meet the standards of this document.

```json
jsbeautifier: {
    dev: {
        src: ["src/js/**/*.js", "!src/js/vendor/**/*.js"],
        options: {
            config: '.jsbeautifyrc'
        }
    }
}
```

The above code will run JSBeautify and modify the files. If preferred the script can run and only
verify files, failing (similar to JSHint) when a formatting issue is found. This can be accomplished
by adding `mode:"VERIFY_ONLY"` to the options.

## Comments

**Single-Line:**

```javascript
// This is a single line comment
```

**Multi-Line:**

```javascript
/*
 * This is a multi-line comment
 * block in JavaScript...
 */
```

**Doc Block**

```javascript
/**
 * This is a multi-line doc
 * block in JavaScript...
 */
```

## Indentation

To maintain consistency and readablity tab indentation will be utilized. This allows developers to set
their tab preference to meet their individual styles while also outputting a consistent format
when the code is accessed by others. Please refer to the section on JSBeautifier for final formatting
before pushing code.

## Commas and Semi-colons

All code should use trailing commas and semi-colons

```javascript
commas = {
        apple: "red",
        banana: "yellow",
        kiwi: "green"
}

semicolons = "should be at the end";
```

## White-Space

To promote clean, readable code, please adhere to the following:

```javascript
// Var blocks - single var, tab alignment
var apple = "red",
        banana = "yellow",
        kiwi = "green";

// Function - no spaces around parens, but include after commas
function (arg, arg, arg) {
    [...]
}

// Loops - no space around parens, but include after commas, semicolons
for (var i = 0; i < z; i++) {
    [...]
}

// Comparison Operators - no spaces inside parens, but include around operands
if (something === "nothing") {
    [...]
}
```

## Deeper Details
* One should read JavaScript: The Good Parts by Douglas Crockford for more detail standards. http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742

## Additional consideration should be given to this guide adopted by many companies:
* https://github.com/razorfish/javascript-style-guide
