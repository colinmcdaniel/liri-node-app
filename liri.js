function liriTwitter(){
	var keysjs = require("./keys.js");
	var Twitter = require('twitter');

	var client = new Twitter({
	  consumer_key: keysjs.twitterKeys.consumer_key,
	  consumer_secret: keysjs.twitterKeys.consumer_secret,
	  access_token_key: keysjs.twitterKeys.access_token_key,
	  access_token_secret: keysjs.twitterKeys.access_token_secret,
	});

	var params = {count: 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  	if (!error){
	  		for(var i=0;i<20;i++){
	    		console.log(tweets[i].text);
	    		console.log(tweets[i].created_at);
	    		console.log("");
	    	}
		}
	  	else
	  		console.log("There was an error getting tweets.");
	});
}

function liriSpotify(arr){
	var spotify = require('spotify');

	var songName = "";
	var itemIndex = 0;
	if(arr.length > 3){
		for(var i=3;i<arr.length;i++){
			if(i==arr.length)
				songName = songName + arr[i];
			else
				songName = songName + arr[i] + " ";
		}
	}
	else{
		songName = "The Sign";
		itemIndex = 8;
	}
 
	spotify.search({ type: 'track', query: songName }, function(err, data) {
	    if ( err ) {
	        console.log('Error: '+err);
	        return;
	    }

	    console.log("Artist(s):");
	    for(var i=0;i<data.tracks.items[itemIndex].artists.length;i++)
	    	console.log(data.tracks.items[itemIndex].artists[i].name);
	    console.log("");

	    console.log("Song name:")
	    console.log(data.tracks.items[itemIndex].name);
	    console.log("");

	    console.log("Preview link:");
	    console.log(data.tracks.items[itemIndex].preview_url);
	    console.log("");

	    console.log("Album:");
	    console.log(data.tracks.items[itemIndex].album.name);
	    console.log("");
	});
}

function liriOmdb(arr){
	var request = require('request');

	var movieName = "";

	if(arr.length>3){
		for (var i=3; i<arr.length; i++){
			if (i>3)
				movieName = movieName + "+" + arr[i];
			else
				movieName = movieName + arr[i];
		}
	}
	else{
		movieName = "Mr. Nobody"
	}

	request('https://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&tomatoes&r=json&tomatoes=true', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log("Title: " + JSON.parse(body)["Title"]);
			console.log("Release Year: " + JSON.parse(body)["Year"]);
			console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
			console.log("Country: " + JSON.parse(body)["Country"]);
			console.log("Language: " + JSON.parse(body)["Language"]);
			console.log("Plot: " + JSON.parse(body)["Plot"]);
			console.log("Actors: " + JSON.parse(body)["Actors"]);
			console.log("Rotton Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
			console.log("Rotton Tomatoes Url: " + JSON.parse(body)["tomatoURL"]);
		}
	});
}

if(process.argv[2]=="my-tweets"){
	liriTwitter();
}
else if(process.argv[2]=="spotify-this-song"){
	liriSpotify(process.argv);
}
else if (process.argv[2]=="movie-this"){
	liriOmdb(process.argv);
}
else if(process.argv[2]=="do-what-it-says"){
	require('fs').readFile("random.txt", "utf8", function(error, data) {
		var dataArr = data.split(',');
		if(dataArr[0]=="my-tweets")
			liriTwitter();
		else if(dataArr[0]=="spotify-this-song"){
			dataArr.unshift("");
			dataArr.unshift("");
			liriSpotify(dataArr);
		}
		else if(dataArr[0]=="movie-this"){
			dataArr.unshift("");
			dataArr.unshift("");
			liriOmdb(dataArr);
		}
	});
}
else
	console.log("Not a valid command.");