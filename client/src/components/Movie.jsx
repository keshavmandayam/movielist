import React from 'react';
function Movie(props) {
    return (
        <div className="movies">
            {props.movie}
        </div>
    );
}

export default Movie;