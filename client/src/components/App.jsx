import React from 'react';
import Movies from '../../exampleMovieData';
import Movie from './Movie.jsx';
import SearchBar from './Searchbar.jsx';
import AddMovie from './Addmovie.jsx';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: Movies
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdding = this.handleAdding.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleAdding(event) {
    console.log(this.state);
    console.log(document.getElementById('bleh').value);
    var currentState = this.state;
    currentState.movies.push({title: document.getElementById('bleh').value});
    this.setState(currentState);
    event.preventDefault();
  }

  filterArray(value, arr) {
    return arr.filter((ele) => {
      return ele.startsWith(value);
    }).map((element) => {
      return {title: element};
    })

  }

  handleChange(event) {
    var array = Movies;
    var value = event.target.value;
    var newArr = array.map((ele) => {
      ele = ele.title;
      return ele;
    });
    //console.log(newArr);
    
    var ultimateMovieList = this.filterArray(value, newArr);
    console.log(newArr)
    console.log(ultimateMovieList);
    if (ultimateMovieList.length > 0) {
      this.setState({movies: ultimateMovieList});
    } else {
      this.setState({movies: [{title: 'No movie by this name found.'}]});
    }
    
    console.log(this.state);
    //  if (newArr.includes(value)) {
    //   this.setState({movies: [{title: event.target.value}]});
    //  } else if (!newArr.includes(value)) {
    //   this.setState({movies: []});
    //  } else {
    //   this.setState({movies: array});
    //  }
  }
    render() {
      return (
        <div className="MovieList">
          <h1>Movie List</h1>
          <h2>
            {
              <AddMovie handleAdd={this.handleAdding}/>
            }
          </h2>
          <h3>
            {
              <SearchBar handleSearch={this.handleChange} handleGo={this.handleSubmit}/>
            }
          </h3>
          <ul>
            {
              this.state.movies.map((ele, i) => {
                return <li key={i}><Movie movie={ele.title} /></li>
              })
            }
          </ul>
        </div>
      );
    }
  }

  export default App;