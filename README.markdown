SCWD GeoLoco
============

Purpose
-------

This app was created for the Oct. 9th Santa Cruz Web Developers Group meetup. It
is built entirely with HTML5/CSS3/jQuery.

The goal was to demo how easy it is to build an HTML5/CSS3/jQuery webapp that
tracks your geo-location and shows all the places you have checked-in in under 30 minutes and 100 lines of code. 

A secondary goal was to show some basic CSS3 features including:

- Rounded Corners
- Drop Shadows
- Text Drop Shadows

How to Use
----------

Visit [this website](http://bitnirvana.com/scwd/geoloco) with any browser that supports HTML5 geolocation and you will be prompted to allow the browser to get your location. If you click yes the
browser will grab your long and lat and display it on the screen. It will also
store the geo-coordinates using HTML5 localStorage.

Each time the user returns to the site they will be get their long and lat added
to the db and they will see a list of all the places they have previously
visited the website.

The magic lies in 3 functions:

1. getGeo() - This is called on pageload. It uses the geolocation API to get the
users lat and lon and print them on the page. The last thing this function does
is call the doSetItem() function.
2. doSetItem() - This function gets the lat and lon from the screen and created
a JSON object with 'Latitude: yourLatitude' and 'Longitude: yourLongitude' as
the key/value pairs. It also gets a Date object. Next it creates uses
JSON.stringify() to turn the JSON into string. Then it saves the lat and lon to
localStorage with the Date as the key and the stringified object as the value.
The final thing that it does is call the doGetItem() function.
3. doGetItem() - This function uses a for loop to get all of the values from the
localStorage and writes them on the screen in <p id="pairs">.

The CSS magic lies in 3 new styles:

1. border-radius:5px; - This is the wonderful new way to create rounded corners.
You can be more specific such as border-top-left-radius:5px;
2. -webkit-box-shadow:#000 0 0 20px; - This is the way to have a drop shadow
come off of an element. It takes 4 properties -
- #000 - this is the color that you want the drop shadow to be.
- 0 - this is a px measurment. In this case it is 0px. This is how far along the
x axis you want the shadow to be.
- 0 - this is also a px measurment. In this case it is also 0px. This is how far
along the y axis you want the drop shadow to be.
- 20px - this is for a fade. How far you want the shadow to fall off of the
element.
- CAVEAT - prepend with -webkit- for webkit browsers and -moz- for firefox.
3. text-shadow:#000 1px 1px 1px; - This is how to add a drop shadow to text. It
also takes the same 4 arguments as drop-shadow.
- #000 - this is the color that you want the text drop shadow to be.
- 0 - this is a px measurment. In this case it is 1px. This is how far along the
x axis you want the shadow to be.
- 0 - this is also a px measurment. In this case it is also 1px. This is how far
along the y axis you want the drop shadow to be.
- 1px - this is for a fade. How far you want the shadow to fall off of the
element.

Supported Browser
-----------------

The most recent versions of:

- Chrome
- Safari
- Firefox
- Mobile Safari (iOS Devices)
- Android 2.1 +
