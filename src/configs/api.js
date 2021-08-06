const api = {
  trending: '/3/trending/all/TIME_WINDOW',
  movie: {
    trending: '/3/trending/movie/TIME_WINDOW',
    popular: '/3/movie/popular',
    now_playing: '/3/movie/now_playing',
    top_rated: '/3/movie/top_rated',
  },
  tv: {
    trending: '/3/trending/tv/TIME_WINDOW',
    popular: '/3/tv/popular',
    top_rated: '/3/tv/top_rated',
  },
  person: {
    trending: '/3/trending/person/TIME_WINDOW',
    popular: '/3/person/popular',
  },
};

module.exports = api;
