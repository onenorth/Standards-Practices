# Overview

This document covers the application modifications required to host a Node.js app in Heroku.

# Application Modifications

The following application modifications need to be made to ensure application monitoring and logging work correctly.  These modifications need to be made in each and every site hosted in Heroku.

1. Follow the best practices defined here: https://devcenter.heroku.com/articles/node-best-practices
    1. **Note:** Gulp tasks do not automagically run.  They need to be specified in the package.json/scripts.
    1. KeystoneJS is by default setup to automatically compile **.sass/.less** files when starting up.
1. Setup **NewRelic APM** NPM package http://newrelic.com/nodejs
    1. Install the NewRelic NPM package: *npm install newrelic --save*
    1. Copy **newrelic.js** from **node_modules/newrelic** to the root directory of your application
    1. Make this the first line of your app's startup script: *require('newrelic');*
1. Setup **Express Loggly IIS** NPM package https://github.com/onenorth/express-loggly-iis
    1. Manually edit the **package.json** file adding **"express-loggly-iis": "onenorth/express-loggly-iis@latest"** as an entry under dependencies.
1. Configure session state to be stored in the database (Supports load balanced environments)
    1. Configure the **session store** setting to use MongoDB to persist session data. This only needs to be done when the environment is production. See http://keystonejs.com/docs/configuration/#options-database.
1. Use the One North fork of Keystone
    1. Manually edit the **package.json** file updating **"keystone"** to **"^onenorth/keystone#1.x.x"** as an entry under dependencies.

