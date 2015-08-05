# CSS Code Style Guide


## General Principles

The primary goal of One North's CSS standards is to keep all of One North's CSS documents uniform in every possible way, so that hand-off to fellow developers or the client will be as seamless as possible.

* Front-end developers should aim to make CSS as maintainable, scalable, and intuitively organized.
* Don't try to prematurely optimize your code; keep it readable and understandable.
* All code in any code-base should look like a single person typed it, even when many people are contributing to it.
* Strictly enforce the agreed-upon style.
* If in doubt when deciding upon a style use existing, (common patterns)[/common-patterns] (TODO, create this).

## Whitespace

### Indentation

Using tabs for indentation leads to inconsistent display of the source code, since many text editors and most text viewers (like web browsers) cannot have their “tab size” configured.
For lines needing indenting, use tab-4 for each level of indentation.

### Blank Lines

Separate each block by a blank line.
If a block has a proceeding comment that describes it, place a blank line before the comment.

```
.selector-1 {
    display: block;
}

.selector-2 {
    display: inline;

    &:after {
       content: “wassup”;
    }
}

.selector-3 {
    display: inline-block;
}

/* A comment describing the block. */
.selector-4 {
    display: inline;
}
```

### Comments

Well commented code is extremely important. Take time to describe components, how they work, their limitations, and the way they are constructed. Don't leave others in the team guessing as to the purpose of uncommon or non-obvious code.

Comment style should be simple and consistent within a single code base.

* Place comments on a new line above their subject.
* Keep line-length to a sensible maximum, e.g., 80 characters.
* Make liberal use of comments to break CSS code into discrete sections.
* Use "sentence case" comments and consistent text indentation.

```
/* ==========================================================================
   Section comment block
========================================================================== */
.selector-1 {
    display: block;
}

/* A comment describing the block. */
.selector-2 {
    display: inline; /* Basic inline comment */
}

/*
 * 1. This is to accomodate nav height
 */
.selector-3 {
    height: 30px; /* 1 */    
} 
```

## Structure

There are plenty of different methods for structuring a stylesheet. It is important to retain a high degree of legibility. This enables fellow developers, as well as our clients to have a clear understanding of the flow of the document.

It is highly recommended to organize your CSS with a modularized approach.

When organizing multiple CSS documents in a modularized fashion, it is preferable to create dedicated CSS documents to the following:

* Global styles
* Module/page-specific styles (each in their own document)

When organizing a CSS document, here is how I order my selectors when I am not writing modularized CSS:

1. Custom fonts (via @font-face)
2. Global elements without classes/id’s
    * html {}
    * body {}
    * Structural elements (divs, sections, articles, lists, etc.)
    * Typography (headings, paragraphs, quotes, etc.)
