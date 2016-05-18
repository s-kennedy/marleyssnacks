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
          bootstrap: 'dist/css/bootstrap.min.css',
          'smooth-scroll': 'dist/js/smooth-scroll.min.js',
          masonry: 'dist/masonry.pkgd.min.js',
          wow: 'dist/wow.min.js' ,
          easing: 'easing-min.js'
        },
        bowerOptions: {
          relative: false
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/move-top.js', 'src/js/hbs.js', 'src/js/templates.js', 'src/js/maps.js'],
        dest: 'build/js/custom.js',
      },
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'Marley.Templates',
          processName: function(filePath) {
            var pieces = filePath.split('/');
            return pieces[pieces.length - 1].split('.')[0];
          }
        },
        files: {
          'src/js/hbs.js': 'src/templates/*.hbs'
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, flatten: true, src: ['src/images/*'], dest: 'build/images' },
          { expand: true, flatten: true, src: ['src/fonts/*'], dest: 'build/fonts'},
          { expand: true, flatten: true, src: ['src/files/*'], dest: 'build'},
          { expand: true, flatten: true, src: ['src/css/style.css'], dest: 'build/css'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['handlebars', 'bower_concat', 'concat', 'copy']);

};