const express = require('express')
const { getAllAuthors, getAuthorById } = require('./controllers/authors')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthorById)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 1337...')
})
