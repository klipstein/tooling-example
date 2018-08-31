# Tooling example

This project is a showcase / playground for the following:

- [GruntJS](http://gruntjs.com) used as a js-project build tool
- Dependency management through [NPM](http://npmjs.org) (client- and server)
- Sourcemaps-Generation with [closure-compiler](https://developers.google.com/closure/compiler/)
- Create JS builds using [RequireJS](http://requirejs.org) and [AlmondJS](https://github.com/jrburke/almond)
- Create JS builds using [closure-compiler's feature to resolve AMD
  modules](http://www.nonblocking.io/2011/12/experimental-support-for-common-js-and.html).
- [JS Test Driver](http://code.google.com/p/js-test-driver/) example setup using [Jasmine](https://jasmine.github.io/),
  [RequireJS](http://requirejs.org) and the [JS Test Driver Jasmine Adapter](https://github.com/ibolmo/jasmine-jstd-adapter), so
  that it can be used by WebStorm directly.
- Execution of Jasmine-Tests using [jasmine-node](https://github.com/mhevery/jasmine-node)
- Execution of Jasmine-Tests in the Browser

## Prerequisites

- Closure compiler
- Node and NPM
- git

## Getting started

~~~ bash
git clone git@github.com:klipstein/tooling-example.git
git submodule init
git submodule update
npm install # installing required node packages
# see CLOSURE_PATH definition details here: https://github.com/gmarty/grunt-closure-compiler
export CLOSURE_PATH=`brew --prefix closure-compiler`/libexec
~~~
