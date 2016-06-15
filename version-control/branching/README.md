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

![Branching Image](https://cloud.githubusercontent.com/assets/10470870/16090951/22685ef0-32f7-11e6-984a-3ccb0a18fa0f.jpg)
> dev is the same as environment-qa

1. create your feature branch
```
# grab the latest from origin/master
git pull --rebase origin master

# create your feature branch
git checkout -b feature-my
```
2. commit your changes
```
# stage and commit your changes to feature branch
git add -A
git commit -m "comment"

# push your branch to origin
git push origin feature-my
```
3. deploy changes to QA for internal review
```
# rebase from origin/master and resolve any conflicts
git pull --rebase origin master

# push your branch to origin
git push origin feature-my

# switch to the QA branch
git checkout environment-qa

# pull environment-qa
# (which could contain merged branches from other team members)
git pull

# merge your branch
git merge feature-my

# push changes to origin/environment-qa (which triggers a deploy in a perfect world)
git push origin environment-qa
```
4. deploy changes to staged for client review
```
# checkout your feature branch and rebase from master
git checkout feature-my
git pull --rebase origin master

# push your branch to origin
git push origin feature-my

# follow the previous step only using the staged branch
git checkout environment-staged
git pull
git merge feature-my
git push origin environment-staged
```
5. deploy changes to production
```
# checkout your feature branch and rebase from master
git checkout feature-my
git pull --rebase origin master

# push your branch to origin
git push origin feature-my

# open a Pull Request to merge feature branch into master
# or merge it to master manually
```

Contributors:
* [Mike Skutta](https://github.com/mskutta/)
