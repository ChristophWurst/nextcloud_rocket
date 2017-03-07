// Karma configuration
module.exports = function (config) {
	config.set({
		// frameworks to use
		frameworks: [
			'jasmine'
		],

		// list of files / patterns to load in the browser
		files: [
			'../../../../core/vendor/es6-promise/dist/es6-promise.js',
			'../../../../core/vendor/jquery/dist/jquery.js',
			'../../../../core/vendor/underscore/underscore.js',
			'../../../../core/vendor/backbone/backbone.js',
			'../../../../core/vendor/handlebars/handlebars.js',
			'specs/specHelper.js', // Include spec helper before other source/test files
			{pattern: '../**/*.js', included: true}
		],

		// list of files to exclude
		exclude: [
			'../vendor/**/*.js',
			'../init.js'
		],

		// preprocess matching files before serving them to the browser
		preprocessors: {},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: [
			'progress'
		],

		// start these browsers
		browsers: [
			'PhantomJS'
		]
	});
};
