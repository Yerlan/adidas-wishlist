import React from 'react';

//Search form
export default React.createClass({

  getQuery: function () {
    return this.refs.search.value;
  },

  render: function () {
    return (
      <form onSubmit={this.props.search}>
        <input className="searchbar" type="text" ref="search" placeholder="E.g. Primeknit" />
        <button>Search</button>
      </form>
    );
  }

});
