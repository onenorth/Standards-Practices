# Contributing

This repo is a living document containing standards and practices to be 
utilized by the One North team. As such one core goal is to encourage 
contributions by the team in order to not only maintain the most accurate 
documentation possible, but also encourage integration of new technologies 
and workflows into the process.

## Submitting Contributions

All contributions & modifications to this repo should be submitted as a pull 
request to allow for peer review and consideration by administrative staff. 
Concerns about content or possible additions can also be submitted as issue 
tickets for discussion. Contributors should fork this repository into their 
own BitBucket account and submit the pull requests from there (versus creating 
branches in the onenorth/ repository).

## Format

It is important to maintain a consistent format. All content should be 
sectionalized into directories or subdirectories fitting the nature of the 
contribution content. The contribution's directory should contain a 
`README.md` file with the following format:

```markdown

# {TITLE}

> {Brief 2-5 sentence block formatted to define the risk this technology or practice addresses and how the content mitigates this risk.}

## Tools

{List or text blocks showing suggested tools and resources.}

### Plugins, Extensions, and Helpers

{List or text blocks showing extensions, plugins and other resources applicable to the tool(s) suggested}
```

Any additional resources should be placed in sub-directories. This can 
include, but is not limited to `demos`, `scripts`, `extensions`, etc.

## Local Preview

It can be difficult to know how a markdown file is going to be rendered on 
BitBucket - especially with their own 
[flavor of the markdown syntax](https://help.github.com/articles/github-flavored-markdown).
For this reason, you should use some method of previewing the rendered output 
of your markdown files for this documentation. Here is [one tool](https://github.com/ypocat/gfms) 
for doing so locally on your machine:

In a console or command prompt type the following:

```bash
npm install gfms -g
cd your-github-project-dir
gfms -p 1234
```

Now just navigate in your browser to [http://localhost:1234](http://localhost:1234)

Keep in mind that this is not a perfect representation of the BitBucket rendering
as it is using a clone of their rendering engine written in JavaScript, but 
it will at least show you obvious issues.

_NOTES_:  
* You most likely will need to run that first line as `sudo` or `Administrator`.
* That the last line specifies a port number, you can make that whatever you like.
* Syntax highlighting is finicky, don't assume what you is correct, but rather that there is a code block at all.
