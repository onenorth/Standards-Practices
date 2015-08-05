# Documentation

> Regardless of size and complexity, code can become difficult to follow, thus leading to difficult support, updates, and ongoing development. To combat this, thorough documentation should be provided to ensure modules, components, and function are clearly stated and can be easily understood. Utilization of in-line documentation, supplemented with compiled documentation helps to guarantee projects are understood from an architecture level all the way down to base functionality.

### Repository Documentation

In addition to documenting project code, we also want to be sure there is a 
fully detailed `README.md` in the root of any project repository. There may 
be other sub-directory-level readme files as well, but at a minimum there 
must be a file of that name in the root directory of the repository.

#### README Files

Generally you will want to have most of these sections in your `README.md`
file, although there may be cases where additional sections are necessary.

```markdown
# {PROJECT NAME}
[![Build Status](https://travis-ci.org/[YOUR_GITHUB_USERNAME]/[YOUR_PROJECT_NAME].png)](https://travis-ci.org/[YOUR_GITHUB_USERNAME]/[YOUR_PROJECT_NAME])

## Code Organization

{Information on where certain code is located (vendor libs, JS, CSS/SCSS, HTML/partials, etc)... basically, where to find stuff.}

## Building

{How is the project built? If it's Grunt, what task be run? Different tasks for different use cases? Is there a `watch` task?}

## Testing

{What testing framework is being used? How does one run the tests?}

## Continuous Integration / Deployment

{How is the project deployed? Where can people see the resulting product? How can they see the results of the automated build?}

## LICENSE

{Potentially optional if not necessary per client}
(https://www.npmjs.com/package/gulp-license-finder)
```
