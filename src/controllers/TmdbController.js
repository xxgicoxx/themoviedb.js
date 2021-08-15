const {
  AllService,
  MovieService,
  PersonService,
  TvService,
} = require('../services');

class TmdbController {
  /**
   * @param {Object} config Configs
   * @param {string} config.api_key API key
   */
  constructor(config) {
    this.config = config;
    this.config.api_key = config.api_key;

    this._allService = new AllService(this.config);
    this._movieService = new MovieService(this.config);
    this._personService = new PersonService(this.config);
    this._tvService = new TvService(this.config);
  }

  /**
   * This is used when you require a general features
   */
  all() {
    return this._allService;
  }

  /**
   * This is used when you require a movie features
   */
  movie() {
    return this._movieService;
  }

  /**
   * This is used when you require a people features
   */
  person() {
    return this._personService;
  }

  /**
   * This is used when you require a tv features
   */
  tv() {
    return this._tvService;
  }
}

module.exports = TmdbController;
