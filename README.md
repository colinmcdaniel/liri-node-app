# liri-node-app

* [GitHub Repository](https://github.com/colinmcdaniel/liri-node-app)

## Functionality

Liri takes in commands and outputs the information is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Set Up

1. Clone or download the repository.
2. Modify the keys.js file to reflect your own Twitter API information (https://apps.twitter.com/app/new to create a new account).

## Usage

* `node liri.js my-tweets` shows your last 20 tweets and when they were created.

* `node liri.js spotify-this-song '<song name here>'` will show the artist(s), name, Spotify preview link, and album of the song.

* `node liri.js movie-this '<movie name here>'` will output the title, release year, IMDB rating, country of production, language, plot, actors Rotton Tomatoes rating, and Rotton Tomatoes URL of the movie.

* `node liri.js do-what-it-says` will take the text inside of random.txt and then use it to call one of Liri's commands. Feel free to change the text in random.txt to test out other commands.

## Technology

* Twitter API
* Spotify API
* OMDB API
* Request, Spotify, Twitter, and fs npm packages

![liri](https://cloud.githubusercontent.com/assets/18273101/22234380/9fbc8386-e1ac-11e6-92e6-6b68bfbc7a01.gif)
