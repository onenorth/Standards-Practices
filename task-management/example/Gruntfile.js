/**
 * Grunt bootstrap file.
 *
 * There should rarely, if ever, be a need to modify this file directly. Instead:
 *
 * - Place "global" Grunt config settings in `Grunt.config.js` (optional)
 * - Create individual Grunt tasks as separate files in the `tasks` folder.
 * - Place task-specific settings in the `tasks/options` folder.
 */

var loadConfig = function(path) {
    var glob = require('glob'),
        object = {},
        key;
    glob.sync('*', {
        'cwd': path
    }).forEach(function(option) {
        key = option.replace(/\.js$/,'');
        object[key] = require(path + '/' + option);
    });
    return object;
}

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var config = {
    };
    if (grunt.file.exists(__dirname + '/package.json')) {
        config.pkg = grunt.file.readJSON('./package.json');
    }
    grunt.util._.extend(config, loadConfig('./tasks/options'));
    if (grunt.file.exists(__dirname + '/Grunt.config.js')) {
        grunt.util._.extend(config, require('./Grunt.config.js')(grunt) || {});
    }
    grunt.initConfig(config);
    var alias = grunt.config.get('alias') || {};
    for (var k in alias) {
        if (typeof alias[k] !== 'object') {
            alias[k] = [alias[k]];
        }
        grunt.registerTask(k, alias[k]);
    }
    grunt.loadTasks('tasks');
};
