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
            quality: 70
          },{
            name: 'medium',
            width: 1008,
            quality: 80
          },{
            name: "large",
            width: 1248,
            quality: 90
          },{
            name: "xlarge",
            width: 1408,
            quality: 90
          }]
        },
        files: [{
          expand: true,
          src: ['img/banners/nelson-atkins-museum-of-art.jpg',
                'img/banners/kansas-city-skyline-sunset.jpg',
                'img/banners/kansas-city-skyline-night.jpg',
                'img/banners/kansas-city-skyline-day.jpg',
                'img/banners/kansas-city-plaza.jpg']
        }]
      },
      speakers: {
        options: {
          sizes: [{
            name: 'small',
            height: 100,
            quality: 95
          }]
        },
        files: [{
          expand: true,
          src: [
            'img/speakers/aaron-blythe.jpg',
            'img/speakers/alicia-cianciolo.jpg',
            'img/speakers/michelle-brush.jpg',
            'img/speakers/aysylu-greenberg.jpg',
            'img/speakers/piero-ferrante.jpg',
            'img/speakers/david-greenberg.jpg',
            'img/speakers/flavio-percoco.jpg',
            'img/speakers/janelle-klein.jpg',
            'img/speakers/jenni-syed.jpg',
            'img/speakers/john-hughes.jpg',
            'img/speakers/jon-moore.jpg',
            'img/speakers/laura-ku.jpg',
            'img/speakers/mark-allen.jpg',
            'img/speakers/sean-cribbs.jpg'
          ]
        }]
      }
    }
  });

  // Load the plugin that provides the "responsive_images" task.
  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task(s).
  grunt.registerTask('default', ['responsive_images:dev', 'responsive_images:speakers']);

};
