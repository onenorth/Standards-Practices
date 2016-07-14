# Environment Branching with Git

> The majority of this content was inspired and taken from: [ENV Branching with Git](https://www.wearefine.com/mingle/env-branching-with-git/) by [James Kurczodyna](https://twitter.com/jamesmk)
>
> Also see: [Merging vs. Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

## The Basics

Our branching is based on the environments the application deploys to.  For us, these are typically:

* Production: the live site
* Staged: for staging features to the client
* QA: for staging features internally

Each environment has a dedicated environment branch: **master**, **environment-staged**, and **environment-qa**. At any given time, those branches will resemble exactly what’s on their corresponding environment. All commits are done on a feature branch and merged into the environment you wish to deploy. With continuous integration, pushing an environment branch to the remote triggers an automatic deploy. When a feature is ready for production a pull request is created to merge the feature branch into master. Approval and merge of the pull request triggers an automatic deploy to production.

## The Rules

To maintain the integrity of the branches and ensure we can deploy features independently we follow these rules:

1. NEVER commit directly to an environment branch (master, stage or dev)
1. NEVER merge one environment branch into another
1. Feature branches should be autonomously deployable

> The only time you can commit directly to an environment branch is when regenerating model.cs or to regenerate the result of Gulp tasks

## A Simple Example

![branching](https://cloud.githubusercontent.com/assets/10470870/16093457/96a9b692-3301-11e6-94f4-86087d51cac4.png)

1. create your feature branch
  ```bash
  # grab the latest from origin/master
  git pull --rebase origin master
  
  # create your feature branch
  git checkout -b feature-my
  ```
1. commit your changes
  ```bash
  # Edit some files
  git add <file>
  git commit -m "comment"
  # Repeat
  
  # push your branch to origin
  git push origin feature-my
  ```
1. update your branch with changes from master
  ```bash
  # TODO
  ```
1. deploy changes to QA for internal review
  ```bash
  # switch to the QA branch
  git checkout environment-qa
  
  # pull environment-qa (which could contain merged branches from other team members)
  git pull
  
  # merge your branch
  git merge feature-my
  
  # push changes to origin/environment-qa (which triggers a deploy in a perfect world)
  git push origin environment-qa
  ```
4. deploy changes to staged for client review
  ```bash
  # switch to the staged branch
  git checkout environment-staged

  # pull environment-staged (which could contain merged branches from other team members)
  git pull

  # merge your branch
  git merge feature-my

  # push changes to origin/environment-staged (which triggers a deploy in a perfect world)
  git push origin environment-staged
  ```
5. deploy changes to production
  ```bash
  # switch to the staged branch
  git checkout master

  # pull master (which could contain merged branches from other team members)
  git pull

  # merge your branch
  git merge feature-my
  
  # push changes to origin/master (which triggers a deploy in a perfect world)
  git push origin master
  ```

Contributors:
* [Mike Skutta](https://github.com/mskutta/)
