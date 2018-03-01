'use strict';

var connection = require('./movie-connection'),
    Movie = () => {};
  
Movie.getAll = (callback) => connection.query('SELECT * FROM movie', callback);
Movie.getOne = (id, callback) => connection.query('SELECT * FROM movie WHERE movie_id = ?', id, callback);
Movie.insert = (data, callback) => connection.query('INSERT INTO movie SET ?', data, callback);
Movie.update = (data, callback) => connection.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], callback);
Movie.delete = (id, callback) => connection.query('DELETE FROM movie WHERE movie_id = ?', id, callback);

module.exports = Movie;