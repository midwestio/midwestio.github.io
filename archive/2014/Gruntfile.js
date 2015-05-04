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
          src: ['img/speakers/akhilesh-gupta.jpg',
                'img/speakers/andrew-rademacher.jpg',
                'img/speakers/avdi-grimm.jpg',
                'img/speakers/daniel-luxemburg.jpg',
                'img/speakers/hoop-somuah.jpeg',
                'img/speakers/j-randall-hunt.jpg',
                'img/speakers/jeff-norris.jpg',
                'img/speakers/jeremy-mikola.jpg',
                'img/speakers/jessica-kerr.jpeg',
                'img/speakers/jim-duey.jpeg',
                'img/speakers/john-daily.jpg',
                'img/speakers/josh-wills.jpg',
                'img/speakers/julia-elman.jpg',
                'img/speakers/julia-grace.jpg',
                'img/speakers/justin-collins.jpg',
                'img/speakers/keith-casey.jpeg',
                'img/speakers/leah-hanson.jpg',
                'img/speakers/mark-allen.jpg',
                'img/speakers/matt-klosterman.jpg',
                'img/speakers/micah-whitacre.jpg',
                'img/speakers/michael-goetz.jpg',
                'img/speakers/michelle-brush.jpg',
                'img/speakers/mina-markham.jpg',
                'img/speakers/patrick-mcfadin.jpg',
                'img/speakers/philip-tellis.jpg',
                'img/speakers/scott-dillender.jpg',
                'img/speakers/ryan-brush.jpg',
                'img/speakers/stephen-jensen.jpeg',
                'img/speakers/tyson-stewart.jpg',
                'img/speakers/zeeshan-lakhani.jpg']
        }]
      }
    }
  });

  // Load the plugin that provides the "responsive_images" task.
  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task(s).
  grunt.registerTask('default', ['responsive_images:dev']);

};
