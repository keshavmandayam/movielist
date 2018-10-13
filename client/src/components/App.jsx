import React from 'react';
import Movies from '../../exampleMovieData';
import Movie from './Movie.jsx';
import SearchBar from './Searchbar.jsx'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
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
    var array = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'}
    ];
    var value = event.target.value;
    var newArr = array.map((ele) => {
      ele = ele.title;
      return ele;
    });
    //console.log(newArr);
    
    var ultimateMovieList = this.filterArray(value, newArr);
    console.log(newArr)
    console.log(ultimateMovieList);
    this.setState({movies: ultimateMovieList});
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
              <SearchBar handleSearch={this.handleChange} handleGo={this.handleSubmit}/>
            }
          </h2>
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