const express = require('express')
const { getAllAuthors, getAuthorByIdentifier } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllNovels, getNovelById } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:identifier', getAuthorByIdentifier)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenreById)

app.get('/novels', getAllNovels)
app.get('/novels/:id', getNovelById)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 1337...')
})
