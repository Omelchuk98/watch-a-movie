const baseURL = process.env.REACT_APP_API

const category = {
   movie: '/movie',
   tv: '/tv',
}

const status = {
   upcoming: '/upcoming',
   popular: '/popular',
   top_rated: '/top_rated',
   on_the_air: '/on_the_air',
   now_playing: '/now_playing',
   airing_today: '/airing_today'
}

export {
   baseURL,
   category,
   status
}