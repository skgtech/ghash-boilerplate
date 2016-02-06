/**
 * @fileOverview Master controller of processing the problem.
 */
var path = require('path');

var cip = require('cip');
var file = require('nodeon-file');
var Promise = require('bluebird');

/**
 * Master controller of processing the problem.
 *
 * @constructor
 */
var Core = module.exports = cip.extend(function() {
  /** @type {?Object} CLI Arguments */
  this.cliArgs = null;
  /** @type {?string} Full path to source file */
  this.sourceFilePath = null;
  /** @type {?string} Raw source file contents */
  this.sourceContent = null;
});

/**
 * Start processing.
 *
 * @param {Object} cliArgs CLI Arguments
 * @return {Promise} A Promise.
 */
Core.prototype.run = Promise.method(function(cliArgs) {
  this.cliArgs = cliArgs;

  return this._processArguments()
    .bind(this)
    .then(this._readSource)
    .then(this._process);
});

/**
 * Processes the cli arguments, figures out the source file.
 *
 * @return {Promise} A Promise.
 * @private
 */
Core.prototype._processArguments = Promise.method(function() {
  var sourceFileName = this.cliArgs.src;

  if (typeof sourceFileName !== 'string') {
    throw new Error('No source file defined in cli arguments');
  }

  var cwd = process.cwd();

  this.sourceFilePath = path.join(cwd, sourceFileName);
});

/**
 * Read the file and populate it.
 *
 * @return {Promise} A Promise.
 * @private
 */
Core.prototype._readSource = Promise.method(function() {
  return file.readAsync(this.sourceFilePath)
    .bind(this)
    .then(function(contents) {
      this.sourceContent = contents;
    });

});

/**
 * Processes...
 *
 * @return {Promise} A Promise.
 * @private
 */
Core.prototype._process = Promise.method(function() {
  console.log(this.sourceContent);
});
