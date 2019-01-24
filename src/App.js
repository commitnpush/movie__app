import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie";

class App extends Component {
  state = {
  };
  componentDidMount(){
    this._getMovies();
  }
  _renderMovies() {
    console.log(this.state.movies);
    return this.state.movies.map(
      (movie,i) => <Movie key={movie.id} 
          title={movie.title_english} 
          poster={movie.medium_cover_image} 
          genres={movie.genres}
          synopsis={movie.synopsis}/>)
  }
   _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count", {mode: 'cors', header:{
      'Access-Control-Allow-Origin':'*'
    }})
    .then( data => data.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
  render(){
    return(
      <div className={this.state.movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    )
  }
}

export default App;
