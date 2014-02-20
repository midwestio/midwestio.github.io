# Midwest.io Website

## Running Locally

1. ```git clone https://github.com/midwestio/midwestio.github.io.git```
2. ```cd midwestio.github.io```
2. ```python -m SimpleHTTPServer```
3. Open [http://localhost:8000](http://localhost:8000)

## Using Less

The stylesheets are written using [Less](http://lesscss.org/) which you will need to install.
Less is best installed via npm which in turn is best installed via [Homebrew](http://brew.sh/).

1. brew install node
2. npm install less -g
3. npm install autoless -g

When making changes to the Less stylesheets, you will need to generate the corresponding
CSS stylesheets which are ultimately used. This is best accomplished via
[autoless](https://github.com/jgonera/autoless):

Run ```autoless less/ css/``` from the midwestio.github.io directory.

This will watch the less/ directory for any changes and generate the corresponding css file.
This is done continuously so you can make changes and see them reflected on a refresh locally.

## Using Grunt to Resize Images

1. brew install GraphicsMagick (image resizing)
2. npm install -g grunt-cli
3. npm install
4. grunt

New images can be added un Gruntfile.js to be resized.

## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/deed.en_US">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

## Acknowledgements

The following images are used by permission:

kansas-city-skyline-day.jpg - Courtesy of http://www.flickr.com/photos/missouridivisionoftourism/6731511097/sizes/l/

kansas-city-skyline-night.jpg - Courtesy of http://www.flickr.com/photos/photoguyinmo/5583536355/sizes/l/

marriott.jpg - Courtesy of the [Kansas City Marriott Downtown](http://www.marriott.com/hotels/travel/mcidt-kansas-city-marriott-downtown/)