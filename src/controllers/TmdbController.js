const {
  AllService,
  MovieService,
  PersonService,
  TvService,
} = require('../services');

class TmdbController {
  constructor(config = { baseUrl: null, apiKey: null }) {
    this._allService = new AllService(config);
    this._movieService = new MovieService(config);
    this._personService = new PersonService(config);
    this._tvService = new TvService(config);
  }

  all() {
    return this._allService;
  }

  movie() {
    return this._movieService;
  }

  person() {
    return this._personService;
  }

  tv() {
    return this._tvService;
  }
}

module.exports = TmdbController;
