module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      all: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    jshint: {
      options: {
        browser: true
      }
    },
    jasmine_node: {
      requirejs: true,
      forceExit: true
    },
    requirejs: {
      baseUrl: 'src',
      almond: true,
      paths: {
      },
      name: 'app_browser',
      out: 'build/tooling-example-almond.js'
    },
    'closure-compiler': {
      release: {
        js: ['src/!(app_node).js'],
        jsOutputFile: 'build/tooling-example.js',
        options: {
          transform_amd_modules: null,
          process_common_js_modules: null,
          common_js_module_path_prefix: 'src',
          common_js_entry_module: 'app_browser.js',
          create_source_map: '%outname%.map',
          source_map_format: 'V3',
          output_wrapper: '"%output%\n//@ sourceMappingURL=tooling-example.js.map"'
        }
      }
    },
    copy: {
      release: {
        files: {
          'build/src/': 'src/**/*.js'
        }
      }
    },
    clean: {
      release: ['build']
    }
  });

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-closure-compiler');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('default', 'lint jasmine_node');
  grunt.registerTask('release', 'clean requirejs closure-compiler copy');

};
