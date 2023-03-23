# themoviedb.js
The Movie Database API wrapper for Node.js.

<p align="center">
  <img src="assets/imgs/themoviedb.svg">
</p>

# Features
* Trending all
* Trending movies
* Trending people
* Trending tv shows
* Popular movies
* Popular people
* Popular tv shows
* Movies in theatres
* Top rated movies
* Top rated tv shows

# Docs
* [Documentation](https://developers.themoviedb.org/3)

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install themoviedb.js
````

# Credentials
### 1. TMDB
````
# Account
Create an The Movie DB account on https://www.themoviedb.org/.

# API Key
Create an API key on https://www.themoviedb.org/settings/api.
````

# Example
```javascript
const TMDB = require('themoviedb.js');

const tmdb = new TMDB({ 
  api_key: 'TMDB_API_KEY',
});

(async () => {
  try {
    const trending = await tmdb.all().getTrending();
    console.log(trending);

    const nowPlayingMovie = await tmdb.movie().getNowPlaying();
    console.log(nowPlayingMovie);

    const popularMovie = await tmdb.movie().getPopular();
    console.log(popularMovie);

    const trendingMovie = await tmdb.movie().getTrending();
    console.log(trendingMovie);

    const topRatedMovie = await tmdb.movie().getTopRated();
    console.log(topRatedMovie);
  } catch (error) {
    console.error(error);
  }
})();
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [The Movie Database](https://www.themoviedb.org/)

# Attribution
This product uses the TMDB API but is not endorsed or certified by TMDB.