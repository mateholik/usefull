const sass = require('node-sass');

module.exports = function (grunt) {

  //configs
  grunt.initConfig({
    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        src: 'build/style.css',
        dest: 'build/style.css',
      },
    },
    cssmin: {
      target: {
        files: [{
          src: 'build/style.css',
          dest: 'build/style.min.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['assets/css/scss/*.scss'],
        tasks: ['sass']
      },
      scripts: {
        files: ['assets/js/*.js'],
        tasks: ['concat:js']
      }
    },
    concat: {
      js: {
        // src: ['assets/js/one.js', 'assets/js/two.js', 'assets/js/three.js'], // in order
        src: ['assets/js/*.js'], // with * no order, ramdomly
        dest: 'build/main.js'
      },
      css: {
        src: ['assets/css/*.css'],
        dest: 'build/style.css'
      }
    },
    sass: {
      options: {
        implementation: sass,
      },
      build: {
        files: [{
          src: 'assets/css/scss/style.scss',
          dest: 'assets/css/main.css'
        }]
      }
    },
    uglify: {
      options: {
        compress: true
      },
      build: {
        files: [{
          src: 'build/main.js',
          dest: 'build/main.js'
        }]
      }
    }
  })

  //load plugins
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');



  //register tasks
  grunt.registerTask('concat-js', ['concat:js'])
  grunt.registerTask('concat-css', ['concat:css'])

  grunt.registerTask('run', function () {
    console.log('Im running');
  })
  //run all tasks
  grunt.registerTask('all', ['run', 'sleep'])

}