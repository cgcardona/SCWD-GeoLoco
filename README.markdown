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

Supported Browser
-----------------

The most recent versions of:

- Chrome
- Safari
- Firefox
- Mobile Safari (iOS Devices)
- Android 2.1 +
