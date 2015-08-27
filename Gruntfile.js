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
          src: ['img/banners/marriott.jpg',
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
          src: ['img/speakers/alissa-bonas.jpg',
                'img/speakers/andrew-rademacher.jpg',
                'img/speakers/brian-graves.jpg',
                'img/speakers/casey-rosenthal.jpg',
                'img/speakers/chet-mancini.jpg',
                'img/speakers/chris-keathley.jpg',
                'img/speakers/denisse-osorio-de-large.jpg',
                'img/speakers/elissa-shevinsky.jpg',
                'img/speakers/heath-borders.jpg',
                'img/speakers/jeff-norris.jpg',
                'img/speakers/joel-martin.jpg',
                'img/speakers/john-daily.jpg',
                'img/speakers/jordan-kalal.jpg',
                'img/speakers/juliet-hougland.jpg',
                'img/speakers/justin-searls.jpg',
                'img/speakers/lyle-shearer.jpg',
                'img/speakers/matt-steele.jpg',
                'img/speakers/mike-harris.jpg',
                'img/speakers/nic-jansma.jpg',
                'img/speakers/nicolas-kral.jpg',
                'img/speakers/safia-abdalla.jpg',
                'img/speakers/seth-and-kyle.jpg',
                'img/speakers/siddharth-kothari.jpg',
                'img/speakers/susan-potter.jpg',
                'img/speakers/tim-freund.jpg',
                'img/speakers/will-klein.jpg',
                'img/speakers/yitzchok-willroth.jpg']
        }]
      }
    }
  });

  // Load the plugin that provides the "responsive_images" task.
  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task(s).
  grunt.registerTask('default', ['responsive_images:dev', 'responsive_images:speakers']);

};
