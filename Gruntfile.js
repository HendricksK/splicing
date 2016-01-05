module.exports = function(grunt) {
	require('jit-grunt')(grunt, {
		browserSync: 'grunt-browser-sync'
	});

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dev: {
				src: [
					'bower_components/jquery/dist/jquery.js',
					'bower_components/fastclick/lib/fastclick.js',
					'bower_components/foundation/js/foundation.js', // Include ALL of foundation JS, alternatively select from list below.
					// 'bower_components/foundation/js/foundation/foundation.js', // Always include me when custom selecting foundation elements to include.
					// 'bower_components/foundation/js/foundation/foundation.abide.js',
					'bower_components/foundation/js/foundation/foundation.accordion.js',
					// 'bower_components/foundation/js/foundation/foundation.alert.js',
					// 'bower_components/foundation/js/foundation/foundation.clearing.js',
					// 'bower_components/foundation/js/foundation/foundation.dropdown.js',
					// 'bower_components/foundation/js/foundation/foundation.equalizer.js',
					// 'bower_components/foundation/js/foundation/foundation.interchange.js',
					// 'bower_components/foundation/js/foundation/foundation.joyride.js',
					// 'bower_components/foundation/js/foundation/foundation.magellan.js',
					// 'bower_components/foundation/js/foundation/foundation.offcanvas.js',
					// 'bower_components/foundation/js/foundation/foundation.orbit.js',
					// 'bower_components/foundation/js/foundation/foundation.reveal.js',
					// 'bower_components/foundation/js/foundation/foundation.slider.js',
					// 'bower_components/foundation/js/foundation/foundation.tab.js',
					// 'bower_components/foundation/js/foundation/foundation.tooltip.js',
					// 'bower_components/foundation/js/foundation/foundation.topbar.js',
					'bower_components/jquery-selectric/dist/jquery.selectric.js',
					'bower_components/packery/dist/packery.pkgd.js',
					'bower_components/slick.js/slick/slick.js',
					'bower_components/jquery.cookie/jquery.cookie.js',
					'bower_components/jquery-form/jquery.form.js',
					'js/vendor/jquery.doubletaptogo.min.js',
					'js/vendor/lb-core.js',
					'js/vendor/lb-validate.js',
					'js/vendor/jquery.countdown.min.js',
					'js/vendor/magiczoomplus.js',
					'js/app.js'
				],
				dest: 'js/production.min.js'
			},
			prod: {
				src: [
					'bower_components/jquery/dist/jquery.js',
					'bower_components/fastclick/lib/fastclick.js',
					'bower_components/foundation/js/foundation.js', // Include ALL of foundation JS, alternatively select from list below.
					// 'bower_components/foundation/js/foundation/foundation.js', // Always include me when custom selecting foundation elements to include.
					// 'bower_components/foundation/js/foundation/foundation.abide.js',
					'bower_components/foundation/js/foundation/foundation.accordion.js',
					// 'bower_components/foundation/js/foundation/foundation.alert.js',
					// 'bower_components/foundation/js/foundation/foundation.clearing.js',
					// 'bower_components/foundation/js/foundation/foundation.dropdown.js',
					// 'bower_components/foundation/js/foundation/foundation.equalizer.js',
					// 'bower_components/foundation/js/foundation/foundation.interchange.js',
					// 'bower_components/foundation/js/foundation/foundation.joyride.js',
					// 'bower_components/foundation/js/foundation/foundation.magellan.js',
					// 'bower_components/foundation/js/foundation/foundation.offcanvas.js',
					// 'bower_components/foundation/js/foundation/foundation.orbit.js',
					// 'bower_components/foundation/js/foundation/foundation.reveal.js',
					// 'bower_components/foundation/js/foundation/foundation.slider.js',
					// 'bower_components/foundation/js/foundation/foundation.tab.js',
					// 'bower_components/foundation/js/foundation/foundation.tooltip.js',
					// 'bower_components/foundation/js/foundation/foundation.topbar.js',
					'bower_components/jquery-selectric/dist/jquery.selectric.js',
					'bower_components/packery/dist/packery.pkgd.js',
					'bower_components/slick.js/slick/slick.js',
					'bower_components/jquery.cookie/jquery.cookie.js',
					'bower_components/jquery-form/jquery.form.js',
					'js/vendor/jquery.doubletaptogo.min.js',
					'js/vendor/lb-core.js',
					'js/vendor/lb-validate.js',
					'js/vendor/jquery.countdown.min.js',
					'js/vendor/magiczoomplus.js',
					'js/app.js'
				],
				dest: 'js/production.js'
			},
			early_dev: {
				src: [
					'bower_components/modernizr/modernizr.js',
					'js/app-head.js'
				],
				dest: 'js/production-head.min.js'
			},
			early_prod: {
				src: [
					'bower_components/modernizr/modernizr.js',
					'js/app-head.js'
				],
				dest: 'js/production-head.js'
			},
		},

		sass: {
			options: {
				includePaths: ['scss/*.scss']
			},
			dev: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/style.css' : 'css/scss/*.scss'
				}
			},
			prod: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/app.css' : 'css/scss/*.scss'
				}
			}
		},

		autoprefixer: {
			prod: {
				src  : 'css/app.css',
				dest : 'css/app_fixed.css'
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'css/*.css',
						'images/**/*.jpg',
						'images/**/*.png',
						'*.html',
						'js/**/*.js',
						'css/*.scss'
					]
				},
				options: {
					watchTask: true
				}
			}
		},

		watch: {
			// // Uncomment if you want to run livereload instead of browser-sync
			// options: {
			// 	livereload: true,
			// },

			grunt: {
				files: 'Gruntfile.js'
			},

			sass: {
				files: 'css/scss/*.scss',
				tasks: [
					'sass:prod'
				]
			},

			// // Uncomment if you want to run autoprefixing and blessing on watch
			// styles: {
			// 	files: 'css/app.css',
			// 	tasks: [
			// 		'newer:autoprefixer:prod',
			// 		'newer:bless:prod'
			// 	]
			// },

			scripts: {
				files: [
					'js/**/*.js'
				],
				tasks: [
					'newer:concat:dev',
					'newer:concat:early_dev'
				],
				options: {
					spawn: false,
				}
			},

			html: {
				files: '*.html'
			}
		}
	});

	grunt.registerTask('build', ['autoprefixer:prod', 'concat:prod', 'concat:early_prod']);
	grunt.registerTask('build-newer', ['newer:autoprefixer:prod', 'newer:concat:prod', 'newer:concat:early_prod']);
	grunt.registerTask('default', ['build', 'browserSync', 'watch']);
	// To run livereload remove browserSync from the task above and uncomment livereload further above in the watch task
}