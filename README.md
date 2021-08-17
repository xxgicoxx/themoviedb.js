# themoviedb.js
The Movie Database API wrapper for Node.js.

<p align="center">
  <img src="assets/imgs/themoviedb.svg">
</p>

# Important
This product uses the TMDb API but is not endorsed or certified by TMDb.

# Endpoints
- [x] /trending/all/{time_window}
- [x] /trending/movie/{time_window}
- [x] /trending/person/{time_window}
- [x] /trending/tv/{time_window}
- [x] /movie/popular
- [x] /person/popular
- [x] /tv/popular
- [x] /movie/now_playing
- [x] /movie/top_rated
- [x] /tv/top_rated

# Docs
[Documentation](https://developers.themoviedb.org/3)

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install themoviedb.js
````

# Credentials
### 1. TMDb
````
# Account
Create an The Movie DB account on https://www.themoviedb.org/.

# API Key
Create an API key on https://www.themoviedb.org/settings/api.
````

# Example
```javascript
const Tmdb = require('themoviedb.js');

const tmdb = new Tmdb({ 
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