'use strict';

const bookApi = require('./book-api.js');

const onTitles = function(){
  bookApi.getTitles();
};

const onBooks = function(){
  bookApi.getBooks();
};

const onHideBooks = function(){
  $('.content').text('');
};

const addHandlers = () => {
  $('#titles').on('click', onTitles);
  $('#all-books').on('click', onBooks);
  $('#hide-books').on('click', onHideBooks);

};

module.exports = {
  addHandlers
};
