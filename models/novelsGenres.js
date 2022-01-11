const genres = require('./genres')
const novels = require('./novels')

const novelsGenres = (connection, Sequelize, genres, novels) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, primaryKey: true, reference: { model: novels, key: 'id' } }
  })
}

module.exports = novelsGenres
