module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	  uglify: {
			my_target: {
				files: {
					'build/assets/script.min.js': ['assets/*.js']
				}
			}
	  },
		cssmin: {
		  combine: {
			  files: {
				  'build/assets/style.css': ['assets/*.css']
				}
			},
		  minify: {
			  expand: true,
				cwd: 'build/assets/',
				src: ['*.css', '!*.min.css'],
				dest: 'build/assets/',
				ext: '.min.css'
			}
		},
	  watch: {
			scripts: {
				files: 'assets/*.js',
	      tasks: ['uglify'],
				options: {
				  event: ['added', 'deleted']
			  }
			},
			css: {
			  files: 'assets/*.css',
				tasks: ['cssmin'],
			}
		},
		jshint: {
		  src: ['Gruntfile.js', 'src/app/**/*.js', 'src/config.js', 'tests/app/**/*.js'],
			  options: {
			    curly: true,
			    eqeqeq: true,
			    immed: true,
			    latedef: true,
			    newcap: true,
			    noarg: true,
			    sub: true,
			    undef: true,
			    boss: true,
			    eqnull: true,
			    browser: true,
			    globals: {
			      require: true,
			      define: true,
			      requirejs: true,
			      describe: true,
			      expect: true,
			      it: true
			    }
			  }
			}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['uglify'], ['cssmin']);
};
