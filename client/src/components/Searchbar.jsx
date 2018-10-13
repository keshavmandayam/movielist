import React from 'react';

// class SearchBar extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
    
  
//     render() {
    //   return (
    //     <form onSubmit={this.handleSubmit}>
    //       <label>
    //         Name:
    //         <input type="text" value={this.state.value} onChange={this.handleChange} />
    //       </label>
    //       <input type="submit" value="Submit" />
    //     </form>
    //   );
//     }
//   }

function SearchBar(props) {
    return (
        <form onSubmit={props.handleGo}>
          <label>
            Search:
            <input type="text" onChange={props.handleSearch} />
          </label>
          <input type="submit" value="Go" />
        </form>
    );
}

export default SearchBar;