import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie";

const movies = [
  {title:"Matrix" , poster:"https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"},
  {title:"Full Metal Jacket" , poster:"https://images-na.ssl-images-amazon.com/images/I/81U3cu+0RAL._RI_.jpg"},
  {title:"Old Boy" , poster:"https://affif-sitepublic-media-prod.s3.amazonaws.com/film_poster/0001/58/thumb_57624_film_poster_293x397.jpeg"},
  {title:"Hunger Games" , poster:"https://prodimage.images-bn.com/pimages/9780439023528_p0_v1_s550x406.jpg"},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((v,i) => <Movie key={i} title={v.title} poster={v.poster}/>)}
      </div>
    );
  }
}

export default App;
