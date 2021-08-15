const { request } = require('../utils');

const { apiConfig } = require('../configs');

class PersonService {
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
      url: `${apiConfig.url}${apiConfig.person.trending}`.replace('TIME_WINDOW', timeWindow || 'day'), qs: this.config,
    });

    return trending;
  }

  /**
   * /person/popular
   *
   * @see https://developers.themoviedb.org/3/people/get-popular-people
   * @param {Object} options Request params
   * @returns {Promise} Promise
   */
  async getPopular(options) {
    const qs = { ...this.config, ...options };

    const popular = await request({
      url: `${apiConfig.url}${apiConfig.person.popular}`, qs,
    });

    return popular;
  }
}

module.exports = PersonService;
