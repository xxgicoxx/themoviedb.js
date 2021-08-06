# themoviedb.js
The Movie Database API wrapper for Node.js.

<p align="center">
  <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg">
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
Official The Movie Database [Documentation](https://www.themoviedb.org/documentation/api).

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
Create an TMDb (https://www.themoviedb.org/) account.

# API Key
You can apply for an API key by clicking the "API" (https://www.themoviedb.org/settings/api) link from the left hand sidebar within your account settings page. You need to have a legitimate business name, address, phone number and description to apply for an API key.
````

# Example
```javascript
const Tmdb = require('themoviedb.js');

const tmdb = new Tmdb({ 
  apiKey: 'TMDB_API_KEY',
});

async function example() {
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
  } catch (err) {
    console.error(err);
  }
}
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [The Movie Database](https://www.themoviedb.org/)