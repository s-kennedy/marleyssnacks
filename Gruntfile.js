module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower_concat: {
      all: {
        dest: {
          'js': 'build/js/_bower.js',
          'css': 'build/css/_bower.css'
        },
        mainFiles: {
          bootstrap: 'dist/css/bootstrap.min.css'
        },
        bowerOptions: {
          relative: false
        }
      }
    },
    // uglify: {
    //   my_target: {
    //     files: {
    //       'build/js/lib.min.js' : 'src/js/_bower.js'
    //     }
    //   }
    // },
    // cssmin: {
    //   options: {
    //     keepSpecialComments: 0
    //   },
    //   target: {
    //     files: {
    //       'build/css/styles.min.css' : 'src/css/_bower.css'
    //     },
    //   }
    // },
    handlebars: {
      compile: {
        options: {
          namespace: 'Marley.Templates'
        },
        files: {
          'build/js/hbs.js': 'src/templates/*.hbs'
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, flatten: true, src: ['src/images/*'], dest: 'build/images' },
          { expand: true, flatten: true, src: ['src/fonts/*'], dest: 'build/fonts'},
          { expand: true, flatten: true, src: ['src/files/*'], dest: 'build/files'},
          { expand: true, flatten: true, src: ['src/css/style.css'], dest: 'build/css'},
          { expand: true, flatten: true, src: ['src/js/*'], dest: 'build/js'},
          ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['handlebars', 'bower_concat', 'copy']);

};