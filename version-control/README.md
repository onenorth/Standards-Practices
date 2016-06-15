# Version Control

> When working in a collaborative development environment, lack of a robust source control solution leads to conflicts and errors. Source version control allows developers to manage code in a much more oganized and efficient manner. Through branching, merging and tagging, code which is worked on by a team can be developed in a workflow which closely mirrors the projects and tasks done at One North.

## Tools

All source control should be done using Git, [BitBucket](http://www.bitbucket.org) is the preferred tool for all private repositories and should always be used.  If a repository needs to be shared publicly, [Github](http://github.com) can be used instead, but only when the desire is to share with the community.  Repositories should be created under the One North organization on [BitBucket](https://bitbucket.org/onenorth/) or [Github](https://github.com/onenorth).

When using the Git workflow it is imparitive that team members properly utilize the technology to better manage the project source code. 

* Anything in the master branch is considered deployable. This works in unison with the [Continuous Integration](/continuous-integration) policy whereby code pushed to master is run through a build process to ensure it is continuously passing.

#### When starting a new project
* A single dev branch may be used to better coordinate the early stages of the project.
    * For example, when a new SiteCore project is started, a single dev branch is used to coordinate early TDS usage.
    * The architect on the project will make the determination for when a project has ended its early development stage and the procedure below will then be used

#### After a project has been properly initiated, follow this procedure
* When starting on a new ticket or feature, create a new branch
    * Branch names should follow a common pattern, that pattern should be: {type}-{name}
      * A list of types 
          * jira-{short-code}-{number} - for commits that directly solve a specific jira task
              * Short codes are three character codes that are defined per-project
          * feature-{descriptor} - for committs that directly address a stated descriptor
          * environment-qa - for commits that are meant to be built and deployed onto to the QA environment
          * environment-staged -  for commits that are meant to be built and deployed onto to the Staged environment
          * master - for commits that are meant to be built and deployed into live/production
    * Comments should include.....
    * If multiple people are working on a branch it can be split into sub-branches which can be merged up to the previous level
* Commit frequently.  Code should be pushed back to the remote repository on a daily basis in order to properly backup your work.  Code pushed back may exist in a separate branch and be in an uncompleted state.  The one exception is master, which should always remain buildable.
* It is ideal to merge branches only when proper review has been conducted. However, this is not always realistic due to time constraints.  When ready for a review:
    * Ideally, Have other team members review the changes and ensure there are no conflicts
* Once merged and pushed to master the code will be built via the CI system. Check to ensure that the build passes.
 
> Note: Please see our branching strategy: [Branching document](/version-control/branching)
 
### Every project should contain a Readme.md
A great README is a great way to introduce a new developer to a project and equip them with the necessary information to work with the project successfully.  A good README should include the following information as it applies to a specific project.  It is generally better to add more information, so in all cases, please add as much information as possible to the README to help future contributors.

* High-Level project description
* Client details, if applicable
* Configuration instructions
* Installation instructions (included starter database)
* Unique deployment considerations
* Dependencies
* Any other unique considerations
* Links to any necessary documentation
* Instruction to grab the latest code and detailed instructions to build it (or quick overview and "Read INSTALL")
* Copyright and Licensing information for third-party components used in the project
* If a project is being shared publicly it should also include contact information, license details.

### How Git integrates with Team City, Octopus Deploy, and Jira
- Refer to [CI document](/continuous-integration)

### A note on commit & PR messages

When committing code, add a brief, but relevant message. Note that BitBucket will use the 
first 72 characters (or 69 plus an elipsis) for the main line of the message and 
anything else will be pushed to the extra portion of the commit message. Use this 
to your advantage by creating a "header" of sorts on the first line and additional, 
separate lines for any other information necessary.

The goal with the first line should be for anyone to scroll through the commit 
history and easily identify what each commit is for.

#### Bad Example:

> __mike's change 2__
or
> __did stuff__

#### Good example:

> __fixed issue wst-28276 where login fails on usernames with an "&"__  
> - had to escape and unescape input before/after transmission  
> - went ahead and escaped/unescaped password on transmission as well

Note that if you use wst-28763 (or any number) BitBucket will automatically link to the 
issue with that ID. Additionally, if you specify a commit has (or even just the 
first 6 characters of it) BitBucket will auto-link to it as well. If you are using 
Jira for tasks and bugs, consider adding a link to the Jira story.


Contributors:
* [Chris Wigley](https://github.com/askesian/)
** disclaimer: Chri's thoughts are his own.
