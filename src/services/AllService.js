const { constants, request } = require('../utils');

const { apiConfig } = require('../configs');

class AllService {
  constructor(config) {
    this.config = config;
  }

  /**
   * /trending/{media_type}/{time_window}
   *
   * @see https://developers.themoviedb.org/3/trending/get-trending
   * @param {string} timeWindow Time Window
   *
   * @returns {Promise} Promise
   */
  async getTrending(timeWindow) {
    const trending = await request({
      url: `${apiConfig.url}${apiConfig.trending}`.replace(constants.TIME_WINDOW, timeWindow || constants.DAY), qs: this.config,
    });

    return trending;
  }
}

module.exports = AllService;
