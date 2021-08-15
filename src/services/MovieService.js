const { request } = require('../utils');

const { apiConfig } = require('../configs');

class MovieService {
  constructor(config) {
    this.config = config;
  }

  /**
   * /trending/{media_type}/{time_window}
   *
   * @see https://developers.themoviedb.org/3/trending/get-trending
   * @param {string} timeWindow Time Window
   * @returns {Promise} Promise
   */
  async getTrending(timeWindow) {
    const trending = await request({
      url: `${apiConfig.url}${apiConfig.movie.trending}`.replace('TIME_WINDOW', timeWindow || 'day'), qs: this.config,
    });

    return trending;
  }

  /**
   * /movie/popular
   *
   * @see https://developers.themoviedb.org/3/movies/get-popular-movies
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async getPopular(options) {
    const qs = { ...this.config, ...options };

    const popular = await request({
      url: `${apiConfig.url}${apiConfig.movie.popular}`, qs,
    });

    return popular;
  }

  /**
   * /movie/now_playing
   *
   * @see https://developers.themoviedb.org/3/movies/get-now-playing
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async getNowPlaying(options) {
    const qs = { ...this.config, ...options };

    const nowPlaying = await request({
      url: `${apiConfig.url}${apiConfig.movie.now_playing}`, qs,
    });

    return nowPlaying;
  }

  /**
   * /movie/top_rated
   *
   * @see https://developers.themoviedb.org/3/movies/get-top-rated-movies
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async getTopRated(options) {
    const qs = { ...this.config, ...options };

    const topRated = await request({
      url: `${apiConfig.url}${apiConfig.movie.top_rated}`, qs,
    });

    return topRated;
  }
}

module.exports = MovieService;
