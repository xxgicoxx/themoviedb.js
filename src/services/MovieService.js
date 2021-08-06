const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const { apiConfig } = require('../configs');

class MovieService {
  constructor(config) {
    this._baseUrl = config.baseUrl || 'https://api.themoviedb.org';
    this._apiKey = config.apiKey;

    this._query = {
      api_key: this._apiKey,
    };
  }

  async getTrending(timeWindow) {
    try {
      const params = new URLSearchParams();
      Object.keys(this._query).forEach((key) => params.append(key, this._query[key]));
      const url = `${this._baseUrl}${apiConfig.movie.trending}?${params}`.replace('TIME_WINDOW', timeWindow || 'day');

      const trending = await fetch(url, { method: 'GET' });

      return trending.json();
    } catch (error) {
      return error;
    }
  }

  async getPopular(query) {
    try {
      const queryString = {
        ...query,
        api_key: this._apiKey,
      };

      const params = new URLSearchParams();
      Object.keys(queryString).forEach((key) => params.append(key, queryString[key]));
      const url = `${this._baseUrl}${apiConfig.movie.popular}?${params}`;

      const popular = await fetch(url, { method: 'GET' });

      return popular.json();
    } catch (error) {
      return error;
    }
  }

  async getNowPlaying(query) {
    try {
      const queryString = {
        ...query,
        api_key: this._apiKey,
      };

      const params = new URLSearchParams();
      Object.keys(queryString).forEach((key) => params.append(key, queryString[key]));
      const url = `${this._baseUrl}${apiConfig.movie.now_playing}?${params}`;

      const nowPlaying = await fetch(url, { method: 'GET' });

      return nowPlaying.json();
    } catch (error) {
      return error;
    }
  }

  async getTopRated(query) {
    try {
      const queryString = {
        ...query,
        api_key: this._apiKey,
      };

      const params = new URLSearchParams();
      Object.keys(queryString).forEach((key) => params.append(key, queryString[key]));
      const url = `${this._baseUrl}${apiConfig.movie.top_rated}?${params}`;

      const nowPlaying = await fetch(url, { method: 'GET' });

      return nowPlaying.json();
    } catch (error) {
      return error;
    }
  }
}

module.exports = MovieService;
