'use strict'

function onInit() {
  getGeners()
  renderGenereButtons()
}


function renderGenereButtons() {
  const genres = loadFromStorage(GENRES_KEY)
  const strHTML = genres.map(
    (gener) => `
     <button onclick="onSelectGenre(this)" class="geners-btn" type="button" data-id="${gener.id}">${gener.name}
     </button>
       `
  )
  document.querySelector('.buttons-container').innerHTML = strHTML.join('')
}

function onSelectGenre(genre) {
  getFilms(genre.getAttribute('data-id'))
}

function renderMovies(res) {
    const strHTMLs = res
      .map(({ title, overview, poster_path }) => {
        const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`
        return `<article class="movie">
          <img src="${imgUrl}">
          <h3>${title}</h3>
          <p class="overview">${overview}</p>
          </article>`
      })
      .join('')
  
    document.querySelector('.movies-container').innerHTML = strHTMLs
  }