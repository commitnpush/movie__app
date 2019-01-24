import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine="3"
                        ellipsis=' ...'
                        trimRight
                        basedOn="letters"/>
                </div>
            </div>
        </div> 
    );
}
function MovieGenre({genre}){
    return <span className="Movie__genre">{genre}</span> 
}

function MoviePoster({alt, poster}){
    return (
        <img className="Movie__Poster" src={poster} style={{width:"200px"}} alt={alt} title={alt}/>
    );
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster: PropTypes.string,
    alt:PropTypes.string
}
MovieGenre.propTypes = {  
    genres: PropTypes.array.isRequired,
}
export default Movie;