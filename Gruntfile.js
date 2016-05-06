module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower_concat: {
      all: {
        dest: {
          'js': 'src/js/_bower.js',
          'css': 'src/css/_bower.css'
        },
        bowerOptions: {
          relative: false
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/js/lib<%= grunt.template.today('yyyymmddHHMM') %>.js' : 'src/js/_bower.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-concat', 'grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('bower-concat', 'uglify');

};