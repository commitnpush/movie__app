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
    return this.state.movies.map((movie,i) => <Movie key={movie.id} title={movie.title} poster={movie.large_cover_image}/>)
  }
   _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating", {mode: 'cors', header:{
      'Access-Control-Allow-Origin':'*'
    }})
    .then( data => data.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
  render(){
    return(
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    )
  }
}

export default App;
