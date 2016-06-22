'use strict';

const bookUi = require('./book-ui.js');
const app = require('../app.js');

const getBooks = function(){
  return $.ajax({
    url: app.host + "/books",
    // method: 'GET',
    // dataType: 'json'
  }).done(bookUi.displayBooks);
};

const getTitles = function(){
  return $.ajax({
    url: app.host + "/books",
    // method: 'GET',
    // dataType: 'json'
  }).done(bookUi.displayTitles);
};

module.exports = {
  getBooks,
  getTitles
};
