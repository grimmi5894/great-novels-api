const genres = require('./genres')
const novels = require('./novels')

const novelsGenres = (connection, Sequelize) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER, references: { model: genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, references: { model: novels, key: 'id' } }
  })
}

module.exports = novelsGenres