3. Global elements with classes/id’s (such as div#wrapper, section.sidebar, h2#sub-title, or input.invalid)
4. Global module styles
    * Header/nav styles
    * Sticky footer styles (if applicable)
5. Non-global module/page-specific styles

### Format

The chosen code format ensures that code is: easy to read; easy to clearly comment; minimizes the chance of accidentally introducing errors.

* Use one discrete selector per line in multi-selector blocks.
* Include a single space before the opening brace of a block.
* Include one declaration per line in a declaration block.
* Use one level of indentation for each declaration.
* Include a single space after the colon of a declaration.
* Use lowercase and shorthand hex values, e.g., #aaa.
* Use double quotes consistently.
* Quote attribute values in selectors, e.g., input[type="checkbox"].
* Avoid specifying units for zero-values, e.g., margin: 0.
* Include a space after each comma in comma-separated property or function values.
* Include a semi-colon at the end of the last declaration in a declaration block.
* Place the closing brace of a block in the same column as the first character of the ruleset.
* There should be a single line between blocks.

```
.selector-1,
.selector-2,
.selector-3[type="text"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    font-family: helvetica, arial, sans-serif;
    color: #333;
    background: #fff;
    background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
}

.selector-a,
.selector-b {
    padding: 10px;
}
```

### Selectors



Exercise your best judgement to create selectors that find the right balance between contributing to the overall style and layout of the DOM.

* Use lowercase and separate words with hyphens when naming selectors. Avoid camelcase and underscores.
* Avoid using id selectors for styling purposes.
* Use human readable selectors that describe what element(s) they style.
* Attribute selectors should use double quotes around values
* Refrain from using over-qualified selectors, div.container can simply be stated as .container
* Don't attach CSS rules to standard HTML elements directly (e.g., h1 { ... } )
* Use js- prefixed classes for elements that you grab with JS


**Correct:**

```
.comment-form {
    margin: 1em 0;
}
 
input[type="text"] {
    line-height: 1.5em;
}
```

**Incorrect**

```
.commentForm { /* Avoid camelcase. */
    margin: 0;
}
 
.comment_form { /* Avoid underscores. */
    margin: 0;
}
 
div.comment_form { /* Avoid over-qualification. */
    margin: 0;
}

.c1-xr { /* What is a c1-xr?! Use a better name. */
    margin: 0;
}
 
input[type=text] { /* Should be [type="text"] */
    line-height: 1.5em;
}
```

### Property Declarations

Similar to selectors, property declarations that are too specific will hinder the flexibility of the design. Less is more. Make sure you are not repeating styling (D.R.Y.) or introducing fixed dimensions unless deemed necessary.

* In a declaration, the property name should be immediately followed by a colon, then a single space, and then the property’s value.
* Include a semi-colon at the end of all declarations, including the last declaration in a declaration block.
* All declarations and values should be lowercase, except for font names and vendor-specific declarations.
* When assigning font names to the font or font-family property, include “serif” or “sans-serif” after specifying font names as a fallback.
* Use hex codes for colors, or rgba() if opacity is needed. Avoid RGB format and uppercase, and shorten values when possible: #fff instead of #FFFFFF.
* For property values that require quotes, use double quotes instead of single quotes, e.g. font-family: "Arial Black", Arial, sans-serif; and content: " ";.
* Quote attribute values in selectors, e.g. input[type="checkbox"].
* Where allowed, avoid specifying units for zero-values, e.g. use margin: 0; instead of margin: 0px;.
* Include a space after each comma in comma-separated property or function values.
* Do not use spaces around the parentheses in a function, e.g. color: rgba(0, 0, 0, 0.8);
* Use shorthand (except when overriding styles) for background, border, font, list-style, margin, and padding values as much as possible. (For a shorthand reference, see Shorthand.)

**Example Declarations:**

```
/* Basic syntax */
display: block;

/* Use shorthand syntax for hexadecimal colors when possible */
color: #fff;

/* Always use lowercase */
color: #df7dcf;

/* Use double quotes instead of single quotes */
font-family: "Frutiger Ultra";

/* Do not attach units to zero-values */
text-shadow: 0 0 2px #ddd;

/* Spaces MUST follow commas in property or function values */
color: rgba(0, 136, 18, 0.8);
```

### Declaration Ordering
Above all else, choose something that is meaningful to you and semantic in some way. Random ordering is chaos, not poetry. At appendTo, our choice is logical or grouped ordering, wherein properties are grouped by meaning and ordered specifically within those groups. The properties within groups are also strategically ordered to create transitions between sections, such as background directly before color. The baseline for ordering is:

* Display
* Positioning
* Box model
* Colors and Typography
* Other

Vendor prefixed properties should be directly before their non-prefixed version. This allows the official version of the property to override any inconsistencies in the vendor-prefixed versions once those browsers implement the official property. If browser bugs or cross-browser issues necessitate any deviation from this ordering, it should be clearly documented.

Things that are not yet used in core itself, such as CSS3 animations, may not have a prescribed place above but likely would fit into one of the above in a logical manner. Just as CSS is evolving, so our standards will evolve with it.

Top/Right/Bottom/Left (TRBL/trouble) should be the order for any relevant properties (e.g. margin), much as the order goes in values. Corner specifiers (e.g. border-radius-*-*) should be top-left, top-right, bottom-right, bottom-left. This is derived from how shorthand values would be ordered.

```
#overlay {
    position: absolute;
    z-index: 1;
    padding: 10px;
    background: #fff;
    color: #777;
}
```

### Nesting

Avoid nesting more than [1/2/3] levels deep. (If you are relying on more complex nesting chains, it is preferable to utilize classes on parent elements to decrease the number of selectors needed to achieve the desired result.)

**Preferable:**

```
.sidebar-div h1 { … }
```

**Not preferable:**

```
#wrapper #sidebar div h1 { … }
```

### Shorthand

There are several properties that have shorthand notations that are more desirable than their broken-down counterparts. In order to save vertical space in a CSS document, please use the following when necessary:

#### Font

**Correct shorthand syntax:**

```
h1 { 
    font: [font-style] [font-variant] [font-weight] [font-size]/[line-height]
          [font-family];
}
```

**With shorthand notation:**

```
h1 { 
    font: italic small-caps bold 3em/3.2em ‘Helvetica Neue’, Helvetica, Arial, sans-serif;
}
```

**Without shorthand notation:**

```
h1 { 
    font-style: italic;
    font-variant: small-caps;
    font-weight: bold;
    font-size: 3em;
    line-height: 3.2em;
    font-family: ‘Helvetica Neue’, Helvetica, Arial, sans-serif;
}
```

#### Background

**Correct shorthand syntax:**

```
#sidebar { 
    background: [background-color] [background-image] [background-repeat]
                [background-attachment] [background-position];
}
```

**With shorthand notation:**

```
#sidebar { 
    background: transparent url(“../img/my-image.jpg”) repeat-x fixed top left;
}
```

**Without shorthand notation:**

```
#sidebar { 
    background-color: transparent;
    background-image: url(“../img/my-image.jpg”);
    background-repeat: repeat-x;
    background-attachment: fixed;
    background-position: top left;
}
```

#### Borders

**Correct shorthand syntax:**

```
#sidebar { 
    border: [border-width] [border-style] [border-color];
}
```

**With shorthand notation:**

```
#sidebar { 
    border: 2px solid #333;
}
```

**Without shorthand notation:**

```
#sidebar { 
    border-width: 2px;
    border-style: solid;
    border-color: #333;
}
```

#### Lists

**Correct shorthand syntax:**

```
ul.my-list { 
    list-style: [list-style-type] [list-style-position] [list-style-image];
}
```

**With shorthand notation:**

```
ul.my-list { 
    list-style: none inside url(“../img/list-item-image.png”);
}
```

**Without shorthand notation:**

```
ul.my-list { 
    list-style-type: none; 
    list-style-position: inside;
    list-style-image: url(“../img/list-item-image.png”);
}
```

## Sass Formatting

When a child selector is declared within a parent selector, the child selector should be situated on the same indentation margin as the parent selector’s properties. There should also be one line between the child selector and the last property of the parent selector.

```
h1 { 
    font-size: 3em;
    font-weight: normal;
    color: #dbdbdb;

    span {
        color: #eee;
    }
}
```

**@imports** should be defined at the beginning of the SCSS document.

**Variables** should be named semantically and defined immediately after any @imports in the SCSS document, before functions or mixins. 

For instance, if you’re declaring a variable to represent the hex value for cornflower blue, the variable should be called $cornflower as opposed to $blue. Additionally, if you’re declaring a variable to represent the width of a sidebar element, the variable should be called $sidebar-width as opposed to $sidebar or $column2.

When multiple words are needed to name a variable, distinguish separate words with dashes.
Example: $sidebar-width as opposed to $sidebarwidth.

**Mixins** should be defined immediately after variables in the SCSS document. Always include a descriptive comment for each mixin that defines how and where it’s intended to be used.