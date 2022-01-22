const express = require('express')
const { getAllAuthors, getAuthorById } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthorById)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenreById)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 1337...')
})
