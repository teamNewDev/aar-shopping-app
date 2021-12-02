module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,css,js,html}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};