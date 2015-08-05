# HTML Markup Style Guide

## General Principles

The primary goal of appendTo’s HTML standards is to keep all of appendTo’s HTML templates uniform in every possible way, so that hand-off to fellow developers or the client will be as seamless as possible.

* Use HTML5 rules and markup whenever possible.
* Keep in mind tag semantics.
* Front-end developers should aim to make HTML markup as maintainable, scalable, and intuitively organized.
* All code in any code-base should look like a single person typed it, even when many people are contributing to it.
* Strictly enforce the agreed-upon style.
* If in doubt when deciding upon a style use existing, common patterns.

## Comments

```html
<!-- This is an HTML comment -->

<!--
The same syntax can be used for
multi-line comments as well.
-->
```

Use comments to identify what a section of content is intended for, especially if that content is to be dynamically populated via templating.

Leave a space before and after your comment in between the comment tags when using single line comments.

```html
<!-- Like this -->
<!--Not Like This-->
```


## Document Type

Whenever possible, the doctype should be HTML5:

```html
<!doctype HTML>
```

## Tag Structure

Although HTML5 may allow for a developer to be lenient, HTML tag structure should be kept as strict as possible to help prevent rendering errors by any browser, old and new. Additionally, keeping this strict standard will help consitency across all projects.

HTML5 markup rules are the standard that we should adhere to when writing front-end views, either static or produced dynamically via javascript.

Below are some brief guidlines.

* Whenever possible, use semantic HTML5 markup for their intended purpose.

```html
<!-- The 'section' element is a generic content wrapper, but all the content within it has a relationship. -->
<section></section>
<!--
The 'header' element wraps **introductory** content, such as navigational elements, table of contents,
or even the site logo (if used at the top of a page).
-->
<section>
	<header>
		<h2>Content Area Heading</h2>
		<p>Introductory paragraph that may describe the content</p>
		<nav>...</nav>
	</header>
	<article>
		<!-- Put all your section content here -->
	</article>
</section>
<!--
The 'nav' element describes a navigational area in which the contents could be list elements
or other elements that each point the user to a section on the page or a new page entirely.
-->
<nav>
	<ul>
		<li>Home</li>
		<li>About</li>
	</ul>
</nav>
```

* The use of ```<div></div>``` should be used when no other tag can represent the content appropriately, or when styling needs to be applied to a _block level_ element that does not need to be sectioned semantically. The same goes for ```<span></span>```, but is for _inline_ elements.

* Be mindful of your use of the ```<a>``` tag. It is intended to be both an anchor and hyperlink, but in both cases, it is used to navigate to other content, whether that be on page or a different page entirely. It is not intended to be an *action* button. If you need to do something, based on user input that doesn't require navigation, use the semantic tag appropriate to your cause (i.e. ```<button></button>``` or ```<input />```).

* Do not use short hand syntax.

```html
<p/This is a paragraph/
```

* A trailing slash ```/``` at the end of all self-closing tags is not necessary (a.k.a. void tags; mainly because they do not have content, though they may render content via other means). If you are creating custom tags that are not apart of the HTML standard (i.e. XML) then add the trailing ```/``` in the open tag . This tells the browser to not expect a closing tag.

```html
<!-- Use this -->
<img src="" >
<myvoidtag attr="" />

<!-- NOT this -->
<img src="" />
<myvoidtag attr="" >

<!-- list of 'void tags' -->
<!-- area, base, br, col, command, embed, hr, img, input, keygen, link, meta, param, source, track, wbr -->
```

* Do not put block elements inside of inline elements. The exception to this is anchor tags (when valid).

```html
<!-- Correct -->
<p><span>hello</span></p>

<ul>
    <li>
        <a href="/result-detail">
            <h3>An item</h3>
            <p>A short description...</p>
        </a>
    </li>
</ul>

<!-- Incorrect -->
<span><p></p></span>

<ul>
    <a href="/result-detail">
        <li>
            <h3>An item</h3>
            <p>A short description...</p>
        </li>
    </a>
</ul>
```

## Backwards Compatibility

If browser backward compatibility is necessary for your project, the use of libraries such as [Modernizr](http://modernizr.com/) or [HTML5shiv](https://github.com/aFarkas/html5shiv) will allow you to use the new HTML5 markup in those browsers that support none, or only some HTML5 elements and functionality.

## Spacing

Keeping uniform spacing in HTML documents and templates is extremely important. As a rule, each level of the DOM structure should be on a new line and indented. For example:

```html
<form name="my-form">
    <div class="row">
        <label>Email</label>
        <input name="email" />
    </div>
    <div class="row">
        <button type="submit">Submit</button>
    </div>
</form>
```

Indentations in HTML markup should continue the standard in other languages of using TAB-4.

## JavaScript and CSS

Inline and Embedded CSS should only be used when elements are generated dynamically or a plugin must override styles on an element, and only when an external, overriding stylesheet will not work. If the latter is true it needs to be reviewed by a Senior engineer to evaluate how to best handle that use case.

When using _inline_ styles on an element, use of the trailing semi-colon ```;``` is the same as CSS blocks. The ```;``` is generally used as a separator, not necessarily a line-ending. It is good practice to end a style declaration with a ```;``` to help prevent css compile errors.

```html
<!-- Embedded Styles -->
<style>
    span {
        color: #ff1a00; /* ';' is very important here */
        background-color: #000; /* Add ';' here for consistency */

    }
</style>

<!-- Omitting the style separator will cause your styles to render incorrectly, or not at all -->
<style>
    span {
        color: #ff1a00
        background-color: #000
    }
</style>

<!-- Inline Styles -->

<!-- Use of ';' as a separator -->
<span style="color: #ff1a00; background-color: #000;"></span>

<!-- Omitting the style separator will cause your styles to render incorrectly, or not at all -->
<span style="color: #ff1a00 background-color: #000"></span>
```

For more information on CSS standards and practices, [please see that section](https://github.com/appendto/standards-and-practices/tree/master/style-guide/css)

All JavaScript _embedded_ on a page must be in ```<script></script>``` tags. External libraries, such as Google Analytics and some social plugins need some embedded JS to appear on the page at render time. Use your best judgement when embedding JS on a page. Determine whether it can be put into a separate file and imported during runtime, instead of cluttering up the HTML document and making it difficult to find.

_Inline_ JavaScript is difficult to debug and, even more so, to maintain, therefore should not be used.

```html
<!-- No inline js -->
<a href="#" onclick="doSomething();"></a>
```

## External Templates

To decrease page load time and increase maintainability, the markup of a static HTML page should only include the contents that will be visible to the user when the page loads. Any modules that are revealed through user interaction should be loaded as external resources with JavaScript.

Here are some options for dynamic template rendering on the client side:

* If your project is using RequireJS, you can use the [!text](http://requirejs.org/docs/download.html#text) plugin to pull templates in and render them to the page.
* [Handlebars](http://handlebarsjs.com/)
* [Knockoutjs - the "template" binding](http://knockoutjs.com/documentation/template-binding.html)

Depending on your framework, there may be other ways to pull in external templates. For example, a Knockout project could use [Knockout AMD helpers](https://github.com/rniemeyer/knockout-amd-helpers) to completely seperate the templates from the JavaScript modules for easier testing.
