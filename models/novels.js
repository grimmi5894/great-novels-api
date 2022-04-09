const authors = require('./authors')

const novels = (connection, Sequelize) => {
  return connection.define('novels', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    authorId: { type: Sequelize.INTEGER, references: { model: authors, key: 'id' } }
  })
}

module.exports = novels
