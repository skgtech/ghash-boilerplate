/*
 * Google Hash Boilerplate
 * A boilerplate for the Google Hash contest
 * https://github.com/skgtech/ghash-boilerplate
 *
 * Copyright ©2016 Thanasis Polychronakis
 * Licensed under the MIT license.
 */
var helpers = require('./util/helpers');
var Core = require('./core/core');


/**
 * @fileOverview ghash Base.
 *
 */
var ghash = module.exports = {};

/**
 * The boot method of the app.
 *
 */
ghash.init = function() {
  var cliArgs = helpers.parseCli();

  var core = new Core();

  core.run(cliArgs);
};


// ignition
var isStandAlone = require.main === module;
if (isStandAlone) {
  ghash.init();
}
