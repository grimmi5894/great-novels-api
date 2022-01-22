'use strict'

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('genres', [
      { name: 'Adventure' },
      { name: 'African Literature' },
      { name: 'Crime' },
      { name: 'Drama' },
      { name: 'Dystopia' },
      { name: 'Fantasy' },
      { name: 'Fiction' },
      { name: 'French Literature' },
      { name: 'Gothic' },
      { name: 'Historical Fiction' },
      { name: 'Horror' },
      { name: 'Mystery' },
      { name: 'Plays' },
      { name: 'Russian Literature' },
      { name: 'Science Fiction' },
      { name: 'Thriller' },
      { name: 'Time Travel' },
      { name: 'War' }
    ])
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('genres')
  }
}
