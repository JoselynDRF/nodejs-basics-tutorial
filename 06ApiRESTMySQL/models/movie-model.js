'use strict';

var connection = require('./movie-connection'),
    MovieModel = () => {};
  
MovieModel.getAll = (callback) => connection.query('SELECT * FROM movie', callback);
MovieModel.getOne = (id, callback) => connection.query('SELECT * FROM movie WHERE movie_id = ?', id, callback);
MovieModel.delete = (id, callback) => connection.query('DELETE FROM movie WHERE movie_id = ?', id, callback);

// MovieModel.insert = (data, callback) => connection.query('INSERT INTO movie SET ?', data, callback);
// MovieModel.update = (data, callback) => connection.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], callback);

MovieModel.save = (data, callback) => {
  connection.query('SELECT * FROM movie WHERE movie_id = ?', data.movie_id, (err, rows) => {
    if(err) {
      return err;
    }
    else {
      return (rows.length == 1) ? 
        connection.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], callback)
      : connection.query('INSERT INTO movie SET ?', data, callback);
    }
  });
}

module.exports = MovieModel;