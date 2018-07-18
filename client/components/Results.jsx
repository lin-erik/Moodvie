import React from 'react';
import MovieCard from './MovieCard.jsx';

var Results = (props) => {
  // console.log(props.movies);
  return (
    <div className="container is-fluid">
      <div className="columns is-multiline">
        {props.movies.map((movie) => {
          return (<div className="column is-one-fifth">
            <MovieCard movie={movie} />
          </div>);
        })}
      </div>
    </div>
  );
};

export default Results;