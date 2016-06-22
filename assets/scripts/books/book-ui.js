'use strict';

const displayBooks = function(books){
  $('.content').text('');
  let bookListingTemplate = require('../templates/book-listing.handlebars');
  $('.content').append(bookListingTemplate(books));
};

const displayTitles = function(books){
  $('.content').text('');
  let titleListingTemplate = require('../templates/title-listing.handlebars');
  $('.content').append(titleListingTemplate(books));
};

module.exports = {
  displayBooks,
  displayTitles
};
