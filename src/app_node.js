var requirejs = require('requirejs');

requirejs(['./module1', './module2'], function(mod1, mod2) {
  module.exports.mod1 = mod1;
  module.exports.mod2 = mod2;
});
