import React from 'react';

function AddBar(props) {
    return (
        <form onSubmit={props.handleAdd}>
          <label>
            Add Movie:
            <input type="text" id="bleh"/>
          </label>
          <input type="submit" value="Add!" />
        </form>
    );
}

export default AddBar;