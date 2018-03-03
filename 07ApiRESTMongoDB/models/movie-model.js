'use strict';

var connection = require('./movie-connection'),
    MovieModel = () => {};
  
MovieModel.getAll = (callback) => {
  connection
    .find()
    .exec((err, docs) => {
      if(err) throw err;
      callback(docs);
    })
};

MovieModel.getOne = (id, callback) => {
  connection
    .findOne({ movie_id: id })
    .exec((err, docs) => {
      if(err) throw err;
      callback(docs);
    })
};

MovieModel.delete = (id, callback) => {
  
};

MovieModel.save = (data, callback) => {
  connection
    .count({ movie_id: data.movie_id })
    .exec((err, count) => {
      if(err) throw err;
      console.log(`Número de Docs: ${count}`);
      
      if(count == 0) {
        connection.create(data, (err) => {
          if(err) throw err;
          callback(data);
        })
      } 
      else if(count == 1) {
        connection.findOneAndUpdate (
          { movie_id: data.movie_id }, 
          {
            title: data.title,
            release_year: data.release_year,
            rating: data.rating,
            image: ''
          }, 
          (err) => {
            if(err) throw err;
            callback();
          }
        )
      }
    })
}

module.exports = MovieModel;