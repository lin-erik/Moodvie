import React from 'react';
import MovieCard from './MovieCard.jsx';

var UserHistory = (props) => {
  //account for a blank profile with no history here before render
  console.log('history length: ', props.history)
  if (props.history[0] !== null) {
    return (
      <div className="container">
        <p>Recently Tagged</p>
        <div className="container is-fluid">
          <div className="columns is-multiline">
            {props.history.map((movie, index) => {
              return (
                <div className="column is-one-fifth">
                  <MovieCard movie={movie} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default UserHistory;