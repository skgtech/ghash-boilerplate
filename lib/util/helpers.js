/**
 * @fileOverview Generic helpers.
 */

var helpers = module.exports = {};
var commandLineArgs = require('command-line-args');

/**
 * Parse CLI arguments and return them.
 *
 * @return {Object} CLI Options.
 * @see https://github.com/75lb/command-line-args
 */
helpers.parseCli = function() {
  var cli = helpers._initAcceptableCliArguments();

  return cli.parse();
};

/**
 * Define the acceptable command line arguments.
 *
 * @return {CommandLineArgs} Instance of command line args package.
 * @private
 */
helpers._initAcceptableCliArguments = function() {
  var cli = commandLineArgs([
    { name: 'src', type: String, alias: 's', defaultOption: true},
  ]);

  return cli;
};
