module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	  uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
	    build: {
				src: 'assets/*.js',
	      dest: 'build/assets/script.min.js'
		  }
	  },
	  watch: {
			scripts: {
				files: 'assets/*.js',
	      tasks: ['uglify'],
				options: {
				  event: ['added', 'deleted']
			  }
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
	grunt.registerTask('default', ['uglify']);
};
