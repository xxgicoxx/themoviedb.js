const { request } = require('../utils');

const { apiConfig } = require('../configs');

class TvService {
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
      url: `${apiConfig.url}${apiConfig.tv.trending}`.replace('TIME_WINDOW', timeWindow || 'day'), qs: this.config,
    });

    return trending;
  }

  /**
   * /tv/{tv_id}
   *
   * @see https://developers.themoviedb.org/3/tv/get-tv-details
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async getPopular(options) {
    const qs = { ...this.config, ...options };

    const popular = await request({
      url: `${apiConfig.url}${apiConfig.tv.popular}`, qs,
    });

    return popular;
  }

  /**
   * /tv/top_rated
   *
   * @see https://developers.themoviedb.org/3/tv/get-top-rated-tv
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async getTopRated(options) {
    const qs = { ...this.config, ...options };

    const topRated = await request({
      url: `${apiConfig.url}${apiConfig.tv.top_rated}`, qs,
    });

    return topRated;
  }
}

module.exports = TvService;
