'use strict'
const GENRES_KEY = 'GENRES'
const MOVIES_KEY = 'MOVIES'
const API_KEY = 'd09f6306dd877f74d60087d86587036d'

function getGeners() {
  const XHR = new XMLHttpRequest()
  const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

  XHR.onreadystatechange = () => {
    if (XHR.readyState === XMLHttpRequest.DONE && XHR.status === 200) {
      let res = loadFromStorage(GENRES_KEY) || JSON.parse(XHR.responseText)
      res = _prepareData(res)
      saveToStorage(GENRES_KEY, res)
    }
  }

  XHR.open('GET', URL)
  XHR.send()
}

function _prepareData(res) {
  if (Array.isArray(res)) return res
  const genereName = res['genres']
  const genres = []
  for (const key in genereName) {
    const genere = {
      id: genereName[key].id,
      name: genereName[key].name,
    }
    genres.push(genere)
  }
  console.log(genres)
  return genres
}

function getFilms(generId) {
  const XHR = new XMLHttpRequest()
  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${generId}`

  XHR.onreadystatechange = () => {
    if (XHR.readyState === XMLHttpRequest.DONE && XHR.status === 200) {
      let res = JSON.parse(XHR.responseText)
      saveToStorage(MOVIES_KEY, res)
      
      _buildMoviePreview(res)
    }
  }

  XHR.open('GET', URL)
  XHR.send()
}

function _buildMoviePreview(res,cb) {
  if (Array.isArray(res)) return res
  const moviesData = res['results']
  const movies = []
  for (const key in moviesData) {
    const movie = {
      id: moviesData[key].id,
      title: moviesData[key].title,
      overview: moviesData[key].overview,
      poster_path:moviesData[key].poster_path,

    }
    movies.push(movie)
  }
  renderMovies(movies)
  
}

// adult:
// false
// backdrop_path:
// genre_ids:
// id:
// original_language:
// overview:
// poster_path:
// release_date:
// title:
// video:
// vote_average:
// vote_count:
