module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            name: 'small',
            width: 767,
            quality: 70,
          },{
            name: 'medium',
            width: 1008,
            quality: 70,
          },{
            name: "large",
            width: 1248,
            quality: 70,
          },{
            name: "xlarge",
            width: 1408,
            quality: 70,
          }]
        },
        files: [{
          expand: true,
          src: ['img/banners/marriott.jpg', 
                'img/banners/kansas-city-skyline-night.jpg',
                'img/banners/kansas-city-skyline-day.jpg'],
        }]
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task(s).
  grunt.registerTask('default', ['responsive_images:dev']);

};