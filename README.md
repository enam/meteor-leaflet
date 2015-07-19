# enam:meteor-leaflet

Leaflet.js for [Meteor](https://www.meteor.com/) apps.

Version: `Leaflet 1.0 beta 1`

## Install

    $ cd to/my/meteor/project
    $ meteor add enam:meteor-leaflet

or (if you want to modify the code):

    $ cd to/my/meteor/project
    $ mkdir packages # ensure that packages folder exists
    $ git clone https://github.com/enam/meteor-leaflet.git packages/enam:meteor-leaflet
    $ meteor add enam:meteor-leaflet

## Supported plugins

* Will add plugin support as plugins are upgraded to Leaflet 1

## Usage

Call `Leaflet.load()` in your client code. Use `Leaflet.loaded()` to check if it
finished loading. This function is reactive.

### API

#### `Leaflet.load(opts)`

    Leaflet.load({
        plugins: list // optional
    })

* `opts` is optional.

### Examples

    // In Template
    Meteor.startup(function(){
        Leaflet.load();
    });

    Template.[templatename].rendered = function () {
        this.autorun(function () {
            if (Leaflet.loaded()) {
                var map = L.map('map', {
                  center: [38, -95],
                  zoom: 3
              });
            }
        });
    };
    
See Leaflet 1 docs [here](http://mourner.github.io/Leaflet/reference.html). This location will likely change... sorry if 404

Based heavily on [pauloborges:mapbox](https://github.com/pauloborges/meteor-mapbox)

Pull requests welcome as the beta is updated and plugins become available!
